import { IoMdArrowBack } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '/' }) => {
	/* TODO: React router useHistory */

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname == '/' ? (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<FaUser fill='#fff' fontSize={29} />
						</button>
					) : (
						<button
							onClick={() => {
								navigate(backLink) //TODO create navigate to /auth from 4o4
							}}
						>
							<IoMdArrowBack fill='#fff' fontSize={29} />
						</button>
					)}
					{/* User profile */}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
