import { useAuthContext } from './useAuthContext'

export const useLogOut = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}