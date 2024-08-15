import { GithubApiResponse } from '@/features/repos/api/reposApi.types'

/**
 * Преобразует ответ от GitHub API в нужный формат.
 * @param {GithubApiResponse} response - Ответ от GitHub API.
 * @returns {Object} - Возвращает объект, содержащий общее количество репозиториев и массив объектов с информацией о каждом репозитории.
 * @returns {number} totalCount - Общее количество репозиториев в ответе.
 * @returns {Array} items - Массив объектов, содержащих информацию о каждом репозитории.
 * @returns {number} items[].id - Идентификатор репозитория.
 * @returns {string} items[].name - Имя репозитория.
 * @returns {string|null} items[].language - Основной язык программирования репозитория.
 * @returns {number} items[].stargazersCount - Количество звезд у репозитория.
 * @returns {number} items[].forksCount - Количество форков репозитория.
 * @returns {string|null} items[].description - Краткое описание репозитория.
 * @returns {string} items[].updatedAt - Дата последнего обновления репозитория.
 * @returns {string} items[].license - Название лицензии или 'Нет лицензии', если лицензия не указана.
 */

export const reposTransform = (response: GithubApiResponse) => {
  return {
    totalCount: response.total_count,
    items: response.items.map(repo => ({
      id: repo.id,
      name: repo.name,
      language: repo.language,
      stargazersCount: repo.stargazers_count,
      forksCount: repo.forks_count,
      description: repo.description,
      updatedAt: repo.updated_at,
      license: repo.license?.name || 'Нет лицензии',
    })),
  }
}
