import { useSelector } from 'react-redux'
import { Box, Chip, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import s from './RepoDetails.module.scss'
import { selectSelectedRepo } from '@/features/repos/model/repos.selectors'
import { memo } from 'react'

export const RepoDetails = memo(() => {
  const selectedRepo = useSelector(selectSelectedRepo)

  return (
    <Box className={s.repoDetails}>
      {selectedRepo ? (
        <>
          <Typography variant="h4" className={s.repoName} fontSize={'32px'}>
            {selectedRepo.name}
          </Typography>
          <Typography variant="body2" mb={2}>
            {selectedRepo.description}
          </Typography>
          <Box className={s.repoInfo} justifyContent={'space-between'} mb={2}>
            {selectedRepo.language && (
              <Chip label={selectedRepo.language} color="primary" className={s.language} />
            )}
            <Box display={'flex'} alignItems={'center'} gap={'8px'}>
              <StarIcon sx={{ color: '#FFB400' }} />
              <Typography variant="body2">
                {selectedRepo.stargazersCount.toLocaleString()}
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} gap={'8px'} mb={2}>
            {selectedRepo.topics.map((topic, i) => (
              <Chip key={i} label={topic} size={'small'} />
            ))}
          </Box>
          <Typography variant={'body2'}>{selectedRepo.license}</Typography>
        </>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" height={'100%'}>
          <Typography variant="body2" className={s.placeholder}>
            Выберите репозиторий
          </Typography>
        </Box>
      )}
    </Box>
  )
})
