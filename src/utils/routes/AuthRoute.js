import React, { useContext } from 'react'
import AppContext from '../../store/AppContext'
import { Navigate, Outlet } from 'react-router-dom';
// import Loading from '../../components/Loading';

export default function AuthRoute() {
  
    const [isLoggedIn] = useContext(AppContext);

    // if(isLoggedIn) return <Loading />;

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )

    // return redirect("/login");
}
