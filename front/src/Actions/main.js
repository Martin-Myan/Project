import {
    SET_A,
    SET_USERS,
} from './actionTypes';

import { UserService } from '../Services';

export const set_a = a => ({
    type: SET_A,
    payload: a,
});

export const set_users = () => {
    return async dispatch => {
        const { data: users } = await UserService.getUsers();
        dispatch({
            type: SET_USERS,
            payload: users,
        });
    }
}