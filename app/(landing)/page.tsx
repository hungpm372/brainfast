/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 00:48:34
 * @modify date 2024-05-05 00:48:34
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      <Features />
    </div>
  )
}

export default LandingPage
