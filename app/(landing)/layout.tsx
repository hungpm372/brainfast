/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 00:48:31
 * @modify date 2024-05-05 00:48:31
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import Footer from '@/components/landing/footer'
import Topbar from '@/components/landing/topbar'
import React from 'react'

const LandingLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <Topbar />
      <main className='max-w-5xl mx-auto'>{props.children}</main>
      <Footer />
    </div>
  )
}

export default LandingLayout
