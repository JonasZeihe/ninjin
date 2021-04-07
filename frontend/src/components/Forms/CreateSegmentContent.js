import { useState } from 'react'
import styled from 'styled-components/macro'
import {Button, Form, Input, Title, Wrapper} from "../GlobalStyle";

export default function CreateSegmentContent({ onAddSegment }) {
  const [updatedSegmentContent, setUpdatedSegmentContent] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!updatedSegmentContent) {
      return
    }
    onAddSegment(updatedSegmentContent)
    setUpdatedSegmentContent('')
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Add Content</Title>
        <Input
          type="text"
          placeholder="content"
          value={updatedSegmentContent}
          onChange={( event ) => setUpdatedSegmentContent(event.target.value)}
        />
        <Button disabled={!updatedSegmentContent} type="submit">
          submit
        </Button>
      </Form>
    </Wrapper>
  )
}


