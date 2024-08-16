import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reposApi } from '@/features/repos/api/reposApi'
import { createAppAsyncThunk } from '@/common/utils/createAppAsyncThunk'
import { Order, Sort } from '@/features/repos/api/reposApi.types'
import { reposTransform } from '@/common/utils/reposTransform'
import { handleServerNetworkError } from '@/common/utils/handleServerNetworkError'
import { appActions } from '@/app/appSlice'

const initialState: ReposState = {
  repos: [],
  selectedRepo: null,
  loading: false,
  currentPage: 1,
  itemsPerPage: 5,
  totalItemsCount: 0,
  sort: 'stars',
  order: 'desc',
}

export const fetchRepos = createAppAsyncThunk<FetchReposResponse, void>(
  'repos/fetchRepos',
  async (_, { dispatch, rejectWithValue, getState }) => {
    const { itemsPerPage: perPage, currentPage: page, sort, order } = getState().repos
    const query = getState().search.query
    try {
      const response = await reposApi.getRepos(query, perPage, page, sort, order)

      if (response.status === 200) {
        return reposTransform(response.data)
      } else {
        dispatch(appActions.setAppStatus('failed'))
        dispatch(appActions.setAppError(response.statusText))
        return rejectWithValue(null)
      }
    } catch (error: unknown) {
      handleServerNetworkError(error, dispatch)
      return rejectWithValue(null)
    }
  }
)

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    selectRepo(state, action: PayloadAction<Repo>) {
      state.selectedRepo = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload
      state.currentPage = 0
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload
    },
    setOrder(state, action: PayloadAction<Order>) {
      state.order = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRepos.pending, state => {
        state.loading = true
        state.selectedRepo = null
      })
      .addCase(fetchRepos.fulfilled, (state, action: PayloadAction<FetchReposResponse>) => {
        state.loading = false
        state.repos = action.payload.items
        state.totalItemsCount = action.payload.totalCount
      })
      .addCase(fetchRepos.rejected, state => {
        state.loading = false
      })
  },
})

export const reposActions = reposSlice.actions
export const reposReducer = reposSlice.reducer

// types
export type Repo = {
  id: number
  name: string
  language: string | null
  stargazersCount: number
  forksCount: number
  description: string | null
  updatedAt: string
  license: string
  topics: string[]
}
export type ReposState = {
  repos: Repo[]
  selectedRepo: Repo | null
  loading: boolean
  currentPage: number
  itemsPerPage: number
  totalItemsCount: number
  sort: Sort
  order: Order
}
export type FetchReposResponse = {
  totalCount: number
  items: Repo[]
}
