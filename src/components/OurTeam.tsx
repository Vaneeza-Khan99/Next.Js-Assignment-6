import React from 'react'
import Image from 'next/image'

const OurTeam = () => {
  return (
    <div>

   <div className='w-full h-[895px] pt-20 bg-[#F7F7F7]'>
     <div className='container mx-auto w-[768px] h-[109px]'>
       <h1 className='text-center text-[48px] font-bold'>Our Team</h1>
       <p className='text-center text-[18px] pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>


     <div className='container mx-auto w-[1280px] h-[209px] my-14'>
        
        <div className='grid grid-cols-3'>

  {/*1st Image */}
            <div>
               <div className='flex justify-center'>
                <Image src={"/images/Image-1.svg"} alt={"person"} width={80} height={80}></Image>
               </div>
              <div className='pt-6'>
                <h1 className='font-semibold text-[20px] text-center'>James Nduku</h1>
                <p className='text-[18px] text-center pt-1'>Marketing Coordinator</p>
               <div className='flex justify-center pt-6'> 
                <Image src={"/images/Social Links.svg"} alt={"social links"} width={100} height={24}></Image>
               </div>
              </div>
            </div>
  {/*2nd Image */}         
           <div>
               <div className='flex justify-center'>
                <Image src={"/images/Image-2.svg"} alt={"person"} width={80} height={80}></Image>
               </div>
              <div className='pt-6'>
                <h1 className='font-semibold text-[20px] text-center'>Joseph Munyambu</h1>
                <p className='text-[18px] text-center pt-1'>Nursing Assistant</p>
               <div className='flex justify-center pt-6'> 
                <Image src={"/images/Social Links.svg"} alt={"social links"} width={100} height={24}></Image>
               </div>
              </div>
           </div>
  {/*3rd Image */}         
           <div>
               <div className='flex justify-center'>
                <Image src={"/images/Image-3.svg"} alt={"person"} width={80} height={80}></Image>
               </div>
              <div className='pt-6'>
                <h1 className='font-semibold text-[20px] text-center'>Joseph Ngumbau</h1>
                <p className='text-[18px] text-center pt-1'>Medical Assistant </p>
               <div className='flex justify-center pt-6'> 
                <Image src={"/images/Social Links.svg"} alt={"social links"} width={100} height={24}></Image>
               </div>
              </div>
            </div>
  
       
       
         </div>
     </div>

{/*Second Row*/}

     <div className='container mx-auto w-[1280px] h-[209px] my-14'>
     
       <div className='grid grid-cols-3'>
    
   {/*1st Image */} 
           <div>
               <div className='flex justify-center'>
                <Image src={"/images/Image-6.svg"} alt={"person"} width={80} height={80}></Image>
               </div>
              <div className='pt-6'>
                <h1 className='font-semibold text-[20px] text-center'>Erick Kipkemboi </h1>
                <p className='text-[18px] text-center pt-1'>Web Designer </p>
               <div className='flex justify-center pt-6'> 
                <Image src={"/images/Social Links.svg"} alt={"social links"} width={100} height={24}></Image>
               </div>
              </div>
           </div>
  
{/*2nd Image */}
           <div>
               <div className='flex justify-center'>
                <Image src={"/images/Image-5.svg"} alt={"person"} width={80} height={80}></Image>
               </div>
              <div className='pt-6'>
                <h1 className='font-semibold text-[20px] text-center'>Stephen Kerubo </h1>
                <p className='text-[18px] text-center pt-1'>President of Sales </p>
               <div className='flex justify-center pt-6'> 
                <Image src={"/images/Social Links.svg"} alt={"social links"} width={100} height={24}></Image>
               </div>
              </div>
           </div>
    
  {/*3rd Image */}
           <div>
               <div className='flex justify-center'>
                <Image src={"/images/Image-4.svg"} alt={"person"} width={80} height={80}></Image>
               </div>
              <div className='pt-6'>
                <h1 className='font-semibold text-[20px] text-center'>John Leboo </h1>
                <p className='text-[18px] text-center pt-1'>Dog Trainer </p>
               <div className='flex justify-center pt-6'> 
                <Image src={"/images/Social Links.svg"} alt={"social links"} width={100} height={24}></Image>
               </div>
              </div>
           </div>
  

       </div>

     </div>


   </div>

    </div>
  )
}

export default OurTeam
