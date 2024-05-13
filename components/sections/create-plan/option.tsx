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
	isOpen: boolean
	toggleSection: (sectionId: string | null) => void
	nextSectionId: string | null
	disabled?: boolean
}

const Option = ({ id, title, options, selectedTitle, isOpen, toggleSection, nextSectionId, disabled }: Props) => {
	const [isActive, setIsActive] = useState(-1)

	useEffect(() => {
		const handleSelected = () => {
			if (disabled) {
				selectedTitle('_____')
			} else if (isActive !== -1 && !disabled) {
				selectedTitle(options[isActive].title)
			} else {
				selectedTitle('_____')
			}
		}
		handleSelected()
	}, [isActive, options, selectedTitle, disabled])

	return (
		<div id={id} className='pb-6'>
			<button
				type='button'
				disabled={disabled}
				className='flex items-center justify-between w-full mb-10 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:hover:opacity-20'
				onClick={e => {
					e.preventDefault(), toggleSection(id)
				}}>
				<span className='font-bold font-fraunces text-center text-grey text-3xl'>{title}</span>
				<AnimatePresence>
					<motion.span
						className='relative w-5 h-3'
						initial={{ rotate: 0 }}
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.3 }}>
						<Image fill src={'/assets/plan/desktop/icon-arrow.svg'} alt='arrow icon' />
					</motion.span>
				</AnimatePresence>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ maxHeight: 0, opacity: 0 }}
						animate={{ maxHeight: 1000, opacity: 1 }}
						exit={{ maxHeight: 0, opacity: 0 }}
						transition={{ duration: 1 }}
						className={`flex flex-col md:flex-row gap-4 md:gap-[10px] `}>
						{options.map((option, index) => (
							<button
								type='button'
								key={index}
								onClick={() => {
									setIsActive(index)
									toggleSection(nextSectionId)
								}}
								className={`flex flex-col my-4 md:my-8 p-7 rounded-xl text-left md:h-[300px] gap-5 trasition duration-300  ${
									isActive === index ? 'bg-dark-cyan text-light-cream' : 'bg-light-yellow hover:bg-light-salmon'
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
