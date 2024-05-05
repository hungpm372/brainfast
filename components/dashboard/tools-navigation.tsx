/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 14:48:01
 * @modify date 2024-05-05 14:48:01
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { TOOLS } from '@/constants'
import ToolItem from './tool-item'

interface ToolsNavigationProps {
  title: string
}

const ToolsNavigation: React.FC<ToolsNavigationProps> = ({ title = 'Unlock the power of AI' }) => {
  return (
    <div className='flex flex-col w-full items-center relative grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 lg:px-4 lg:pt-0 lg:pb-6'>
      <div className='text-center mb-14'>
        <h3>{title}</h3>
        <p className='text-muted-foreground text-lg mt-2'>
          Chat with the smartest AI - Experience the power of AI with us
        </p>
      </div>
      <div className='w-full max-w-[30.75rem] mx-auto'>
        {TOOLS.map((tool, index) => (
          <ToolItem key={index} {...tool} />
        ))}
      </div>
    </div>
  )
}

export default ToolsNavigation
