import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div> 

{/*Courses*/}

<div className='w-full h-[1680px]'>
  <div className='container mx-auto w-[768px] h-[118px]'>
    <h1 className='text-center text-[56px] font-bold'>Courses</h1>
    <p className='text-center text-[18px] pt-2'>Your Ultimate Guide to learning</p>
  </div>

    <div >
      <div className='container mx-auto flex justify-center items-center w-[336px] h-[40px] pt-16 gap-5'>
        <button className='text-[16px] border-b-2 border-black'>Popular</button>
        <button className='text-[16px] '>Recommended</button>
        <button className='text-[16px]'>Best Price</button>
      </div>
</div>

{/*First Row */}

<div className='container mx-auto w-[1312px] h-[534px] my-14'>
  <div className='grid grid-cols-3 gap-8'>
    
    {/*First Image */}

    <div className='bg-[#F7F7F7] px-2'>
    <Image src={'/images/Image-6.png'} alt={'image'} width={416} height={300}></Image>
    <div className='grid grid-cols-2'>
    <div>
    <h1 className='text-[14px] pt-4 font-semibold'>Design</h1>
    </div>
    <div className='flex justify-end items-end gap-2'>
    <Image src={"/images/Star 1.png"} alt={"star"} width={24} height={24}></Image>
    <h2 className='text-[14px] font-semibold'>5.0</h2>
    </div>

    </div>
    <h3 className='text-[24px] font-bold pt-4'>UX/UI Design 201</h3>
    <p className='text-[16px] pt-4 w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className='grid grid-cols-2 pt-6'>
    <button className='border-2 border-black rounded-lg hover:underline hover:bg-slate-300 w-[117px] h-[40px]'>Enroll Now</button>
    <h4 className='pt-2'>$400</h4>
    </div>
    </div>

   {/*Second Image */}  

  
   <div className='bg-[#F7F7F7] px-2'>
    <Image src={'/images/Image-5.png'} alt={'image'} width={416} height={300}></Image>
    <div className='grid grid-cols-2'>
    <div>
    <h1 className='text-[14px] pt-4 font-semibold'>Programmimg</h1>
    </div>
    <div className='flex justify-end items-end gap-2'>
    <Image src={"/images/Star 1.png"} alt={"star"} width={24} height={24}></Image>
    <h2 className='text-[14px] font-semibold'>5.0</h2>
    </div>

    </div>
    <h3 className='text-[24px] font-bold pt-4'>Introduction to Python</h3>
    <p className='text-[16px] pt-4 w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className='grid grid-cols-2 pt-6'>
    <button className='border-2 border-black rounded-lg hover:underline hover:bg-slate-300 w-[117px] h-[40px]'>Enroll Now</button>
    <h4 className='pt-2'>$400</h4>
    </div>
    </div>
    
  {/*Third Image */}  

 
  <div className='bg-[#F7F7F7] px-2'>
    <Image src={'/images/Image-3.png'} alt={'image'} width={416} height={300}></Image>
    <div className='grid grid-cols-2'>
    <div>
    <h1 className='text-[14px] pt-4 font-semibold'>Business</h1>
    </div>
    <div className='flex justify-end items-end gap-2'>
    <Image src={"/images/Star 1.png"} alt={"star"} width={24} height={24}></Image>
    <h2 className='text-[14px] font-semibold'>5.0</h2>
    </div>

    </div>
    <h3 className='text-[24px] font-bold pt-4'>Data Analysis for Beginners</h3>
    <p className='text-[16px] pt-4 w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className='grid grid-cols-2 pt-6'>
    <button className='border-2 border-black rounded-lg hover:underline hover:bg-slate-300 w-[117px] h-[40px]'>Enroll Now</button>
    <h4 className='pt-2'>$400</h4>
    </div>
    </div>

</div>

{/*Second Row */}

<div className='container mx-auto w-[1312px] h-[534px] my-14'>
  <div className='grid grid-cols-3 gap-8'>

{/*Fourth Image*/}


  <div className='bg-[#F7F7F7] px-2'>
    <Image src={'/images/Image-2.png'} alt={'image'} width={416} height={300}></Image>
    <div className='grid grid-cols-2'>
    <div>
    <h1 className='text-[14px] pt-4 font-semibold'>Art</h1>
    </div>
    <div className='flex justify-end items-end gap-2'>
    <Image src={"/images/Star 1.png"} alt={"star"} width={24} height={24}></Image>
    <h2 className='text-[14px] font-semibold'>5.0</h2>
    </div>

    </div>
    <h3 className='text-[24px] font-bold pt-4'>Art Specialization</h3>
    <p className='text-[16px] pt-4 w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className='grid grid-cols-2 pt-6'>
    <button className='border-2 border-black rounded-lg hover:underline hover:bg-slate-300 w-[117px] h-[40px]'>Enroll Now</button>
    <h4 className='pt-2'>$400</h4>
    </div>
  </div>

  {/*Fifth Image*/}  
  
  
  <div className='bg-[#F7F7F7] px-2'>
    <Image src={'/images/Image-1.png'} alt={'image'} width={416} height={300}></Image>
    <div className='grid grid-cols-2'>
    <div>
    <h1 className='text-[14px] pt-4 font-semibold'>Law</h1>
    </div>
    <div className='flex justify-end items-end gap-2'>
    <Image src={"/images/Star 1.png"} alt={"star"} width={24} height={24}></Image>
    <h2 className='text-[14px] font-semibold'>5.0</h2>
    </div>

    </div>
    <h3 className='text-[24px] font-bold pt-4'>Rule of Law</h3>
    <p className='text-[16px] pt-4 w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className='grid grid-cols-2 pt-6'>
    <button className='border-2 border-black rounded-lg hover:underline hover:bg-slate-300 w-[117px] h-[40px]'>Enroll Now</button>
    <h4 className='pt-2'>$400</h4>
    </div>
    </div>
    
  
  {/*Sixth Image*/}


  <div className='bg-[#F7F7F7] px-2'> 
    <Image src={'/images/Image.png'} alt={'image'} width={416} height={300}></Image>
    <div className='grid grid-cols-2'>
    <div>
    <h1 className='text-[14px] pt-4 font-semibold'>Tech</h1>
    </div>
    <div className='flex justify-end items-end gap-2'>
    <Image src={"/images/Star 1.png"} alt={"star"} width={24} height={24}></Image>
    <h2 className='text-[14px] font-semibold'>5.0</h2>
    </div>

    </div>
    <h3 className='text-[24px] font-bold pt-4'>Introduction to webflow</h3>
    <p className='text-[16px] pt-4 w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className='grid grid-cols-2 pt-6'>
    <button className='border-2 border-black rounded-lg hover:underline hover:bg-slate-300 w-[117px] h-[40px]'>Enroll Now</button>
    <h4 className='pt-2'>$400</h4>
    </div>
    </div>
    
  



</div>

<div className='flex justify-center pt-[100px]'>
<button className='border-2 border-black rounded-lg hover:underline hover:bg-slate-300 text-[16px] w-[152px] h-[40px] '>View All Courses</button>
</div>

</div>

</div>
</div>


</div>
  )
}

export default Courses
