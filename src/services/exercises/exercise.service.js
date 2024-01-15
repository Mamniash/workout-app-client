import { $axios } from '../../api'

export const EXERCISES = '/exercises'

class ExerciseService {
	//data = { name, times, iconPath }
	async getAll() {
		return $axios.get(EXERCISES)
	}
	async create(body) {
		return $axios.post(EXERCISES, body)
	}
	async update(id, body) {
		return $axios.put(`${EXERCISES}/${id}`, body)
	}
	async delete(id) {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}
export default new ExerciseService()
