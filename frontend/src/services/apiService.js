import axiosConfig from './axiosConfig'

const userUrl = '/api/user'
const courseUrl = '/api/course'

export const postUser = (name, courseName) =>
  axiosConfig.axiosInstance
    .post(userUrl, { name, courseName })
    .then((response) => response.data)

export const getUsersByCourseName = (courseName) =>
  axiosConfig.axiosInstance
    .get(`${userUrl}/${courseName}`)
    .then((response) => response.data)

export const deleteByCourseNameAndName = (courseName, name) =>
  axiosConfig.axiosInstance.delete(`${userUrl}/${courseName}/${name}`)

export const postCourse = (name, duration) =>
  axiosConfig.axiosInstance
    .post(courseUrl, { name, duration })
    .then((response) => response.data)

export const getCourses = () =>
  axiosConfig.axiosInstance.get(courseUrl).then((response) => response.data)

export const deleteCourseById = (courseName) =>
  axiosConfig.axiosInstance.delete(`${courseUrl}/${courseName}`)

export const getCourseByName = (courseName) =>
  axiosConfig.axiosInstance
    .get(`${courseUrl}/${courseName}`)
    .then((response) => response.data)
