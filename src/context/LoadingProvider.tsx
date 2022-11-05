import React, { SetStateAction, useContext, useState, Dispatch, createContext } from 'react'

export interface StateGlobalContextType {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const StateGlobalContext = createContext<StateGlobalContextType>(
  {} as StateGlobalContextType
)
interface LoadingProviderProps {
  children: React.ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false)
  return (
    <StateGlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </StateGlobalContext.Provider>
  )
}

export const useLoading = () => {
  return useContext(StateGlobalContext)
}
