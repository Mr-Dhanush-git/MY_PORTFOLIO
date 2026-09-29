'use client'

import React, { useRef , useEffect } from 'react'

const Loading = () => {
  const videoRef = useRef(null)

  useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 1.5;
      }})

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">

      {/* Loading Video */}
      <div className="w-[320px] md:w-[500px]">
        <video
          ref={videoRef}
          src="/videos/load2.mp4"
          autoPlay
          muted
          playsInline
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Loader */}
      <div className="mt-6 h-[4px] w-full overflow-hidden rounded-full bg-black/10 md:w-[420px]">
        <div className="h-full w-1/2 bg-black" />
      </div>

    </div>
  )
}

export default Loading