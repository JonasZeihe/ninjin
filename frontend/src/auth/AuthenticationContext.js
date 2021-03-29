import { useContext, createContext } from 'react'

export const AuthenticationContext = createContext()

export const useAuth = () => useContext(AuthenticationContext)
