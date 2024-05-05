/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 22:32:26
 * @modify date 2024-05-05 22:32:26
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { checkSubscription, checkUserLimit, incrementUserLimit } from '@/lib/user-limit'
import { auth } from '@clerk/nextjs'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

const instructionMessage = {
  role: 'system',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.'
}

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { messages } = await req.json()

    if (!userId) return new NextResponse('Unauthorized', { status: 401 })

    if (!openai.apiKey) return new NextResponse('OpenAI API key is required', { status: 500 })

    if (!messages) return new NextResponse('Messages are required', { status: 400 })

    const reachToLimit = await checkUserLimit()
    const isPro = await checkSubscription()

    if (!reachToLimit && !isPro) {
      return NextResponse.json(
        { message: 'You have reached the limit of free requests' },
        { status: 403 }
      )
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [instructionMessage, ...messages]
    })

    const stream = OpenAIStream(response, {
      onCompletion: async () => {
        if (!isPro) {
          await incrementUserLimit()
        }
      }
    })

    return new StreamingTextResponse(stream)
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error
      return NextResponse.json({ name, status, headers, message }, { status })
    } else {
      throw error
    }
  }
}
