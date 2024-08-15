import { describe, expect, it } from 'vitest'
import { searchActions, searchReducer } from '@/features/search/model/searchSlice'

describe('searchSlice', () => {
  const initialState = { query: '' as string }

  it('should return the initial state', () => {
    const endState = searchReducer(undefined, { type: '' })
    expect(endState).toEqual(initialState)
  })

  it('should handle setQuery', () => {
    const query = 'test query'
    const endState = searchReducer(initialState, searchActions.setQuery(query))
    expect(endState.query).toEqual(query)
  })
})
