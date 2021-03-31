import axiosConfig from './axiosConfig'

const userUrl = '/api/user'
const courseUrl = '/api/course'
const segmentUrl = '/api/segment'

export const postUser = (userName, courseName) =>
  axiosConfig.axiosInstance
    .post(userUrl, { userName, courseName })
    .then((response) => response.data)

export const getUsersByCourseName = (courseName) =>
  axiosConfig.axiosInstance
    .get(`${userUrl}/${courseName}`)
    .then((response) => response.data)

export const deleteByCourseNameAndUserName = (courseName, userName) =>
  axiosConfig.axiosInstance.delete(`${userUrl}/${courseName}/${userName}`)

export const postCourse = (courseName, courseSize) =>
  axiosConfig.axiosInstance
    .post(courseUrl, { courseName, courseSize })
    .then((response) => response.data)

export const getCourses = () =>
  axiosConfig.axiosInstance.get(courseUrl).then((response) => response.data)

export const deleteCourseById = (courseName) =>
  axiosConfig.axiosInstance.delete(`${courseUrl}/${courseName}`)

export const getCourseByName = (courseName) =>
  axiosConfig.axiosInstance
    .get(`${courseUrl}/${courseName}`)
    .then((response) => response.data)

export const postCourseSegments = (courseName, segmentInput, courseSize) =>
    axiosConfig.axiosInstance.post(segmentUrl, {courseName, segmentInput, courseSize})
        .then((response) => response.data)

/*
axiosConfig.axiosInstance.post(`${segmentUrl}/${courseName}/${courseSize}`)
*/
