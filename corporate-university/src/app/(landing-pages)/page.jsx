
import React from 'react'
import Hero from '@/components/modules/landing-page/Hero'
import Statistic from '@/components/modules/landing-page/Statistic'
import About from '@/components/modules/landing-page/About'
import Program from '@/components/modules/landing-page/Program'
import ProgramCarousel from '@/components/modules/landing-page/ProgramCarousel'

const Page = () => {
  return (
    <main className='space-y-4 lg:space-y-8'>
      <Hero />
      <Statistic />
      <About />
      <Program />
      <ProgramCarousel />
    </main>
  )
}

export default Page