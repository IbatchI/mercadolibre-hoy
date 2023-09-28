import { Dispatch, AnyAction } from '@reduxjs/toolkit'

import {
  deleteSearchQuery,
  getSearchesQuery,
  saveSearchQuery,
  updateSearchWithFiltersQuery,
} from '../../../services/api-ml-hoy/Searches'
import { IUpdateSearchWithFilters } from '../../../types/types'
import { setSearches, startLoadingSearches, endLoadingSearches } from './searchSlice'

export const getSearchesThunk = (page = 0, limit = 10) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearches())
    try {
      const response = await getSearchesQuery(page * limit, limit)
      dispatch(
        setSearches({
          searchResults: response.searches,
          currentPage: page,
          searches: response.total,
        })
      )
    } finally {
      dispatch(endLoadingSearches())
    }
  }
}

export const deleteSearchThunk = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearches())
    try {
      await deleteSearchQuery(id)
      dispatch(getSearchesThunk() as unknown as AnyAction)
    } finally {
      dispatch(endLoadingSearches())
    }
  }
}

export const saveSearchThunk = (search: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearches())
    try {
      await saveSearchQuery(search)
    } finally {
      dispatch(endLoadingSearches())
    }
  }
}

export const updateSearchThunk = ({ searchId, keyword, filters }: IUpdateSearchWithFilters) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingSearches())
    try {
      await updateSearchWithFiltersQuery({ searchId, keyword, filters })
      dispatch(getSearchesThunk() as unknown as AnyAction)
    } finally {
      dispatch(endLoadingSearches())
    }
  }
}
