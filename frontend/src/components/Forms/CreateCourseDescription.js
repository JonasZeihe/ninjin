import { useState } from 'react'
import {Button, Form, Input, Title, Wrapper} from "../GlobalStyle";

export default function CreateCourseDescription({ onAddDescription }) {
    const [updatedCourseDescription, setUpdatedCourseDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!updatedCourseDescription) {
            return
        }
        onAddDescription(updatedCourseDescription)
        setUpdatedCourseDescription('')
    }
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Title>Add description</Title>
                <Input
                    type="text"
                    placeholder="content"
                    value={updatedCourseDescription}
                    onChange={(event) => setUpdatedCourseDescription(event.target.value)}
                />
                <Button disabled={!updatedCourseDescription} type="submit">
                    submit
                </Button>
            </Form>
        </Wrapper>
    )
}