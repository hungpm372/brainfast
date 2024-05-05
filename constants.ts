/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 04:02:09
 * @modify date 2024-05-05 04:02:09
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
export const MAX_FREE_COUNTS = 5

export const THEME_MODES = [
  {
    label: 'Light',
    value: 'light'
  },
  {
    label: 'Dark',
    value: 'dark'
  }
]

export const TOOLS = [
  {
    title: 'Conversation',
    icon: '/icons/conversation.svg',
    url: '/conversation',
    color: 'bg-blue-500',
    slug: 'conversation'
  },
  {
    title: 'Photo generation',
    icon: '/icons/photo.svg',
    url: '/photo',
    color: 'bg-violet-500',
    slug: 'photo'
  },
  {
    title: 'Video generation',
    icon: '/icons/video.svg',
    url: '/video',
    color: 'bg-amber-500',
    slug: 'video'
  },
  {
    title: 'Audio generation',
    icon: '/icons/audio.svg',
    url: '/audio',
    color: 'bg-orange-500',
    slug: 'audio'
  },
  {
    title: 'Code generation',
    icon: '/icons/code.svg',
    url: '/code',
    color: 'bg-green-500',
    slug: 'code'
  }
]

export const NAVIGATIONS = [
  {
    title: 'Dashboard',
    icon: '/icons/dashboard.svg',
    url: '/dashboard',
    slug: 'dashboard'
  },
  ...TOOLS
]
