import React from 'react'
import { useSelector } from 'react-redux'
import { AlertProps, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { selectAppError } from '@/app/app.selectors'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { appActions } from '@/app/appSlice'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function ErrorSnackbar() {
  const error = useSelector(selectAppError)
  const dispatch = useAppDispatch()

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(appActions.setAppError(null))
  }

  const isOpen = error !== null

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  )
}
