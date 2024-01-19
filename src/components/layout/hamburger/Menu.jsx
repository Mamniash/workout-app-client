import cn from 'clsx'
import { Link } from 'react-router-dom'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isShow, setIsShow }) => {
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
			</ul>
		</nav>
	)
}

export default Menu
