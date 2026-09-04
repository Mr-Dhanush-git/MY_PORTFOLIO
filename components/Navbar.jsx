import React from 'react'
import { navLinks } from '../constants/node'
import ToolTip from './Tooltip'
const Navbar = () => {
  return (
    <nav className='fixed top-5 left-1/2 -translate-x-1/2 flex justify-between items-center font-[CustomMontserrat] gap-10 bg-orange-500  rounded-3xl px-6 py-3'>
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
            <span className='lg:block hidden font-bold'>
            {nav.name}
            </span>
            </a>
        ))}

        <div className='font-bold'>
            <a href="mailto:vijayyathagiri@gmail.com">Contact me</a>
        </div>

    </nav>
  )
}

export default Navbar
