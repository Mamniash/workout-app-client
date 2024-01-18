import styles from './Button.module.scss'
import cn from 'clsx'

const Button = ({
	children,
	clickHandler = null,
	size = 'xl',
	type = 'common'
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size], styles[type])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
