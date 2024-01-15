import { useQuery } from '@tanstack/react-query'
import ExerciseLogProvider from '../../../services/exercises/exercise-log.service'
import { useParams } from 'react-router-dom'

export const useGetLog = () => {
	const { id } = useParams()
	return useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogProvider.getById(id),
		select: ({ data }) => data
	})
}
export const useCreateLog = () => {
	const { id } = useParams()
	return useQuery({
		queryKey: ['create exercise log', id],
		queryFn: () => ExerciseLogProvider.create(id),
		select: ({ data }) => data
	})
}
