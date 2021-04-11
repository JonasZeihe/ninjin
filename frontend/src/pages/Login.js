import { useAuth } from '../auth/AuthContext'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../services/loginService'
import { useState } from 'react'
import {Button, Form, FormTitle, FormWrapper, Input, Title, Wrapper} from '../components/GlobalStyle'

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
      <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Instructor</FormTitle>
        <Input
          placeholder="Username"
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={userPassword}
          onChange={({ target }) => setUserPassword(target.value)}
        />
        <Button type="submit">submit</Button>
      </Form>
      </FormWrapper>

    </Wrapper>
  )
}
