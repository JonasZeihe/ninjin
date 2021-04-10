import { useState } from 'react'
import { Button, Form, Input, Title, Wrapper } from '../GlobalStyle'

export default function AddNewUserForm({ onAdd, course }) {
  const [userName, setUserName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!userName) {
      return
    }
    onAdd(userName, course)
    setUserName('')
  }
  return (
    <Wrapper>
      <Title>users</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          maxlength="30"
          placeholder="username"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <Button disabled={!userName} type="submit">
          submit
        </Button>
      </Form>
    </Wrapper>
  )
}
