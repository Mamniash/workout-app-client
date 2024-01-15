import styles from '../singleWorkout/SingleWorkout.module.scss'

const ItemWorkout = ({ workout, mutate }) => {
	return (
		<div className={styles.item}>
			<button
				aria-label='Create new workout'
				onClick={() => mutate(workout.id)}
			>
				<span>{workout.name}</span>
			</button>
		</div>
	)
}

export default ItemWorkout
