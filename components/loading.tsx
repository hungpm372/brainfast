/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 23:28:58
 * @modify date 2024-05-05 23:28:58
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { BrainCircuit } from 'lucide-react'

const Loading = () => {
  return (
    <div className='flex items-center'>
      <BrainCircuit className='animate-ping' color='#0EA5E9' size={16} />
      <span className='ml-4 text-sm'>Thinking ...</span>
    </div>
  )
}

export default Loading
