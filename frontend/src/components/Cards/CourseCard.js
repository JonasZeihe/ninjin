import {CardContainer} from "../GlobalStyle";

export default function CourseCard({ courseData }) {

    return (
        <CardContainer>
            <span>{courseData.courseName}</span>
            <span>Size: {courseData.courseSize}</span>
            <span>{courseData.courseDescription}</span>
        </CardContainer>
    )
}



