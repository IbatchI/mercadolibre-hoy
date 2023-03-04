import { Dispatch } from '@reduxjs/toolkit'
import { getProducts } from '../../../services/api-mercadolibre/getProducts'
import { TFilter } from '../../../types/types'
import { endLoadingProducts, setProducts, startLoadingProducts } from './productSilce'

export const getProductsThunk = ({
  keyword = '',
  page = 0,
  filters = {},
}: {
  keyword: string | undefined
  page: number
  filters: TFilter
}) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingProducts())
    try {
      const response = await getProducts({ keyword, page, filters })
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
