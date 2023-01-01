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
}

// User interfaces
export interface IUser {
  uid?: string
  email: string
  google?: boolean
  name: string
  password: string
}

// Error interface
export interface IError {
  msg: string
}

// Global types
export type UserInfo = Pick<IUser, 'email' | 'name' | 'uid'>

// Types of currency for example 'ARS', 'USD', 'BRL'
export type Currency = 'ARS' | 'USD' | 'BRL'

// Types of timeZones for example es-AR, en-US, pt-BR
export type TimeZone = 'es-AR' | 'en-US' | 'pt-BR'

export type UserFormTypes = 'register' | 'login' | 'update'
