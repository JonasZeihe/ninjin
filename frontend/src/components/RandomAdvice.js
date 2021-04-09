import axios from 'axios'

function randomAdvice() {
  return axios.get('https://api.adviceslip.com/advice')
}

export default randomAdvice
