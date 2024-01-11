import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import Statistic from '../../ui/statistic/Statistic'

function Home() {
	const navigate = useNavigate()
	const ob1 = {
		title: 'Minutes',
		content: '20'
	}
	const ob2 = {
		title: 'Level',
		content: 'Hard'
	}
	const ob3 = {
		title: 'Up',
		content: '5%'
	}
	return (
		<Layout bgImage=''>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>

			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>

			<Statistic />
		</Layout>
	)
}

export default Home
