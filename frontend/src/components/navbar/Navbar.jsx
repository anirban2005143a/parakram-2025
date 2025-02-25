import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className={`border-gray-200 h-[50px] overflow-visible z-50 fixed w-full mb-8`} >
            <div className=" relative md:flex  md:items-center md:justify-between mx-auto p-4">
                <div className=' logo text-white'>
                    <Link to='/'>Home</Link>
                </div>
                <button data-collapse-toggle="navbar-default" type="button"
                    className=" absolute end-6 top-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden md:relative md:top-0 md:end-0 absolute top-10 end-6 w-[70%] md:block md:w-auto px-4" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-500 md:backdrop-blur-none backdrop-blur-sm rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent bg-[#0000007a] dark:border-gray-700">

                        <li>
                            <Link to="/events" className={`block py-2 px-3 text-gray-300 rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white  ${window.location.pathname === '/events' ? " text-blue-500 " : ""}`}>Events</Link>
                        </li>
                        <li>
                            <Link to="/Merchandise" className={`block py-2 px-3 text-gray-300 rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white  ${window.location.pathname === '/Merchandise' ? " text-blue-500 " : ""}`}>Marchandise</Link>
                        </li>
                        <li>
                            <Link to="/Accomodation" className={`block py-2 px-3 text-gray-300 rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white  ${window.location.pathname === '/Accomodation' ? " text-blue-500 " : ""}`}>Accomodation</Link>
                        </li>
                        <li>
                            <Link to="/team" className={`block py-2 px-3 text-gray-300 rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white  ${window.location.pathname === '/team' ? " text-blue-500 " : ""}`}>Team</Link>
                        </li>
                        <li>
                            <Link to="/" className={`block py-2 px-3 text-gray-300 rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white  ${window.location.pathname === '/about' ? " text-blue-500 " : ""}`}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/" className={`block py-2 px-3 text-gray-300 rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white  ${window.location.pathname === '/sponsor' ? " text-blue-500 " : ""}`}>Sponsors</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar