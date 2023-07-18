import React, { useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


import { getAuth, signOut } from "firebase/auth";
import AppContext from '../store/AppContext';


export default function Header() {

    const [isLoggedIn, user] = useContext(AppContext);
    
    const navigate = useNavigate();


    function logout() {
        
        const auth = getAuth();
        signOut(auth).then(() => {
        
            navigate("/login");
            
        }).catch((e) => {

            console.log(e.response.data);

        });
    }



  return (
    <header className="text-green-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">

                <NavLink to="/" style={({ isActive, isPending }) => {
                                    return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "green",
                                    };
                                }} 
                                className="mr-12 hover:text-gray-900">
                    Home
                </NavLink>

                <NavLink to="/gallery" className="mr-5 hover:text-gray-900">
                    {({ isActive, isPending }) => (
                        <span className={isActive ? "text-white font-semibold bg-green-500 px-3 py-1 rounded" : ""}>Gallery</span>
                    )}
                </NavLink>
                

                <NavLink to="/tensorflow" className="mr-5 hover:text-gray-900">
                    {({ isActive, isPending }) => (
                        <span className={isActive ? "text-white font-semibold bg-green-500 px-3 py-1 rounded" : ""}>TensorFlow</span>
                    )}
                </NavLink>

            </nav>

            <NavLink to="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">React Image Display App</span>
            </NavLink>

            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">

                {
                    !isLoggedIn && (

                        <NavLink to="/register" className="inline-flex mr-12 items-center bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200 rounded text-base text-white mt-4 md:mt-0">
                            Register
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </NavLink>
                    )
                }

               

                {
                    isLoggedIn ? (
                        <button onClick={logout}
                            className='bg-red-500 px-5 py-1 rounded text-white'>
                            Logout
                        </button>
                    ) : (
                        <NavLink to="/login" className="inline-flex items-center bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200 rounded text-base text-white mt-4 md:mt-0">
                            Login
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </NavLink>
                    )
                }    
            </div>
        </div>
    </header>
  );
}
