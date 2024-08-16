import { describe, expect, it } from 'vitest'
import { fetchRepos, Repo, reposActions, reposReducer, ReposState } from '../reposSlice'

describe('reposSlice actions', () => {
  const initialState: ReposState = {
    repos: [],
    selectedRepo: null,
    loading: false,
    currentPage: 1,
    itemsPerPage: 5,
    totalItemsCount: 0,
    sort: 'stars',
    order: 'desc',
  }

  const repo: Repo = {
    id: 1,
    name: 'Test Repo',
    language: 'TypeScript',
    stargazersCount: 100,
    forksCount: 10,
    description: 'Test description',
    updatedAt: '2023-08-01T00:00:00Z',
    license: 'MIT',
    topics: ['redux', 'vitest'],
  }

  it('should handle fetchRepos.pending', () => {
    const endState = reposReducer(initialState, fetchRepos.pending(''))
    expect(endState.loading).toBe(true)
  })

  it('should handle fetchRepos.fulfilled', () => {
    const totalCount = 1234

    const action = fetchRepos.fulfilled(
      {
        totalCount: totalCount,
        items: [repo],
      },
      ''
    )

    const endState = reposReducer(initialState, action)

    expect(endState.totalItemsCount).toEqual(totalCount)
    expect(endState.repos.length).toBe(1)
    expect(endState.repos[0]).toEqual(repo)
    expect(endState.loading).toBe(false)
  })

  it('should handle fetchRepos.rejected', () => {
    const endState = reposReducer(initialState, fetchRepos.rejected(null, ''))
    expect(endState.loading).toBe(false)
  })

  it('should handle selectRepo', () => {
    const action = reposActions.selectRepo(repo)
    const endState = reposReducer(initialState, action)

    expect(endState.selectedRepo).toEqual(repo)
  })

  it('should handle setCurrentPage', () => {
    const action = reposActions.setCurrentPage(2)
    const endState = reposReducer(initialState, action)

    expect(endState.currentPage).toEqual(2)
  })

  it('should handle setItemsPerPage', () => {
    const action = reposActions.setItemsPerPage(10)
    const endState = reposReducer(initialState, action)

    expect(endState.itemsPerPage).toEqual(10)
    expect(endState.currentPage).toEqual(0) // текущая страница сбрасывается
  })

  it('should handle setSort', () => {
    const action = reposActions.setSort('forks')
    const endState = reposReducer(initialState, action)

    expect(endState.sort).toEqual('forks')
  })

  it('should handle setOrder', () => {
    const action = reposActions.setOrder('asc')
    const endState = reposReducer(initialState, action)

    expect(endState.order).toEqual('asc')
  })
})
