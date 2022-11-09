import React from 'react'
import ProductBanner from '../components/ProductBanner'
import ProductTopCrousal from '../components/ProductTopCrousal'
function Products() {
  return (
    <div >
 <ProductBanner />
  {/* <div className='flex flex-col w-fit'>
    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6516/6516347_sd.jpg;maxHeight=140;maxWidth=140" alt="laptop"
     className='' />
    <p className='text-red-600 my-2'>Laptop & Computers</p>
  </div> */}
        <ProductTopCrousal />
    </div>
  )
}

export default Products