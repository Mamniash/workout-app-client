import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from './SingleExercise.module.scss'
import Header from '../../layout/header/Header'

const HeaderExercise = ({ exerciseLog, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-1.jpg')`,
				height: 356
			}}
		>
			<Header backLink={-1} />

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={`${import.meta.env.VITE_SERVER_URL}${
							exerciseLog?.exercise?.iconPath
						}`}
						alt='%'
					/>
					<h1 className={stylesLayout.heading} style={{ textAlign: 'left' }}>
						{exerciseLog?.exercise?.name}
					</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExercise
