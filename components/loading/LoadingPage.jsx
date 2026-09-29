import React from 'react'
import Counter from './Counter'
import Loading from './Loading'

const LoadingPage = () => {
  return (
    <div className='fixed inset-0 bg-white'>
      <Loading/>
        <div className='absolute bottom-10 right-10'>
          <Counter/>
        </div>
    </div>
  )
}

export default LoadingPage
