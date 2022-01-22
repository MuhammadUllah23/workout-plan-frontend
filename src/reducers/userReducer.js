import { SET_USERS } from "../actions/constants";

export default function userReducer(state= [], action){
    switch (action.type) {
        case SET_USERS:
            return action.payload

        default:
            return state
    }
}