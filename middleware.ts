/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 01:17:20
 * @modify date 2024-05-05 01:17:20
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { authMiddleware } from '@clerk/nextjs'

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ['/'],
})

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    '/((?!.+\\.[\\w]+$|_next).*)',
    // Re-include any files in the api or trpc folders that might have an extension
    '/(api|trpc)(.*)'
  ]
}
