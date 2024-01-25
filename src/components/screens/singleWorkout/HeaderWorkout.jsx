import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from './SingleWorkout.module.scss'
import Header from '../../layout/header/Header'

const HeaderWorkout = ({ isSuccess, workoutLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/single-workout.jpg')`,
				height: 256
			}}
		>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog?.minute + 'min.'}</time>
					<h1 className={stylesLayout.heading} style={{ textAlign: 'left' }}>
						{workoutLog?.workout?.name}
					</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
