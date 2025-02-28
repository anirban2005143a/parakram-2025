import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { FaSpinner } from "react-icons/fa6";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// import UserContext from '../../context API/userContext';

const Login = () => {

  const navigate = useNavigate()// navigate componets

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [isLoading, setisLoading] = useState(false)

  //function to show alert
  const showToast = (message, err) => {
    if (err) {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  ///function to login user
  const userLogin = async () => {
    try {
      setisLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/auth/login`, {
        username, password
      })
      console.log(res)
      res.data.message && showToast(res.data.message, 0)

      //store data in local storage
      window.localStorage.setItem("token", res.data.token)
      navigate("/team/details")
      showToast("Admin login successfully", 0)
    } catch (error) {// handel errors
      console.log(error)
      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)
    } finally {
      setisLoading(false)
      setusername("")
      setpassword("")
    }

  }

  // console.log(username , password)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className=' min-h-screen' style={{ backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      <Navbar />
      <ToastContainer />
      <div id='login' className=' py-[150px] relative z-10'>
        <section >
          <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">

            <div className="w-full bg-[#45454580] backdrop-blur-xs rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                  Admin &nbsp;&nbsp; SignIn
                </h1>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  userLogin()
                }} className="space-y-4 md:space-y-6" >
                  <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white ">Username</label>
                    <input value={username} onChange={(e) => {
                      setusername(e.target.value)
                    }} type="text" name="username" id="username" className=" border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Username" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">Password</label>
                    <input value={password} onChange={(e) => {
                      setpassword(e.target.value)
                    }} type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                  </div>

                  <button disabled={isLoading} type="submit" className="  flex justify-center cursor-pointer w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600">
                    {isLoading ? <FaSpinner className=" animate-spin" /> : "Sign In"}
                  </button>
                 
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Login