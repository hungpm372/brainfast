/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 15:59:09
 * @modify date 2024-05-05 15:59:09
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { BrainCircuit } from 'lucide-react'

interface AiResponseProps {
  children: React.ReactNode
}

const AiResponse: React.FC<AiResponseProps> = ({ children }) => {
  return (
    <div className='p-4 pb-10 ml-20 rounded-xl mr-7 bg-secondary relative'>
      {children}
      <div className='bg-sky-500 w-14 h-14 rounded-lg flex justify-center items-center absolute -bottom-6 right-6'>
        <BrainCircuit color='white' size={40} />
      </div>
    </div>
  )
}

export default AiResponse
