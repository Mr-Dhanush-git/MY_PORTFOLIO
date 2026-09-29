'use client'
import { progress } from 'motion'
import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count , setCount] = useState(0)

  useEffect(() => {
    const duration = 3000
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1-progress, 3)

      setCount(Math.floor(easedProgress*100))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  },[])

  return (
    <div className='relative inline-block right-6'>
      <img 
      src="images/strawHat.png" 
      alt="strawHat" 
      className='w-20 h-20 absolute -left-12 -top-4 animate-[spin_0.5s_linear_infinite]' 
      />

    <div className='text-6xl w-[4.5ch] text-center font-light italic tabular-nums'>
      <span className=''>{count}</span>
    </div>
    <span className='absolute -right-5 italic bottom-0 text-6xl'>%</span>
    </div>
  )
}

export default Counter
