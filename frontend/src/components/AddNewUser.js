import { useState } from 'react'

export default function AddNewUser({ onAdd }) {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name) {
      return
    }
    onAdd(name)
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button disabled={!name} type="submit">
        Add User
      </button>
    </form>
  )
}
