import { Dispatch, AnyAction } from '@reduxjs/toolkit'

import {
  deleteSearchQuery,
  getSearchesQuery,
  saveSearchQuery,
} from '../../../services/api-ml-hoy/Searches'
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
      await dispatch(getSearchesThunk() as unknown as AnyAction)
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
