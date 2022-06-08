import axios from "axios";
import {CHANGE_AUTH} from "../types";
import {baseUrl, myUrl} from "../../utils/config/keys";

export const loginAction = (email, password) => {

    return (dispatch) => {
        axios
            .post(`${baseUrl}/admin/login`, {
                email, password
            })
            .then((res) => {
                if (res.data.success) {
                    dispatch({type: CHANGE_AUTH, payload: true});
                    localStorage.setItem("token", res.data.admin.token)
                    window.location.href = `${myUrl}/dashboard`;
                }
            })
            .catch((e) => {
                alert("Error")
            });
    };
}

export const changeAuth = () => {
    return {type: CHANGE_AUTH, payload: true}
}

export const logoutAc = () => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/admin/logout`, {
                id: 1
            })
            .then((res) => {
                if (res.data.success) {
                    dispatch({type: CHANGE_AUTH, payload: false});
                    localStorage.removeItem("token")
                    window.location.href = `${myUrl}/login`;
                }
            })
            .catch((e) => {
                alert("Error")
            });
    };
}