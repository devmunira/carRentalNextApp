"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams , useRouter } from 'next/navigation'
import { Listbox, Transition } from "@headlessui/react";
import { filterProps } from "@/types";
import { updateQueryParams } from './../utils/query';
import { stringify } from 'querystring';


export default function FilterArea({ title, options }: filterProps) {
  const [selected, setSelected] = useState(options[0]); 
  const router = useRouter()


  const updateQueryParams = (query: string, val: string) => {    
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(query, val);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };
  
  

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateQueryParams(title.toLowerCase() , e.value)
        }}
      >
        <div className='relative w-fit z-10'>
          {/* Button for the listbox */}
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-green text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )} 
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}