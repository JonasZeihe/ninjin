import axios from 'axios'

const userUrl = '/api/user'
const courseUrl = '/api/course'

export const postUser = (name) =>
  axios.post(userUrl, { name }).then((response) => response.data)

export const postCourse = (name, duration) =>
  axios.post(courseUrl, { name, duration }).then((response) => response.data)
