'use client'
import React, { useState } from 'react'
import logo from '../../public/assets/shared/desktop/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

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

	const VARIANTS = {
		top: {
			open: {
				rotate: ['0deg', '0deg', '45deg'],
				top: ['35%', '50%', '50%'],
			},
			closed: {
				rotate: ['45deg', '0deg', '0deg'],
				top: ['50%', '50%', '35%'],
			},
		},
		middle: {
			open: {
				rotate: ['0deg', '0deg', '-45deg'],
			},
			closed: {
				rotate: ['-45deg', '0deg', '0deg'],
			},
		},
		bottom: {
			open: {
				rotate: ['0deg', '0deg', '45deg'],
				bottom: ['35%', '50%', '50%'],
				left: '50%',
			},
			closed: {
				rotate: ['45deg', '0deg', '0deg'],
				bottom: ['50%', '50%', '35%'],
				left: 'calc(50% + 4px)',
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

			<MotionConfig
				transition={{
					duration: 0.5,
					ease: 'easeInOut',
				}}>
				<motion.button
					initial={false}
					animate={active ? 'open' : 'closed'}
					className='ml-auto md:hidden p-1 relative h-6 w-6 rounded-full transition-colors hover:bg-light-cyan/20  '
					onClick={handleNav}>
					<motion.span
						variants={VARIANTS.top}
						className='absolute h-0.5 w-4 bg-dark-grey'
						style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
					/>
					<motion.span
						variants={VARIANTS.middle}
						className='absolute h-0.5 w-4 bg-dark-grey'
						style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
					/>
					<motion.span
						variants={VARIANTS.bottom}
						className='absolute h-0.5 w-2 bg-dark-grey'
						style={{
							x: '-50%',
							y: '50%',
							bottom: '35%',
							left: 'calc(50% + 4px)',
						}}
					/>
				</motion.button>
			</MotionConfig>
			{/* 
			<button className='ml-auto md:hidden' onClick={handleNav}>
				<Image src={!active ? hamburgerIcon : closeIcon} width={16} height={15} alt='coffee bean logo' />
			</button> */}
			<AnimatePresence mode='wait'>{active ? mobileLinks : desktopLinks}</AnimatePresence>
		</nav>
	)
}

export default NavBar
