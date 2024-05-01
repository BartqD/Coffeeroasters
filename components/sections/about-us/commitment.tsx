import Image from 'next/image'
import commitmentImg from '../../../public/assets/about/desktop/image-commitment.jpg'

export default function Commitment() {
	return (
		<section className=' max-w-[1440px] mx-auto px-6 pb-24 lg:px-24'>
			<div className='flex flex-col md:flex-row w-full items-center gap-12'>
				<div className='relative flex justify-center w-full h-[400px] md:w-[281px] md:h-[470px] lg:h-[520px] lg:w-[445px] md:mr-16 lg:mr-32'>
					<Image
						alt=''
						fill
                        className='rounded-lg'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						src={commitmentImg}></Image>
				</div>
				<div className='flex flex-col md:w-1/2 justify-center content-center text-center text-dark-grey md:text-left'>
					<h2 className='mb-7 lg:mb-8 font-bold text-3xl lg:text-4xl'>Our commitment </h2>
					<p>
						We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for
						you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the
						specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and
						opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global
						community of farmers through with well above fair-trade benchmarks. We also offer training, support farm
						community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each
						lot to highlight tasting profiles distinctive to their native growing region.
					</p>
				</div>
			</div>
		</section>
	)
}
