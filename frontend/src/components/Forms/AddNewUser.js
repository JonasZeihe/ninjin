import { useState } from 'react'
import { Button, Form, Input, Title, Wrapper } from '../GlobalStyle'

export default function AddNewUser({ onAdd, course }) {
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
      <Form onSubmit={handleSubmit}>
        <Title>users</Title>
        <Input
          type="text"
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
