import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdMenu } from "react-icons/md";

const HeaderMain = () => {
  return (
    <div className='border-b border-[#676767] font-[Roboto]'>
            <div className='flex justify-between items-center pb-3 pt-3 pl-10 '>
            <MdMenu className='text-3xl cursor-pointer md:hidden'/>

     <Image src={"/images/Ddsgnr Library.png"} alt={"logo"} width={130.6} height={41}></Image>
    
    <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex itemes-center px-5 '>
     <nav>   
        <ul className='flex md:flex-row flex-col justify-between md:items-center md:gap-20 gap-8 text-3xl font-medium pb-3 pt-3'>
            <Link href={"/"}>
            <li className='flex justify-center items-center hover:underline   '>
                Home
            </li>
            </Link>
      <Link href="/courses">
            <li className='flex justify-center items-center hover:underline'>
                Courses      
            </li>
      </Link>
        
        <Link href="/services">
            <li className='flex justify-center items-start hover:underline'>
                Servises
            </li>
        </Link>
      
      <Link href='/achievement'>
        <li className='flex justify-center items-start hover:underline'>
            Achievement
        </li>
      </Link>
  
        <Link href="/about us">
        <li className='flex justify-center items-start hover:underline '>
            About Us
        </li>
        </Link>

     <Link href="/testimonial">
     <li className='flex justify-center items-start hover:underline'>
        Testimonial
     </li>
     </Link>
        </ul>
    </nav>
    </div>    
    <div className='mr-8 space-x-4'>
    <button className='border-black border-2 hover:underline hover:bg-slate-500 text-xl  rounded-lg p-3 px-8'>
        Login
    </button>

    <button className='border-black border-2 bg-black text-white hover:underline hover:bg-slate-500 text-xl rounded-lg p-3 px-6'>
        Sign Up   
    </button>


    </div>    
</div>
 </div>

  )
}

export default HeaderMain
