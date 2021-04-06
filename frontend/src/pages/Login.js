import { useAuth } from '../auth/AuthContext'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../services/loginService'
import { useState } from 'react'
import styled from 'styled-components/macro'

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
        <Title>Please Login</Title>
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
        <Button type="submit">login</Button>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: linear-gradient(#2c2c91, white);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #bf7279;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ca9499;
  }
`

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`
