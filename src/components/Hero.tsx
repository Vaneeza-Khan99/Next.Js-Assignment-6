import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div >
    {/*Left Side Div*/}

    <div className='flex justify-center items-center  sm:flex-row sm:flex justify-between'>
    <div className='lg:w-1/2 lg:mb-0 flex flex-col justify-center items-start'>    
   <div className='container w-[640px] h-[300px] m-20 md:px-12 md:flex-row lg:text-5xl lg:text-left lg:leading-tight'>
        <h1 className='text-7xl font-[Roboto] w-[550px] h-[134px] font-bold'>Learn new skills online with ease</h1> 
     <p className='max-w-xl text-2xl lg:text-left lg:max-w-md pt-16'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
  <div className='pt-20  space-x-4 lg:justify-start'>
    <button className='border-black border-2 bg-black text-white hover:underline hover:bg-slate-500 text-xl rounded-lg p-3 px-6'>
    Start learning now
      </button>
    <button className='border-black border-2 hover:underline hover:bg-slate-500 text-xl  rounded-lg p-3 px-8'>
      Explore Courses
      </button>
  </div>
</div>
</div>

    {/* Right Side Div*/}
<div className='lg:w-1/2 flex justify-center items-center pl-80 sm:w-[428px] sm:w-[50%] sm:auto sm:flex sm:justify-center'>
<Image src={"/images/assignment-6.jfif"} alt={"image"} width={640} height={900} className='sm:'></Image>
</div>
 </div>
 
 </div>
  )
}

export default Hero
