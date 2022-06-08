import {ADMIN_LOGIN_PAGE, DASHBOARD_PAGE, MERCH_PAGE, POST_DETAIL_PAGE, POST_PAGE} from "./urls";
import Posts from "../../components/posts/Posts";
import Detail from "../../components/detail/Detail";
import Login from "../../components/login/Login";
import Merch from "../../components/merch/Merch";
import Dashbord from "../../components/dashbord/Dashbord";

export const isAdminPages = [
    {id:1,path: DASHBOARD_PAGE,name:"Dashboard",Component:Dashbord},
]

export const isNotAdminPages = [
    {id:1,path: POST_PAGE,name:"Posts",Component:Posts},
    {id: 2, path: POST_DETAIL_PAGE, name: "Post",Component:Detail},
    {id: 3, path: ADMIN_LOGIN_PAGE, name: "Login",Component:Login},
    {id: 4, path: MERCH_PAGE, name: "Merch",Component:Merch},
]