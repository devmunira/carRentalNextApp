"use client";

import React from 'react'
import {CustomButton} from './'
import Image from 'next/image';
import scroll from "react-scroll"

const Hero = () => {
    // handle Scroll func for hero  section btn
    const handleScroll = () => {
        const section = document.getElementById('productSection');
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div className='hero bg-secondary-orange' style={{clipPath : 'polygon(0 0, 100% 0, 100% 83%, 0% 100%)'
    }}>
            <div className='flex-1 padding-x pt-36'>
                <h1 className='hero__title'>
                    Find the Perfect Car Rental for Your Adventure!
                </h1>
                <p className='hero__subtitle'>
                  Unleash the Freedom of the Open Road: Your Ultimate Car Rental Destination
                </p>
                <CustomButton
                    title="Exlpore Now"
                    customStyles="bg-primary-green text-white rounded-full mt-10"
                    handleClick={handleScroll}/>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image
                        src={'/toyota-bg.png'}
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