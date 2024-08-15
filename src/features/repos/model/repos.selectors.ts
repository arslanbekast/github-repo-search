import { RootState } from '@/app/store'

export const selectRepos = (state: RootState) => state.repos.repos
export const selectSelectedRepo = (state: RootState) => state.repos.selectedRepo
export const selectLoading = (state: RootState) => state.repos.loading
export const selectCurrentPage = (state: RootState) => state.repos.currentPage
export const selectItemsPerPage = (state: RootState) => state.repos.itemsPerPage
export const selectTotalItemsCount = (state: RootState) => state.repos.totalItemsCount
export const selectSort = (state: RootState) => state.repos.sort
export const selectOrder = (state: RootState) => state.repos.order
