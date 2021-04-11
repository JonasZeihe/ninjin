import { Link } from 'react-router-dom'
import {
  Button,
  ListItemContainer,
  PreviewContainer,
  PreviewImage,
  PreviewSpan,
} from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function CourseListItem({ courseItem, onDeleteCourseItem }) {
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
  return (
    <ListItemContainer as={Link} to={`/course/${courseItem.courseName}`}>
      <PreviewImage src={courseItem.courseImage} />
      <PreviewSpan>{courseItem.courseName}</PreviewSpan>
      <PreviewSpan>size: {courseItem.courseSize}</PreviewSpan>
      <PreviewContainer>
        <ReactMarkdown
          source={courseItem.courseDescription}
          renderers={{ text: emojiSupport }}
        />
      </PreviewContainer>
      <Button
        onClick={() => onDeleteCourseItem(courseItem.courseName)}
        type="button"
      >
        delete
      </Button>
    </ListItemContainer>
  )
}
