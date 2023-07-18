import React, { useEffect, useState } from 'react';
import "./assets/css/style.css";
import { Route,  Routes, useLocation, } from 'react-router-dom';
import Header from './components/Header';
import AppContext from './store/AppContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AuthRoute from './utils/routes/AuthRoute';
import GuestRoute from './utils/routes/GuestRoute';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Loading from './components/Loading';
import Register from './pages/Register';
import { motion, AnimatePresence } from "framer-motion"
import Tensorflow from './pages/Tensorflow';


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        setIsLoading(true);

        const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                
                setIsLoggedIn(true);
                setUser(user);
                setIsLoading(false);
            } 
            else {
                setUser({});
                setIsLoggedIn(false);
                setIsLoading(false);
            }
        });
    }, [])

    const location = useLocation();

    if (isLoading) return <Loading />;

    return (
            
            <AppContext.Provider value={[isLoggedIn, user]}>
            
                <Header />

                <AnimatePresence >

                    <Routes key={location.pathname} location={location}>
                        {/* {routes.map((route, index) => (

                            <Route 
                                key={index}
                                path={route.path} 
                                exact={route.exact} 
                                Component={route.component}
                            />

                        ))} */}

                        <Route element={
                            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                                <AuthRoute/>
                            </motion.div>
                        } >
                            <Route path="/gallery" element={<Gallery />}></Route>
                        </Route>

                        <Route path="/tensorflow" element={
                            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                                <Tensorflow />
                            </motion.div>
                        } >
                        </Route>

                        <Route path="/" element={
                            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                                <Home />
                            </motion.div>
                        }>
                        </Route>

                        <Route element={
                            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                                <GuestRoute />
                            </motion.div>
                        } >
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/register" element={<Register />}></Route>
                        </Route>
                        
                        
                        <Route path="*" element={
                            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                                <NotFound />
                            </motion.div>
                        }>
                        </Route>

                    </Routes>

                </AnimatePresence>

            </AppContext.Provider>
        
    );
}



export default App;
