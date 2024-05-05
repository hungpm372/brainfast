/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 17:16:49
 * @modify date 2024-05-05 17:16:49
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { auth } from '@clerk/nextjs'

import { DAY_IN_MS, MAX_FREE_COUNTS } from '@/constants'
import prismadb from '@/lib/prisma-db'

export const getUserLimit = async () => {
  const { userId } = auth()

  if (!userId) return

  return await prismadb.userLimit.findUnique({
    where: {
      userId
    }
  })
}

export const getUserLimitCount = async () => {
  const userLimit = await getUserLimit()

  if (!userLimit) return 0

  return userLimit.count
}

export const checkUserLimit = async () => {
  const userLimit = await getUserLimit()

  if (!userLimit || userLimit.count < MAX_FREE_COUNTS) {
    return true
  }

  return false
}

export const incrementUserLimit = async () => {
  const { userId } = auth()

  if (!userId) return

  const userLimit = await getUserLimit()

  if (userLimit) {
    return await prismadb.userLimit.update({
      where: { userId },
      data: { count: { increment: 1 } }
    })
  }

  return await prismadb.userLimit.create({
    data: { userId, count: 1 }
  })
}

export const checkSubscription = async () => {
  const { userId } = auth()

  if (!userId) {
    return false
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId
    }
  })

  if (!userSubscription) return false

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid
}
