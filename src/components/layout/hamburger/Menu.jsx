import cn from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'
import { useAuth } from '../../../hooks/useAuth'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../app.constants'

const Menu = ({ isShow, setIsShow }) => {
	const navigate = useNavigate()
	const { setIsAuth } = useAuth()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
		navigate('/auth')
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
