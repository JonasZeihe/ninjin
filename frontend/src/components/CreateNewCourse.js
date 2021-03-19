import { useState } from 'react'

export default function CreateNewCourse({ onAdd }) {
  const [courseName, setCourseName] = useState('')
  const [courseDuration, setCourseDuration] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!courseName) {
      return
    }
    onAdd(courseName, courseDuration)
    setCourseName('')
    setCourseDuration('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={courseName}
        onChange={({ target }) => setCourseName(target.value)}
      />
      <input
        disabled={!courseName}
        type="text"
        value={courseDuration}
        onChange={({ target }) => setCourseDuration(target.value)}
      />
      <button disabled={!courseName} type="submit">
        Create a new course
      </button>
    </form>
  )
}
