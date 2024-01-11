import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../services/auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('register')
	const navigate = useNavigate()
	const { isAuth, setIsAuth } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth])

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth/login user'],
		mutationFn: ({ email, password }) => {
			console.log(`${email} ${password} ${type}`)
			console.log(AuthService.main(email, password, type))
		},
		onSuccess: (_data, { email, password }) => {
			console.log(email, password)
			reset()
			setIsAuth(true)
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	return {
		setType,
		register,
		handleSubmit,
		errors,
		isPending,
		onSubmit
	} //TODO useMemo add to it
}
