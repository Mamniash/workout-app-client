import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import WorkoutService from '../../../services/workouts/workout.service'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const resultCreate = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => {
			WorkoutService.create(body).catch(error => {
				throw new Error(error)
			})
		},
		onSuccess: () => {
			reset({
				name: '',
				exerciseIds: []
			})
		}
	})

	const onSubmit = data => {
		resultCreate.mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
	}

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		control,
		resultCreate
	} //TODO useMemo add to it
}
