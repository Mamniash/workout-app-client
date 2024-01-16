import styles from '../SingleExercise.module.scss'

const data = ['Previous', 'Repeat & Weight', 'Completed']

const HeaderTable = () => {
	return (
		<div className={styles.row}>
			{data.map((title, index) => (
				<div key={title + index}>
					<span>{title}</span>
				</div>
			))}
		</div>
	)
}

export default HeaderTable
