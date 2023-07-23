import { Dispatch, AnyAction } from '@reduxjs/toolkit'

import { endLoadingFilters, setFilters, startLoadingFilters } from './filterSlice'
import { getFiltersBySearchQuery, saveFilterQuery } from '../../../services/api-ml-hoy/Filters'
import { IFilterForPost } from '../../../types/types'

export const getFiltersBySearchThunk = ({ searchId }: { searchId: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingFilters())
    try {
      const response = await getFiltersBySearchQuery(searchId)
      const { filters } = response
      const { minPrice, maxPrice } = filters
      dispatch(setFilters({ minPrice, maxPrice }))
    } finally {
      dispatch(endLoadingFilters())
    }
  }
}

export const createFilterThunk = ({ keyword, searchId, minPrice, maxPrice }: IFilterForPost) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingFilters())
    try {
      await saveFilterQuery({ searchId, minPrice, maxPrice, keyword })
      dispatch(getFiltersBySearchThunk({ searchId }) as unknown as AnyAction)
    } finally {
      dispatch(endLoadingFilters())
    }
  }
}
