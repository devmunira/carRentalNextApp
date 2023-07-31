import Link from 'next/link'
import React from 'react'
import  Image  from 'next/image';
import { footerLinks } from '@/constant';

const Footer = () => {
  return (
    <footer className='flex flex-col flex-wrap px-6 sm:px-16 py-5 border-t border-gray-100 mt-5'>
        <div className='flex max-md:flex-col flex-wrap justify-between  gap-5 py-5 px-6 sm:px-16'>


            <div className='flex flex-col gap-6 justify-start items-start'>
              <Image src={'/logo.svg'} alt={'Logo'} width={138} height={18}></Image>
              <p className='text-gray-500 text-base text-[13px]'>Find, rent & book cars by <strong> Car Hunt</strong></p>
            </div>


            <div className='footer__links'>
                {footerLinks.map((item,index) => (
                  <div key={index} className='footer__link'>
                      <h6 className='font-bold'>{item.title}</h6>
                      <div className="flex flex-col gap-5">
                        {item.links.map((link) => (
                          <Link
                            key={link.title}
                            href={link.url}
                            className="text-gray-500"
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                  </div>
                ))}
            </div>
        </div>

        {/* Copy Right Section */}
        <div className='flex flex-wrap justify-between items-center pt-5 border-t border-gray-100'>
          <p className='text-gray-500 text-[14px]'>All Right Reserved by <strong>Car Hunt</strong> &copy;</p>
          <div className='flex flex-wrap justify-between gap-5 items-center'>
            <Link href={'/privacy-policy'} className='text-gray-500 text-[12px]'>Privacy Policy</Link>
            <Link href={'/terms-and-conditions'} className='text-gray-500 text-[12px]'>Terms & Conditions</Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer