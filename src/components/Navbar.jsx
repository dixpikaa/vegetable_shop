import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { CiUser } from "react-icons/ci";
import { RiMenu2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <>
      <div className='bg-white md:bg-primaryDark'>
        <div className='container justify-between items-center py-3 md:flex' >
          <div className='flex gap-8 items-center'>
            <h3 className='text-white text-[40px]'>Logo</h3>
            <div className='relative'>
              <input className='px-4 py-4 rounded-sm w-[300px]' type="text" placeholder='Search...' />
            </div>
          </div>
          <div className='text-white flex gap-6 text-[26px]'> <CiUser />
            <div className='relative '>
              <AiOutlineShopping />
              <div className=' w-[20px] h-[20px] grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]'></div>
            </div>
            <RiMenu2Line />
          </div>
        </div>
        <div className='container flex justify-between items-center text-[26px] py-4 md:hidden'>
          <RiMenu2Line />
          <div>Logo</div>
          <div className='relative md:hidden'>
            <AiOutlineShopping />
            {/* <div className='bg-red-600 w-[20px] h-[20px] text-white grid place-items-center text-[12px] rounded-full absolute  right-[10px] top-[15px]' >0</div> */}
          </div>
        </div>
      </div>
      <div className='bg-primary hidden md:block '>
        <ul className='container flex gap-8 uppercase py-4 text-white  '>
          <Link to="/" className='text-white hover:underline'> Home</Link>
          <a href="#" className='text-white hover:underline'> SHOP</a>
          <Link to="/blog" className='text-white hover:underline'> BLOG</Link>
          <a href="" className='text-white hover:underline'> PAGES</a>
          <Link to="/about" className='text-white hover:underline'> ABOUT</Link>
          <Link to="/contact" className='text-white hover:underline'> CONTACT</Link>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
