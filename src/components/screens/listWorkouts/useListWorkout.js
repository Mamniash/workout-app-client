import { useMutation, useQuery } from '@tanstack/react-query'
import WorkoutService from '../../../services/workouts/workout.service'
import WorkoutLogService from '../../../services/workouts/workout-log.service'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const useListWorkout = () => {
	const [error, setError] = useState()
	const navigate = useNavigate()
	const resultGet = useQuery({
		queryKey: ['get workouts'],
		queryFn: () =>
			WorkoutService.getAll().catch(error => {
				setError(error.message)
				throw new Error(error)
			}),
		select: ({ data }) => data
	})

	const resultCreateLog = useMutation({
		mutationKey: ['create workout'],
		mutationFn: workoutId =>
			WorkoutLogService.create(workoutId).catch(error => {
				setError(error.message)
				throw new Error(error)
			}),

		onSuccess: ({ data }) => {
			console.log(data)
			navigate(`/workout/${data.id}`)
		}
	})
	const resultDelete = useMutation({
		mutationKey: ['delete workout'],
		mutationFn: workoutId =>
			WorkoutService.delete(workoutId).catch(error => {
				setError(error.message)
				throw new Error(error)
			})
	})

	return {
		resultGet,
		resultCreateLog,
		resultDelete,
		error
	}
}
