import { RootState } from '@/app/store'

export const selectAppStatus = (state: RootState) => state.app.status
export const selectAppError = (state: RootState) => state.app.error
