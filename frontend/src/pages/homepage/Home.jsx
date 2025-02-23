import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../../components/navbar/Navbar'
import Introduction from './gallery/Introduction'

const Home = () => {
    return (
        <>
            <div id='homePage' className=' overflow-x-hidden relative'>
                <div className=' fixed top-0 left-0 w-screen h-screen z-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
                <Navbar />
                <HeroSection />
                <Introduction />
            </div>
        </>
    )
}

export default Home