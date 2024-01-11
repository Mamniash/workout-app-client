import { $axios } from '../api'

const USERS = '/users'

class UserService {
	async getProfile() {
		try {
			return $axios.get(`${USERS}/profile`)
		} catch (error) {
			throw new Error(error)
		}
	}
}
export default new UserService()
