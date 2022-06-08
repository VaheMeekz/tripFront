import {GET_ALL_POSTS, GET_SINGLE} from "../types";

const initialState = {
    posts: null,
    count:null,
    post:null,
    loading:true
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload.posts,
                count: action.payload.count
            }
        case GET_SINGLE:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        default:
            return state
    }
}