import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/assets/shared/desktop/logo-white.svg'
import { LiaFacebookSquare } from 'react-icons/lia'
import { IoLogoTwitter } from 'react-icons/io5'
import { FiInstagram } from 'react-icons/fi'

export default function Footer() {
	return (
		<footer className=' px-6'>
			<div className='flex flex-col lg:flex-row items-center p-14 lg:p-12 bg-dark-grey text-gray rounded-lg text-sm justify-between'>
				<div className='flex flex-col lg:flex-row content-center items-center lg:gap-24'>
					<div className='flex justify-center'>
						<Link href='/'>
							<Image src={logo} width={163} height={18} alt='coffee bean logo' />
						</Link>
					</div>
					<div className='flex flex-col md:flex-row items-center uppercase text-sm  text-grey  mt-4 mb-4'>
						<Link className='link' href='/'>
							Home
						</Link>
						<Link className='link' href='/about'>
							About Us
						</Link>
						<Link className='link' href='/pricing'>
							Create Your Plan
						</Link>
					</div>
				</div>
				<div className='flex gap-6 items-center text-white mt-4 lg:mt-0'>
					<Link href='#' aria-label='Facebook Profile' className=' social-link'>
						<LiaFacebookSquare className='social-logo' />
					</Link>
					<Link href='#' aria-label='Facebook Profile' className=' social-link '>
						<IoLogoTwitter className='social-logo' />
					</Link>
					<Link href='#' aria-label='Facebook Profile' className=' social-link'>
						<FiInstagram className='social-logo' />
					</Link>
				</div>
			</div>
		</footer>
	)
}
