import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TFilter } from '../../../types/types'
// Type of the slice state
interface filtersState {
  filters: TFilter
  loading: boolean
}

// Initial state of the slice
const initialState = {
  filters: {
    minPrice: undefined,
    maxPrice: undefined,
  },
  loading: false,
} as filtersState

// Payloads types
interface SetFiltersPayload {
  minPrice: number | undefined
  maxPrice: number | undefined
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    startLoadingFilters: (state) => {
      state.loading = true
    },
    setFilters: (state, action: PayloadAction<SetFiltersPayload>) => {
      state.filters.minPrice = action.payload.minPrice
      state.filters.maxPrice = action.payload.maxPrice
    },
    endLoadingFilters: (state) => {
      state.loading = false
    },
  },
})

// Actions
export const { startLoadingFilters, setFilters, endLoadingFilters } = filterSlice.actions
