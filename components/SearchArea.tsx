"use client"
import React , {useState , FormEvent} from 'react'
import { CustomAutoSelect } from '.'
import Image from 'next/image';
import { useRouter } from "next/navigation";



const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchArea = () => {
  //Get Manufecturaer State for Search by manufecture
  const [manufecturer, setmanufecturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()
  let isLoading = false;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoading = true;

    if (manufecturer.trim() === "" && model.trim() === "") {
      return alert("Please provide Manufecturer & Model Value");
    }

    updateSearchParams(model.toLowerCase(), manufecturer.toLowerCase());
    isLoading = false;
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("make", manufacturer);
    } else {
       searchParams.delete("make");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname , {scroll: false});
  };


  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className='searchbar__item'>
            <CustomAutoSelect
            manufecturer={manufecturer}
            setmanufecturer={setmanufecturer}
            ></CustomAutoSelect>
            <SearchButton otherClasses='sm:hidden' />
        </div>

        <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input text-gray'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchArea