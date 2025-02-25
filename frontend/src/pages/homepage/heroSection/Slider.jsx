import React, { useEffect, useRef, useState } from 'react'
import Content from './Content'
import footballImg from '/sports/football1.jpg'
import cricketImg from '/sports/cricket1.jpg'
import squashImg from '/sports/squash2.jpg'
import powerliftingImg from '/sports/powerliftting1.jpg'
import chessImg from '/sports/chess1.jpg'
import tableTenisImg from '/sports/tableTenis1.jpg'
import badmintonImg from '/sports/badminton1.jpg'
import athleticsImg from '/sports/athletics1.jpg'
import kabaddiImg from '/sports/kabaddi1.jpg'
import basketBallImg from '/sports/basketBall1.jpg'
import volleyBallImg from '/sports/volleyBall1.jpg'
import hockeyImg from '/sports/hockey1.jpg'
import tenisImg from '/sports/tenis1.jpg'

const Slider = ({setisLoaded}) => {

    return (
        <div className="relative h-full overflow-hidden">

            {/* content  */}
            <Content />

            <div  className=' relative z-10 h-full  overflow-hidden rounded-lg'>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${footballImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${chessImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${kabaddiImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${badmintonImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${volleyBallImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${basketBallImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${tenisImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${tableTenisImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${powerliftingImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${cricketImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${hockeyImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${athleticsImg})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${squashImg})` }} />
                </div>hockeyImg
            </div>
        </div>
    )
}

export default Slider