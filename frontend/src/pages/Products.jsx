import React from 'react'
import ProductBanner from '../components/Products/ProductBanner'
import ProductTopCrousal from '../components/Products/ProductTopCrousal'
function Products() {
  return (
    <div >
 <ProductBanner />
   <ProductTopCrousal />
   <div className='border-solid border-b-2 border-gray-200'>
   <p className='text-3xl w-fit mt-4 ml-8 py-2 '>Products</p>
   </div>
   <div className='mt-8 ' style={{ 
      backgroundImage: `url(" https://pisces.bbystatic.com/image2/BestBuy_US/dam/custom_fluid_xl_mmt-599505-715e51c3-2718-4a87-a9b7-1dd78586d130.jpg")` ,
      backgroundRepeat: 'no-repeat',
    
    }}>
  
       
       <div className='pt-16 w-fit ml-96 pl-96'>
       <div className='w-fit '>
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/UpgradePlus_Powered_by_Citizens_Pay_hz_2L_K_ai_renditionpicker_319x319-218068.png;maxHeight=76;maxWidth=319" alt="" 
        className='w-11/12 ml-20'/>
       </div>
       <div className='w-fit ml-20 my-6 '>
        <p className='text-4xl font-bold'>Amazing new <span className='text-5xl'>MacBook</span><span className='text-red-700'>.</span></p>
      
      <p className='text-3xl font-bold'>Unbelievable monthly price.</p>
      
       
       <p className='hidden xl:block my-2'>From $19.99/month for 36 months. $280.35 final payment due in month 37. Based on <br /> original price of $999.99. Final payment will be made by Best Buy if product is returned <br /> or upgraded per the Upgrade+ Program terms.</p>
       <p className='hidden 2xl:block text-sm'>Eligibility subject to credit approval. Monthly payment amount for the first 36 months is based on creditworthiness. <br /> Limited time promotion.</p>
      

      <button className='bg-blue-700 my-6 text-white p-2 rounded-sm'>Learn More</button>
       </div>
       </div>
   </div>

{/* <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-10'>
  <div className='border-2 p-3'>
    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=90&.v=1664499515473" alt="" />
  <p className='text-md  text-sky-500 cursor-pointer hover:underline my-2 '>MacBook <br />
Save up to $200 on select models.</p>
<p className='text-sm text-gray-400'>Minimum savings is $50.</p>
<button className='bg-blue-600 text-white rounded-md py-1 mt-9 text-sm px-8'>Shop Now</button>
  </div>


  <div className='border-2 p-3'>
    <img src="https://image.cnbcfm.com/api/v1/image/107136506-ipad-2022.PNG?v=1666616401&w=929&h=523" alt="" />
  <p className='text-md  text-sky-500 cursor-pointer hover:underline my-2 '>Lovable. Drawable. Magical.</p>
<p className='text-sm text-gray-400'>Accessories sold separately.</p>
<button className='bg-blue-600 text-white rounded-md py-1 mt-16 text-sm px-8'>Shop Now</button>
  </div>


  <div className='border-2 p-3'>
    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-og-202210?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1664504610941" alt="" />
  <p className='text-md  text-sky-500 cursor-pointer hover:underline my-2 '>iPad Pro</p>
<p className='text-sm text-gray-400'>Supercharged by M2.</p>
<button className='bg-blue-600 text-white rounded-md py-1 mt-20 text-sm px-8'>Shop Now</button>
  </div>

  <div className='border-2 p-3'>
    <img src="https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg" alt="" />
  <p className='text-md  text-sky-500 cursor-pointer hover:underline my-2 '>iPhone 14 and iPhone 14 Plus <br />
Big and bigger.</p>
<p className='text-sm text-gray-400'>Save up to $800 with qualified activation and <br />
 trade-in of  iPhone 12 or newer.</p>
<button className='bg-blue-600 text-white rounded-md py-1 mt-6 text-sm px-8'>Shop Now</button>
  </div>

  <div className='border-2 p-3'>
    <img src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg" alt="" />
  <p className='text-md  text-sky-500 cursor-pointer hover:underline my-2 '>iPhone 14 Pro <br />

Pro. Beyond.</p>

<button className='bg-blue-600 text-white rounded-md py-1 mt-8 text-sm px-8'>Shop Now</button>
  </div>

  <div className='border-2 p-3'>
    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-og-202110?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1632930650000" alt="" />
  <p className='text-md  text-sky-500 cursor-pointer hover:underline my-2 mt-20 '>Color your world with HomePod mini.
Shop Now</p>

<button className='bg-blue-600 text-white rounded-md py-1 mt-10 text-sm px-8'>Shop Now</button>
  </div>

  <div className='border-2 p-3'>
    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000" alt="" className='h-3/5' />
  <p className='text-md  text-sky-500 cursor-pointer hover:underline my-2 '>Apple - AirPods Max - Space Gray</p>

<button className='bg-blue-600 text-white rounded-md py-1 mt-10 text-sm px-8'>Shop Now</button>
  </div>
</div> */}

   {/* <div style={{ 
      backgroundImage: `url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/gl-77114-giftideas-ep-td-half_der-e5653191-ad0b-42de-a484-6759bfdd6ad5.jpg")` ,
      backgroundRepeat: 'no-repeat',
    
    }}
    className="h-">
   
   </div> */}

    </div>
  )
}

export default Products