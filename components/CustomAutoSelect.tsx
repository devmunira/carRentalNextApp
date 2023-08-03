"use client";

import { ManufecturerComboBoxTypes } from '@/types'
import React, { useState , Fragment } from 'react'
import { Combobox , Transition } from '@headlessui/react'
import { manufacturers } from '@/constant';
import Image from 'next/image';

const ustomAutoSelect : React.FC<ManufecturerComboBoxTypes> = ({manufecturer , setmanufecturer}) => {
  //set checkbox selected value for generate UI
  const [query, setquery] = useState('');

  // get manufecturer data based on selected query
  const filterManufectuers = query === '' ? manufacturers :
  manufacturers.filter((item) => {
    return item.toLowerCase().replace(/\s+/g , '').includes(query.toLowerCase().replace(/\s+/g , ""));
  });


  return (
    <div className='search-manufacturer'>
       <Combobox value={manufecturer} onChange={setmanufecturer}>
        <div className='realtive w-full'>
        <Combobox.Button className='absolute top-[14px]'>
            <Image src={'/car-logo.svg'} alt='Manufecrer Logo' width={20} height={20} className='ml-4'></Image>
        </Combobox.Button>

        <Combobox.Input onChange={(e)=>setquery(e.target.value)} 
        className={'search-manufacturer__input'} 
        placeholder='Tesla'             
        displayValue={(item: string) => item}
        ></Combobox.Input>

        <Transition
        as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='apacity-100'
        leaveTo='opacity-0'
        afterLeave={()=>setquery("")}
        >
        <Combobox.Options
          className='absolute mt-1 z-50 h-[200px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
          static
        >
          {
            filterManufectuers.length === 0 && query !== '' ? 
            <Combobox.Option
            value={query}
            className= 'search-manufacturer__option'
            >
            No Data Found!
            </Combobox.Option> : 
            filterManufectuers.map((item,index) => (
              <Combobox.Option
                key={index}
                value={item}
                className={({active}) => `relative search-manufacturer__option ${active ? "bg-primary-green text-white" : "text-gray-500"}`}
                >
                  {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                </Combobox.Option>
            )) 
          }
        </Combobox.Options>
        </Transition>
        
        </div>
    </Combobox>
    </div>
  )
}

export default ustomAutoSelect