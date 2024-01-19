import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../../app.constants'
import { useAuth } from '../../../../hooks/useAuth'

export const useLogOut = () => {
	const navigate = useNavigate()
	const { setIsAuth } = useAuth()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		navigate('/auth')
	}
	return logoutHandler
}
