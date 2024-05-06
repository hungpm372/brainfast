import { Sparkles } from 'lucide-react'
import Logo from '../logo'
import { Button } from '../ui/button'
import Link from 'next/link'

/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-06 15:36:39
 * @modify date 2024-05-06 15:36:39
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
const Topbar = () => {
  return (
    <div className='border-b w-full p-4'>
      <div className='max-w-5xl mx-auto w-full flex items-center justify-between'>
        <Logo />
        <div className='relative z-50'>
          <Link href='/dashboard'>
            <Button className='gradient-btn'>
              <span className='mr-2'>Get Started</span>
              <Sparkles />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Topbar
