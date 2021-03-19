import CreateNewCourse from '../components/CreateNewCourse'
import { postCourse } from '../services/apiService'

const createNewCourse = (courseName, courseDuration) =>
  postCourse(courseName, courseDuration).catch((error) => console.error(error))

export default function CourseOverview() {
  return <CreateNewCourse onAdd={createNewCourse} />
}
