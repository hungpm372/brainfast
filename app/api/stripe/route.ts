/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 17:43:56
 * @modify date 2024-05-05 17:43:56
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { auth, currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

import prismadb from '@/lib/prisma-db'
import { stripe } from '@/lib/stripe'
import { absoluteUrl } from '@/lib/utils'

export async function GET() {
  try {
    const { userId } = auth()
    const user = await currentUser()

    if (!userId || !user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId
      }
    })

    const dashboardUrl = absoluteUrl('/dashboard')

    if (userSubscription?.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: dashboardUrl
      })

      return NextResponse.json({ url: stripeSession.url }, { status: 200 })
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: dashboardUrl,
      cancel_url: dashboardUrl,
      payment_method_types: ['card'],
      customer_email: user.emailAddresses[0].emailAddress,
      mode: 'subscription',
      billing_address_collection: 'auto',
      line_items: [
        {
          price_data: {
            currency: 'USD',
            product_data: {
              name: 'Brainfast Pro',
              description: 'Unlimited Generations'
            },
            unit_amount: 10000,
            recurring: {
              interval: 'month'
            }
          },
          quantity: 1
        }
      ],
      metadata: {
        userId
      }
    })

    return NextResponse.json({ url: stripeSession.url }, { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse('Something went wrong.', { status: 500 })
  }
}
