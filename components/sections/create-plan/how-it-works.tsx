import Link from 'next/link'

export default function HowItWorks() {
	const process = [
		{
			title: 'Pick your coffee',
			description:
				'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
		},
		{
			title: 'Choose the frequency',
			description:
				'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
		},
		{
			title: 'Receive and enjoy!',
			description:
				'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
		},
	]

	return (
		<section className='max-w-[1440px] mx-auto p-6 mb-24   '>
			<div className='flex flex-col md:flex-row p-6 lg:p-20 bg-light-grey rounded-lg '>
				{process.map((step, index) => (
					<div key={index} className='w-full pb-10'>
						<div className='hidden relative  items-center md:flex mb-16 '>
							<div className='z-0 rounded-full border-2 border-dark-cyan border-solid h-[31px] stroke-[2px] w-[31px]'>
								<hr
									className={` ${
										index === 2
											? 'hidden'
											: 'absolute left-4 right-0 mx-auto bg-pale-orange h-0.5 w-full bottom-1/2 transform translate-y-1/2 z-10'
									}`}
								/>
							</div>
						</div>
						<div className='flex flex-col justify-evenly text-center md:text-left md:w-2/3 lg:w-3/4'>
							<h2 className=' text-7xl font-bold text-pale-orange'>{`0${index + 1}`}</h2>
							<h3 className='font-bold text-2xl py-5 text-light-cream'>{step.title}</h3>
							<p className='text-sm text-light-cream'>{step.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
