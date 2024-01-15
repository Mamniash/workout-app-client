import { useMutation, useQuery } from '@tanstack/react-query'
import WorkoutService from '../../../services/workouts/workout.service'
import WorkoutLogService from '../../../services/workouts/workout-log.service'
import { useNavigate } from 'react-router-dom'

export const useListWorkout = () => {
	const navigate = useNavigate()
	const { data, isSuccess } = useQuery({
		queryKey: ['get workouts'],
		queryFn: () => WorkoutService.getAll(),
		select: ({ data }) => data
	})

	const {
		mutate,
		isPending,
		isSuccess: isSuccessMutate,
		error
	} = useMutation({
		mutationKey: ['get workout'],
		mutationFn: workoutId => WorkoutLogService.create(workoutId),

		onSuccess: ({ data }) => {
			console.log(data)
			navigate(`/workout/${data.id}`)
		}
	})

	return {
		data,
		isSuccess,
		mutate,
		isPending,
		isSuccessMutate,
		error
	}
}
