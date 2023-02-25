/* eslint-disable no-unused-vars */
// Products interfaces
interface IProduct {
  id: string
  permalink: string
  title: string
  price: number
}

interface IProductDetail extends IProduct {
  pictures: string[]
  description: string
  totalResults: number
}

interface IPicture {
  id
  url
  secure_url
  size
  max_size
  quality
}

// Searches interfaces
export interface ISearch {
  uid: string
  keyword: string
  user?: string
  filters: TFilter[]
}

// User interfaces
export interface IUser {
  email: string
  google?: boolean
  name: string
  password?: string
  uid?: string
}

// Error interface
export interface IError {
  msg: string
}

// Save search with filters interface
export interface ISearchWithFilters {
  keyword: string
  minPrice: number
  maxPrice: number
  markAsViewed: boolean
}

// Global types
export type UserInfo = Pick<IUser, 'email' | 'name' | 'uid'>

// Types of currency for example 'ARS', 'USD', 'BRL'
export type Currency = 'ARS' | 'USD' | 'BRL'

// Types of timeZones for example es-AR, en-US, pt-BR
export type TimeZone = 'es-AR' | 'en-US' | 'pt-BR'

export type UserFormTypes = 'register' | 'login' | 'update'

// Filters types
export enum TypesOfFilters {
  MIN_PRICE = 'MIN_PRICE',
  MAX_PRICE = 'MAX_PRICE',
  ALREADY_SEEN = 'ALREADY_SEEN',
}

export type TFilter =
  | { type: TypesOfFilters.MIN_PRICE; value: number }
  | { type: TypesOfFilters.MAX_PRICE; value: number }
  | { type: TypesOfFilters.ALREADY_SEEN; value: boolean }
