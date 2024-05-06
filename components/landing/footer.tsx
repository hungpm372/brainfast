import Logo from '../logo'

/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-06 15:36:53
 * @modify date 2024-05-06 15:36:53
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
const Footer = () => {
  return (
    <footer className='border-t w-full p-4'>
      <div className='max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between'>
        <Logo />
        <div className='text-sm mt-4 lg:mt-0'>
          © Copyright {new Date().getFullYear()}, Brainfast
        </div>
      </div>
    </footer>
  )
}

export default Footer
