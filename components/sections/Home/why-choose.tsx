import Image from 'next/image'

const advantages = [
	{
		title: 'Best quality',
		description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
		icon: '/assets/home/desktop/icon-coffee-bean.svg',
	},
	{
		title: 'Exclusive benefits',
		description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
		icon: '/assets/home/desktop/icon-gift.svg',
	},
	{
		title: 'Free shipping',
		description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
		icon: '/assets/home/desktop/icon-truck.svg',
	},
]

const WhyChoose = () => {
	return (
		<section className=' max-w-[1440px] mx-auto p-6 '>
			<div className='flex items-center content-center'>
				<div className='bg-light-grey rounded-md flex items-center text-center content-center flex-col gap-6 p-6 h-[55rem] md:h-[35rem] lg:h-[30rem] text-light-cream'>
					<h2 className='font-bold text-2xl md:text-4xl mt-10'>Why Choose Us?</h2>
					<p className='font-barlow text-sm md:text-lg text-center w-full md:w-2/3'>
						A large part of our role is choosing which particular coffees will be featured in our range. This means
						working closely with the best coffee growers to give you a more impactful experience on every level.
					</p>
				</div>
			</div>
			<div className='-mt-[37rem] md:-mt-[16rem] lg:-mt-44 flex flex-col lg:flex-row justify-center gap-5 px-10 z-10 items-center'>
				{advantages.map((advantage, index) => {
					return (
						<div
							className='flex flex-col items-center content-center text-center gap-6 min-h-[24rem] md:min-h-[2rem] lg:min-h-[20rem] md:flex-row lg:flex-col p-6 pt-16 md:p-10 md:w-4/5 bg-dark-cyan text-light-cream rounded-lg'
							key={index}>
							<Image
								src={advantage.icon}
								alt={advantage.icon.split('/').pop()?.split('.')[0]!}
								width={72}
								height={72}></Image>
							<h3>{advantage.title}</h3>
							<p>{advantage.description}</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default WhyChoose
