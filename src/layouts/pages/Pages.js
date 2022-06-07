import React from 'react';
import { Route, Routes } from "react-router-dom";
import {isAdminPages, isNotAdminPages} from "../../utils/routing/routes";
const Pages = () => {
    const isAuth = true
    return (
        <Routes>
            {
                isAuth
                    ?
                    isNotAdminPages.map(i=>{
                        return <Route path={i.path} element={<i.Component />} key={i.id} />;
                    })
                    :
                    isAdminPages.map(i=>{
                        return <Route path={i.path} element={<i.Component />} key={i.id} />;
                    })

            }
        </Routes>
    );
};

export default Pages;