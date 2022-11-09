import React, { Component } from "react";
import Slider from "react-slick";



const ProductTopCrousal = () => {

    const gadgets = [{
        id: 1,
        src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6516/6516347_sd.jpg;maxHeight=140;maxWidth=200",
        title: "Laptops & Computers",
       style:"mt-1"
      },  {
        id: 2,
        src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487389_sd.jpg;maxHeight=140;maxWidth=200",
        title: "Mobile",
        style:"mt-1"
      }, {
        id: 3,
        src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494241cv11d.jpg;maxHeight=200;maxWidth=200",
        title: "Tablet",
        style:"mt-3"
       
      }, {
        id: 4,
        src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6497/6497953_sd.jpg;maxHeight=200;maxWidth=200",
        title: "Video Games",
        style:"mt-2"
   
      },{
        id: 5,
        src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514052_sd.jpg;maxHeight=180;maxWidth=200",
        title: "TV & Projector",
        style:"mt-6"
        
      },
      ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    return (
        <div className="w-4/5 m-auto mt-7">
            <Slider {...settings}>
       
               {gadgets.map((gadget)=>(
                <div key={gadget.id} className='flex flex-col w-fit justify-center items-center cursor-pointer shadow-md hover:scale-105 duration-500 shadow-sky-400 '>
                <img src={gadget.src} alt="laptop"
                    className='m-auto' />
                <p className={`text-red-500 ${gadget.style} mb-1`}>{gadget.title}</p>
            </div>
               ))}
            </Slider>
        </div>
    )
}

export default ProductTopCrousal