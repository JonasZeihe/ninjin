import {CardContainer, CardImage, CardSpan, MarkdownContainer} from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function CourseCard({ courseData }) {
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))

  return (
    <CardContainer>
      <CardImage
        src={courseData.courseImage}
        alt="preview image for each course"
      />
      <CardSpan>{courseData.courseName}</CardSpan>
      <CardSpan>Size: {courseData.courseSize}</CardSpan>
      <MarkdownContainer>
      <ReactMarkdown
        source={courseData.courseDescription}
        renderers={{ text: emojiSupport }}
      />
      </MarkdownContainer>
    </CardContainer>
  )
}
