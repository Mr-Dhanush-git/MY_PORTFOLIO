'use client'
import React, { useEffect, useRef } from 'react'

const Heromodel = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.4;
    }
  })

  return (
    <div className='relative'>
      <video
        ref = {videoRef}
        className='w-full h-full object-contain relative bottom-130 scale-75 right-10' 
        src="videos/video1.mp4"
        autoPlay
        muted
        playsInline
        preload='auto'/>

    </div>
  )
}

export default Heromodel
