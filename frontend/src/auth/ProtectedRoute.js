import { Redirect, Route } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function ProtectedRoute(props) {
  const { token } = useAuth()
  return token ? <Route {...props} /> : <Redirect to="/login" />
}
