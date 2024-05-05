/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 12:15:55
 * @modify date 2024-05-05 12:15:55
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'

import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useSidebarStore } from '@/stores/sidebar-store'
import Sidebar from '.'

interface MobileSidebarProps {
  isProPlan?: boolean
  userLimitCount: number
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isProPlan, userLimitCount }) => {
  const { isOpen } = useSidebarStore()

  return (
    <Sheet open={isOpen} >
      <SheetContent side='left' className='w-screen border-none bg-black p-0 pt-8'>
        <Sidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar