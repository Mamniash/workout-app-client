import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import WorkoutLogService from '../../../services/workouts/workout-log.service.js'

import styles from './SingleWorkout.module.scss'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Loader from '../../ui/Loader.jsx'
import Item from './Item.jsx'
import { Fragment } from 'react'
import HeaderWorkout from './HeaderWorkout.jsx'

const SingleWorkout = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const {
		data: workoutLog,
		isSuccess,
		isPending,
		error
	} = useQuery({
		queryKey: ['get workout log', id],
		queryFn: () => WorkoutLogService.getById(id),
		select: ({ data }) => data
	})

	const { mutate: completeWorkout } = useMutation({
		mutationKey: ['finish workout', id],
		mutationFn: () => WorkoutLogService.setCompleted(id),
		onSuccess: () => {
			navigate('/workouts')
		}
	})

	console.log(workoutLog)

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{error && <Alert type='error' text={error} />}
				</div>

				{isPending ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<Item exerciseLog={exerciseLog} />
								{index % 2 === 1 &&
									index !== workoutLog.exerciseLogs.length - 1 && (
										<div className={styles.line}></div>
									)}
							</Fragment>
						))}
						<Button clickHandler={completeWorkout}>Finish workout</Button>
					</div>
				)}
			</div>
		</>
	)
}

export default SingleWorkout
