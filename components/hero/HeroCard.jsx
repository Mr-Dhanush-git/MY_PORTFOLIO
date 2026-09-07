'use client'

import React, { useRef } from 'react'
import Herotext from './Herotext'

const HeroCard = () => {

    const cardRef = useRef(null)
    const tiltRef = useRef(null)

    const handleMouseMove = (e) => {
        const tilt = tiltRef.current
        const card = cardRef.current

        if (!card || !tilt) return 

        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left 
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY)* -3
        const rotateY = ((x - centerX) / centerX) * 3

        tilt.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
        `
    }
    const handleMouseLeave = () => {
        const tilt = tiltRef.current
        if (!tilt) return 

        tilt.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)`
    }

    

  return (
 
        <div  className='relative right-185 top-45 w-[650px]'>
            
            <div ref = {tiltRef} className=" relative min-h-[400px] w-full transition-transform duration-200 ease-out transform-gpu z-90 " >    
                <Herotext/>
                <div className='transition-transform  duration-200 ease-out transform-gpu absolute h-50 w-full rounded-2xl  bg-black/30 left-50 top-50 blur-2xl pointer-events-none'></div>

                <div ref = {cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='z-30 relative min-h-[400px] w-full  rounded-[2.2rem] border 
                    border-black/[0.025] 
                    bg-[#f6f5f1] 
                    backdrop-blur-[50px] 
                    px-10 py-7 
                    shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                '
                ></div>

                <div             
                className='
                    z-10
                    absolute 
                    inset-0 
                    translate-x-3  
                    bg-[#1111] 
                    translate-y-3 
                    rounded-[2.2rem]
                    '
                ></div>

            </div>
        </div>



  )
}

export default HeroCard
