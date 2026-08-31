'use client'
import gsap from 'gsap'
import React, { useState , useRef } from 'react'
import { roles } from '../constants/node'
import { useGSAP } from '@gsap/react'

const Header = () => {
  const tagRef = useRef(null);

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
    <div>

      <div className='flex items-center gap-1'>
        <span>Dhanush</span>
      <div className='bg-gray-500 w-1.5 h-1.5 rounded-full'></div>


        <div className='relative'>

          <span className='text-[16px] text-transparent block whitespace-nowrap'>
            {roles[0]}
          </span>

          <div 
            ref = {tagRef}
            className='h-full absolute top-0'
            >
              {roles.map((role , ind) => (
                <span
                key = {ind}
                className='text-[16px] block whitespace-nowrap'>
                  {role}
                </span>
              ))}
          </div>

        </div>

        

      </div>
      <div></div> 
    </div>
  )
}

export default Header
