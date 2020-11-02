import {
    SET_A,
    SET_USERS,
} from '../Actions/actionTypes';

const initialState = {
    a: 5,
    users: [],
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case SET_A: {
            return {
                ...state,
                a: payload,
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: payload,
            }
        }
        default: 
            return state;
    }
}
