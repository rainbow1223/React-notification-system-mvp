import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/actionTypes';

import { loginUser } from '../api';

export const login = (email) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
            email: email
        });

        const { data } = await loginUser(email);
        console.log(data)
        if (data.error) {
            dispatch({
                type: LOGIN_FAIL,
                email: email
            })
        } else {
            dispatch({
                type: LOGIN_SUCCESS,
                email: email
            });
        }

    } catch (error) {
        console.log(error)
    }
}