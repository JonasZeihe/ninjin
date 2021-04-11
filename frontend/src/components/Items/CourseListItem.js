import { Link } from 'react-router-dom'
import {
    CardIconContainer, IconButton,
    ListItemContainer,
    PreviewContainer,
    PreviewImage,
    PreviewSpan,
} from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'
import {Trash2} from "react-feather";

export default function CourseListItem({ courseItem, onDeleteCourseItem }) {
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
  return (
    <ListItemContainer as={Link} to={`/course/${courseItem.courseName}`}>
      <PreviewImage   src={courseItem.courseImage} />
      <PreviewSpan>{courseItem.courseName}</PreviewSpan>
      <PreviewSpan>size: {courseItem.courseSize}</PreviewSpan>
      <PreviewContainer>
        <ReactMarkdown
          source={courseItem.courseDescription}
          renderers={{ text: emojiSupport }}
        />
      </PreviewContainer>
        <CardIconContainer>
      <IconButton onClick={() => onDeleteCourseItem(courseItem.courseName)}><Trash2 size={20}/></IconButton>
        </CardIconContainer>
    </ListItemContainer>
  )
}
