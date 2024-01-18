import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import WorkoutService from '../../../services/workouts/workout.service'
import { useState } from 'react'

export const useNewWorkout = () => {
	const navigate = useNavigate()
	const [error, setError] = useState()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => {
			console.log(body)
			WorkoutService.create(body).catch(error => {
				console.log(error)
				setError(error.message)
				throw new Error(error)
			})
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
