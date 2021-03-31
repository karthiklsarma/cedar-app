import * as actions from './actiontypes';

export default function reducer(state = [], action) {

    switch (action.type) {
        case actions.USER_LOGIN:
            return [
                ...state,
                {
                    payload: action.payload
                }
            ];
        
        default:
            return state;
    }
}