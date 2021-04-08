import { Link } from 'react-router-dom'
import {Button, ButtonLink, Container, ListItemContainer} from '../GlobalStyle'
/*
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'
*/

export default function CourseListItem({ course, onDeleteCourse }) {
/*
    const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));
*/
    return (
    <ListItemContainer as={Link} to={`/course/${course.courseName}`}>
      <span>{course.courseName}</span>
        <span>size: {course.courseSize}</span>
{/*      <span>Size: {course.courseSize}</span>
        <ReactMarkdown source={course.courseDescription} renderers={{ text: emojiSupport }}   />*/}
        <Button onClick={() => onDeleteCourse(course.courseName)} type="button">
        delete
      </Button>
    </ListItemContainer>
  )
}
