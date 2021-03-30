import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import axiosConfig from '../services/axiosConfig'

export default function AuthProvider({ children }) {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (token) {
      axiosConfig.setAxiosAuthToken(token)
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
