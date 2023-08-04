"use client"

import {singleCarProps} from '@/types'
import Image from 'next/image';
import React, {useState} from 'react'
import heroImage from '../public/car.png'
import {CustomButton, Model} from '.';
import {calculateCarRent} from '@/api/Car/calculateRent';
import {BsFuelPumpFill} from "react-icons/bs"
import {GiFlatTire} from "react-icons/gi"
import {TbSteeringWheel} from "react-icons/tb"

const CarCard = ({car} : {
    car: singleCarProps
}) => {
    const {
        city_mpg,
        class: carClass,
        combination_mpg,
        cylinders,
        displacement,
        fuel_type,
        highway_mpg,
        make,
        model,
        drive,
        year,
        transmission
    } = car;

    const [isOpen,
        setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <div className='car-card w-[325px]'>

            <div className='car-car__image flex justify-center w-full py-5'>
                <Image
                    src={heroImage}
                    alt={make}
                    width={200}
                    height={150}
                    className='object-contain'></Image>
            </div>

            <div className='w-full gap-2 px-4 flex flex-col justify-start items-start border-t border-gray-300 py-5'>
                <div className="car-card__content">
                    <h2 className="car-card__content-title">
                        {make}
                        {model}
                    </h2>
                </div>
                <div className='relative flex w-[75%]'>
                    <div className='flex group-hover:invisible w-full justify-between text-balck'>
                        <div className='flex items-center justify-start gap-1'>
                            <TbSteeringWheel></TbSteeringWheel>
                            <p className='text-[14px] leading-[17px] font-bold'>
                                {transmission === "a"
                                    ? "Auto"
                                    : "Manual"}
                            </p>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <GiFlatTire></GiFlatTire>
                            <p className="car-card__icon-text font-bold">{drive.toUpperCase()}</p>
                        </div>

                        <div className="flex items-center justify-start gap-1">
                            <BsFuelPumpFill></BsFuelPumpFill>
                            <p className="car-card__icon-text font-bold">{city_mpg}</p>
                        </div>

                    </div>
                </div>


                <div className="flex justify-between items-center gap-2 w-full pt-3">
                    <p className='flex text-[20px] leading-[38px] font-extrabold'>
                        $
                        {carRent}
                        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                    </p>
                    <CustomButton 
                    title="View Deal"
                    customStyles="bg-primary-green text-white text-[12px] font-bold rounded-sm shadow-sm"
                    handleClick={handleToggle}
                    ></CustomButton>
                </div>

            </div>

            <Model
            isOpen = {isOpen}
            closeModal={() => setIsOpen(false)}
            car={car}
            ></Model>
            </div>
        </>
    )
}

export default CarCard