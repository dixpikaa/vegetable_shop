import React from 'react'
import ProductCard from './ProductCard'

const discountData = [
  {
    img: "/product-6.jpg",
    name: "McComick Gourmet Orange ",
    price: "789"

  },
  {
    img: "/product-7.jpg",
    name: "Organic Broccoli 1 lb ",
    price: "560"

  },
  {
    img: "/product-8.jpg",
    name: " Blueberry Organic 6 Ounce",
    price: "6050"

  },
  {
    img: "/product-9.jpg",
    name: "Dried Pineapple Fruit Bar ",
    price: "4990"
  },

]
const Discounts = () => {
  return (
    <div className='pt-20  mb-10'>
      <div className='container'>
        <h2 className='text-xl md:text-4xl pb-4 sm:pb-0'> Discounts</h2>
        <div className='pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          <div className='relative w-fit mx-auto'>
            <img className='h-full object-cover' src="/discount-bg.jpg" alt="discountbg" />
            <div className='absolute w-full h-full top-0 left-0 grid place-items-center text-white '>
              <div className='text-xl flex flex-col gap-4'>
                <h2 className='text-[40px] font-bold'>20%</h2>
              <div>
                <p> Under Products</p>
                <p>Limited Time only </p>
                </div>
              </div>

            </div>
          </div>
          {
            discountData.map(discountProduct => (
              <ProductCard
                key={discountProduct.name}
                image={discountProduct.img}
                name={discountProduct.name}
                price={discountProduct.price}

              />
            )
            )}
        </div>
      </div>
    </div>

  )
}

export default Discounts