import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import s from './Repos.module.scss'
import { ReposTable } from '@/features/repos/ui/ReposTable/ReposTable'
import { RepoDetails } from '@/features/repos/ui/RepoDetails/RepoDetails'
import { selectLoading } from '@/features/repos/model/repos.selectors'
import { CustomLinearProgress } from '@/common/components/CustomLinearProgress/CustomLinearProgress'

export const Repos = () => {
  const loading = useSelector(selectLoading)

  return (
    <>
      {loading && <CustomLinearProgress />}
      <div className={s.repos}>
        <div className={s.reposTableWrapper}>
          <Typography variant="h3" mb={3}>
            Результаты поиска
          </Typography>
          <ReposTable />
        </div>
        <RepoDetails />
      </div>
    </>
  )
}
