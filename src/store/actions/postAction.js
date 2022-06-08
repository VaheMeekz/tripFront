import axios from "axios";
import {baseUrl, headers} from "../../utils/config/keys";
import {GET_ALL_POSTS, GET_SINGLE} from "../types";

export const createPostAC = (data) => {
    axios
        .post(`${baseUrl}/post`, data, {
            headers: headers
        })
        .then((res) => {
            setTimeout(() => {
                window.location.reload(false);
            }, 1500)
        })
        .catch((e) => {
            alert("Error")
        });
}

export const getAllPosts = (offset, limit) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/post`, {
            params: {
                offset,
                limit
            }
        });
        dispatch({
            type: GET_ALL_POSTS,
            payload: response.data,
        });
    };
}

export const deletePostAc = (id) => {
    return async (dispatch) => {
        axios
            .post(`${baseUrl}/post/delete`, {id}, {
                headers: headers
            })
            .then((res) => {
                setTimeout(() => {
                    window.location.reload(false);
                }, 1500)
            })
            .catch((e) => {
                alert("Error")
            });
    }
}

export const getSinglePost = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/post/single`, {
            params: {
                id
            }
        });
        dispatch({
            type: GET_SINGLE,
            payload: response.data,
        });
    };
}