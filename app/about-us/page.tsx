import { Metadata } from 'next'
import NavBar from '../../components/ui/nav-bar'
import Footer from '@/components/ui/footer'
import { Fragment } from 'react'
import Hero from '@/components/sections/hero/hero'
import heroImgM from '../../public/assets/about/mobile/image-hero-whitecup.jpg'
import heroImgT from '../../public/assets/about/tablet/image-hero-whitecup.jpg'
import heroImgD from '../../public/assets/about/desktop/image-hero-whitecup.jpg'
import Commitment from '@/components/sections/about-us/commitment'
import Headquarters from '@/components/sections/about-us/headquarters'
import Quality from '@/components/sections/about-us/quality'

export const metadata: Metadata = {
	title: 'About Coffeeroasters ',
	description: 'History of Coffeeroasters company',
}

export default function Home() {
	return (
		<Fragment>
			<NavBar></NavBar>
			<main>
				<Hero
					title='About us'
					titleStyle='w-full pt-10 sm:py-10 text-3xl md:text-7xl font-bold'
					description='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
					linkText=''
					heroImgM={heroImgM}
					heroImgT={heroImgT}
					heroImgD={heroImgD}
					linkUrl='/create-plan'></Hero>
					<Commitment></Commitment>
					<Quality></Quality>
					<Headquarters></Headquarters>

			</main>
			<Footer></Footer>
		</Fragment>
	)
}
