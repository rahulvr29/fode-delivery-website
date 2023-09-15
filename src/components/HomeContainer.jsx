import React from 'react'
import Delivery from "../assets/images/delivery.png"

const HomeContainer = () => {
  return (
    <section id="home" className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
        <div className='py-2 flex-1 flex flex-col items-start  justify-center gap-6'>
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
                  <p className="text-base text-orange-500 font-semibold">Fast Delivery</p>
                  <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                    <img src={Delivery} className="w-full h-full object-contain " alt="delivery" />
                  </div>
                </div>
                <p className="text-[2.5rem] lg:text-[4.25rem] font-bold  tracking-wide text-headingColor">The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem] '>Your Place</span></p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                Fode offers a delightful experience with fast and chef-cooked, healthy meals delivered right to your doorstep, ensuring speed delivery to your place and making mealtime both convenient and unforgettable.
                </p>
                <button type='button' className="bg-gradient-to-br from-orange-300 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
        </div>
        <div className='py-2 bg-blue-400 flex-1'></div>
    </section>
  )
}

export default HomeContainer;