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
	const [error, setError] = useState()

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

	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: ['auth/login user'],
		mutationFn: ({ email, password }) => {
			console.log(`${email} ${password} ${type}`)
			AuthService.main(email, password, type).catch(error => {
				console.log(error)
				setError(error.message)
				throw new Error(error)
			})
		},
		onSuccess: (_data, { email, password }) => {
			console.log(email, password)
			reset()

			setTimeout(() => {
				setIsAuth(true) //TODO fix this shit
			}, 1000)
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
		onSubmit,
		isSuccess,
		error
	} //TODO useMemo add to it
}
