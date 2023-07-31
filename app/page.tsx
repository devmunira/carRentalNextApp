import { getAllCars } from '@/api'
import { FilterArea, Hero, SearchArea } from '@/components'
import Image from 'next/image'


export default async function Home() {
  const Cars = await getAllCars();
  return (
    <main className="overflow-hidden">
        <Hero></Hero>
        {/* Main Product Section Start */}
        <div className='py-5 px-6 sm:px-16 flex flex-col justify-start items-start'>
            {/* Section Heading */}
            <div className='flex flex-col flex-wrap justify-start items-start gap-5'>
              <h1 className='font-extrabold text-[40px] sm:text-[36px]'>Car Catelogue</h1>
              <p className='text-base text-gray-600'>Find your desire car from here. Best of Luck!</p>
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
            <section className='px-6 sm:px-16 py-10 w-full'>
                {
                  (!Array.isArray(Cars) || Cars.length < 1 || !Cars) ?        
                  <div className='home__error-container'>
                    <Image src={'/no-state.svg'} width={200} height={100} alt='No-State-Image'></Image>
                    <h2 className='text-primary-green capitalize text-xl font-bold'>Sorry, no car found!</h2>
                    <p>{Cars?.message}</p>
                 </div> :
                  <div className='flex justify-between items-center gap-10 w-full sm:flex-col max-w-1/4 sm:max-w-1/1'>
                    
                  </div>
                }
            </section>
        </div>
    </main>
  )
}
