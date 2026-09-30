'use client'
import React, { useEffect, useRef, useState } from 'react'

const Heromodel = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  

  const [hover, setHover] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => {
      if (video1Ref.current) {
        video1Ref.current.playbackRate = 1.4;
        video1Ref.current.play();
      }
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    if (video2Ref.current) {
      video2Ref.current.playbackRate = 1.4;
    }
  }, []);

  const handleMouseEnter = () => {
    const video = video2Ref.current;

    if (!video) return;

    video.currentTime = 0;
    video.play();

    setHover(true);
  };

  const handleMouseLeave = () => {
    // setHover(false);
  };



  return (
    <div className='relative bottom-140 scale-75 right-10'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref = {video1Ref}
        className={`
          w-full h-full object-contain scale-100
          transition-transform duration-200
          ${hover ? "opacity-0" : "opacity-100"}
        `}
        src="videos/video1.mp4"
        muted
        playsInline
        preload='auto'/>


      <video
        ref={video2Ref}
        className={`
          absolute inset-0
          w-full h-full object-contain
          transition-transform duration-200 scale-100
          ${hover ? "opacity-100" : "opacity-0"}
        `}
        src="/videos/video3.mp4"
        muted
        playsInline
        preload="auto"
      />

    </div>
  )
}

export default Heromodel
