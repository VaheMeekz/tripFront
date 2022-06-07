import Admin from "../../components/admin/Admin";
import {ADMIN_LOGIN_PAGE, ADMIN_PAGE, MERCH_PAGE, POST_DETAIL_PAGE, POST_PAGE} from "./urls";
import Posts from "../../components/posts/Posts";
import Detail from "../../components/detail/Detail";
import Login from "../../components/login/Login";
import Merch from "../../components/merch/Merch";

export const isAdminPages = [
    {id: 1, path: ADMIN_PAGE, name: "Admin", Component: Admin},
]

export const isNotAdminPages = [
    {id:1,path: POST_PAGE,name:"Posts",Component:Posts},
    {id: 2, path: POST_DETAIL_PAGE, name: "Post",Component:Detail},
    {id: 3, path: ADMIN_LOGIN_PAGE, name: "Login",Component:Login},
    {id: 4, path: MERCH_PAGE, name: "Merch",Component:Merch},
]