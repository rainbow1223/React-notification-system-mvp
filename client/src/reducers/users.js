import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/actionTypes';

export default (state = { loading: false, isLogged: false, error: '' }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isLogged: false
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                isLogged: true
            }
        case LOGIN_FAIL:
            return {
                loading: false,
                isLogged: false,
                error: 'Invalid email'
            }
        default:
            return {
                loading: false,
                isLogged: state.isLogged
            }
    }
}