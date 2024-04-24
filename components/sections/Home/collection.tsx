import Image from "next/image"


export default function Collection() {



    const coffeeCollection = [
        {
            title: 'Gran Espresso',
            description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
            img: '/assets/home/desktop/image-gran-espresso.png'
        },
        {
            title: 'Planalto',
            description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
            img: '/assets/home/desktop/image-planalto.png'
        },
        {
            title: 'Picollo',
            description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
            img: '/assets/home/desktop/image-picollo.png'
        },
        {
            title: 'Danche',
            description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
            img: '/assets/home/desktop/image-danche.png'
        }
    ]

    return (
        <section className="mx-auto p-6">
            <div className="px-10">
                <div className="flex justify-center">
                    <h2 className="font-fraunces font-bold text-3xl md:text-8xl lg:text-9xl md:-mb-16 text-transparent bg-clip-text bg-gradient-to-b from-black md:from-slate-400 to-white">our collection</h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-center">
                    {coffeeCollection.map((collection, index) => (
                        <div className="flex flex-col md:flex-row lg:flex-col p-6">
                        <div>
                            <Image
                                src={collection.img}
                                alt="coffeeroasters-product"
                                className="object-cover h-full w-full px-10"
                                layout="fill"
                            />
                        </div>
                        <div className="flex flex-col justify-start">
                            <h1 className="font-fraunces text-center md:text-left lg:text-center text-gray-50 font-bold text-xl px-2 pt-5">
                            {title}
                            </h1>
                            <p className="font-barlow text-center md:text-left lg:text-center text-gray-50 text-sm px-2 py-5">{description}</p>
                        </div>
                    </div>
                      ))}
                </div>
            </div>
        </section>
    )
}

