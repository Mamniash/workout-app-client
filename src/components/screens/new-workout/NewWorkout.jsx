import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Alert from '../../ui/alert/Alert'

import Layout from '../../layout/Layout'

import { useNewWorkout } from './useNewWorkout.js'
import { Link } from 'react-router-dom'
import SelectExercises from './SelectExercises.jsx'

const NewWorkout = () => {
	const { register, handleSubmit, errors, onSubmit, control, resultCreate } =
		useNewWorkout()

	return (
		<>
			<Layout heading='Create new workout' bgImage='/images/new-workout.jpg' />
			<div className='wrapper-inner-page'>
				{resultCreate.error && (
					<Alert type='error' text={resultCreate.error.message} />
				)}
				{resultCreate.isSuccess && <Alert text={'Workout has created'} />}
				{resultCreate.isPending && <Loader />}
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

					<Button type='accent'>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
