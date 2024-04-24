import NavBar from '../components/nav/nav-bar'
import { Fragment } from 'react'
import Hero from '@/components/sections/hero/hero'
import heroImgM from '../public/assets/home/mobile/image-hero-coffeepress.jpg'
import heroImgT from '../public/assets/home/tablet/image-hero-coffeepress.jpg'
import heroImgD from '../public/assets/home/desktop/image-hero-coffeepress.jpg'
import Collection from '@/components/sections/Home/collection'

export default function Home() {
	return (
		<Fragment>
			<NavBar></NavBar>
			<main>
				<Hero
					title='Great coffee made simple.'
					titleStyle='w-full  pt-10 sm:py-10 text-3xl md:text-7xl font-bold'
					description='Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
					linkText='Create your plan'
					heroImgM={heroImgM}
					heroImgT={heroImgT}
					heroImgD={heroImgD}
					linkUrl='/plan'></Hero>
					
					<Collection></Collection>
			</main>
		</Fragment>
	)
}
