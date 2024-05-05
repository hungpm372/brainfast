/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 01:08:28
 * @modify date 2024-05-05 01:08:28
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'
import ToolsNavigation from '@/components/dashboard/tools-navigation'
import { useEffect, useRef } from 'react'
import { useChat } from 'ai/react'
import UserMessage from '@/components/dashboard/user-message'
import { Button } from '@/components/ui/button'
import AiResponse from '@/components/dashboard/ai-response'
import MarkdownResponse from '@/components/dashboard/markdown-response'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import { useProStore } from '@/stores/pro-store'

const ConversationPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { handleOpenOrCloseProModal } = useProStore()
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, error, setMessages } =
    useChat({
      api: '/api/conversation'
    })

  useEffect(() => {
    if (error) {
      const errorParsed = JSON.parse(error?.message)
      if (errorParsed?.status === 403) {
        handleOpenOrCloseProModal()
      }
    }
  }, [error, handleOpenOrCloseProModal])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  const handleClearChat = () => {
    setMessages([])
  }

  return (
    <div className='h-full relative flex flex-col justify-between gap-4'>
      <div
        ref={containerRef}
        className='h-[calc(100vh-180px)] overflow-y-auto space-y-10 scroll-smooth'
      >
        {messages.length > 0 ? (
          <>
            {messages.map((m) => (
              <div key={m.id} className='whitespace-pre-wrap'>
                {m.role === 'user' ? (
                  <UserMessage>
                    <MarkdownResponse content={m.content} />
                  </UserMessage>
                ) : (
                  <AiResponse>
                    <MarkdownResponse content={m.content} />
                  </AiResponse>
                )}
              </div>
            ))}
            <div className='absolute left-0 bottom-20 text-right w-full'>
              <Button size='sm' onClick={handleClearChat} variant='outline'>
                Clear chat
              </Button>
            </div>
          </>
        ) : (
          <ToolsNavigation title={'Conversation'} />
        )}
      </div>
      <div className='mb-[13px]'>
        <form
          onSubmit={isLoading ? stop : handleSubmit}
          className='flex items-center w-full relative'
        >
          <Textarea
            placeholder='Do you have any questions today?'
            value={input}
            className='min-h-1 resize-none'
            onChange={handleInputChange}
          />
          <Button type='submit' disabled={!input} className='absolute right-2 gradient-btn'>
            {isLoading ? 'Stop' : <Send />}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ConversationPage
