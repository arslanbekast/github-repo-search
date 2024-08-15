import { RootState } from '@/app/store'

export const selectQuery = (state: RootState) => state.search.query
