/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 01:20:14
 * @modify date 2024-05-05 01:20:14
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */

import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default SignInPage
