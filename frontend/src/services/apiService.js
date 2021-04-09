import axiosConfig from "./axiosConfig";

const userUrl = '/api/user'
const courseUrl = '/api/course'
const segmentUrl = '/api/segment'
const elementUrl = '/api/element'

//--COURSE
//POST
export const postCourse = (courseName, courseSize, courseDescription) =>
  axiosConfig.axiosInstance
    .post(courseUrl, { courseName, courseSize, courseDescription })
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
//UPDATE
export const updateCourseDescription = (courseName, updatedCourseDescription) =>
  axiosConfig.axiosInstance
    .put(courseUrl + '/' + courseName, { courseName, updatedCourseDescription })
    .then((response) => response.data)

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
    .get(`${segmentUrl}/${courseName}/segments`)
    .then((response) => response.data)

export const getSegmentById = (segmentName) =>
  axiosConfig.axiosInstance
    .get(`${segmentUrl}/${segmentName}`)
    .then((response) => response.data)

//--ELEMENT
//POST
export const postElements = (courseName, elementContent, courseSize) =>
  axiosConfig.axiosInstance
    .post(elementUrl, { courseName, elementContent, courseSize })
    .then((response) => response.data)
//GET
export const getElementsBySegmentName = (segmentName) =>
  axiosConfig.axiosInstance
    .get(`${elementUrl}/${segmentName}/elements`)
    .then((response) => response.data)
export const getElementById = (elementName) =>
  axiosConfig.axiosInstance
    .get(`${elementUrl}/${elementName}`)
    .then((response) => response.data)

//UPDATE
export const updateElementContent = (elementName, updatedElementContent) =>
  axiosConfig.axiosInstance
    .put(elementUrl + '/' + elementName, { elementName, updatedElementContent })
    .then((response) => response.data)

export const updateElementGroupContent = (segmentName, elementContent) =>
  axiosConfig.axiosInstance
    .put(elementUrl + '/' + segmentName + '/elements', {
      segmentName,
      updatedElementContent: elementContent,
    })
    .then((response) => response.data)
