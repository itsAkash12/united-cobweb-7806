import React from 'react'
import {Link} from "react-router-dom"
const SingleProductPage = ({id,imgUrl,price,title,save,brand,rate,top,end}) => {
    
  return (
    <div key={id} className='flex  gap-2 sm:justify-between border-solid border-b-2 border-gray-200   '>


    <div className='w-1/3'>
      <img src={imgUrl} alt="" className='cursor-pointer' />
    </div>
    <div className='w-1/3'>
      <p className=' text-blue-500 hover:underline cursor-pointer mt-7 text-md'>{title}  </p>

      <p className='text-sm my-2'><span className='font-bold'>Brand:</span>{brand}</p>
      <p className='sm:text-sm'>{rate}</p>
      <p className='my-2 text-sm text-green-900 font-bold'>Get it today</p>
      <p className='hidden sm:block bg-red-700 text-white font-bold w-fit px-2'>{top}</p>
      <p className='hidden sm:block sm:text-sm my-2'><span className='font-bold'>Pickup: </span> Ready in 1hr to dispatch from  warehouse.</p>
      <p className='hidden sm:block sm:text-sm my-2'><span className='font-bold'>Shipping: </span>{end}</p>
    </div>
    <div className='w-1/3 '>
      <p className='text-sm sm:text-3xl font-bold mt-7 md:ml-24'>$ {price}</p>
      <p className='hidden sm:block bg-red-700 text-white font-bold w-fit px-2  md:ml-24'> {save}</p>
    <Link to="/dealOfTheDay"> <button className='text-xs my-2 bg-yellow-300 text-black md:ml-24 sm:mt-8 flex md:gap-2 font-bold sm:px-6 lg:py-2 rounded-lg' >More Details</button></Link> 
    </div>
  </div>
  )
}

export default SingleProductPage