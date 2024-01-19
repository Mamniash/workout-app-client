import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Statistic from '../../ui/statistic/Statistic'
import stylesAuth from '../auth/Auth.module.scss'
import { useLogOut } from './hooks/useLogOut'
import { useProfile } from './hooks/useProfile'
import { useDeleteAllExercises } from './hooks/useDeleteAllExercises'
import Alert from '../../ui/alert/Alert'

const Profile = () => {
	const { data, isLoading } = useProfile()
	const logoutHandler = useLogOut()
	const { deleteAllEx, resultDelete, resultGetAll, error } =
		useDeleteAllExercises()

	console.log(`---------------------------------`)
	console.log(`resultDelete.isSuccess -> ${resultDelete.isSuccess}`)
	console.log(`resultDelete.isSuccess -> ${resultGetAll.isSuccess}`)
	console.log(`resultDelete.error -> ${resultDelete.error}`)
	console.log(`resultDelete.error -> ${resultDelete.error}`)
	console.log(`error -> ${error}`)
	console.log(`---------------------------------`)

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url(/images/My/jpg7.jpg)`,
					height: 280
				}}
			>
				<Header />

				<img
					src={'/images/header/user.svg'}
					alt='Profile'
					height='86'
					draggable={false}
				/>
				<h1 className={stylesLayout.heading}>{data?.email}</h1>
			</div>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<h2
					style={{ marginBottom: '15px', fontSize: '24px' }}
				>{`Start date - ${data?.createdAt.slice(0, 10)}`}</h2>
				<Statistic />
				<div
					className={stylesAuth.wrapperButtons}
					style={{ marginTop: '35px' }}
				>
					<Button
						clickHandler={() => {
							if (confirm('Log out?')) logoutHandler()
						}}
						type='danger'
					>
						Log out
					</Button>
					<Button
						clickHandler={() => {
							if (confirm('Delete all exercises?')) deleteAllEx()
						}}
						type='danger'
					>
						Clean
					</Button>
				</div>
				{(resultDelete.error || resultGetAll.error) && (
					<Alert
						type='error'
						text={resultDelete.error.message || resultGetAll.error.message}
					/>
				)}
				{resultDelete.isSuccess && resultDelete.isSuccess && !error && (
					<Alert text={'All exercises have been removed'} />
				)}
				{(resultDelete.isPending || resultGetAll.isPending) && <Loader />}
			</div>
		</>
	)
}

export default Profile
