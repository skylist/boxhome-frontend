import axios from 'axios'

export const API_URL = `https://boxhome.herokuapp.com`

const api = axios.create({
	baseURL: API_URL
})

export default api