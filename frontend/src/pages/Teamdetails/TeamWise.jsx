import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";

const TeamWiseDetails = () => {
  const dropdownRefs = useRef([]);

  const [AllTeamDetails, setAllTeamDetails] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const toggleDropdown = (index) => {
    const dropdown = dropdownRefs.current[index];
    const arrow = dropdown.previousElementSibling.querySelectorAll("span");


    if (dropdown.style.display === "block") {
      // Collapse animation
      gsap.to(dropdown, {
        height: 0,
        opacity: 0,
        duration: 0.1,
        onComplete: () => (dropdown.style.display = "none"),
      });
      gsap.to(arrow, { rotate: 0, duration: 0.1 }); // Rotate arrow back
    }
    else {
      // Expand animation
      dropdown.style.display = "block";
      gsap.fromTo(
        dropdown,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        }
      );
      gsap.to(arrow, { rotate: 180, duration: 0.2 }); // Rotate arrow down
    }
  };

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
      setisLoading(true)
      const res = await axios.get(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/admin/teams`, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })

      // console.log(res.data)
      setAllTeamDetails(res.data.data)
      showToast("Get team details successfully", 0)
    } catch (error) {
      // console.log(error)
      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)
    }finally{
      setisLoading(false)
    }
  }

  useEffect(() => {
    getAllTeams()
  }, [])


  return (
    <>
      <ToastContainer />

      {isLoading && <Loader/>}
      {AllTeamDetails && !isLoading && <div className="p-4 my-5 max-w-3xl mx-auto bg-[#00000070] text-white">
        {AllTeamDetails.map((team, index) => (
          <div
            key={index}
            className="mb-2 shadow-sm  overflow-hidden "
          >
            <div
              className="flex justify-between rounded-lg items-center p-4 bg-[#26272dd7] hover:bg-[#33333bd0] cursor-pointer transition-colors duration-200 "
              onClick={() => toggleDropdown(index)}
            >
              <div>
                <div className="font-medium text-sm  text-gray-100">
                  {team.teamId}
                </div>
                <div className="font-medium  text-gray-100">
                  {team.sportName}
                </div>
                <a href={team.payment?.paymentScreenshot?.url || "#"} target="_blank" className="font-light text-sm  text-blue-500 underline underline-offset-4">
                  Check payment screenshot
                </a>
              </div>
              <span className="transform transition-transform duration-200 text-gray-300">
                ▼
              </span>
            </div>
            <div
              ref={(el) => (dropdownRefs.current[index] = el)}
              className="overflow-hidden border-[1px] rounded-lg bg-black  border-white p-3 my-2"
              style={{ display: "none" }}
            >
              {
                team.players.map((player, ind) => {
                  return (
                    <div
                      key={ind}
                      className="p-6 my-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-700"
                    >
                      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                        {/* Left Section: Player Details */}
                        <div className="flex-1 space-y-4">
                          <div className="text-2xl font-bold text-gray-100">
                            {player.name}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">College:</span> {player.collegeName}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">Player ID:</span> {player.playerId}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">Phone:</span> {player.phoneNumber}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">Sport:</span> {player.sportName}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">Email:</span> {player.email}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">AccommodationType :</span> {player.accommodationType || "none"} {player.accommodationType? player.accommodationPrice : ""}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">T-shirt/Jacket Size :</span> {player.tshirtSize || "NAN"} 
                          </div>
                        </div>

                        {/* Right Section: ID Card Image */}
                        <div className="flex-1">
                          {player.idCardPicture ? (
                            <a
                              href={player.idCardPicture || "#"}
                              target="_blank"
                              className="w-full h-auto rounded-lg border text-blue-300 underline underline-offset-4 border-gray-600"
                            >
                              Check Player id card
                            </a>
                          ) : (
                            <div className="text-sm text-gray-400">
                              No ID card picture available.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                  )
                })
              }
            </div>
          </div>
        ))}
      </div>}
    </>
  );
};

export default TeamWiseDetails;