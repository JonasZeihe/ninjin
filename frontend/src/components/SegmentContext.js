import { createContext, useContext } from 'react'

export const ElementContext = createContext()

export const useAuth = () => useContext(ElementContext)
