import { useQuery } from '@tanstack/react-query'
import UserService from '../../../services/user.service'

export const useProfile = () =>
	useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data
	})
