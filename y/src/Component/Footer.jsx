import { useState } from 'react';
import  cloud  from '../assets/cloud.png';
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {

  //date dynamic
const year = new Date().getFullYear();

const [subscribe, setsubscribe] = useState("");

const submit =(e) =>{
  e.preventDefault()
};
  return (
    <div className='w-full mt-24  text-gray-300 py-2 px-2 '>
      <div className='bg-gray-900/90  relative min-h-screen bg-cover '>

        <div className='  grid sm:grid-cols-1 lg:grid-cols-4  pt-6 items-center'>

        <div className='px-10'>
          <h2 className='text-[#e9967a] text-4xl font-bold mr-4 sm:text-3xl flex '><img src={cloud}  className='w-20 mr-2 text-white' alt="cloud-logo" />Cloud </h2>
          <p className='text-white '>Sky-high solutions in every byte. Elevate your cloud experience with us.</p>
          </div>

       <div className='px-10 sm:items-center'>
        <p className='text-1xl text-[#e9967a] font-bold '>Company</p>
        <ul className='text-white'>
          <li className='py-1'>marketing</li>
          <li className='py-1'>Analytics</li>
          <li className='py-1'>Commerce</li>
          <li className='py-1'>Data</li>
          <li className='py-1'>Cloud</li>
          <li className='py-1'>Software</li>
          <li className='py-1'>App</li>
        </ul>
        <h3 className='text-white'> (+234)9019379450 </h3>
      </div>
      

      <div className='sm:items-center px-10'>
        <p className='text-1xl text-[#e9967a] font-bold'>Solution</p>

        <div className='text-white'>
          <ul>
             <li className='py-1'>marketing</li>
          <li className='py-1'>Analytics</li>
          <li className='py-1'>Commerce</li>
          <li className='py-1'>Data</li>
          <li className='py-1'>Cloud</li>
          <li className='py-1'>App</li>
          <li className='py-1'>software</li>
          </ul>
        </div>
      </div>

      



      <div className='px-10 pt-10' >
        <p className='font-bold text-1xl text-[#e9967a]'>Get in touch</p>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl '>
        <a href="https://www.linkedin.com/in/bright-jonathan-554970212/" target="_blank" rel="noopener noreferrer" className='border-2 border-gray-500 rounded-xl '> <AiFillLinkedin/>  </a>
        <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" className='border-2 border-gray-500 rounded-xl ' > <FaTwitter/> </a>
        <a href="https://github.com/danielmoses2424" target="_blank" rel="noopener noreferrer" className='border-2 border-gray-500 rounded-xl ' > <AiFillGithub/> </a>
        <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className='border-2 border-gray-500 rounded-xl' > <AiFillFacebook/> </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='border-2 border-gray-500 rounded-xl' > <BsInstagram/> </a>
        </div>
      </div>

        <div className=''>
           <p className='font-bold uppercase text-[#e9967a]'> Subscribe to our newsletter </p>
            <p className='py-4 text-white'>The latest news, articles, and resources, sent to your inbox weekly.</p>



              <form className='flex flex-col sm:flex-row' onSubmit={submit}  >
             <input 
             type="email" 
             placeholder='Enter email..' 
             className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold'
             value={subscribe}
             onChange={(e)=>setsubscribe(e.target.value)}
             />
             <button className='p-2 mb-4 bg-black rounded-2xl py-4 text-white'>Subscribe</button>
            </form>


            </div>
      </div>

      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p>@2024 cloud agency/All right reserved/privacy </p>
      </div>

   

      

      </div>
    </div>
  )
}

export default Footer
