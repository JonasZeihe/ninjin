import { useAuth } from '../auth/AuthContext'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../services/loginService'
import { useState } from 'react'

export default function Login() {
  const { token, setToken } = useAuth()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!(userName && userPassword)) {
      return
    }
    loginUser(userName, userPassword).then(setToken)
    setUserName('')
    setUserPassword('')
  }

  if (token) {
    return <Redirect to="/home" />
  }

  return (
    <section>
      <p>Please Login</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={userPassword}
          onChange={({ target }) => setUserPassword(target.value)}
        />
        <button type="submit">login</button>
      </form>
    </section>
  )
}
