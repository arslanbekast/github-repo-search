import { Repos } from '@/features/repos/ui/Repos'
import s from './App.module.scss'
import { useSelector } from 'react-redux'
import { Welcome } from '@/common/components/Welcome/Welcome'
import { selectAppStatus } from '@/app/app.selectors'
import { CustomCircularProgress } from '@/common/components/CustomCircularProgress/CustomCircularProgress'
import { ErrorSnackbar } from '@/common/components/ErrorSnackbar/ErrorSnackbar'
import { SearchBar } from '@/features/search/ui/SearchBar/SearchBar'

export function App() {
  const status = useSelector(selectAppStatus)

  return (
    <div className={s.app}>
      <ErrorSnackbar />
      <SearchBar />

      {status === 'loading' && <CustomCircularProgress />}
      {(status === 'idle' || status === 'failed') && <Welcome />}
      {status === 'succeeded' && <Repos />}
    </div>
  )
}
