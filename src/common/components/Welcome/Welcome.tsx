import { Box, Typography } from '@mui/material'

export const Welcome = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent="center" flex={'1 1 auto'}>
      <Typography variant="h4" sx={{ color: '#4F4F4F' }}>
        Добро пожаловать
      </Typography>
    </Box>
  )
}
