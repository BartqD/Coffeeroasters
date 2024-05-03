import ukIcon from '../../../public/assets/about/desktop/illustration-uk.svg'
import canadaIcon from '../../../public/assets/about/desktop/illustration-canada.svg'
import australiaIcon from '../../../public/assets/about/desktop/illustration-australia.svg'
import Image from 'next/image'

export default function Headquarters() {
	const locations = [
		{
			icon: ukIcon,
			country: 'United Kingdom',
			street: '68 Asfordby Rd',
			city: 'Alcaston',
			postalCode: 'SY6 1YA',
			phone: '+44 1241 918425',
		},
		{
			icon: canadaIcon,
			country: 'Canada',
			street: '1528 Eglinton Avenue',
			city: 'Toronto',
			postalCode: 'Ontario M4P 1A6',
			phone: '+1 416 485 2997',
		},
		{
			icon: australiaIcon,
			country: 'Australia',
			street: '36 Swanston Street',
			city: 'Kewell',
			postalCode: 'Victoria',
			phone: '+61 4 9928 3629',
		},
	]

	return (
		<section className=' max-w-[1440px] mx-auto p-6 mb-28 lg:px-40'>

			<div className='text-2xl text-center md:text-left mb-16 text-grey font-bold'>
				<h2>Our headquarters</h2>
			</div>
			<div className='flex items-center content-center flex-col md:justify-start gap-16 lg:gap-32  md:flex-row '>
				{locations.map((location, index) => {
					return (
						<div key={index} className='flex items-center content-center md:items-left  text-dark-grey'>
							<div className='flex flex-col items-center md:items-start content-center gap-10'>
								<div className='relative w-10 h-12 md:w-12'>
									<Image fill alt={`${location.country} icon`} src={location.icon}></Image>
								</div>
								<div className='text-center md:text-left'>
									<h3 className='text-3xl font-bold mb-5'>{location.country}</h3>
									<ul className='text-md'>
										<li>{location.street}</li>
										<li>{location.city}</li>
										<li>{location.postalCode}</li>
										<li>{location.phone}</li>
									</ul>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
