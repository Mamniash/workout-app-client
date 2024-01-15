import Layout from '../../layout/Layout'
import { useListWorkout } from './useListWorkout'
import styles from '../singleWorkout/SingleWorkout.module.scss'
import Alert from '../../ui/alert/Alert'
import Loader from '../../ui/Loader'
import ItemWorkout from './ItemWorkout'

const ListWorkouts = () => {
	const { mutate, data, error, isPending, isSuccess, isSuccessMutate } =
		useListWorkout()
	return (
		<>
			<Layout heading='ListWorkouts' bgImage={'/images/ex-bg-1.jpg'} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isPending && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<ItemWorkout key={workout.id} workout={workout} mutate={mutate} />
						))}
						{isSuccess && data?.length === 0 && (
							<Alert type='warning' text='Workouts not found' />
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default ListWorkouts
