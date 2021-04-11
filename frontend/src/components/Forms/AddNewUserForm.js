import { useState } from 'react'
import {Button, Form, FormTitle, Input, Wrapper} from '../GlobalStyle'

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
      <FormTitle>Users</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          maxlength="30"
          placeholder="username"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <Button disabled={!userName} type="submit">
          add
        </Button>
      </Form>
    </Wrapper>
  )
}
