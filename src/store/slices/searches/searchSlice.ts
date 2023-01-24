import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearch } from '../../../types/types'

// Type of the slice state
interface SearcheState {
  currentPage: number
  loading: boolean
  searchResults: ISearch[]
  searches: number
}

// Initial state of the slice
const initialState = {
  currentPage: 0,
  loading: false,
  searchResults: [],
  searches: 0,
} as SearcheState

// Payloads types
interface SetSearchesPayload {
  currentPage: number
  searchResults: ISearch[]
  searches: number
}

export const searchSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    startLoadingSearches: (state) => {
      // setLoading(true)
      state.loading = true
    },
    setSearches: (state, action: PayloadAction<SetSearchesPayload>) => {
      state.searchResults = action.payload.searchResults
      state.currentPage = action.payload.currentPage
      state.searches = action.payload.searches
    },
    deleteSearch: (state, action: PayloadAction<string>) => {
      state.searchResults = state.searchResults.filter((search) => search.uid !== action.payload)
    },
    endLoadingSearches: (state) => {
      // setLoading(false)
      state.loading = false
    },
  },
})

// Actions
export const { startLoadingSearches, setSearches, endLoadingSearches, deleteSearch } =
  searchSlice.actions
