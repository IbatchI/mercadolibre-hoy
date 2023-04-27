import { Dispatch, AnyAction } from '@reduxjs/toolkit'
import { getFiltersBySearchQuery, saveFilterQuery } from '../../../services/api-ml-hoy/Filters'
import { IFilterForPost } from '../../../types/types'
import { endLoadingFilters, setFilters, startLoadingFilters } from './filterSlice'

export const getFiltersBySearchThunk = ({ searchId }: { searchId: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingFilters())
    try {
      const response = await getFiltersBySearchQuery(searchId)
      const { filters } = response
      const { minPrice, maxPrice, allreadySeen } = filters
      dispatch(
        setFilters({
          minPrice,
          maxPrice,
          allreadySeen,
        })
      )
    } finally {
      dispatch(endLoadingFilters())
    }
  }
}

export const createFilterThunk = ({
  keyword,
  searchId,
  minPrice,
  maxPrice,
  allreadySeen,
}: IFilterForPost) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingFilters())
    try {
      await saveFilterQuery({ searchId, minPrice, maxPrice, allreadySeen, keyword })
      await dispatch(getFiltersBySearchThunk({ searchId }) as unknown as AnyAction)
    } finally {
      dispatch(endLoadingFilters())
    }
  }
}
