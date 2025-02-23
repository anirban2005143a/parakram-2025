import React from 'react'
import Content from './Content'
import bg1 from "../../../assets/bg1.webp"
import bg2 from "../../../assets/bg2.jpg"
import bg3 from "../../../assets/bg3.jpg"

const Slider = () => {
    return (
        <div className="relative h-full overflow-hidden">

            {/* content  */}
            <Content />

            <div className=' relative z-10 h-full'>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg1})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg2})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg3})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg1})` }} />
                </div>
                <div className="hidden duration-700 ease-in-out h-full rounded-lg overflow-hidden" data-carousel-item>
                    <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000098] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg2})` }} />
                </div>
            </div>
        </div>
    )
}

export default Slider