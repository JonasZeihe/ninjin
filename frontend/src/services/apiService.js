import axios from 'axios'

const userUrl = '/api/user'
const courseUrl = '/api/course'

export const postUser = (name, courseName) =>
  axios.post(userUrl, { name, courseName }).then((response) => response.data)

export const getUsersByCourseName = (courseName) =>
  axios.get(`${userUrl}/${courseName}`).then((response) => response.data)

export const deleteUserById = (name) => axios.delete(`${userUrl}/${name}`)

export const postCourse = (name, duration) =>
  axios.post(courseUrl, { name, duration }).then((response) => response.data)

export const getCourses = () =>
  axios.get(courseUrl).then((response) => response.data)

export const deleteCourseById = (courseName) =>
  axios.delete(`${courseUrl}/${courseName}`)

export const getCourseByName = (courseName) =>
  axios.get(`${courseUrl}/${courseName}`).then((response) => response.data)
