import React from 'react'
import HeroSection from './heroSection/HeroSection'
import Navbar from '../../components/navbar/Navbar'
import MemorySection from './memories/MemorySection'
import EventsCarousel from './gallery/EventsCarousel'
import OurGoal from './ourGoal/OurGoal'
import Sponsers from './sponsers/Sponsers'

const Home = () => {
    return (
        <>
            <div id='homePage' className=' overflow-x-hidden relative'>
                <div className=' fixed top-0 left-0 w-screen h-screen z-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
                <Navbar />
                <HeroSection />
                <EventsCarousel />
                <MemorySection />
                <OurGoal/>
                <Sponsers/>
            </div>
        </>
    )
}

export default Home