import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectLoading,
  selectOrder,
  selectRepos,
  selectSort,
  selectTotalItemsCount,
} from '@/features/repos/model/repos.selectors'
import { fetchRepos, Repo, reposActions } from '@/features/repos/model/reposSlice'
import { ChangeEvent, MouseEvent } from 'react'
import { Sort } from '@/features/repos/api/reposApi.types'

export const useReposTable = () => {
  const dispatch = useAppDispatch()
  const loading = useSelector(selectLoading)
  const repos = useSelector(selectRepos)
  const currentPage = useSelector(selectCurrentPage)
  const itemsPerPage = useSelector(selectItemsPerPage)
  const totalItemsCount = useSelector(selectTotalItemsCount)
  const sort = useSelector(selectSort)
  const order = useSelector(selectOrder)

  const handleRowClick = (repo: Repo) => {
    dispatch(reposActions.selectRepo(repo))
  }

  const handlePageChange = (_event: MouseEvent | null, newPage: number) => {
    dispatch(reposActions.setCurrentPage(newPage))
    dispatch(fetchRepos())
  }

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const perPage = parseInt(event.target.value, 10)
    dispatch(reposActions.setItemsPerPage(perPage))
    dispatch(fetchRepos())
  }

  const handleSort = (property: Sort) => {
    const isAsc = sort === property && order === 'asc'
    dispatch(reposActions.setOrder(isAsc ? 'desc' : 'asc'))
    dispatch(reposActions.setSort(property))
    dispatch(reposActions.setCurrentPage(0))
    dispatch(fetchRepos())
  }

  return {
    loading,
    repos,
    currentPage,
    itemsPerPage,
    totalItemsCount,
    sort,
    order,
    handleRowClick,
    handlePageChange,
    handleItemsPerPageChange,
    handleSort,
  }
}
