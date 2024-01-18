import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import Statistic from '../../ui/statistic/Statistic'

function Home() {
	const navigate = useNavigate()
	return (
		<>
			<Layout heading='some heading' />

			<div className={styles.wrapper}>
				<Button
					clickHandler={() => navigate('/workouts')}
					size='xx'
					type='accent'
				>
					Start
				</Button>

				{/* <Statistic /> */}
			</div>

			{/* <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1> */}
		</>
	)
}

export default Home
