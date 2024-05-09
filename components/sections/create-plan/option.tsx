import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Option {
	title: string
	description: string
}

type Props = {
	id: string
	title: string[]
	options: Option[]
	selectedTitle: React.Dispatch<React.SetStateAction<string>>
}

const Option = ({ id, title, options, selectedTitle }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isActive, setIsActive] = useState(0)

	useEffect(() => {
		const handleSelected = () => {
			selectedTitle(options[isActive].title)
		}

		handleSelected()
	}, [isActive, options, selectedTitle])

	return (
		<div id={id} className='pb-6'>
			<button
				type='button'
				className='flex items-center justify-between w-full mb-10'
				onClick={(e) => {
					e.preventDefault()
					setIsOpen((prev) => !prev)
				}}>
				<span className='font-bold font-fraunces text-center text-grey text-3xl'>{title}</span>
				<AnimatePresence>
					<motion.span
						className='relative w-5 h-3'
						initial={{ rotate: 0 }}
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 1 }}>
						<Image fill src={'/assets/plan/desktop/icon-arrow.svg'} alt='arrow icon' />
					</motion.span>
				</AnimatePresence>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ y: -200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}
						className={`flex flex-col md:flex-row gap-4 md:gap-[10px] `}>
						{options.map((option, index) => (
							<button
								type='button'
								key={index}
								onClick={() => setIsActive(index)}
								className={`flex flex-col my-4 md:my-8 p-7 rounded-xl text-left md:h-[300px] gap-5 trasition duration-300 ${
									isActive === index ? 'bg-dark-cyan' : 'bg-light-yellow hover:bg-light-salmon'
								}`}>
								<span className='font-fraunces text-2xl font-bold'>{option.title}</span>
								<span className='flex font-light'>{option.description}</span>
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Option
