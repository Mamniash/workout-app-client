import { useProfile } from '../../screens/profile/hooks/useProfile'
import styles from './Statistic.module.scss'

const Statistic = () => {
	const { data } = useProfile()
	return (
		<div className={styles.wrapper}>
			{data?.statistics?.map(statistic => (
				<div className={styles.count} key={statistic.label}>
					<div className={styles.heading}>{statistic.label}</div>
					<div className={styles.heading}>{statistic.value}</div>
				</div>
			))}
		</div>
	)
}

export default Statistic
