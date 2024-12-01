import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className='w-full h-[830.89px] bg-[#F7F7F7] pt-[150px] pl-[100px]'>
      <div className='container w-[560px] h-[109px] ml-44'>
        <h1 className='font-bold text-[48px]'>Customer testimonials</h1>
        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
     <div className='container mx-auto w-[1452px] h-[321.89px] mt-20'>
      <div className='grid grid-cols-3 gap-8'>
      
        <div className='pt-6 border-2 border- border-black pl-6 pb-5'>
          <Image 
          src={"/images/Stars.svg"} 
          alt={"ratings"} 
          width={116}
          height={18.89}
          ></Image>
          <p className='text-[18px] pt-8 w-[298.67px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          <div className='flex items-center pt-8 '>
          <Image className='rounded-full'
          src={"/images/Image-3.svg"}
          alt={"person"}
          width={56}
          height={56}
          ></Image>
          <div className='pl-6' >
            <h2 className='font-semibold text-[16px]'>James Nduku</h2>
            <p className='text-[16px]'>Software Developer</p>
          </div>
          </div>
        </div>

        
      
        <div className='pt-6 border-2 border-black pl-6'>
          <Image 
          src={"/images/Stars.svg"} 
          alt={"ratings"} 
          width={116}
          height={18.89}
          ></Image>
          <p className='text-[18px] pt-8 w-[298.67px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          <div className='flex items-center pt-8'>
          <Image className='rounded-full'
          src={"/images/Image-1.svg"}
          alt={"person"}
          width={56}
          height={56}
          ></Image>
           <div className='pl-6'>
            <h2 className='font-semibold text-[16px]'>Erick Kipkemboi</h2>
            <p className='text-[16px]'>Scrum Master </p>
           </div>
          </div>
        </div>

        
      
        <div className='pt-6 border-2 border-black pl-6'>
          <Image 
          src={"/images/Stars.svg"} 
          alt={"ratings"} 
          width={116}
          height={18.89}
          ></Image>
          <p className='text-[18px] pt-8 w-[298.67px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          <div className='flex items-center pt-8'>
          <Image className='rounded-full'
          src={"/images/Image-4.svg"}
          alt={"person"}
          width={56}
          height={56}
          ></Image>
           <div className='pl-6'>
            <h2 className='font-semibold text-[16px]'>Stephen Kerubo </h2>
            <p className='text-[16px]'>UI/UX Designer </p>
           </div>
          </div>
        </div>


      </div>

     </div>

    </div>
  )
}

export default Testimonials
