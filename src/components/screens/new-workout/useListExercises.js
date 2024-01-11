import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../../../services/exercises/exercise.service'

export const useListExercises = () =>
	useQuery({
		queryKey: ['get exercises list'],
		queryFn: () => ExerciseService.getAll(),
		select: ({ data }) => data
	})
