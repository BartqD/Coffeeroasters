'use client'

import React, { useState } from 'react'
import Option from './option'
import { SelectionData, SelectionHeading } from '@/data/SelectionData'
import { AnimatePresence, motion } from 'framer-motion'
import { MouseEventHandler } from 'react'
import Link from 'next/link'

const SelectionProcess: React.FC = () => {
	const steps = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries']

	const [openSection, setOpenSection] = useState<string | null>(null)
	const [modalOpen, setIsModalOpen] = useState(false)
	const [nextSectionId, setNextSectionId] = useState<string | null>(steps[1])
	const [preferences, setPreferences] = useState('______')
	const [beanType, setBeanType] = useState('______')
	const [quantity, setQuantity] = useState('______')
	const [grindOption, setGrindOption] = useState('______')
	const [deliveries, setDeliveries] = useState('______')

	const toggleSection = (sectionId: string | null) => {
		if (sectionId === 'Grind Option' && preferences === 'Capsule') {
			setOpenSection(steps[4])
		} else {
			setOpenSection(openSection === sectionId ? null : sectionId)
		}

		if (sectionId !== null) {
			const element = document.getElementById(sectionId)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
			}
		}

		const currentIndex = steps.indexOf(sectionId || '')

		let nextIndex

		if (steps[3] && preferences === 'Capsule') {
			nextIndex = currentIndex + 2
		}

		nextIndex = currentIndex + 1
		const nextSectionId = nextIndex < steps.length ? steps[nextIndex] : null
		setNextSectionId(nextSectionId)
	}

	const handleModalOpen: MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault()
		setIsModalOpen(prevState => !prevState)
	}

	return (
		<section className='max-w-[1440px] mx-auto p-6 mb-24'>
			<div className='flex lg:mx-20 lg:gap-28'>
				<div className='sticky hidden lg:flex top-40 flex-col lg:w-[25%] h-max items-start'>
					{steps.map((step, index) => (
						<button
							key={index}
							disabled={step === 'Grind Option' && preferences === 'Capsule'}
							className={`flex gap-7 py-6 text-2xl text-left w-full font-bold font-fraunces border-b border-grey transition-opacity first:pt-0 last:border-b-0 hover:opacity-60 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:hover:opacity-20 ${
								openSection === step ? 'opacity-80 text-dark-cyan' : 'opacity-40'
							}`}
							onClick={() => toggleSection(step)}>
							<span>0{index + 1}</span>
							<span className='text-dark-grey'>{step}</span>
						</button>
					))}
				</div>

				<form className='flex flex-col w-full lg:w-[75%]'>
					<Option
						id={steps[0]}
						title={SelectionHeading.preferences}
						options={SelectionData.preferences}
						selectedTitle={setPreferences}
						isOpen={openSection === steps[0]}
						toggleSection={toggleSection}
						nextSectionId={nextSectionId}
					/>
					<Option
						id={steps[1]}
						title={SelectionHeading.coffeeType}
						options={SelectionData.coffeeType}
						selectedTitle={setBeanType}
						isOpen={openSection === steps[1]}
						toggleSection={toggleSection}
						nextSectionId={nextSectionId}
					/>
					<Option
						id={steps[2]}
						title={SelectionHeading.quantity}
						options={SelectionData.quantity}
						selectedTitle={setQuantity}
						isOpen={openSection === steps[2]}
						toggleSection={toggleSection}
						nextSectionId={nextSectionId}
					/>
					<Option
						id={steps[3]}
						title={SelectionHeading.grind}
						options={SelectionData.grind}
						selectedTitle={setGrindOption}
						isOpen={openSection === steps[3]}
						toggleSection={toggleSection}
						nextSectionId={nextSectionId}
						disabled={preferences === 'Capsule'}
					/>
					<Option
						id={steps[4]}
						title={SelectionHeading.deliver}
						options={SelectionData.deliver}
						selectedTitle={setDeliveries}
						isOpen={openSection === steps[4]}
						toggleSection={toggleSection}
						nextSectionId={nextSectionId}
					/>

					<div className='flex flex-col items-center gap-14 mt-28'>
						<div className='bg-dark-grey text-light-cream w-[90%] rounded-xl px-6 py-8'>
							<h3 className='mb-2 opacity-[50%] uppercase '>Order Summary</h3>
							<p className='text-2xl text-light-cream font-bold font-fraunces'>
								“I drink my coffee as <span className='text-dark-cyan'>{preferences}</span>, with a{' '}
								<span className='text-dark-cyan'>{beanType}</span> type of bean.{' '}
								<span className='text-dark-cyan'>{quantity}</span> ground ala{' '}
								<span className='text-dark-cyan'>{grindOption}</span>, sent to me{' '}
								<span className='text-dark-cyan'>{deliveries}</span>.”
							</p>
						</div>
						<button className='process-link w-[50%] md:w-[30%] font-fraunces' onClick={handleModalOpen}>
							Create my plan!
						</button>
					</div>
				</form>
			</div>

			<AnimatePresence>
				{modalOpen && (
					<div className='fixed flex items-center inset-0 z-20 justify-center w-full min-h-full bg-black bg-opacity-60'>
						<motion.div
							initial={{ y: -300, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className=' w-[327px] md:w-[540px] rounded-lg bg-light-cream '>
							<div className=' py-7 md:pt-14 md:pb-10 pl-6 md:pl-14 rounded-t-lg bg-dark-grey text-light-cream font-fraunces font-bold text-2xl md:text-4xl '>
								Order Summary
							</div>
							<div className='px-6 md:px-14 pt-10 pb-6 md:py-14'>
								<p className='pb-2 text-2xl text-grey font-bold font-fraunces'>
									“I drink my coffee as <span className='text-dark-cyan'>{preferences}</span>, with a{' '}
									<span className='text-dark-cyan'>{beanType}</span> type of bean.{' '}
									<span className='text-dark-cyan'>{quantity}</span> ground ala{' '}
									<span className='text-dark-cyan'>{grindOption}</span>, sent to me{' '}
									<span className='text-dark-cyan'>{deliveries}</span>.”
								</p>
								<p className=' text-dark-grey text-opacity-80 text-sm mb-6 md:mb-12'>
									Is this correct? You can proceed to checkout or go back to plan selection if something is off.
									Subscription discount codes can also be redeemed at the checkout.{' '}
								</p>
								<div className='flex items-center justify-center gap-5'>
									<span className='hidden md:block text-dark-grey font-fraunces font-bold text-4xl '>
										$14.00 / mo
									</span>
									<Link
										href='/'
										className='process-link'>
										Checkout <span className='md:hidden'>- $14.00 / mo</span>
									</Link>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	)
}

export default SelectionProcess
