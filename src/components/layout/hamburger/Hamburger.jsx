import { CgMenuRight } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} aria-label='Show menu'>
				{isShow ? <IoClose fontSize={35} /> : <RxHamburgerMenu fontSize={35} />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
