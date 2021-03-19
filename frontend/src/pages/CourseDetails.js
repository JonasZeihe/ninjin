import AddNewUser from '../components/AddNewUser'
import { postUser } from '../services/apiService'

export default function CourseDetails() {
  const addNewUser = (name) =>
    postUser(name).catch((error) => console.error(error))

  return (
    <div>
      <AddNewUser onAdd={addNewUser} />
    </div>
  )
}
