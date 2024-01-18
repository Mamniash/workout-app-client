import { IoMdArrowBack } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname == '/' ? (
						<button
							aria-label='Go to profile'
							onClick={() => {
								navigate('/profile')
							}}
						>
							<FaUser fill='#fff' fontSize={35} />
						</button>
					) : (
						<button
							aria-label='Go back'
							onClick={() => {
								navigate(backLink)
							}}
						>
							<IoMdArrowBack fill='#fff' fontSize={35} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
