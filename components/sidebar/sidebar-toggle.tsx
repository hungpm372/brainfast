/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 02:59:43
 * @modify date 2024-05-05 02:59:43
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { useSidebarStore } from '@/stores/sidebar-store'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

const SidebarToggle = () => {
  const { isMinimal, handleToggleMinimal, handleOpenOrClose } = useSidebarStore()
  return (
    <div>
      <div
        className='hidden sm:block'
        onClick={handleToggleMinimal}
        is-navbar-minimal={isMinimal ? 'true' : undefined}
      >
        <Image
          src={`/icons/menu-${isMinimal ? 'open' : 'close'}.svg`}
          width={24}
          height={24}
          alt='Menu icon'
        />
      </div>
      <Button className='lg:hidden' variant='ghost' size='icon' onClick={handleOpenOrClose}>
        <X />
      </Button>
    </div>
  )
}

export default SidebarToggle
