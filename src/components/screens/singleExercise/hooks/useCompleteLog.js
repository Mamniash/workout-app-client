import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercises/exercise-log.service'

export const useCompleteLog = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const navigate = useNavigate()

	const { mutate, error: errorCompleted } = useMutation({
		mutationKey: ['complete log'],
		mutationFn: body => ExerciseLogService.setCompleted(id, body),
		onSuccess: ({ data }) => {
			navigate(`/workout/${data.workoutLogId}`)
		}
	})

	return { completeLog: mutate, errorCompleted }
}
