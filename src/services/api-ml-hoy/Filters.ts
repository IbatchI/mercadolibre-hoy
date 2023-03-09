import { API_ML_HOY } from './Settings'
import { IFilterForPost } from '../../types/types'

export const saveFilterQuery = async (filter: IFilterForPost) => {
  const response = await API_ML_HOY.post(`/filters`, filter)
  return response.data
}
