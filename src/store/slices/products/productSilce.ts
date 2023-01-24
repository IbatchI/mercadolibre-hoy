import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductDetail } from '../../../types/types'
// Type of the slice state
interface ProductsState {
  currentPage: number
  loading: boolean
  products: IProductDetail[]
  totalResults: number
}

// Initial state of the slice
const initialState = {
  currentPage: 0,
  loading: false,
  products: [],
  totalResults: 0,
} as ProductsState

// Payloads types
interface SetProductsPayload {
  currentPage: number
  products: IProductDetail[]
  totalResults: number
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.loading = true
    },
    setProducts: (state, action: PayloadAction<SetProductsPayload>) => {
      state.products = action.payload.products
      state.currentPage = action.payload.currentPage
      state.totalResults = action.payload.totalResults
    },
    endLoadingProducts: (state) => {
      state.loading = false
    },
  },
})

// Actions
export const { startLoadingProducts, setProducts, endLoadingProducts } = productsSlice.actions
