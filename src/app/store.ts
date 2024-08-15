import { configureStore } from '@reduxjs/toolkit'
import { reposReducer } from '@/features/repos/model/reposSlice'
import { appReducer } from '@/app/appSlice'
import { searchReducer } from '@/features/search/model/searchSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    repos: reposReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
