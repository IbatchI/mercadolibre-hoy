import { API_ML_HOY } from './Settings'
import { IUpdateSearchWithFilters } from '../../types/types'

export const saveSearchQuery = async (keyword: string) => {
  const response = await API_ML_HOY.post(`/search`, { keyword })
  return response.data
}

export const updateSearchWithFiltersQuery = async (
  searchId: string,
  { keyword, filters }: IUpdateSearchWithFilters
) => {
  const response = await API_ML_HOY.put(`/search/${searchId}`, { keyword, filters })
  return response.data
}

export const getSearchesQuery = async (from = 0, limit = 5) => {
  const response = await API_ML_HOY.get(`/search?limit=${limit}&from=${from}`)
  return response.data
}

export const deleteSearchQuery = async (id: string) => {
  const response = await API_ML_HOY.delete(`/search/${id}`)
  return response.data
}
