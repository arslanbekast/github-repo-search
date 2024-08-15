import { Box, CircularProgress } from '@mui/material'

export const CustomCircularProgress = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flex={'1 1 auto'}>
      <CircularProgress />
    </Box>
  )
}
