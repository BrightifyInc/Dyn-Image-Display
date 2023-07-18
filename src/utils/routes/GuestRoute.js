import React, { useContext } from 'react'
import AppContext from '../../store/AppContext'
import { Navigate, Outlet } from 'react-router-dom';
// import Loading from '../../components/Loading';

export default function GuestRoute() {
  
    const [isLoggedIn] = useContext(AppContext);

    // if(isLoggedIn === null) return <Loading />

    return (
        isLoggedIn ? <Navigate to="/" /> : <Outlet /> 
    )


}
