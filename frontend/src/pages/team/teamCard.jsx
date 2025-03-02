import React, { useEffect, useRef } from 'react'
import {
    CardBody,
    CardContainer,
    CardItem,
  } from "../../components/ui/3d-card.jsx";
  import { Link } from "react-router-dom";
  import gsap from 'gsap';

const TeamCard = ({index , item}) => {

    const cardRef = useRef(null);

    useEffect(() => {
        gsap.from(cardRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power3.out"
        });
    }, [index]);


    return (

        <div id='TeamCard'>
            <CardContainer key={index} className="inter-var">
                <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
                    <CardItem
                        translateZ="50"
                        className="text-3xl font-bold text-white"
                    >
                        {item.name}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white text-md max-w-sm mt-2"
                    >
                        {item.Dept}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={item.image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                        >
                            Sign up
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </div>


    )
}

export default TeamCard