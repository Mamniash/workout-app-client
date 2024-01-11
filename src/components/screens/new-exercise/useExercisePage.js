import { useMutation } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ExerciseService from '../../../services/exercises/exercise.service'

export const useExercisePage = () => {
	const navigate = useNavigate()
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

	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: ['create exercise'],
		mutationFn: body => {
			console.log(`${body?.name} ${body?.times} ${body?.iconPath}`)
			console.log(ExerciseService.create(body))
		},
		onSuccess: (_data, body) => {
			console.log(body)
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	return {
		register,
		handleSubmit,
		errors,
		isPending,
		onSubmit,
		Controller,
		control,
		error,
		isSuccess,
		data
	} //TODO useMemo add to it
}
