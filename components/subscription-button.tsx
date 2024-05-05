/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 04:11:30
 * @modify date 2024-05-05 04:11:30
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Sparkles } from 'lucide-react'
import axios from 'axios'
import { useToast } from './ui/use-toast'

interface SubscriptionButtonProps {
  className?: string
  isPro?: boolean
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({ className, isPro }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const handleSubcribe = async () => {
    try {
      setLoading(true)

      const { data } = await axios.get('/api/stripe')
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Something went wrong. Please try again later.'
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <Button
        variant='outline'
        size='lg'
        disabled={loading}
        onClick={handleSubcribe}
        className='text-white w-full font-semibold hover:text-white border-none gradient-btn'
      >
        <span className='mr-2'>{isPro ? 'Manage Subscription' : 'Upgrade to Pro'}</span>
        {!isPro && <Sparkles />}
      </Button>
    </div>
  )
}

export default SubscriptionButton
