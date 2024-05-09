'use client'

import React, { useState} from 'react'
import { SelectionData, SelectionHeading } from '@/data/SelectionData'
import Option from './option'

const SelectionProcess: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null)
    const [preferences, setPreferences] = useState('______')
    const [beanType, setBeanType] = useState('______')
    const [quantity, setQuantity] = useState('______')
    const [grindOption, setGrindOption] = useState('______')
    const [deliveries, setDeliveries] = useState('______')

    const steps = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries']

    const toggleSection = (sectionId: string | null) => {
        setOpenSection(openSection === sectionId ? null : sectionId)
        if (sectionId !== null) {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }
    }

    return (
        <section className='max-w-[1440px] mx-auto p-6 mb-24'>
            <div className='flex lg:mx-20 lg:gap-28'>
                <div className='sticky hidden lg:flex top-40 flex-col lg:w-[25%] h-max items-start'>
                    {steps.map((step, index) => (
                        <button
                            key={step}
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
                    />
                    <Option
                        id={steps[1]}
                        title={SelectionHeading.coffeeType}
                        options={SelectionData.coffeeType}
                        selectedTitle={setBeanType}
                    />
                    <Option
                        id={steps[2]}
                        title={SelectionHeading.quantity}
                        options={SelectionData.quantity}
                        selectedTitle={setQuantity}
                    />
                    <Option
                        id={steps[3]}
                        title={SelectionHeading.grind}
                        options={SelectionData.grind}
                        selectedTitle={setGrindOption}
                    />
                    <Option
                        id={steps[4]}
                        title={SelectionHeading.deliver}
                        options={SelectionData.deliver}
                        selectedTitle={setDeliveries}
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

                        <button className='process-link w-[50%] md:w-[30%] font-fraunces'>Create my plan!</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SelectionProcess;
