import { Currency, TimeZone } from '../src/types/types'

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

export const generateRandomKey = () => Math.random() * 100000000000000000

export const skeletonArray = Array(12).fill(0)

// Storage Functions

export const getLocalStorage = (key: string) => localStorage.getItem(key)

export const removeLocalStorage = (key: string) => localStorage.removeItem(key)

export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value)
