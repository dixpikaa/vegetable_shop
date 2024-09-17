import React from 'react'
import { BiGift } from 'react-icons/bi'
import { BsShieldCheck } from 'react-icons/bs'
import { TfiShoppingCartFull } from 'react-icons/tfi'
import { RiCustomerService2Fill} from 'react-icons/ri'
import ServiceCard from './ServiceCard'



 export const  data = [
  {
    title: "FAST AND FREE DELIVERY ",
    icon: <TfiShoppingCartFull />,
    desc: " Free delivery for all orders over 2000 "
  },
  {
    title: "24/7 CUSTOMER SUPPORT",
    icon: <RiCustomerService2Fill />,
    desc: " Friendly 24/7 customer support"
  },
  {
    title: "MONEY BACK GUARANTEE ",
    icon: <BsShieldCheck />,
    desc: " Free deliver very for all orders over 2000 "
  },
  {
    title: "MEMBER GIFTS",
    icon: <BiGift />,
    desc: " Discount couppons weekends "
  },
]
const Services = () => {
  return (
    <div className='bg-[#f7f5ee]'>
      <div className='container grid gap-8 md:grid-cols-2 xl:grid-cols-4 py-10'>
        {
          data.map(item => (
            <ServiceCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          )
          )}
      </div>
    </div>
  )

}

export default Services