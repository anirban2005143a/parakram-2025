
import React from 'react'
// import { SparklesCore } from '../../../components/aceternity/sparkles'
// import { LampContainer } from '../../../components/aceternity/lamp'
// import { motion } from 'framer-motion'
// import FlowingMenu from '../../../components/reactBits/FlowingMenu'
import ScrollVelocity from '../../../components/reactBits/ScrollVelocity'

const Sponsers = () => {

  return (
    <section id='sponsers' className=' my-20'>

      {/* <div style={{ height: '400px', position: 'relative' }}>
                <FlowingMenu items={demoItems} />
            </div> */}
      <ScrollVelocity
        texts={[' React Bits | ', ' Scroll Down | ']}
        // velocity={20}
        className="custom-scroll-text text-white"
      />
    </section>
  )
}

export default Sponsers;
