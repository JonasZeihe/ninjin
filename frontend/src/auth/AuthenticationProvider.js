import { useState } from 'react'
import { AuthenticationContext } from './AuthenticationContext'

export default function AuthenticationProvider({ children }) {
  const [token, setToken] = useState()
  return (
    <AuthenticationContext.Provider value={{ token, setToken }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
