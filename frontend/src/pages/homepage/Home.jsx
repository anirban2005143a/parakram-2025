import React from 'react'
import LandingPage from './Landing'
import Navbar from '../../components/navbar/Navbar'
import Introduction from './Introduction'

const Home = () => {
    return (
        <>
            <div id='homePage' className=' overflow-x-hidden [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
                <Navbar />
                <LandingPage />
                <Introduction />
            </div>
        </>
    )
}

export default Home