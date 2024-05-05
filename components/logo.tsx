/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 02:11:29
 * @modify date 2024-05-05 02:11:29
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { cn } from '@/lib/utils'
import { BrainCircuit } from 'lucide-react'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({ weight: '700', subsets: ['latin'] })

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <BrainCircuit color='#0EA5E9' size={40} />
      <span className={cn('ml-2 font-bold text-3xl', poppins.className)}>Brainfast</span>
    </div>
  )
}

export default Logo
