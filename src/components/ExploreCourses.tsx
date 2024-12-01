import React from 'react'
import Image from 'next/image'

const ExploreCourses = () => {
  return (
<div>

<div className='bg-[#F7F7F7] w-full h-[228px] flex justify-start items-center grid grid-cols-2 sm:w-full sm:h-[132px] sm:gap-6'>
  <div>
    <h1 className='font-[Roboto] text-4xl font-semibold m-2 w-[440px] h-[68px]'>Trusted by 2000+ companies worldwide.</h1>
  </div>
  <div> 
   <Image src={"/images/Logos.png"} alt={"logo"} width={880} height={70}></Image>
  </div>
</div>

  <div className='lg:w-full lg:h-[400px] p-20 sm:w-[768px] sm:h-[109px]'>
    <h1 className='flex justify-center pt-[100px] sm:text-left sm:text-[48px] font-bold text-6xl'>Explore Courses By Category</h1>
  <p className='flex justify-center font-[Roboto] pt-10 pb-[100px] text-[18px] sm:text-left'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
</div>    

{/*3 Columns 1st Row*/}

<div className='grid grid-cols-3 gap-8 sm:flex-row gap-6'>

 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px] '>
     <Image src={"/images/frame-1.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>
     <h1 className='font-semibold text-[20px]'>Design & Development</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available </h2> 
   </div>
 </div>

 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
      <Image src={"/images/volume.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>
     <h1 className=' font-semibold text-[20px]'>Marketing</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>
   </div>
 </div>

 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
     <Image src={"/images/curved-arrow.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>
     <h1 className='font-semibold text-[20px]'>Development</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>
   </div>
 </div>

</div>

{/*3 Columns 2nd Row*/}

<div className='grid grid-cols-3 gap-8 pt-16'>
  
 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
     <Image src={"/images/mic.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>
     <h1 className='font-semibold text-[20px]'>Communication</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>
   </div>
 </div>
  
 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
     <Image src={"/images/semi-circle.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'> 
     <h1 className='font-semibold text-[20px]'>Digital Marketing</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>
   </div>
 </div>

  
 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
     <Image src={"/images/arrow.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>
     <h1 className='font-semibold text-[20px]'>Self Development</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>    
   </div>
 </div>

</div>

{/*3 Columns 3rd Row*/}

<div className='grid grid-cols-3 gap-8 pt-16'>


 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
     <Image src={"/images/bag.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>
     <h1 className='font-semibold text-[20px]'>Business</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>
   </div>
 </div>


 <div className='flex justify-start items-center p-4 bg-[#F7F7F7] sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
     <Image src={"/images/book.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>  
     <h1 className='font-semibold text-[20px]'>Finance</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>
   </div>
 </div>


 <div className='p-4 bg-[#F7F7F7] flex items-center sm:w-full sm:h-[626px] lg:w-[610.67px] lg:h-[132px]'>
     <Image src={"/images/Frame 292.png"} alt={"logo"} width={100} height={100}></Image>
   <div className='pl-10'>
     <h1 className='font-semibold text-[20px]'>Consulting</h1>
     <h2 className='text-[18px] pt-2'>50+ Courses Available</h2>
   </div>
 </div>


</div>

<div className='flex justify-center items-center pt-[100px] pb-[100px]'>
<button className='border-black border-2 px-4 py-3 rounded-lg hover:underline hover:bg-slate-500  '>View All Courses</button>
</div>

{/*Our Achievement */}

<div className='w-full h-[488px]flex justify-center items-center'>
<div className='container mx-auto w-[1252px] h-[264px]'>
  <h1 className='text-center text-[48px] font-bold '>Our Achievements</h1>
  <p className='px-16  pt-6 text-center text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

<div className='grid grid-cols-4 gap-6 pt-6  text-center'>
<div>
  <h1 className='text-[40px] font-bold'>+200</h1>
  <p className='text-[16px] font-medium'>Courses</p>
</div>

<div>
  <h1 className='text-[40px] font-bold '>50K</h1>
  <p className='text-[16px] font-medium'>Mentors</p>
</div>

<div>
  <h1 className='text-[40px] font-bold'>370K</h1>
  <p className='text-[16px] font-medium'>Students</p>
</div>

<div>
  <h1 className='text-[40px] font-bold'>100+</h1>
  <p className='text-[16px] font-medium'>Recognition</p>
</div>

</div>
</div>
</div>

</div>
  )
}

export default ExploreCourses
