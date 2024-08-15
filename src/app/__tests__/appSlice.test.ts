import { describe, expect, it } from 'vitest'
import { appActions, appReducer, RequestStatusType } from '@/app/appSlice'

describe('appSlice', () => {
  const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
  }

  it('should handle initial state', () => {
    const endState = appReducer(undefined, { type: 'unknown' })
    expect(endState).toEqual(initialState)
  })

  it('should handle setAppStatus', () => {
    const endState = appReducer(initialState, appActions.setAppStatus('loading'))
    expect(endState.status).toEqual('loading')
  })

  it('should handle setAppError with a message', () => {
    const errorMessage = 'An error occurred'
    const endState = appReducer(initialState, appActions.setAppError(errorMessage))
    expect(endState.error).toEqual(errorMessage)
  })

  it('should handle setAppError with null', () => {
    const customInitialState = { ...initialState, error: 'Some error' }
    const endState = appReducer(customInitialState, appActions.setAppError(null))
    expect(endState.error).toBeNull()
  })
})
