/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 01:07:13
 * @modify date 2024-05-05 01:07:13
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Send } from 'lucide-react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import AiResponse from '@/components/dashboard/ai-response'
import ToolsNavigation from '@/components/dashboard/tools-navigation'
import UserMessage from '@/components/dashboard/user-message'
import Loading from '@/components/loading'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { useProStore } from '@/stores/pro-store'

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Photo prompt is required'
  })
})

interface MessageType {
  id: string
  content: string
  role: 'user' | 'assistant'
}

const VideoPage = () => {
  const { handleOpenOrCloseProModal } = useProStore()
  const { toast } = useToast()
  const containerRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<MessageType[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ''
    }
  })

  const isLoading = form.formState.isSubmitting

  const handleScrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMessages((current) => [
        ...current,
        {
          id: uuidv4(),
          role: 'user',
          content: values.prompt
        },
        {
          id: uuidv4(),
          role: 'assistant',
          content: ''
        }
      ])
      handleScrollToBottom()
      form.reset()

      const { data } = await axios.post('/api/video', values)

      setMessages((current) => {
        const newMessages = [...current]
        newMessages[newMessages.length - 1].content = data[0]
        return newMessages
      })
      handleScrollToBottom()
    } catch (error: any) {
      if (error?.response?.status === 403) {
        handleOpenOrCloseProModal()
      } else {
        setMessages([])
        toast({
          variant: 'destructive',
          description: 'Something went wrong. Please try again.'
        })
      }
    }
  }

  const handleClearChat = () => {
    setMessages([])
  }

  return (
    <div className='h-full relative flex flex-col justify-between gap-4'>
      <div
        ref={containerRef}
        className='h-[calc(100vh-180px)] relative overflow-y-auto space-y-10 scroll-smooth'
      >
        {messages.length > 0 ? (
          <>
            {messages.map((m) => (
              <div key={m.id} className='whitespace-pre-wrap'>
                {m.role === 'user' ? (
                  <UserMessage>{m.content}</UserMessage>
                ) : (
                  <AiResponse>
                    {m.content ? (
                      <div
                        className={cn(
                          'block mb-4 space-y-4',
                          'lg:flex lg:flex-wrap lg:items-center lg:space-x-4 lg:space-y-0'
                        )}
                      >
                        <video src={m.content} width='750' height='500' controls />
                      </div>
                    ) : (
                      <Loading />
                    )}
                  </AiResponse>
                )}
              </div>
            ))}
            <div className='absolute left-0 bottom-0 text-right w-full'>
              <Button size='sm' onClick={handleClearChat} variant='outline'>
                Clear chat
              </Button>
            </div>
          </>
        ) : (
          <ToolsNavigation title='Video generation' />
        )}
      </div>
      <div className='mb-[13px]'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex items-center w-full relative'
          >
            <FormField
              name='prompt'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Textarea
                      placeholder='Clown fish swimming in a coral reef, beautiful, 8k, perfect, award winning, national geographic'
                      className='min-h-1 resize-none'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='absolute right-2 flex items-center space-x-4'>
              <Button type='submit' disabled={isLoading} className='gradient-btn'>
                <Send />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default VideoPage
