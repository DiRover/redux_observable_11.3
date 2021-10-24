import { LOAD_LIST, LOAD_SUCCESS, LOAD_FAIL, LOAD_DESCRIPTION, LOAD_DESCRIPTION_SUCCESS, LOAD_DESCRIPTION_FAIL, CANCEL } from "../actions/actionTypes";

const initialState = {
    list: [],
    loading: true,
    currentId: null,
    description: null,
    title: null,
    error: false,
};

export default function showListReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_LIST:
            return {
                ...state, loading: true, error: false,
            }
        case LOAD_SUCCESS:
            const { list } = action.payload;
            console.log(list)
            return {
                ...state, list,
                loading: false,
            }
        case LOAD_FAIL:
            return { ...state, error: true, loading: false }
        case LOAD_DESCRIPTION:
            const { id } = action.payload;
            return {
                ...state, loading: true, currentId: id, error: false,
            }
        case LOAD_DESCRIPTION_SUCCESS:
            const { respons } = action.payload;
            const description = respons.description;
            const title = respons.title;
            return {
                ...state, loading: false, description: description, title: title
            }
        case LOAD_DESCRIPTION_FAIL:
            return { ...state, error: true, loading: false }
        case CANCEL:
            return {
                ...state, error: false, loading: false
            }

        default:
            return state;
    }
}