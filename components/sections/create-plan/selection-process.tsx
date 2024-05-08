'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { SelectionData } from '@/data/SelectionData'
import ScrollIntoView from 'react-scroll-into-view'

const SelectionProcess = () => {
	const [openSection, setOpenSection] = useState<number | null>(null)

	const steps = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries']

	const toggleSection = (sectionId: number | null) => {
		setOpenSection(openSection === sectionId ? null : sectionId)
	}



	return (
		<section className='max-w-[1440px] mx-auto p-6 mb-24'>
			<div className='flex lg:mx-20 lg:gap-28'>
				<div className='sticky hidden lg:flex top-40 flex-col lg:w-[25%] h-max items-start'>
					{steps.map((step, index) => (
						<ScrollIntoView
							smooth={true}
							scrollOptions={{
								behavior: 'smooth',
								block: 'nearest',
								inline: 'nearest',
							}}
							selector={`#section-${index}`}>
							{' '}
							<button
								key={uuidv4()}
								className={`flex gap-7 py-6 text-2xl w-full font-bold font-fraunces ${
									openSection === index ? 'opacity-80' : 'opacity-40'
								} border-b border-grey transition-opacity first:pt-0 last:border-b-0 hover:opacity-60 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:hover:opacity-20 `}
								onClick={() => toggleSection(index)}>
								<span className='text-grey'>0{index + 1}</span>
								<span className='text-dark-grey'>{step}</span>
							</button>
						</ScrollIntoView>
					))}
				</div>

				<form className='flex flex-col w-full lg:w-[75%]'>
					{Object.values(SelectionData).map((category, index) => (
						<div id={`section-${index}`} key={uuidv4()} className='pb-6'>
							<ScrollIntoView
								smooth={true}
								scrollOptions={{
									behavior: 'smooth',
									block: 'nearest',
									inline: 'nearest',
								}}
								selector={`#section-${index + 1}`}>
								{' '}
								<button className='flex items-center justify-between w-full' onClick={() => toggleSection(index)}>
									<span className='font-bold font-fraunces text-grey text-3xl'>{category[0].heading}</span>
									<motion.span
										key={index}
										initial={{ rotate: 0 }}
										animate={{ rotate: openSection === index ? 180 : 0 }}
										transition={{ duration: 0.5 }}>
										<Image width={18} height={12} src={'/assets/plan/desktop/icon-arrow.svg'} alt='arrow icon' />
									</motion.span>
								</button>{' '}
							</ScrollIntoView>
							<AnimatePresence>
								{openSection === index && (
									<motion.div
										initial={{ maxHeight: 0, opacity: 0 }}
										animate={{ maxHeight: 1000, opacity: 1 }}
										exit={{ opacity: 1, maxHeight: 1000 }}
										transition={{ duration: 1, ease: 'easeInOut' }}
										className='flex flex-col md:flex-row justify-between overflow-hidden md:gap-2.5 lg:gap-5 w-full'>
										{category.slice(1).map((item, itemIndex) => (
											<button
												key={itemIndex}
												className='flex flex-col my-4 md:my-8 p-7 rounded-xl text-left md:h-[300px] bg-light-yellow hover:bg-light-salmon gap-5'>
												<span className='font-fraunces text-2xl font-bold'>{item.title}</span>
												<span className='flex font-light'>{item.description}</span>
											</button>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</form>
			</div>
		</section>
	)
}

export default SelectionProcess
