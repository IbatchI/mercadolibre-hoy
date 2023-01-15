/* eslint-disable no-unused-vars */
import React, { useState, createContext, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import { deleteSearch, getSearches, saveSearch } from '../services/api-ml-hoy/Searches'
import { ISearch } from '../types/types'
import { AuthContext } from './AuthProvider'
import { useLoading } from './LoadingProvider'

export interface ISearchesContext {
  mySearches: Array<ISearch>
  totalSearches: number
  handleSaveSearch(keyword: string): Promise<void>
  handleDeleteSearch(id: string): Promise<void>
  handlePagination(page: number): void
  currentPage: number
}

const LIMIT_FOR_SEARCHES = 9
export const SearchesContext = createContext<ISearchesContext>({} as ISearchesContext)

interface SearchesProviderProps {
  children: React.ReactNode
}

export function SearchesProvider({ children }: SearchesProviderProps) {
  const [mySearches, setMySearches] = useState<Array<ISearch>>([])
  const [totalSearches, setTotalSearches] = useState<number>(0)
  const [page, setPage] = useState<number>(0)

  const { isAuth } = useContext(AuthContext)

  const { setLoading } = useLoading()

  const handlePagination = (page: number) => {
    setPage(page)
  }

  const fetchMySearches = async () => {
    try {
      setLoading(true)
      const response = await getSearches(page * LIMIT_FOR_SEARCHES, LIMIT_FOR_SEARCHES)
      setMySearches(response?.searches)
      setTotalSearches(response?.total)
      toast.success(response.msg)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      //   navigate(`/`)
    }
  }

  const handleSaveSearch = async (keyword: string) => {
    try {
      setLoading(true)
      const response = await saveSearch(keyword)
      fetchMySearches()
      toast.success(response.msg)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      //   navigate(`/`)
    }
  }

  const handleDeleteSearch = async (id: string) => {
    try {
      setLoading(true)
      const response = await deleteSearch(id)
      fetchMySearches()
      toast.success(response.msg)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      //   navigate(`/`)
    }
  }

  useEffect(() => {
    if (isAuth) fetchMySearches()
  }, [page])

  return (
    <SearchesContext.Provider
      value={{
        mySearches,
        handleSaveSearch,
        handleDeleteSearch,
        totalSearches,
        handlePagination,
        currentPage: page,
      }}
    >
      {children}
    </SearchesContext.Provider>
  )
}
