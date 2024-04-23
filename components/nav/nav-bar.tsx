'use client'
import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/shared/desktop/logo.svg'
import closeIcon from '../../public/assets/shared/mobile/icon-close.svg'
import hamburgerIcon from '../../public/assets/shared/mobile/icon-hamburger.svg'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const NavBar: React.FC = () => {
	const [active, setActive] = useState(false)

	const handleNav = () => {
		setActive(prevActive => !prevActive)
	}
	const mobileLinksVariants = {
		initial: {
			opacity: 0,
		},
		open: {
			opacity: 1,
			transition: {
				opacity: { duration: 0.3 },
				staggerChildren: 0.3,
				staggerDirection: 1,
			},
		},
		closed: {
			opacity: 0,
			transition: {
				opacity: { duration: 0.2 },
			},
		},
	}

	const mobileLinks = (
		<motion.div
			key={1}
			initial='initial'
			animate='open'
			exit='closed'
			variants={mobileLinksVariants}
			className='fixed inset-0 w-full h-screen z-10 flex flex-col bg-gradient-to-b text-2xl items-center mt-40 marker:uppercase md:text-sm font-bold text-dark-grey font-fraunces gap-8 from-light-cream to-transparent'>
			<motion.div variants={mobileLinksVariants} key={2}>
				<Link className='link' href='/'>
					Home
				</Link>
			</motion.div>
			<motion.div variants={mobileLinksVariants} key={3}>
				<Link className='link' href='/about'>
					About Us
				</Link>
			</motion.div>

			<motion.div variants={mobileLinksVariants} key={4}>
				<Link className='link' href='/pricing'>
					Create Your Plan
				</Link>
			</motion.div>
		</motion.div>
	)

	const desktopLinks = (
		<div className='md:w-auto uppercase hidden md:text-sm font-bold text-dark-grey font-fraunces md:font-barlow md:mt-0 md:flex-row md:items-center gap-8 md:flex md:h-auto'>
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
	)

	return (
		<nav className='max-w-[1440px] mx-auto flex items-center justify-between flex-wrap bg-light-cream py-8 px-6 relative'>
			<Link href='#' className='inline-flex logo'>
				<Image src={logo} width={163} height={18} alt='coffee bean logo' />
			</Link>

			<button className='ml-auto md:hidden' onClick={handleNav}>
				<Image src={!active ? hamburgerIcon : closeIcon} width={16} height={15} alt='coffee bean logo' />
			</button>
			<AnimatePresence mode='wait'>{active ? mobileLinks : desktopLinks}</AnimatePresence>
		</nav>
	)
}

export default NavBar
