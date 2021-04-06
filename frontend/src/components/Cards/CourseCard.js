import styled from 'styled-components/macro'

export default function CourseCard({ courseData }) {

    return (
        <Container>
            <span>Course: {courseData.courseName}</span>
            <span>Size: {courseData.courseSize}</span>
            <span>Content: {courseData.courseDescription}</span>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  background: rgb(191, 114, 121, 0.3);
  border: 1px solid black;
  width: 100%;
  margin: 25px auto;
  padding: 10%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  text-align: center;
`

