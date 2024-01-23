import React from 'react'
import image from '../assets/portfolio.jpg'
import { IoMdCall } from "react-icons/io";
import { MdSupport } from "react-icons/md";
import { HiMiniCpuChip } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const Home_innerpage3 = () => {
  return (
     <div className='w-full mt-24'>

        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img src={image} alt="bg-image" className='w-full h-full object-cover mix-blend-overlay' />
        </div>

        <section className='max-w-[1240px] mx-auto text-white relative'>
         
          <div className='px-4 py-12'>
             <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'> Support </h2>
             <h3 className='text-5xl font-bold py-6 text-center'> Finding the right team</h3>
             <p className='py-4 text-3xl text-slate-300'> Developers and marketers use Cloud to quickly and easily create, manage and deliver their digital experiences across any browser, device and bandwidth.</p>
          </div>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                    <h1 className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><IoMdCall size={23} /> </h1>
                     <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'> “Customer experience is a priority for us. We are nothing if we don't have great visuals. And with Cloud we are confident that our customers are always getting the best experience.” </p>
                  </div>

                  <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'> contact <span className='w-5 ml-2'><FaArrowRightLong/></span> </p>
                  </div>

              </div>


              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                    <h1 className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><MdSupport size={23}/></h1>
                     <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'> Easy-to-follow well documented APIs for integrating payments on your websites and mobile app. Plus you can monitor media performance and control it centrally. </p>
                  </div>

                  <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'> contact <span className='w-5 ml-2'><FaArrowRightLong /></span> </p> 
                  </div>

              </div>


              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                    <h1 className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><HiMiniCpuChip size={23} /></h1>
                     <h3 className='font-bold text-2xl my-6'> Media Inquiries </h3>
                      <p className='text-gray-600 text-xl'> With Cloud Media Optimizer, you can have both. You can automatically deliver images and videos in the format and quality suited for each end-user device, browser, and connection speed. </p>
                  </div>

                  <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'> contact <span className='w-5 ml-2'><FaArrowRightLong /> </span> </p> 
                  </div>

              </div>

              

          </div>

        </section>
      
    </div>
  )
}

export default Home_innerpage3

