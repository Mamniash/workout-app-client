import { useMutation } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import ExerciseService from '../../../services/exercises/exercise.service'

export const useExercisePage = () => {
	const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

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
		mutationKey: ['create exercise'],
		mutationFn: body => {
			ExerciseService.create(body).catch(error => {
				throw new Error(error)
			})
		},
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		resultCreate.mutate(data)
	}

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		Controller,
		control,
		data,
		resultCreate
	} //TODO useMemo add to it
}
