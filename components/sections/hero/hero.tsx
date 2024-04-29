import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface HeroProps {
	title: string
	description: string
	linkUrl: string
	heroImgM: StaticImageData
	heroImgT: StaticImageData
	heroImgD: StaticImageData
	linkText: string | undefined
	titleStyle: string
}

const Hero: React.FC<HeroProps> = ({
	title,
	description,
	linkUrl,
	heroImgM,
	heroImgT,
	heroImgD,
	linkText,
	titleStyle,
}) => {
	return (
		<section className='flex pb-24 mt-20'>
			<div className='max-w-[1440px] flex flex-col w-full p-6 mx-auto min-h-[400px] h-[600px]  '>
				<div className='z-10 flex absolute flex-col md:justify-centermd:h-auto gap-y-10 left-0 md:left-auto text-center md:text-left text-light-cream p-10 w-full md:w-3/4 lg:w-[600px]'>
					<div>
						<h1 className={titleStyle}>{title}</h1>
					</div>
					<div>
						<p className='font-barlow px-6 md:px-0'>{description}</p>
					</div>
					{linkText && (
						<div className='flex justify-center md:justify-start '>
							<Link
								className='process-link'
								href={linkUrl}>
								{linkText}
							</Link>
						</div>
					)}
				</div>
				<div className='z-0 relative w-full min-h-[400px] h-[500px] overflow-hidden'>
					<Image
						className='rounded-lg'
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						fill={true}
						src={heroImgM}
						alt='coffee cup'
						loading = 'eager'
					/>
					<Image
						className='hidden lg:hidden md:flex rounded-lg'
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						fill={true}
						src={heroImgT}
						alt='coffee cup'
						loading = 'eager'
					/>
					<Image
						className='hidden lg:flex rounded-lg'
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						fill={true}
						src={heroImgD}
						alt='coffee cup'
						loading = 'eager'
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
