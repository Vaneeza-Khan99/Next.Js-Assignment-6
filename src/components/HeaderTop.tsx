import React from 'react'
import Image from 'next/image'


const HeaderTop = () => {
  return (
    <div className='border-b border-black w-[1900px] h-[40px] pt-3 pb-8'>
        <div className='flex justify-between items-center '>
      <h1 className='h-[21px] font-[Roboto] text-base pl-6 text-black grid grid-cols-7 divide-x divide-black'>
       <div className='pr-6'> Phone Number: 956 742 455 678</div>      
       <div className='pl-6'> Email:info@ddsgnr.com</div>
       </h1>
    <div className='flex justify-end items-center mr-8'>
        <Image src={"/images/Social Links.png"} alt={"logo"} width={132} height={24}></Image>
    </div>
   </div>
    </div>
  )
}

export default HeaderTop
