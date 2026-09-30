'use client'
import React, { useState } from 'react'
import Counter from './Counter'
import Loading from './Loading'
import { div } from 'motion/react-client'

const LoadingPage = ({children}) => {
  const [isLoading , setIsLoading] = useState(true)

  return (
    <div className='relative min-h-screen'>
      {children} 

      {isLoading && (
      <div className='fixed inset-0 z-[100] bg-white'>
        <Loading
          onComplete = {() => setIsLoading(false)}
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
