import axiosConfig from './axiosConfig'

const userUrl = '/api/user'
const courseUrl = '/api/course'
const segmentUrl = '/api/segment'
const elementUrl = '/api/element'

//--COURSE
//POST
export const postCourse = (
  courseName,
  courseSize,
  courseImage,
  courseDescription
) =>
  axiosConfig.axiosInstance
    .post(courseUrl, { courseName, courseSize, courseImage, courseDescription })
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

export const updateCourseImage = (courseName, updatedCourseImage) =>
  axiosConfig.axiosInstance
    .put(courseUrl + '/' + courseName + '/image', {
      courseName,
      updatedCourseImage,
    })
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
export const postCourseSegments = (
  courseName,
  segmentImage,
  segmentContent,
  courseSize
) =>
  axiosConfig.axiosInstance
    .post(segmentUrl, { courseName, segmentImage, segmentContent, courseSize })
    .then((response) => response.data)
//UPDATE
export const updateSegmentContent = (segmentName, updatedSegmentContent) =>
  axiosConfig.axiosInstance
    .put(segmentUrl + '/' + segmentName, { segmentName, updatedSegmentContent })
    .then((response) => response.data)
export const updateSegmentImage = (segmentName, updatedSegmentImage) =>
  axiosConfig.axiosInstance
    .put(segmentUrl + '/' + segmentName + '/image', {
      segmentName,
      updatedSegmentImage,
    })
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
export const postElements = (
  courseName,
  elementImage,
  elementContent,
  courseSize
) =>
  axiosConfig.axiosInstance
    .post(elementUrl, { courseName, elementImage, elementContent, courseSize })
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

export const updateElementImage = (elementName, updatedElementImage) =>
  axiosConfig.axiosInstance
    .put(elementUrl + '/' + elementName + '/image', {
      elementName,
      updatedElementImage,
    })
    .then((response) => response.data)

export const updateElementGroupImage = (
  segmentName,
  updatedElementGroupImage
) =>
  axiosConfig.axiosInstance
    .put(elementUrl + '/' + segmentName + '/imageGroup', {
      segmentName,
      updatedElementImage: updatedElementGroupImage,
    })
    .then((response) => response.data)
