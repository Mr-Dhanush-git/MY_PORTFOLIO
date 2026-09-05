'use client'
import React from 'react'
import { navLinks } from '../constants/node'
import ToolTip from './Tooltip'
import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <nav className='fixed top-5 left-1/2 -translate-x-1/2 flex justify-between items-center  gap-10 border border-black-50  rounded-3xl px-6 py-3 pr-24 bg-gradient-to-b from-white via-[#e2e2e2] to-[#c7c4c4]'>
        {navLinks.map((nav , ind) => (
            <a
            key = {nav.name}
            href={nav.href}
            className='flex justify-between items-center  gap-2'
            // font-[CustomMontserrat]
            >
            <span className='block tooltipParent'>
              {nav.logo}
              <div className='md:hidden block'>
                  <ToolTip direction = "down" value = {nav.name}/>
              </div>
            </span>
            <span className='lg:block hidden'>
            {nav.name}
            </span>
            </a>
        ))}
          <motion.a
            whileTap = {{ scale: 0.9}}
            href="mailto:vijayyathagiri@gmail.com"
            className='text-black  font-semibold relative text-black font-semibold'
            >
            <motion.div initial={{ left : "-100%"}} animate = {{ left : "150%" }}  transition={{repeat : Infinity , duration: 2, repeatDelay: 2, }} className="absolute w-6 h-[150%] bg-red-900 blur-md top-3 rotate-12 z-10"></motion.div>
            <span className='bg-white border absolute rounded-3xl whitespace-nowrap -top-5 -left-7 py-2 px-3 z-20'> 
              Contact me
            </span>
          </motion.a>


    </nav>
  )
}

export default Navbar
