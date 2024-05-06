import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { SelectionData } from '@/data/SelectionData'

const SelectionProcess = () => {
	const steps = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries']

	return (
		<section className='max-w-[1440px] mx-auto p-6 mb-24'>
			<div className='flex gap-32'>
				<div className='sticky hidden lg:flex top-40 flex-col w-[20%] h-max items-start '>
					{steps.map((step, index) => (
						<button
							key={uuidv4()}
							className='flex gap-7  py-6 text-2xl font-bold font-fraunces opacity-40 border-b border-grey transition-opacity first:pt-0 last:border-b-0 hover:opacity-60 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:hover:opacity-20 [&>span:first-child]:first:text-dark-cyan'>
							<span className='text-grey'>0{index + 1}</span>
							<span className='text-dark-grey'>{step}</span>
						</button>
					))}
				</div>

				<form className='flex flex-col  '>
					{Object.values(SelectionData).map((category, index) => (
						<div key={uuidv4()} className='w-[730px]'>
							<button className='flex items-center justify-between w-full'>
								<span className='font-bold font-fraunces text-grey text-3xl'>{category[0].heading}</span>
								<span className=''>
									<Image width={18} height={12} src={'/assets/plan/desktop/icon-arrow.svg'} alt='arrow icon' />
								</span>
							</button>
							<div className='flex items-start justify-between gap-5 w-full h-[250px] '>
								{category.slice(1).map((item, itemIndex) => (
									<button className='flex flex-col my-8 p-7 rounded-xl text-left bg-light-yellow
                                    gap-5' key={uuidv4()}>
										<span className='font-fraunces text-2xl font-bold'>{item.title}</span>
										<span className='flex font-light'>{item.description}</span>
									</button>
								))}
							</div>
						</div>
					))}
				</form>
			</div>
		</section>
	)
}

export default SelectionProcess
