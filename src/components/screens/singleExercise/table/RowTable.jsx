import styles from '../SingleExercise.module.scss'
import cn from 'clsx'

const RowTable = ({ item }) => {
	return (
		<div
			key={item.id}
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
		>
			<div className={styles.opacity} key={`${item.id}-${item.prevWeight}`}>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted && ' '}</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
			</div>
			<div key={`RepeatWeight ${item.id}/${item.weight}`}>
				<input
					type='tel'
					pattern='[0-9]*'
					defaultValue={item.weight}
					disabled={item.isCompleted}
				/>
				<i>kg{item.isCompleted && ' '}/</i>
				<input
					type='number'
					defaultValue={item.repeat}
					disabled={item.isCompleted}
				/>
			</div>
			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<img
					className={styles.checkbox}
					src={
						item.isCompleted
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					alt='#'
					// onClick={() => {}}
				/>
			</div>
		</div>
	)
}

export default RowTable
