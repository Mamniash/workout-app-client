import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercises/exercise-log.service'

import { useUpdateLogTime } from './useUpdateLogTime'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [times, setTimes] = useState([])

	// const {
	// 	data: exerciseLog,
	// 	isSuccess,
	// 	isLoading
	// } = useQuery(['get exercise log', id], () => ExerciseLogService.getById(id), {
	// 	select: ({ data }) => data,
	// 	onSuccess(data) {
	// 		if (data?.times?.length) setTimes(data.times)
	// 	}
	// })
	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
		// onSuccess: data => {
		// 	if (data?.times?.length) setTimes(data.times)
		// 	console.log('times')
		// 	console.log(times)
		// }
	})

	//if (isSuccess && exerciseLog?.times?.length) setTimes(exerciseLog.times)
	//const [times, setTimes] = useState([isSuccess && exerciseLog?.times])

	const { errorChange, updateTime } = useUpdateLogTime()

	const onChangeState = (timeId, key, value) => {
		console.log(timeId, key, value)
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})
		console.log(newTimes)
		setTimes(newTimes)
	}

	const getTime = timeId => {
		return times.find(time => time.id === timeId)
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		})
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		errorChange,
		onChangeState,
		getState
	}
}
