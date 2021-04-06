import styled from 'styled-components/macro'

export default function ElementCard({ elementItemData }) {

    return (
        <Container>
            <span>Element: {elementItemData.elementName}</span>
            <span>Content: {elementItemData.elementContent}</span>
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

