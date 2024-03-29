import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import  logo  from '../assets/cloud.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [nav, SetNav] = useState(false);

  const handleClick = () =>{
    SetNav(!nav)
  };

  const handlclose = () =>{
    SetNav(!nav)
  };
  return (
    <div className='w-screen h-[80px] z-10 bg-[#f9f9f9] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
         <Link to={'/'}> <h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'> <img src={logo} className='w-20 mr-2' alt="img logo" /> cloud</h1></Link>

          <ul className='hidden md:flex gap-7 font-bold text-2xl px-40'>
           <Link to={'/'}> <li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/support'}><li>Support</li></Link>
           <Link to={'/platform'}> <li>Platform</li></Link>
           <Link to={'/pricing'}> <li>Pricing</li></Link>


          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
         <Link to={'/login'}> <button className='boder-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3 mr-4'>Login</button></Link>
         <Link to={'/register'}> <button className='boder-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3 mr-4'>Register</button></Link>
        </div>

        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MdMenu size={25}/>  : <IoClose size={25}/>}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-[#f9f9f9] w-[100%] px-8'} onClick={handlclose}>
       <Link to={'/'}> <li className='border-b-2 py-3 border-black-300 w-full'>Home</li></Link>
        <Link to={'/about'}><li className='border-b-2 py-3 border-black-300 w-full'>About</li></Link>
       <Link to={'/support'}> <li className='border-b-2 py-3 border-black-300 w-full'>Support</li></Link>
        <Link to={'/plaform'}><li className='border-b-2 py-3 border-black-300 w-full'>Platform</li></Link>
       <Link to={'/pricing'}> <li className='border-b-2 py-3 border-black-300 w-full'>Pricing</li></Link>

        <div className='flex flex-col my-4'>
            <Link to={'/login'}><button className='boder-none bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl'>Login</button></Link>
          <Link to={'/register'}><button className='boder-none bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl'>Register</button></Link>

        </div>

      </ul>
    
    </div>
  )
}

export default Navbar
