/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 17:11:07
 * @modify date 2024-05-05 17:11:07
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb

export default prismadb