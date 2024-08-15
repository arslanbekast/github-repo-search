import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { selectQuery } from '@/features/search/model/search.selectors'
import { fetchRepos, reposActions } from '@/features/repos/model/reposSlice'
import { appActions } from '@/app/appSlice'
import { searchActions } from '@/features/search/model/searchSlice'

export const useSearch = () => {
  const [error, setError] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const query = useSelector(selectQuery)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.setQuery(e.target.value))
  }

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(reposActions.setCurrentPage(0))
      dispatch(reposActions.setItemsPerPage(5))
      dispatch(appActions.setAppStatus('loading'))
      dispatch(reposActions.setOrder('desc'))
      dispatch(reposActions.setSort('stars'))
      dispatch(fetchRepos())
        .unwrap()
        .then(() => {
          dispatch(appActions.setAppStatus('succeeded'))
        })
    } else {
      setError('Введите название репозитория!')
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null)
    }
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return { query, error, onChangeHandler, handleSearch, handleKeyPress }
}
