import React, {useEffect} from 'react';
import './App.css';
import Footer from "./layouts/footer/Footer";
import Navigation from "./layouts/navbar/Navbar";
import Pages from "./layouts/pages/Pages";
import {token} from "./utils/config/keys";
import {useDispatch} from "react-redux";
import {changeAuth} from "./store/actions/authAction";
import {useNavigate} from "react-router-dom";

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            dispatch(changeAuth())
            navigate('/dashboard')
        }
    }, [])
    return (
        <div>
            <Navigation/>
            <Pages/>
            <Footer/>
        </div>
    );
}

export default App;
