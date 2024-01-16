import cn from 'clsx'
import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import HeaderExercise from './HeaderExercise'
import styles from './SingleExercise.module.scss'
import { useGetLog } from './hooks/useSingleExercise'
import { useExerciseLog } from './hooks/useExerciseLog'
import HeaderTable from './table/HeaderTable'
import RowTable from './table/RowTable'

const SingleExercise = () => {
	const { data: exerciseLog, isPending, isSuccess } = useExerciseLog()
	console.log(exerciseLog)
	return (
		<>
			<HeaderExercise exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{/* <ErrorsExercise errors={[errorChange, errorCompleted]}/> */}
				{isPending ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<HeaderTable />
						{exerciseLog?.times?.map(time => (
							<RowTable key={time.id} item={time} />
						))}
						{isSuccess && exerciseLog?.times?.length === 0 && (
							<Alert type='warning' text='Times not found' />
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default SingleExercise
