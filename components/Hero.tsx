"use client";

import React from 'react'
import {CustomButton} from './'
import Image from 'next/image';

const Hero = () => {
    // handle Scroll func for hero  section btn
    const handleScroll = () => {}
    return (
        <div className='hero'>
            <div className='flex-1 padding-x pt-36'>
                <h1 className='hero__title'>
                    Find , book or rent a car - quickly & easily
                </h1>
                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortless booking process
                </p>
                <CustomButton
                    title="Exlpore Now"
                    customStyles="bg-primary-green text-white rounded-full mt-10"
                    handleClick={handleScroll}/>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image
                        src={'/hero.png'}
                        alt='A beautiful Cars Image from Car Hunt'
                        fill
                        className='object-contain'></Image>
                </div>
                    <div className='hero__image-overlay'></div>
            </div>
        </div>
    )
}

export default Hero