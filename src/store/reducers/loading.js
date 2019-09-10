import { SET_LOADING } from "../actionTypes";

const DEFAULT_STATE = {
    loading: true
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_LOADING:
        return {
            loading: action.loading
        };
        default:
        return state;
    }
};