'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { SelectionData } from '@/data/SelectionData'
import ScrollIntoView from 'react-scroll-into-view'

const SelectionProcess = () => {
	const [openSection, setOpenSection] = useState<number | null>(0)
	



	const steps = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries']

	const toggleSection = (sectionId: number | null) => {
		setOpenSection(openSection === sectionId ? null : sectionId)
	}

	const openSectionVariants = {
		initial: { maxHeight: 0, opacity: 0 },
		open: {
			opacity: 1,
			maxHeight: 1000,
			transition: {
				duration: 1,
			},
		},
		closed: {
			opacity: 0,
			maxHeight: 0,
			transition: {
				duration: 1,
			},
		},
	}

	return (
		<section className='max-w-[1440px] mx-auto p-6 mb-24'>
			<div className='flex lg:mx-20 lg:gap-28'>
				<div className='sticky hidden lg:flex top-40 flex-col lg:w-[25%] h-max items-start'>
					{steps.map((step, index) => (
						<button
							key={uuidv4()}
							className={`flex gap-7 py-6 text-2xl text-left w-full font-bold font-fraunces border-b border-grey transition-opacity first:pt-0 last:border-b-0 hover:opacity-60 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:hover:opacity-20 ${
								openSection === index ? 'opacity-80' : 'opacity-40'
							}  ${openSection === index ? 'text-dark-cyan' : ''}`}
							onClick={() => toggleSection(index)}>
							<span>0{index + 1}</span>
							<span className='text-dark-grey'>{step}</span>
						</button>
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
									<span className='font-bold font-fraunces text-center text-grey text-3xl'>{category[0].heading}</span>
									<AnimatePresence>
										<motion.span
											className='relative w-5 h-3'
											key={index}
											initial={{ rotate: 0 }}
											animate={{ rotate: openSection === index ? 180 : 0 }}
											transition={{ duration: 0.5 }}>
											<Image fill src={'/assets/plan/desktop/icon-arrow.svg'} alt='arrow icon' />
										</motion.span>
									</AnimatePresence>
								</button>{' '}
							</ScrollIntoView>
							<AnimatePresence mode={'wait'}>
								{openSection === index && (
									<motion.div
										initial='initial'
										animate='open'
										exit='closed'
										variants={openSectionVariants}
										className='flex flex-col md:flex-row justify-between overflow-hidden md:gap-2.5 lg:gap-5 w-full'>
										{category.slice(1).map((item, itemIndex) => (
											<motion.button
												variants={openSectionVariants}
												key={itemIndex}
												className='flex flex-col my-4 md:my-8 p-7 rounded-xl text-left md:h-[300px] bg-light-yellow hover:bg-light-salmon gap-5'>
												<span className='font-fraunces text-2xl font-bold'>{item.title}</span>
												<span className='flex font-light'>{item.description}</span>
											</motion.button>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}

					<div className='flex flex-col items-center gap-14 mt-28'>
						<div className='bg-dark-grey text-light-cream w-[90%] rounded-xl px-6 py-8'>
							<h3 className='mb-2 opacity-[50%] uppercase '>Order Summary</h3>
							<p className='text-2xl text-light-cream'>
								“I drink my coffee as <span className='text-dark-cyan'>{}</span>, with a{' '}
								<span className='text-dark-cyan'>{}</span> type of bean. <span className='text-dark-cyan'>{}</span>{' '}
								ground ala <span className='text-dark-cyan'>{}</span>, sent to me{' '}
								<span className='text-dark-cyan'>{}</span>.”
							</p>
						</div>

						<button className='process-link w-[50%] md:w-[30%] font-fraunces'>Create my plan!</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default SelectionProcess
