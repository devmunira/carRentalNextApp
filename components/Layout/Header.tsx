"use client"
import Link from "next/link"
import Image from "next/image"
import { CustomButton , Book } from ".."
import {useState} from "react"

const Header = () => {
  return (
    <div className="absolute z-10 w-full">
       <div className=" mx-auto flex justify-between items-center sm:px-16 px-10 py-5">
            <Link href={'/'} 
            className="flex justify-center items-center">
                <Image 
                src={'/logo.png'} 
                alt="Logo Image" 
                height={18} 
                width={130}
                className="object-contain"></Image>
            </Link>

            <CustomButton 
            title="Book now"
            customStyles="text-primary-green font-bold rounded-full min-w-[130px]"
            btnType="button"
            ></CustomButton>
        </div>
    </div>
  )
}

export default Header