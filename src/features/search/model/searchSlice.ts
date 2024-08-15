import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '' as string,
  },
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
  },
})

export const searchReducer = searchSlice.reducer
export const searchActions = searchSlice.actions
