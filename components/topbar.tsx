/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 02:08:27
 * @modify date 2024-05-05 02:08:27
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Logo from './logo'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { useSidebarStore } from '@/stores/sidebar-store'

const Topbar = () => {
  const { handleOpenOrClose } = useSidebarStore()

  return (
    <div className={cn('flex items-center p-4 justify-between sticky top-0 z-30 lg:hidden')}>
      <Logo />
      <Button className='' variant={'ghost'} size={'icon'} onClick={handleOpenOrClose}>
        <Menu />
      </Button>
    </div>
  )
}

export default Topbar
