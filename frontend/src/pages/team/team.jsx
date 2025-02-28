import React, { useEffect, useRef } from 'react'
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Navbar from '../../components/navbar/Navbar';
import TextPressure from '../../components/reactBits/textPressure';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Team = () => {

    const lineRef = useRef(null)

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    

    useEffect(() => {
        // GSAP animation
        gsap.fromTo(
            lineRef.current,
            { width: 0 }, // Start with width 0
            {
                width: "150px", // Animate to 200px width (you can change this value)
                duration: 2, // Animation duration
                ease: "power3.out", // Easing function
            }
        );
    }, []);

    return (
        <>
            <div id='teams' className=' min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]' >
                <Navbar />

                <div className=' relative h-fit flex flex-col items-center justify-center pt-20'>
                    <TextPressure
                        text="TEAM"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={20}
                    />
                    <div
                        ref={lineRef}
                        className=' h-[1px] bg-white -translate-y-8'
                        style={{
                            transformOrigin: "center", // Ensure the line scales from the center
                        }}
                    />
                </div>

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Make things float in air
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Hover over this card to unleash the power of CSS perspective
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

            </div>


        </>
    )
}

export default Team