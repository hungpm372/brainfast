/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 04:11:44
 * @modify date 2024-05-05 04:11:44
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'
import { THEME_MODES } from '@/constants'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/stores/sidebar-store'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const { isMinimal } = useSidebarStore()
  const [hasMounted, setHasMounted] = useState<boolean>(false)

  useEffect(() => {
    // Fix hydration mismatch
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <div
      className={cn(
        'p-2 rounded-lg flex items-center bg-gray-900 w-full',
        isMinimal && 'size-14 justify-center'
      )}
    >
      {isMinimal ? (
        <span
          className='cursor-pointer'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'dark' ? <Moon /> : <Sun />}
        </span>
      ) : (
        THEME_MODES.map(({ label, value }) => (
          <span
            onClick={() => theme !== value && setTheme(value)}
            key={value}
            className={cn(
              'flex items-center p-2 rounded-lg px-7 w-full justify-center cursor-pointer text-muted-foreground font-medium',
              theme === value && 'bg-gray-950 shadow text-white'
            )}
          >
            {value === 'dark' ? <Moon /> : <Sun />}
            <span className='ml-2'>{label}</span>
          </span>
        ))
      )}
    </div>
  )
}

export default ThemeToggle
