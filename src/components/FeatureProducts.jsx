import React from 'react'
import ProductCard from './ProductCard'
export const productData = [
  {
    img: "/product-1.jpg",
    name: "Organic Bartlett Pear",
    price: "399"

  },
 
  {
    img: "/product-2.jpg",
    name: "Organic Strawberrirs 1 lb",
    price: "1089"

  },
  {
    img: "/product-3.jpg",
    name: " Blueberry Organic  6 Ounce",
    price: "4044"

  },
  {
    img: "/product-4.jpg",
    name: " Kiwi Organic  1 Each",
    price: "5690"

  },
  {
    img: "/product-5.jpg",
    name: "Organic Banana ",
    price: "789"

  },
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
  {
    img: "/product-10.jpg",
    name: "Holiday Nuts Gift Basket  ",
    price: "2000"

  },
]

const FeatureProducts = () => {
  return (
    <div className='pt-20'>
      <div className='container'>
        <div className='sm:flex justify-between items-center'>
          <div className='text-xl md:text-4xl pb-4 sm:pb-'> Featured Products</div>
          <div className='flex gap-8 items-center text-[14px] md:text-lg' >
            <button className='border-b border-black '> Best Seller</button>
            <button> Most Popular</button>
          </div>
        </div>

<div className='pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
{
          productData.map(product => (
           <ProductCard
              key={product.name}
              image={product.img}
              name={product.name}
              price={product.price}
            />
          )
          )}
</div>
      </div>
     
    </div>
  )
}

export default FeatureProducts