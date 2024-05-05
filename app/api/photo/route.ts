/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 23:07:43
 * @modify date 2024-05-05 23:07:43
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { checkSubscription, checkUserLimit, incrementUserLimit } from '@/lib/user-limit'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { prompt, amount, resolution } = await req.json()

    if (!userId) return new NextResponse('Unauthorized', { status: 401 })

    if (!openai.apiKey) return new NextResponse('OpenAI API key is required', { status: 500 })

    if (!prompt) return new NextResponse('Prompt are required', { status: 400 })

    const reachToLimit = await checkUserLimit()
    const isPro = await checkSubscription()

    if (!reachToLimit && !isPro) {
      return NextResponse.json(
        {
          message:
            'You have reached the limit of free usage. Please upgrade to Pro plan to continue using the service.'
        },
        { status: 403 }
      )
    }

    const response = await openai.images.generate({
      prompt,
      n: Number(amount),
      size: resolution
    })

    if (!isPro) {
      await incrementUserLimit()
    }

    return NextResponse.json(response)
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error
      return NextResponse.json({ name, status, headers, message }, { status })
    } else {
      throw error
    }
  }
}
