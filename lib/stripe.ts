/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 17:41:07
 * @modify date 2024-05-05 17:41:07
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2024-04-10',
  typescript: true
})