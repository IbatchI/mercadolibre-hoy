import { Currency, TFilter, TimeZone } from '../src/types/types'

export const capitalizeFirstLetter = (str: string) => {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalized
}

export const formatPrice = (
  price: number,
  currency: Currency = 'ARS',
  timeZone: TimeZone = 'es-AR'
) => {
  const formatter = new Intl.NumberFormat(timeZone, {
    style: 'currency',
    currency,
  })
  return formatter.format(price)
}
// Todo: fix, esto puede romper el renderizado de los componentes
export const generateRandomKey = () => Math.random() * 100000000000000000

export const skeletonArray = Array(12).fill(0)

// Storage Functions

export const getLocalStorage = (key: string) => localStorage.getItem(key)

export const removeLocalStorage = (key: string) => localStorage.removeItem(key)

export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value)

export const getMinPriceValueFilter = (filters: TFilter[] = []): number => {
  const minPriceFilter = filters.find((filter) => filter.type === 'MIN_PRICE')
  const { value } = minPriceFilter || { value: 0 }
  return value as number
}

export const getMaxPriceValueFilter = (filters: TFilter[] = []): number | undefined => {
  const maxPriceFilter = filters.find((filter) => filter.type === 'MAX_PRICE')
  const { value } = maxPriceFilter || { value: undefined }
  return value as number | undefined
}

export const getAlreadySeenValueFilter = (filters: TFilter[] = []): boolean => {
  const alreadySeenFilter = filters.find((filter) => filter.type === 'ALREADY_SEEN')
  const { value } = alreadySeenFilter || { value: false }
  return value as boolean
}
