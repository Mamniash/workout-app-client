import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Statistic from '../../ui/statistic/Statistic'
import styles from './Profile.module.scss'
import stylesLayout from '../../layout/Layout.module.scss'
import { useProfile } from './useProfile'
import cn from 'clsx'
import Header from '../../layout/header/Header'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url(/images/My/tmp.jpg)`,
					height: 356
				}}
			>
				<Header />

				{isLoading ? (
					<Loader />
				) : (
					<>
						<img
							src={'/images/header/user.svg'}
							alt='Profile'
							height='86'
							draggable={false}
						/>
						<h1 className={stylesLayout.heading}>{data?.email}</h1>
					</>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<Statistic />
			</div>
		</>
	)
}

export default Profile
