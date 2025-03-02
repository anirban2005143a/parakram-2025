import React from 'react';
import {
    CardBody,
    CardContainer,
    CardItem,
} from "../../components/ui/3d-card.jsx";
import SplitText from '../../components/reactBits/SplitText.jsx';

const OthersDisplay = ({ others }) => {
    console.log(others)
    return (
        <div className=" min-h-screen text-white z-10 relative">
            <div className="space-y-8">
                {others.map((team, index) => (
                    <div key={index} className=" md:p-6 p-4 rounded-xl border-[1px] border-gray-600 bg-[#100f0f59] backdrop-blur-xs ">
                        {/* Team Name and Role */}

                        <div className="text-center pt-10">
                            <SplitText
                                text={team.Team}
                                className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10"
                                delay={150}
                                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                                loop={true}
                            />
                        </div>
                        <p className="text-gray-400 mt-2 text-center">{team.Role}</p>

                        {/* Head Section */}
                        <div className="mt-6">
                            <h3 className="sm:text-3xl text-lg underline underline-offset-8 font-semibold text-white text-center ">Head</h3>
                            <div className="sm:px-5 w-full flex flex-wrap justify-center items-end">
                                {Array.isArray(team.Head) ? (
                                    team.Head.map((head, idx) => (
                                        <CardContainer key={idx} className="inter-var h-[460px] sm:w-[380px] w-full sm:mx-2">
                                            <CardBody className="h-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000005c] border-white/[0.2]  w-full  rounded-xl p-6 border">
                                                <CardItem
                                                    translateZ="50"
                                                    className="sm:text-3xl text-lg font-bold text-white"
                                                >
                                                    {head.Name}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="60"
                                                    className="text-white text-md max-w-sm mt-2"
                                                >
                                                    {head.Role}
                                                </CardItem>
                                                <CardItem translateZ="100" className="w-fit mx-auto my-10 shadow-2xl shadow-[#444444c5] rounded-md overflow-hidden">
                                                    <img
                                                        src={head.image || '/members/demoUser.jpg'}
                                                        className="h-60 w-55 object-cover  group-hover/card:shadow-xl"
                                                        alt="thumbnail"
                                                    />
                                                </CardItem>
                                                <div className="flex justify-between items-center mt-20 absolute w-10/12 h-fit bottom-5">
                                                    <CardItem
                                                        translateZ={20}
                                                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                                                    >

                                                    </CardItem>
                                                    <CardItem
                                                        translateZ={20}
                                                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                                                    >
                                                        {head.AdmissionNo}
                                                    </CardItem>
                                                </div>
                                            </CardBody>
                                        </CardContainer>
                                    ))
                                ) : (
                                    <CardContainer key={team.Head.AdmissionNo} className="inter-var h-[460px] sm:w-[380px] w-full sm:mx-2">
                                        <CardBody className="h-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000005c] border-white/[0.2]  w-full  rounded-xl p-6 border">
                                            <CardItem
                                                translateZ="50"
                                                className="sm:text-3xl text-lg font-bold text-white"
                                            >
                                                {team.Head.Name}
                                            </CardItem>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-white text-md max-w-sm mt-2"
                                            >
                                                {team.Head.Role}
                                            </CardItem>
                                            <CardItem translateZ="100" className="w-fit mx-auto my-10 shadow-2xl shadow-[#444444c5] rounded-md overflow-hidden">
                                                <img
                                                    src={team.Head.image || '/members/demoUser.jpg'}
                                                    className="h-60 w-55 object-cover  group-hover/card:shadow-xl"
                                                    alt="thumbnail"
                                                />
                                            </CardItem>
                                            <div className="flex justify-between items-center mt-20 absolute w-10/12 h-fit bottom-5">
                                                <CardItem
                                                    translateZ={20}
                                                    className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                                                >

                                                </CardItem>
                                                <CardItem
                                                    translateZ={20}
                                                    className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                                                >
                                                    {team.Head.AdmissionNo}
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                )}
                            </div>
                        </div>

                        {/* Joint Heads Section */}
                        {team.JointHeads && (
                            <div className="mt-6 w-full">
                                <h3 className="text-3xl underline underline-offset-8 font-semibold text-white text-center ">Joint Heads</h3>
                                <div className="sm:px-5 flex w-full  flex-wrap justify-center items-center">
                                    {team.JointHeads.map((jointHead, idx) => (
                                        <CardContainer key={idx} className="inter-var h-[460px] w-full sm:w-[380px] sm:mx-2">
                                            <CardBody className="h-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000005c] border-white/[0.2]  w-full  rounded-xl p-6 border">
                                                <CardItem
                                                    translateZ="50"
                                                    className="sm:text-3xl text-lg font-bold text-white"
                                                >
                                                    {jointHead.Name}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="60"
                                                    className="text-white text-md max-w-sm mt-2"
                                                >
                                                    {jointHead.Role}
                                                </CardItem>
                                                <CardItem translateZ="100" className="w-fit mx-auto my-10 shadow-2xl shadow-[#444444c5] rounded-md overflow-hidden">
                                                    <img
                                                        src={jointHead.image || '/members/demoUser.jpg'}
                                                        className="h-60 w-55 object-cover  group-hover/card:shadow-xl"
                                                        alt="thumbnail"
                                                    />
                                                </CardItem>
                                                <div className="flex justify-between items-center mt-20 absolute w-10/12 h-fit bottom-5">
                                                    <CardItem
                                                        translateZ={20}
                                                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                                                    >

                                                    </CardItem>
                                                    <CardItem
                                                        translateZ={20}
                                                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                                                    >
                                                        {jointHead.AdmissionNo}
                                                    </CardItem>
                                                </div>
                                            </CardBody>
                                        </CardContainer>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OthersDisplay;