import Link from "next/link"
import Image from "next/image"
import { CustomButton } from ".."


const Header = () => {
  return (
    <div className="absolute z-10 w-full">
       <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-5">
            <Link href={'/'} 
            className="flex justify-center items-center">
                <Image 
                src={'/logo.svg'} 
                alt="Logo Image" 
                height={18} 
                width={130}
                className="object-contain"></Image>
            </Link>

            <CustomButton 
            title="Sign in"
            customStyles="text-black bg-white rounded-full min-w-[130px]"
            btnType="button"
            ></CustomButton>
        </div> 
    </div>
  )
}

export default Header