import { $axios } from '../../api'

import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	//data = { name, times, iconPath }
	async getAll() {
		return $axios.get(`${LOG}s`)
	}
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}
	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}
	// "isCompleted": true,
	async setCompleted(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
	// "isCompleted": true,
	// "weight": 10,
	// "repeat": 222
	async updateTime(timeId, body) {
		return $axios.put(`${LOG}/time/${timeId}`, body)
	}
	async delete(id) {
		return $axios.delete(`${LOG}/${id}`)
	}
}
export default new ExerciseLogService()
