import {useEffect, useRef, useState} from 'react'
import {Button, Form, Input, Title, Wrapper} from '../GlobalStyle'

export default function UpdateCourseImage({ onAddImage }) {
    const [image, setImage] = useState()
    const [updatedCourseImage, setUpdatedCourseImage] = useState()

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedCourseImage(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setUpdatedCourseImage(null)
        }
    }, [image]);

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!updatedCourseImage) {
            return
        }
        onAddImage(updatedCourseImage)
        setImage('')
    }

   const onChange = (event) => {
        const file = event.target.files[0];
       if(!(file.size > 5242880)&&(file && file.type.substr(0, 5) === "image")){
           setImage(file);
        } else {
           alert("File is too big, max filesize is 5MB!");
           setImage(null);
        }
    }

    const fileInputRef = useRef(HTMLInputElement)

    return (
        <Wrapper>
            <Title>Add Image</Title>
            <Form>
                <Input type="file"  ref={fileInputRef} accept="image/*" onChange={onChange}/>
                <Button disabled={!updatedCourseImage} onClick={handleSubmit}>
                    submit
                </Button>
            </Form>
        </Wrapper>
    )
}
