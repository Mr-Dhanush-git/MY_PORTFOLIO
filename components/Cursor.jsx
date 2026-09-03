'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {
    const cursorRef = useRef(null)
    const nameRef = useRef(null)

    const defaultCurRef = useRef(null)
    const pointerCurRef = useRef(null)

    

    useEffect(() => {
        const moveCursor = (e) => {

            gsap.to(cursorRef.current, {
                x: e.clientX, 
                y: e.clientY,
                duration:0.15,
                ease: 'power3.out',
            })

            gsap.to(nameRef.current, {
                x : e.clientX,
                y : e.clientY,
                duration: 0.1,
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

    <div>
        <div ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        >
            <img
             ref={defaultCurRef}
             src="/CustomCursor/Gear5/gear5cursor.png"
                alt=""
                className='w-10 h-10' />   


            <img 
             ref = {pointerCurRef}
             src="/CustomCursor/Gear5/gear5pointer.png" alt="" 
             className='absolute top-0 left-0 w-10 h-10 opacity-0'
             />   
        </div>

        <div
        ref = {nameRef}
        className='z-[99999] fixed top-7 left-7 pointer-events-none bg-black text-white px-2 rounded-2xl font-montserret italic text-[13px]'
        >
            Dhanush
        </div>

    </div>

  )
}

export default Cursor
