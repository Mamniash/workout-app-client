import { IoMdArrowBack } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '' }) => {
	/* TODO: React router useHistory */

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth')
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<FaUser fill='#fff' fontSize={29} />
				</button>
			)}
			{/* User profile */}
			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
