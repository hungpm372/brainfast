/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 01:20:14
 * @modify date 2024-05-05 01:20:14
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */

import { SignUp } from '@clerk/nextjs'

import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <SignUp />
    </div>
  )
}

export default SignUpPage
