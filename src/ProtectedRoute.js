import React from "react";
import { Navigate, Outlet } from "react-router";
import {useSelector} from "react-redux";




function ProtectedRoute({children, redirectURL="/login"}) {
    const logged = useSelector(state=>state.auth.isLogged)
console.log(logged)
    if(!logged){
        return<Navigate replace to={redirectURL} />
    }
    return children ? <> {children} </>: <Outlet />;
    
}

export default ProtectedRoute;
