import styles from '../singleWorkout/SingleWorkout.module.scss'
import { MdDelete } from 'react-icons/md'

const ItemWorkout = ({ workout, mutateCreate, mutateDelete }) => {
	return (
		<div className={styles.item}>
			<button
				aria-label='Create new workout'
				onClick={() => mutateCreate(workout.id)}
			>
				<span>{workout.name}</span>
			</button>
			<button
				style={{ padding: 0, margin: 0 }}
				onClick={() => {
					if (confirm('Delete this workout?')) mutateDelete(workout.id)
				}}
			>
				<MdDelete fontSize={28} width={50} height={50} />
			</button>
		</div>
	)
}

export default ItemWorkout
