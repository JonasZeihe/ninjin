import { useState} from 'react'
import styled from "styled-components/macro";

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
      <input
        type="text"
        value={userName}
        onChange={({ target }) => setUserName(target.value)}
      />
      <Button disabled={!userName} type="submit">
        Add User
      </Button>
    </Form>
      </Wrapper>
  )
}

const Form = styled.form`
  display: flex;
  padding: 10% 25% 0em 25%;
  input {
    flex-grow: 1;
  }
`

const Wrapper = styled.div`
`

const Button = styled.button`
  background: #babeae;
  border-radius: 5px;
  border: none;
  font-size: 0.75em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 0.5em 0.5em 0.5em 0.5em;
  margin-left: 0.25em;
  :disabled {
    background: #807D7A;
  }
`
