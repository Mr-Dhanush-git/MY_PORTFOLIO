'use client'
import gsap from 'gsap'
import { RiAtLine} from 'react-icons/ri';
import { GoArrowUpRight } from "react-icons/go";
import React, { useState , useRef } from 'react'
import { roles , socialLinks ,} from '../constants/node'
import { useGSAP } from '@gsap/react'

const Header = () => {
  const tagRef = useRef(null);
  const [scale, setScale] = useState(false);

  const ref  = useRef(null);
  const atRef = useRef(null);

  const handleScale = ()=>{
   gsap.to(ref.current, {
    right:scale ? "-100%" : "0%",
    opacity: scale ? 0 : 1,
    scale: scale ? 0: 1,
    duration: 0.4,
    ease: "power2.out",
   });
   setScale((prev) => !prev);
  }

  const handleOpenPDF = ()=>{
    window.open('/Ch_Dhanush_Resume.pdf' , '_blank')
  }


  useGSAP(()=>{
    const t1 = gsap.timeline({
      repeat: Infinity,
    });

    roles.forEach((_,ind) => {
      const nextPosition = -(ind + 1)*100;
      
      if(ind === roles.length - 1) {
        t1.to(tagRef.current, {
          top: "0%",
          duration: 0.4,
          delay:3,
        });
      } else {
        t1.to(tagRef.current,{
          top: `${nextPosition}%`,
          duration:0.4,
          delay:3,
        })
      }

    })


  })


  return (

    <header className='relative w-full px-[60px] py-[30px]'>

    <div className='flex justify-between items-center'>
      {/* left part */}
      <div className='flex items-center gap-1'>
        <span className='font-montserrat tracking-[0.04em] italic text-2xl'>Dhanush</span>
      <div className='bg-gray-500 w-1.5 h-1.5 rounded-full'></div>


        <div className='relative overflow-hidden'>

          <span className='text-[16px] text-transparent block whitespace-nowrap'>
            {roles[roles.length - 1]}
          </span>

          <div 
            ref = {tagRef}
            className='h-full absolute top-0'
            >
              {roles.map((role , ind) => (
                <span
                key = {ind}
                className='text-[16px] block whitespace-nowrap italic'>
                  {role}
                </span>
              ))}
          </div>
        </div>
      </div>


      {/* right part */}
      <nav className = "flex justify-between items-center">
        
        <div className = "flex justify-between items-center">
          <div className = "relative rounded-full p-2">

            <a
            onClick = {handleScale}
            className='tooltipParent cursur-pointer'
            >
            <span
            ref = {atRef}
            size={24}
            className='icon font-light text-2xl italic'
            >@</span>
            </a>
            {scale && (
              <div
              onClick={handleScale}
              className='fixed cursor-not-allowed w-screen h-screen top-0 left-0 z-[999]'
              />
            )}

        <div
          ref = {ref}
          className = "absolute opacity-0 flex flex-col px-6 py-3 -right-full bg-gradient-to-tl to-[#e4e0e0] from-[#9d9c9c] via-[#e8dbdb] border border-zinc-500 z-[9999] rounded-3xl top-full"
          >
          {socialLinks.map((social , ind) => (
            <a
              key = {social.name}
              href = {social.href}
              target = '_blank'
              rel = "noopener noreferrer"
              className = "social whitespace-nowrap flex gap-2 justify-between text-gray-800 py-2 border-b border-zinc-700 hover:bg-black hover:text-white font-semibold transition-all ease-in duration-400"
            >
              <span>{social.name}</span>
              <span><GoArrowUpRight /></span>
            </a>
          ))}

        </div>
      </div>
      </div>

      <a
      onClick={handleOpenPDF}
      className='rounded-full flex gap-1 items-center font-italic px-6 py-3 transition-all ease-in-out duration-300'

      >
        <span className='cursor-pointer font-montserrat tracking-[0.04em] italic text-2xl'>Resume</span>
        <GoArrowUpRight className='text-2xl'/>
      </a>


      </nav> 
    </div>  

    </header>
  )
}

export default Header
