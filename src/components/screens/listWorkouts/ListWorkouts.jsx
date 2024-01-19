import Layout from '../../layout/Layout'
import { useListWorkout } from './useListWorkout'
import styles from '../singleWorkout/SingleWorkout.module.scss'
import Alert from '../../ui/alert/Alert'
import Loader from '../../ui/Loader'
import ItemWorkout from './ItemWorkout'
import { useState } from 'react'

const ListWorkouts = () => {
	const { resultCreateLog, resultDelete, resultGet, error } = useListWorkout()
	const { data, isSuccess } = resultGet
	return (
		<>
			<Layout heading='ListWorkouts' bgImage={'/images/My/tmp.jpg'} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{resultDelete.isSuccess && !error && (
					<Alert text='Workout has deleted' />
				)}
				{(resultCreateLog.isPending || resultDelete.isPending) && <Loader />}
				{isSuccess && !error && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<ItemWorkout
								key={workout.id}
								workout={workout}
								mutateCreate={resultCreateLog.mutate}
								mutateDelete={resultDelete.mutate}
							/>
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
