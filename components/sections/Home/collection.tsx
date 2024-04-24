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
            img: '/assets/home/desktop/image-piccollo.png'
        },
        {
            title: 'Danche',
            description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
            img: '/assets/home/desktop/image-danche.png'
        }
    ]

    return (
        <section className=" max-w-[1440px] mx-auto p-6">
            <div className="px-10">
                <div className="flex justify-center">
                    <h2 className="font-bold text-3xl md:text-8xl lg:text-9xl md:-mb-16 text-transparent bg-clip-text bg-gradient-to-b from-black md:from-slate-400 to-white">our collection</h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-center">
                    {coffeeCollection.map((collection, index) => (
                        <div key={index} className="flex flex-col md:flex-row lg:flex-col p-6">
                      
                            <Image
                                src={collection.img}
                                alt={`coffee:${collection.title}`}
                                className="px-10"
                                width={452}
                                height={356}
                                quality={70}
                            />
                      
                        <div className="flex flex-col justify-start">
                            <h3 className="px-2 pt-5 text-center md:text-left text-xl lg:text-center text-dark-grey font-bold  ">
                            {collection.title}
                            </h3>
                            <p className="px-2 py-5 text-center md:text-left lg:text-center text-dark-grey text-base ">{collection.description}</p>
                        </div>
                    </div>
                      ))}
                </div>
            </div>
        </section>
    )
}

