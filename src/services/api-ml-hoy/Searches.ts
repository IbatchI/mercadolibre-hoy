import { API_ML_HOY } from './Settings'

export const saveSearch = async (keyword: string) => {
  const response = await API_ML_HOY.post(`/search`, { keyword })
  return response.data
}

export const getSearches = async (from = 0, limit = 5) => {
  const response = await API_ML_HOY.get(`/search?limit=${limit}&from=${from}`)
  return response.data
}

export const deleteSearch = async (id: string) => {
  const response = await API_ML_HOY.delete(`/search/${id}`)
  return response.data
}
