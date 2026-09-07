'use client'
import React, { useRef, useEffect, useState } from 'react'
import { navLinks } from '../constants/node'
import ToolTip from './Tooltip'
import { motion } from 'motion/react'
import { GoArrowUpRight } from 'react-icons/go'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const bgRef = useRef()
  const [activeId , setActiveId] = useState("home")
  const pathname = usePathname()

  useEffect(() => {
    const path = pathname.replace("/","") || "home"
    const element = document.getElementById(activeId)

    if (!element || !bgRef.current) return
    
    const width = element.getBoundingClientRect().width
    const offsetLeft = element.offsetLeft

    const padding = 19

    bgRef.current.style.left = `${offsetLeft- padding}px`
    bgRef.current.style.width = `${width + padding*2}px`

  },[activeId])



  return (
    <nav className='fixed top-5 left-1/2 -translate-x-1/2 flex justify-between items-center  gap-9 border border-black-50  rounded-4xl px-6 py-1 pr-1   bg-gradient-to-b from-white via-[#e2e2e2] to-[#c7c4c4]'>
        {navLinks.map((nav , ind) => (
            <a
            id = {nav.name.toLowerCase()}
            key = {nav.name}
            href={nav.href}
            onClick={() => setActiveId(nav.name.toLowerCase())}
            className={`relative z-10 flex justify-between items-center gap-2 ${
                activeId === nav.name.toLowerCase()
                  ? "text-white"
                  : "text-black"
              }`}
            // font-[CustomMontserrat]
            >
            <span className='block tooltipParent'>
              {nav.logo}
              <div className='md:hidden block'>
                  <ToolTip direction = "down" value = {nav.name}/>
              </div>
            </span>
            <span className="lg:block hidden">
            {nav.name}
            </span>
            </a>
        ))}
      <div className="relative">

        {/* Desktop → Contact */}
        <motion.a
          whileTap={{ scale: 0.9 }}
          href="mailto:dhanushchinthalapudi@gmail.com"
          className="
            hidden
            md:inline-flex
            relative
            overflow-hidden
            rounded-4xl
            text-black
            font-semibold
          "
        >
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "150%" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatDelay: 1,
            }}
            className="
              pointer-events-none
              absolute
              top-0
              z-30
              h-full
              w-8
              rotate-12
              bg-white
              blur-md
            "
          />
          
          <span className="  
              relative
              z-20
              rounded-3xl
              border border-[#999]
              text-[#222]
              bg-white
              px-4
              py-2
              hover:bg-[#111]
              hover:text-white
              hover:border-[#111]
              whitespace-nowrap
              border border-neutral-300">
            Contact me
          </span>
        </motion.a>

        {/* Mobile → Resume */}
        <a
          href="/Ch_Dhanush_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            md:hidden
            items-center
            gap-1
            rounded-3xl
            border
            bg-white
            font-semibold
            px-3
            py-2
            border border-neutral-300
          "
        >
          Resume
          <GoArrowUpRight className="text-2xl" />
        </a>

      </div>
      <div  ref={bgRef} className='bg-black text-white left-0 w-0 transition-all ease-out duration-500  h-[85%] y-1/2 absolute rounded-full'>
        <div className='bg-white opacity-0 z-[9999] left-1/2 -translate-x-1/2 w-[30px] transition-all ease-out duration-500 h-[2px] absolute rounded-full '>
          <div className='absolute w-[300%] h-[700%]  bg-white left-1/2 -translate-x-1/2 rounded-full blur-md'></div>
    
        </div>
        
      </div>




    </nav>
  )
}

export default Navbar
