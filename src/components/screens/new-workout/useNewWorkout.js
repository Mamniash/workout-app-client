import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import WorkoutService from '../../../services/workouts/workout.service'

export const useNewWorkout = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => {
			console.log(body)
			console.log(WorkoutService.create(body))
		},
		onSuccess: (_data, body) => {
			reset({
				name: '',
				exerciseIds: []
			})
		}
	})

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
	}

	return {
		register,
		handleSubmit,
		errors,
		isPending,
		onSubmit,
		error,
		isSuccess,
		control
	} //TODO useMemo add to it
}
