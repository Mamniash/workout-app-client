import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Alert from '../../ui/alert/Alert'

import Layout from '../../layout/Layout'

import styles from './NewExercise.module.scss'
import { useExercisePage } from './useExercisePage.js'
import cn from 'clsx'
import { getIconPath } from './Icon-path-util.js'

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		errors,
		onSubmit,
		Controller,
		control,
		data,
		resultCreate
	} = useExercisePage()

	return (
		<>
			<Layout
				heading='Create new exercise'
				bgImage='/images/new-exercise.jpg'
				backLink='/new-workout'
			/>
			<div className={'wrapper-inner-page'}>
				{resultCreate.error && (
					<Alert type='error' text={resultCreate.error.message} />
				)}
				{resultCreate.isSuccess && <Alert text={'Exercise has created'} />}
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

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value =>
								(value > 0 && value < 16) || 'Times must be number in [0, 15]',
							required: 'Times is required'
						}}
						type='text'
						placeholder='Times'
						style={{ marginTop: '15px' }}
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='55'
									/>
								))}
							</div>
						)}
					/>
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<Button type='accent'>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
