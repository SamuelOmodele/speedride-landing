import BookUs from '@/components/LandingPage/BookUs'
import CoreValues from '@/components/LandingPage/CoreValues'
import Footer from '@/components/LandingPage/Footer'
import HeroSection from '@/components/LandingPage/HeroSection'
import HowToDriver from '@/components/LandingPage/HowToDriver'
import HowToRider from '@/components/LandingPage/HowToRider'
import WhoAreWe from '@/components/LandingPage/WhoAreWe'
import React from 'react'

const Page = () => {
  return (
    <div>
      <HeroSection />
      <BookUs />
      <WhoAreWe />
      <CoreValues />
      <HowToRider />
      <HowToDriver />
      <Footer />
    </div>
  )
}

export default Page