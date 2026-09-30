'use client'
import React, { useRef , useEffect, useState } from 'react'

const Loading = ({onComplete}) => {
  const videoRef = useRef(null)
  const loadRef = useRef(null)
  
  useEffect(() => {
      const loader = loadRef.current
      const video = videoRef.current


      if (!video || !loader) return

      videoRef.current.playbackRate = 1.5;
      let animationFrame

      const updateLoader = () => {
        if(video.duration) {
          const progress = (video.currentTime/video.duration)*140

          loader.style.width = `${progress}%`
        }
        animationFrame = requestAnimationFrame(updateLoader)
      }

      animationFrame = requestAnimationFrame(updateLoader)

      const handleVideoEnd = () => {
      cancelAnimationFrame(animationFrame)

      // Small delay after reaching 100%
      setTimeout(() => {
        onComplete()
      }, 300)
      }

      video.addEventListener('ended', handleVideoEnd)

      
      return () => {
        cancelAnimationFrame(animationFrame)
        video.removeEventListener('ended', handleVideoEnd)
      }
      }, [onComplete])


    


  return (
    <div className="flex h-full w-full flex-col items-center justify-center">

      {/* Loading Video */}
      <div className="h-[320px] md:h-[650px]">
        <video
          ref={videoRef}
          src="/videos/load3.mp4"
          autoPlay
          muted
          playsInline
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Loader */}
      <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-black/10 md:w-[420px]">
        <div ref= {loadRef} className="h-full w-0 rounded-full bg-black" />
      </div>

    </div>
  )
}

export default Loading