import React from 'react'

const Tooltip = ({direction , val}) => {
  return (
    <div style={{top:direction == 'up' ? "-100" : "100"}} className='absolute pointer-events-none text-base left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-black opacity-0 tooltip transform-all ease-out duration-300 tracking-tighter font-bold'>

        <div className={`absolute w-[20px] h-full left-1/2 border border-white  bg-black rounded 
            ${direction == "up" ?
             " bottom-[-8px] origin-bottom-left -rotate-45" :
             "top-[-8px] origin-top-left rotate-45"}`}></div>

        <span
        className='relative w-full h-full z-[999999999] bg-purple-900 text-white font-normal tracking-tight whitespace-nowrap text-base'
        >{val}</span>
        <div className='absolute left-0 top-0 z-[999999] w-full h-full bg-black rounded-lg'></div>
      
    </div>
  )
}

export default Tooltip
