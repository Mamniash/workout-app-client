import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()
	return (
		<>
			<Layout>
				<div className={styles.wrapper}>
					<img src='/images/My/p.png' alt='%' />

					<Button
						clickHandler={() => navigate('/workouts')}
						size='xx'
						type='accent'
					>
						Start
					</Button>

					{/* <Statistic /> */}
				</div>
			</Layout>

			{/* <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1> */}
		</>
	)
}

export default Home
