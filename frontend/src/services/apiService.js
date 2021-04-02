import axiosConfig from './axiosConfig'

const userUrl = '/api/user'
const courseUrl = '/api/course'
const segmentUrl = '/api/segment'
const elementUrl = '/api/element'

//--COURSE
//POST
export const postCourse = (courseName, courseSize) =>
  axiosConfig.axiosInstance
    .post(courseUrl, { courseName, courseSize })
    .then((response) => response.data)
//GET
export const getCourses = () =>
  axiosConfig.axiosInstance.get(courseUrl).then((response) => response.data)

export const getCourseByName = (courseName) =>
  axiosConfig.axiosInstance
    .get(`${courseUrl}/${courseName}`)
    .then((response) => response.data)
//DELETE
export const deleteCourseById = (courseName) =>
  axiosConfig.axiosInstance.delete(`${courseUrl}/${courseName}`)

//--USER
//POST
export const postUser = (userName, courseName) =>
  axiosConfig.axiosInstance
    .post(userUrl, { userName, courseName })
    .then((response) => response.data)
//GET
export const getUsersByCourseName = (courseName) =>
  axiosConfig.axiosInstance
    .get(`${userUrl}/${courseName}`)
    .then((response) => response.data)
//DELETE
export const deleteUserByCourseNameAndUserName = (courseName, userName) =>
  axiosConfig.axiosInstance.delete(`${userUrl}/${courseName}/${userName}`)

//--SEGMENT
//POST
export const postCourseSegments = (courseName, segmentContent, courseSize) =>
  axiosConfig.axiosInstance
    .post(segmentUrl, { courseName, segmentContent, courseSize })
    .then((response) => response.data)
//UPDATE
export const updateSegmentContent = (segmentName, updatedSegmentContent) =>
  axiosConfig.axiosInstance
    .put(segmentUrl + '/' + segmentName, { segmentName, updatedSegmentContent })
    .then((response) => response.data)
//GET
export const getSegmentsByCourseName = (courseName) =>
  axiosConfig.axiosInstance
    .get(`${segmentUrl}/${courseName}`)
    .then((response) => response.data)

export const getSegmentBySegmentName = (segmentName) =>
  axiosConfig.axiosInstance
    .get(`${segmentUrl}/${segmentName}`)
    .then((response) => response.data)

//--ELEMENT
//POST
export const postElements = (segmentName, elementContent) =>
    axiosConfig.axiosInstance
        .post(elementUrl, { segmentName, elementContent })
        .then((response) => response.data)
//GET
export const getElementsBySegmentName = (segmentName) =>
    axiosConfig.axiosInstance
        .get(`${elementUrl}/${segmentName}`)
        .then((response) => response.data)
//UPDATE
//export const updateElementContent = (segmentName, updatedElementContent) =>
//   axiosConfig.axiosInstance
//     .put(segmentUrl + '/' + segmentName, { segmentName, updatedElementContent })
//     .then((response) => response.data)