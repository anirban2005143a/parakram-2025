import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import PlayersAccordion from "./Accordion";

const SportsWiseDetails = ({ selectedSports }) => {
  const dropdownRefs = useRef([]);

  const [AllPlayers, setAllPlayers] = useState(null)
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

  // console.log(window.localStorage.getItem("token"))
  const getAllTeams = async () => {
    try {
      console.log(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/admin/players/sport/${selectedSports}`)
      setisLoading(true)
      const res = await axios.get(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/admin/players/sport/${selectedSports}`, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })

      console.log(res.data)
      setAllPlayers(res.data.data)
      showToast("Get team details successfully", 0)
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)
    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    getAllTeams()
  }, [selectedSports])


  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      {AllPlayers && !isLoading && <div className="md:p-4 p-2 my-5 rounded-lg max-w-3xl mx-auto bg-[#1d1d1d93] text-white">

        <div className="dark">
          <PlayersAccordion data={AllPlayers} />
        </div>

      </div >}
    </>
  );
};

export default SportsWiseDetails;