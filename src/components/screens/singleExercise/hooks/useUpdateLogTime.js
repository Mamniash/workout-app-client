import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercises/exercise-log.service'
import { useCompleteLog } from './useCompleteLog'

export const useUpdateLogTime = times => {
	const { id } = useParams()

	const queryClient = useQueryClient()
	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries(['get exercise log', id])
			if (times.every(time => time.isCompleted)) {
				completeLog({ isCompleted: true })
			}
		}
	})

	return { updateTime: mutate, errors: [errorChange, errorCompleted] }
}
