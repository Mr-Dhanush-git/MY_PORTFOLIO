'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {

    const nameRef = useRef(null)
    const defaultCurRef = useRef(null)
    const pointerCurRef = useRef(null)

    

    useEffect(() => {
        const moveCursor = (e) => {

            gsap.set(defaultCurRef.current, {
                xPercent: -50,
                yPercent: -50,
            })

            gsap.set(pointerCurRef.current, { 
                xPercent: -50, 
                yPercent: -50, 
            })

            gsap.to(defaultCurRef.current, {
                x: e.clientX, 
                y: e.clientY,

                duration:0.15,
                ease: 'power3.out',
            })

            gsap.to(pointerCurRef.current, {
                x:e.clientX,
                y:e.clientY,
                duration: 0.15,
                ease: 'power3.out'
            })

            gsap.to(nameRef.current, {
                x : e.clientX,
                y : e.clientY,
                duration: 0.15,
                ease: 'power1.inOut'
            })

            
        }

        const handleME = () => {
            gsap.to(defaultCurRef.current, {
                opacity: 0,
                duration: 0.2,
            })

            gsap.to(pointerCurRef.current, {
                opacity: 1,
                duration: 0.2,
            })
        }

        const handleML = () => {
            gsap.to(defaultCurRef.current, {
                opacity: 1,
                duration:0.2,
            })

            gsap.to(pointerCurRef.current, {
                opacity: 0,
                duration: 0.2,
            })

        }

        const links = document.querySelectorAll('a, button')

        links.forEach((link) => {
            link.addEventListener('mouseenter', handleME)
            link.addEventListener('mouseleave', handleML)
        })
        
        window.addEventListener('mousemove' , moveCursor)

        return () => {
            window.removeEventListener('mousemove' , moveCursor)

            links.forEach((link) => {
            link.removeEventListener('mouseenter', handleME)
            link.removeEventListener('mouseleave', handleML)
        })
            
        }

    },[])
    


  return (

    <>

    <img
        ref={defaultCurRef}
        src="/CustomCursor/Gear5/gear5cursor.png"
        alt=""
        className='fixed
        top-0 left-0  
        w-[20px] h-[20px]
        pointer-events-none
        z-[100]' 
    />   


    <img 
        ref = {pointerCurRef}
        src="/CustomCursor/Gear5/gear5pointer.png" alt="" 
        className='fixed 
        top-0 left-0  
        w-[40px] h-[40px] 
        pointer-events-none
        opacity-0
        z-[100]'
    />   


    <div
        ref = {nameRef}
        className='z-[100] 
        absolute 
        top-2 left-3 
        pointer-events-none 
        bg-gray-300 text-black 
        px-2 py-1 rounded-2xl 
        font-montserret 
        italic 
        text-[10px]'
        >
        Dhanush

    </div>

    </>

  )
}

export default Cursor
