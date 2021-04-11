import axios from 'axios'

const axiosInstance = axios.create()

function setAxiosAuthToken(token) {
  axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + token
}

const axiosC = {
  axiosInstance,
  setAxiosAuthToken,
}

export default axiosC
