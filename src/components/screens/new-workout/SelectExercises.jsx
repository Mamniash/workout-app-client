import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { useListExercises } from './useListExercises'

const SelectExercises = ({ control }) => {
	const { data = [] } = useListExercises()

	return (
		<div>
			<Controller
				name='exerciseIds'
				control={control}
				render={({ field: { value, onChange } }) => (
					<ReactSelect
						isMulti
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={data.map(exercise => ({
							value: exercise.id,
							label: exercise.name
						}))}
						value={value}
						onChange={onChange}
					/>
				)}
			/>
		</div>
	)
}

export default SelectExercises
