import { Dispatch } from '@reduxjs/toolkit'
import { getProducts } from '../../../services/api-mercadolibre/getProducts'
import { endLoadingProducts, setProducts, startLoadingProducts } from './productSilce'

export const getProductsThunk = (keyword = '', page = 0) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingProducts())
    try {
      const response = await getProducts(keyword, page)
      dispatch(
        setProducts({
          products: response.products,
          currentPage: page,
          totalResults: response.totalResults,
        })
      )
    } finally {
      dispatch(endLoadingProducts())
    }
  }
}
