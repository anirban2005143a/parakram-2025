import React, { useRef, useState } from 'react';
import { TextGenerateEffect } from '../../components/aceternity/Textgenerate';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TeamWiseDetails from './TeamWise';
import DropdownBtn from './DropDownBtn';
import SportsWiseDetails from './SportsWise';
import DropdownBtnForSports from './DropDownForSports';

const TeamDetails = () => {

    const options = ["Team wise", "Sport wise"];
    const sports = [
        'Cricket',
        'Football',
        'Basketball',
        "Tennis",
        "Athletics",
        "Table Tennis",
        "Volleyboll",
        "Chess",
        "Squash",
        "Weightlifting",
        "PowerLifting",
        "Hockey",
        "Badminton",
        "Lawn Tennis",
        "Karate",
        "Kabaddi"
    ]

    const [selectedCategory, setselectedCategory] = useState(null)
    const [selectedSports, setselectedSports] = useState(null)

    console.log(selectedCategory)

    return (
        <>
            <Navbar />
            <div className="pt-[120px] relative z-10 mb-8">
                <div className="text-center md:px-6 px-2 my-6 text-xl">
                    <TextGenerateEffect words={"Team Details"} />
                </div>
                <div className=' flex justify-center w-full'>
                    <DropdownBtn options={options} setselectedCategory={setselectedCategory} />
                </div>
                {selectedCategory === "Team wise" && <TeamWiseDetails />}
                {selectedCategory === "Sport wise" && (
                    <>
                        <div className=' w-full flex justify-center py-5'>
                            <DropdownBtnForSports options={sports} setselectedSports={setselectedSports} />
                        </div>
                        {selectedSports && <SportsWiseDetails  selectedSports={selectedSports} />}
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default TeamDetails;