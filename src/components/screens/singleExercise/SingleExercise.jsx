import HeaderExercise from './HeaderExercise'
import { useGetLog } from './useSingleExercise'
import styles from './SingleExercise.module.scss'
const SingleExercise = () => {
	const { data: exerciseLog, isPending, isSuccess } = useGetLog()
	console.log(exerciseLog)
	return (
		<>
			<HeaderExercise exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div className='wrapper-inner-page'>
				{exerciseLog?.times.map(time => (
					<div key={time.id} className={styles.wrapper}>
						<span>{`${time.prevRepeat}/${time.prevWeight}`}</span>
						<span>{`${time.repeat}/${time.weight}`}</span>
						<img
							src={`/images/exercises/check${
								time.isCompleted ? '-completed' : ''
							}.svg`}
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default SingleExercise
