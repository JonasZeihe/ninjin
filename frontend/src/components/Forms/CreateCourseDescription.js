import {useEffect, useRef, useState} from 'react'
import {Button, Form, Textarea, Title, Wrapper} from '../GlobalStyle'

export default function CreateCourseDescription({ onAddDescription, onAddImage }) {
  const [updatedCourseDescription, setUpdatedCourseDescription] = useState('')
  const [image, setImage] = useState()
  const [base64String, setBase64String] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!updatedCourseDescription) {
      return
    }
    onAddDescription(updatedCourseDescription)
    setUpdatedCourseDescription('')
      onAddImage(base64String)
      setImage('')
  }
  const fileInputRef = useRef(HTMLInputElement)

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64String(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setBase64String(null)
    }
  }, [image]);

  return (
    <Wrapper>
      <Title>Add description</Title>
      <Form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          placeholder="content"
          value={updatedCourseDescription}
          onChange={(event) => setUpdatedCourseDescription(event.target.value)}
        />
        <Button disabled={!updatedCourseDescription} type="submit">
          submit
        </Button>
        <input type="file" ref={fileInputRef} style={{ display: "none" }}   accept="image/*"
               onChange={(event) => {
                 const file = event.target.files[0];
                 if (file && file.type.substr(0, 5) === "image") {
                   setImage(file);
                 } else {
                   setImage(null);
                 }
               }}/>
        <Button onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}>
          Add Image
        </Button>
      </Form>
    </Wrapper>
  )

}
