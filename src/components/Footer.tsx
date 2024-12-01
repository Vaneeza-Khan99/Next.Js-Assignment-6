import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full h-[684px] mt-36 flex items-center'>
        <div className='container mx-auto w-[1452px] h-[524px]'>
          <div className='w-[1452px] h-[82px]'>
            <div className='grid grid-cols-2'> 
             <div> 
             <h1 className='text-[18px] font-semibold'>Subscribe to our newsletter</h1>
             <h2 className='text-[16px] pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>

            <div className='flex justify-end gap-4 h-[85px] '>
              <div className=' md:flex-row ' > 
                <input type="email" placeholder='Enter Your Email'
                className='w-full px-5 py-3 rounded-lg border-black border-2'/>
                </div>
                <button className='w-[119px] h-[48px] text-[16px] border-2 border-black rounded-lg'>Subscribe</button>
                <div>
                <p className='text-[12px]'>By subscribing you agree to with our Privacy Policy</p>
                </div>       
            </div>
           </div>
          </div>

          <div className='container w-[1452px] h-[225px] mt-28'>
            <div className='grid grid-cols-4'>

             <div className='pt-2'>
              <Image
              src={"/images/Ddsgnr Library.png"}
              alt={"logo"} 
              width={130.6}
              height={40}
              ></Image>
             </div>
             
             <div className='pt-2'>
              <h1 className='text-[16px] font-semibold'>Courses</h1>
              <h2 className='text-[14px] pt-5'>Business</h2>
              <h2 className='text-[14px] pt-4'>Developmenet</h2>
              <h2 className='text-[14px] pt-4'>Technology</h2>
              <h2 className='text-[14px] pt-4'>Design</h2>
              <h2 className='text-[14px] pt-4 pb-2'>Programming</h2>
             </div>
             
             <div className='pt-2'>
              <h1 className='text-[16px] font-semibold'>Resourses</h1>
              <h2 className='text-[14px] pt-5'>Career</h2>
              <h2 className='text-[14px] pt-4'>Resume</h2>
              <h2 className='text-[14px] pt-4'>Learning</h2>
              <h2 className='text-[14px] pt-4'>Interview Preperation</h2>
              <h2 className='text-[14px] pt-4 pb-2'>Jobs</h2>
             </div>
             
             <div className='pt-2' >
              <h1 className='text-[16px] font-semibold'>About Us</h1>
              <h2 className='text-[14px] pt-5'>Contact</h2>
              <h2 className='text-[14px] pt-4'>Help/Support</h2>
              <h2 className='text-[14px] pt-4'>FAQ</h2>
              <h2 className='text-[14px] pt-4'>Terms And Conditions</h2>
              <h2 className='text-[14px] pt-4 pb-2'>Partners</h2>
             </div>


            </div>
          </div>

        <div className='border-t-2 border-black mt-14'>
          <div className='grid grid-cols-4 pt-6'>
            
            <div>
              <h1 className='text-[14px] '>2023 Ddsgnr. All right reserved.</h1>
            </div>
            
            <div className='space-x-6'>
              <button className='border-b-2 border-black text-[14px]'>Privacy Policy</button> 
              <button className='border-b-2 border-black text-[14px]'>Terms of Service</button> 
              <button className='border-b-2 border-black text-[14px]'>Cookies Settings</button>
            </div>
            
            <div></div>
            
            <div className='flex justify-end'>
              <Image
              src={'/images/Social Links.png'}
              alt={'social links'}
              width={132}
              height={24}>

              </Image>
            </div>


          </div>
        </div>
        
        </div>
      
    </div>
  )
}

export default Footer
