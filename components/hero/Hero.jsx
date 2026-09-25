import React from 'react'
import Herotext from './Herotext'
import HeroCard from './HeroCard'
import Heromodel from './Heromodel'

const Hero = () => {
  return (
    <section className='relative min-h-screen'>
      <HeroCard/>
      <Heromodel/>
    </section>
  )
}

export default Hero
