import Cookies from 'js-cookie'
import axios from 'axios'
import { TOKEN } from './app.constants'

export const $axios = axios.create({
	baseURL: 'http://localhost:5000/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get(TOKEN)}`
	}
})
