/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-06 15:03:31
 * @modify date 2024-05-06 15:03:31
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { auth } from '@clerk/nextjs'
import Replicate from 'replicate'
import { NextResponse } from 'next/server'
import { checkSubscription, checkUserLimit, incrementUserLimit } from '@/lib/user-limit'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY!
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { prompt } = await req.json()

    if (!userId) return new NextResponse('Unauthorized', { status: 401 })

    if (!replicate.auth) return new NextResponse('Miss Replicate API Key.', { status: 500 })

    if (!prompt) return new NextResponse('Prompt are required', { status: 400 })

    const reachToLimit = await checkUserLimit()
    const isPro = await checkSubscription()

    if (!reachToLimit && !isPro) {
      return NextResponse.json(
        { message: 'You are reach to limit. Please upgrade to higher plan.', status: 403 },
        { status: 403 }
      )
    }

    const response = await replicate.run(
      'riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05',
      {
        input: {
          prompt_a: prompt
        }
      }
    )

    if (!isPro) {
      await incrementUserLimit()
    }

    return NextResponse.json(response)
  } catch (error) {
    return new NextResponse('Something went wrong.', { status: 500 })
  }
}
