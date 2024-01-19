import { useMutation } from '@tanstack/react-query'
import { useListExercises } from '../../new-workout/useListExercises'
import ExerciseService from '../../../../services/exercises/exercise.service'

export const useDeleteAllExercises = () => {
	const resultGetAll = useListExercises()

	const resultDelete = useMutation({
		mutationKey: ['delete exercise'],
		mutationFn: exerciseId =>
			ExerciseService.delete(exerciseId).catch(error => {
				throw new Error(error)
			})
	})

	const deleteAllEx = () => {
		console.log(resultGetAll.data)
		resultGetAll?.data?.map(exercise => {
			resultDelete.mutate(exercise.id)
		})
	}

	return {
		resultGetAll,
		resultDelete,
		deleteAllEx
	}
}
