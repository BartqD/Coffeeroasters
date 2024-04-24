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
		<section className='flex pb-24'>
			<div className='max-w-[1440px] flex flex-col w-full p-6 mx-auto min-h-[400px] h-[600px]  text-white '>
				<div className='z-10 flex absolute flex-col md:justify-centermd:h-auto gap-y-10 left-0 md:left-auto text-center md:text-left text-lightCream p-10 w-full md:w-3/4 lg:w-[600px]'>
					<div>
						<h1 className={titleStyle}>{title}</h1>
					</div>
					<div>
						<p className='font-barlow px-6 md:px-0'>{description}</p>
					</div>
					{linkText && (
						<div className='flex justify-center md:justify-start '>
							<Link
								className='text-sm font-bold rounded-md bg-dark-cyan p-3 hover:bg-light-cyan duration-300  text-center w-1/2 md:w-2/5 lg:w-2/5'
								href={linkUrl}>
								{linkText}
							</Link>
						</div>
					)}
				</div>
				<div className='z-0 relative w-full min-h-[400px] h-[600px] overflow-hidden'>
					<Image
						className='rounded-lg'
						objectFit='cover'
						objectPosition='center'
						layout='fill'
						src={heroImgM}
						alt='coffee cup'
					/>
					<Image
						className='hidden lg:hidden md:flex rounded-lg'
						objectFit='cover'
						objectPosition='center'
						layout='fill'
						src={heroImgT}
						alt='coffee cup'
					/>
					<Image
						className='hidden lg:flex rounded-lg'
						objectFit='cover'
						objectPosition='center'
						layout='fill'
						src={heroImgD}
						alt='coffee cup'
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
