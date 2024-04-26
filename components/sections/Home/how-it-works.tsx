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
		<section className='max-w-[1440px] mx-auto px-6 py-28 md:px-10 md:py-32 lg:px-40 lg:py-50'>
			<div className='flex flex-col'>
				<h2 className='flex justify-center md:justify-start pb-16 font-bold text-2xl '>How it works</h2>
			</div>
			<div className='flex flex-col md:flex-row pb-3'>
				{process.map((step, index) => (
					<div key={index} className='w-full pb-10'>
						<div className='hidden items-center md:flex pb-16'>
							<div className='shrink-0 rounded-full border-2 border-dark-cyan border-solid h-[31px] stroke-[2px] w-[31px]' />
							<hr className={` ${index === 2 ? 'hidden' : 'bg-pale-orange h-0.5 w-full'}`} />
						</div>
						<div className='flex flex-col justify-evenly text-center md:text-left md:w-2/3 lg:w-3/4'>
							<h2 className=' text-7xl font-bold text-pale-orange'>{`0${index + 1}`}</h2>
							<h3 className='font-bold text-2xl py-5'>{step.title}</h3>
							<p className='text-sm'>{step.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center md:justify-start w-full md:w-3/4 lg:w-[500px] pt-6 pb-20'>
				<Link href='/plan' className='process-link'>
					Create your plan
				</Link>
			</div>
		</section>
	)
}
