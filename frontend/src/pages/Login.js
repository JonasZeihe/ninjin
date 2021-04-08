import { useAuth } from '../auth/AuthContext'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../services/loginService'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { Button, Form, Input, Wrapper } from '../components/GlobalStyle'

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
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
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
        <Button type="submit">submit</Button>
      </Form>
    </Wrapper>
  )
}

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`
