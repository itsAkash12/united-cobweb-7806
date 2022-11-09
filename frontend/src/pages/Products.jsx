import React from 'react'
import ProductBanner from '../components/ProductBanner'
import ProductTopCrousal from '../components/ProductTopCrousal'
function Products() {
  return (
    <div >
 <ProductBanner />
   <ProductTopCrousal />
   <div className='border-solid border-b-2 border-gray-200'>
   <p className='text-3xl w-fit mt-4 ml-8 py-2 '>Products</p>
   </div>
   <div className='mt-8 relative'>
    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/custom_fluid_xl_mmt-599505-715e51c3-2718-4a87-a9b7-1dd78586d130.jpg" alt="" />
       <div className='w-fit absolute top-14 right-96 '>
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/UpgradePlus_Powered_by_Citizens_Pay_hz_2L_K_ai_renditionpicker_319x319-218068.png;maxHeight=76;maxWidth=319" alt="" 
        className='w-11/12'/>
       </div>
       <div className='hidden w-fit absolute top-32 right-1 xl:block '>
        <p className='text-4xl font-bold'>Amazing new <span className='text-5xl'>MacBook</span><span className='text-red-700'>.</span></p>
      
      <p className='text-3xl font-bold'>Unbelievable monthly price.</p>
      
       
       <p className='my-2'>From $19.99/month for 36 months. $280.35 final payment due in month 37. Based on <br /> original price of $999.99. Final payment will be made by Best Buy if product is returned <br /> or upgraded per the Upgrade+ Program terms.</p>
       <p className='text-sm'>Eligibility subject to credit approval. Monthly payment amount for the first 36 months is based on creditworthiness. <br /> Limited time promotion.</p>
      

      <button className='bg-red-700 mt-3 text-white p-2 rounded-sm'>Learn More</button>
       </div>
   </div>
    </div>
  )
}

export default Products