import { Metadata } from 'next'
import NavBar from '../../components/ui/nav-bar'
import Footer from '@/components/ui/footer'
import { Fragment } from 'react'
import Hero from '@/components/sections/hero/hero'
import heroImgM from '../../public/assets/plan/mobile/image-hero-blackcup.jpg'
import heroImgT from '../../public/assets/plan/tablet/image-hero-blackcup.jpg'
import heroImgD from '../../public/assets/plan/desktop/image-hero-blackcup.jpg'
import HowItWorks from '@/components/sections/create-plan/how-it-works'


export const metadata: Metadata = {
	title: 'Subscription plans',
	description: 'Build a subscription plan for the coffees',
}


export default function Home() {
	return (
		<Fragment>
			<NavBar></NavBar>
			<main>
				<Hero
					title='Create a plan'
					titleStyle='w-full  pt-10 sm:py-10 text-3xl md:text-7xl font-bold'
					description='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
					linkText=''
					heroImgM={heroImgM}
					heroImgT={heroImgT}
					heroImgD={heroImgD}
					linkUrl='/create-plan'></Hero>
					<HowItWorks></HowItWorks>
			</main>
			<Footer></Footer>
		</Fragment>
	)
}
