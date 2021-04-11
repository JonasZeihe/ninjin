import { useEffect, useRef, useState } from 'react'
import {Button, FileInput, Form, FormTitle, Wrapper} from '../GlobalStyle'

export default function EditImageForm({ onAddImage }) {
  const [imageStringContainer, setImageStringContainer] = useState()
  const [updatedImageString, setUpdatedImageString] = useState()

  useEffect(() => {
    if (imageStringContainer) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUpdatedImageString(reader.result)
      }
      reader.readAsDataURL(imageStringContainer)
    } else {
      setUpdatedImageString(null)
    }
  }, [imageStringContainer])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!updatedImageString) {
      return
    }
    onAddImage(updatedImageString)
    setImageStringContainer('')
  }

  const onChange = (event) => {
    const file = event.target.files[0]
    if (!(file.size > 5242880) && file && file.type.substr(0, 5) === 'image') {
      setImageStringContainer(file)
    } else {
      alert('File is too big, max filesize is 5MB!')
      setImageStringContainer(null)
    }
  }

  const fileInputRef = useRef(HTMLInputElement)

  return (
    <Wrapper>
      <FormTitle>Add Image</FormTitle>
      <Form>
        <FileInput
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={onChange}
        />
        <Button disabled={!updatedImageString} onClick={handleSubmit}>
          upload
        </Button>
      </Form>
    </Wrapper>
  )
}
