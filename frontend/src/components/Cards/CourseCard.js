import { CardContainer } from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function CourseCard({ courseData }) {
    const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

    return (
    <CardContainer>
      <span>{courseData.courseName}</span>
      <span>Size: {courseData.courseSize}</span>
        <ReactMarkdown source={courseData.courseDescription} renderers={{ text: emojiSupport }}   />
    </CardContainer>
  )
}
