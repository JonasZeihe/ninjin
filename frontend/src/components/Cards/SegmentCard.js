import styled from 'styled-components/macro'

export default function SegmentCard({ segmentItemData }) {

    return (
        <Container>
            <span>Course: {segmentItemData.segmentName}</span>
            <span>Content: {segmentItemData.segmentContent}</span>
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

const ButtonLink = styled.div`
  max-width: 100%;
  align-content: center;
  align-self: center;
  padding: 0.3em;
  color: rgb(253, 249, 243);
  background: #bf7279;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #de4655;
  }
`
