/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 15:40:51
 * @modify date 2024-05-05 15:40:51
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { messages } = await req.json()

    if (!userId) return new NextResponse('Unauthorized', { status: 401 })

    if (!openai.apiKey) return new NextResponse('OpenAI API key is not set', { status: 500 })

    if (!messages) return new NextResponse('Messages are required', { status: 400 })

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages
    })

    const stream = OpenAIStream(response)

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
