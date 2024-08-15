import { instance } from '@/common/api/common.api'
import { GithubApiResponse } from '@/features/repos/api/reposApi.types'

export const reposApi = {
  getRepos(query: string, perPage: number, page: number, sort: string, order: 'asc' | 'desc') {
    return instance.get<GithubApiResponse>('search/repositories', {
      params: {
        q: query,
        per_page: perPage,
        page: page + 1,
        sort,
        order,
      },
    })
  },
}
