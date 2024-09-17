import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'
import { TfiShoppingCartFull } from 'react-icons/tfi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const ProductCard = ({ image, name, price }) => {
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    // Increment the cart count
    setCartCount(prevCount => prevCount + 1);
    
    // Show a toast notification
    toast.success('Item added to cart!');
  };
  
  
  return (
    
    <div className=' bg-gray-0 border border-gray-300 px-4 py-4 cursor-pointer h-full w-full relative group hover:shadow-xl'>
      <img className='mx-auto' src={image} alt="" />
      {/* <img className='mx-auto ' src={img} alt={img} /> */}
      <div className='pt-8'>
        <div className='text-gray-500'> Fruits</div>
        <p >{name}</p>
        <div className='pt-1 flex items-center gap-2 '>
          <div className=' flex text-[#ffc78b] text-[14px ]'>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />n
            <IoMdStar />
            <IoMdStar />
          </div>
          <p className='text-gray-500 text-[12px]'>( 382,45 )</p>
        </div>
        <h3 className='text-primary text-xl pt-2'> {price}</h3>
      </div>
      <div >
      <div className='absolute flex top-[160px] left-20 opacity-0 transition-opacity group-hover:opacity-100 gap-3'>
     
          <div className='bg-[#f3e8d6] h-[40px] w-[40px] rounded-full flex items-center justify-center text-[20px] text-primaryDark hover:bg-primaryDark hover:text-white'  onClick={handleAddToCart}>
            <TfiShoppingCartFull />
          </div>
          <div className='bg-[#f3e8d6] h-[40px] w-[40px] rounded-full items-center flex justify-center text-[20px] text-primaryDark hover:bg-primaryDark hover:text-white'>
            <CiHeart />
          </div>
        </div>
        

      </div>
      <ToastContainer position="top-right" autoClose={3000} />


    </div>
  )
}

export default ProductCard