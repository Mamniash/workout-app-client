import Layout from '../../layout/Layout'
import { getIconPath } from '../new-exercise/Icon-path-util'
import { useListWorkout } from './useListWorkout'

const ListWorkouts = () => {
	useListWorkout()
	return (
		<>
			<Layout heading='ListWorkouts' bgImage={'/images/ex-bg-1.jpg'} />
			<div className=''></div>
		</>
	)
}

export default ListWorkouts
