import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Alert from '../../ui/alert/Alert'

import Layout from '../../layout/Layout'

import styles from './NewWorkout.module.scss'
import { useNewWorkout } from './useNewWorkout.js'
import cn from 'clsx'
import { Link } from 'react-router-dom'
import SelectExercises from './SelectExercises.jsx'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		errors,
		isPending,
		onSubmit,
		error,
		isSuccess,
		control
	} = useNewWorkout()

	return (
		<>
			<Layout
				heading='Create new workout'
				bgImage='/images/new-workout-bg.jpg'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text={'Workout has created'} />}
				{isPending && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
