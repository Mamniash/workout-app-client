import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../../services/exercises/exercise-log.service'

export const useExerciseLog = () => {
	const { id } = useParams()
	return useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
	})
}
