import { getAllCars } from '@/api'
import { CarCard, FilterArea, Hero, SearchArea } from '@/components'
import Image from 'next/image'


export default async function Home() {
  const Cars = await getAllCars();
  return (
    <main className="overflow-hidden">
        <Hero></Hero>
        {/* Main Product Section Start */}
        <div className='py-5 px-10 sm:px-16 flex flex-col padding-x justify-start items-start'>
            {/* Section Heading */}
            <div className='flex flex-col flex-wrap justify-start items-start gap-5'>
              <h1 className='font-extrabold text-[40px] sm:text-[36px]'>Available Cars</h1>
              <p className='text-base text-gray-600'>Your Ideal Car Awaits: Discover Your Perfect Ride with Car Hunt.</p>
            </div>
            {/* Search Bar Area */}
            <div className='flex justify-between items-center w-full pt-10'>
              <SearchArea></SearchArea>
              <div className='flex justify-between items-center flex-wrap gap-5'>
                <FilterArea></FilterArea>
                <FilterArea></FilterArea>
              </div>
            </div>
            {/* Produc Area */}
            <section className='py-5 w-full'>
                {
                  (!Array.isArray(Cars) || Cars.length < 1 || !Cars) ?        
                  <div className='home__error-container'>
                    <Image src={'/no-state.svg'} width={200} height={100} alt='No-State-Image'></Image>
                    <h2 className='text-primary-green capitalize text-xl font-bold'>Sorry, no car found!</h2>
                    <p>{Cars?.message}</p>
                 </div> :

                  <div className='flex items-center flex-wrap justify-start gap-4 w-full'>
                      {
                        Cars.map((item,index) => (
                          <CarCard 
                          car={item} 
                          key={index}></CarCard>
                        ))
                      }
                  </div>


                }
            </section>
        </div>
    </main>
  )
}
