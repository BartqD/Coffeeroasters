import qualityImgD from '../../../public/assets/about/desktop/image-quality.jpg'
import qualityImgT from '../../../public/assets/about/tablet/image-quality.jpg'
import qualityImgM from '../../../public/assets/about/mobile/image-quality.jpg'

import Image from 'next/image'

const Quality = () => {
	return (
		<section className='max-w-[1440px] relative mx-auto mt-20 md:mt-40 p-6'>
			<div className='absolute z-10 w-[279px] h-[156px] md:w-[573px] md:h-[320px] lg:h-[474px] lg:w-[445px] left-1/2 lg:left-3/4  -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/4'>
				<Image
					className='flex md:hidden lg:hidden rounded-lg'
					sizes='(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 100vw'
					style={{ objectFit: 'cover', objectPosition: 'left' }}
					fill
					alt='coffee in a mug'
					src={qualityImgM}></Image>
				<Image
					className=' hidden md:flex lg:hidden rounded-lg'
					sizes='(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 100vw'
					style={{ objectFit: 'contain', objectPosition: 'center' }}
					fill
					alt='coffee in a mug'
					src={qualityImgT}></Image>
				<Image
					className='hidden lg:flex rounded-lg'
					sizes='(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 100vw'
					style={{ objectFit: 'cover', objectPosition: 'center' }}
					fill
					alt='coffee in a mug'
					src={qualityImgD}></Image>
			</div>
			<div className='flex flex-col justify-center lg:justify-start items-center lg:items-start lg:px-20 text-center lg:text-left gap-10 text-light-cream p-6 w-full  h-[30rem] md:h-[35rem] lg:h-[30rem] z-0 rounded-lg bg-quality-bgM md:bg-quality-bgT lg:bg-quality-bgD bg-cover '>
				<h2 className='font-bold text-2xl mt-10 lg:w-1/2'>Uncompromising quality</h2>
				<p className='lg:w-1/2'>
					Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on
					our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of
					coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so
					that brewing is easy and enjoyable.
				</p>
			</div>
		</section>
	)
}

export default Quality
