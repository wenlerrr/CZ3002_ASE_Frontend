import { SET_LOADING } from "../actionTypes";

export function setLoading(loading) {
    return {
        type: SET_LOADING,
        loading
    };
}