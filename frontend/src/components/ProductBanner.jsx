import React from 'react'

function ProductBanner() {
  return (
    <div className='relative'>
    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL78538_221107_VPT-LV-a69dd225-4140-452b-aab3-064e2408b94d.jpg" alt="banner"
     className='h-48 sm:' />
    
     <p className='text-6xl font-bold absolute top-16 left-2/4 text-white '>Great deals </p>
     <p  className='hidden text-3xl font-bold absolute top-32 right-1/4 text-white md:block'>happening right now.</p>
     <div className='bg-red-600 w-fit font-bold text-white p-2 rounded-md absolute top-4 right-1/3'>Top Deals</div>
     {/* */}

     <div className='flex border-solid border-b-2 border-gray-200 w-11/12 m-auto'>
     <div className='bg-red-600 w-fit font-bold text-white p-2 m-0 border-solid text-2xl '> Top Deals </div> 
    <p className=' font-gray-500 ml-3 mt-6'>Top Deals today’s featured deals and top tech. Valid through 11/10/22.*</p>
     </div>
            </div>
  )
}

export default ProductBanner