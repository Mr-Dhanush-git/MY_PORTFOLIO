'use client'
import React, { useState } from 'react'
import Counter from './Counter'
import Loading from './Loading'
import { div } from 'motion/react-client'

const LoadingPage = ({children}) => {
  const [isLoading , setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  const handleExitComplete = (e)=>{
    if (e.propertyName == 'transform'){
    setIsLoading(false)
    }
  }

  const handleLoadingComplete = ()=> {
    setIsExiting(true)
    
  }



  return (
    <div className='relative min-h-screen'>
      {children} 

      {isLoading && (
      <div 
          onTransitionEnd = {handleExitComplete}

          className = {`fixed inset-0 z-[100] bg-white transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]

          ${isExiting ? '-translate-y-full':'translate-y-0'}
          `}
          >
          <Loading
            onComplete={handleLoadingComplete}
          />


          <div className='absolute bottom-10 right-10'>
            <Counter/>
          </div>
      </div>
      )}
    </div>
  )
}

export default LoadingPage
