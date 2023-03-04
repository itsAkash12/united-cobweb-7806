import React from "react";
import { Link } from "react-router-dom";
import ProductBanner from "../Components/Products/ProductBanner";
import ProductTopCrousal from "../Components/Products/ProductTopCrousal";
import ProductData from "./db.json"



function Products() {
  return (
    <div>
      <ProductBanner />
      <ProductTopCrousal />
      <div className="border-solid border-b-2 border-gray-200">
        <p className="text-3xl w-fit mt-4 ml-8 py-2 ">Products</p>
      </div>
      <div
        className="mt-8 w-fit "
        style={{
          backgroundImage: `url(" https://pisces.bbystatic.com/image2/BestBuy_US/dam/custom_fluid_xl_mmt-599505-715e51c3-2718-4a87-a9b7-1dd78586d130.jpg")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-16 w-fit ml-96 pl-96">
          <div className="w-fit ">
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/UpgradePlus_Powered_by_Citizens_Pay_hz_2L_K_ai_renditionpicker_319x319-218068.png;maxHeight=76;maxWidth=319"
              alt=""
              className="w-11/12 ml-20"
            />
          </div>
          <div className="w-fit ml-20 my-6 ">
            <p className="text-4xl font-bold">
              Amazing new <span className="text-5xl">MacBook</span>
              <span className="text-red-700">.</span>
            </p>

            <p className="text-3xl font-bold">Unbelievable monthly price.</p>

            <p className="hidden xl:block my-2">
              From $19.99/month for 36 months. $280.35 final payment due in
              month 37. Based on <br /> original price of $999.99. Final payment
              will be made by Best Buy if product is returned <br /> or upgraded
              per the Upgrade+ Program terms.
            </p>
            <p className="hidden 2xl:block text-sm">
              Eligibility subject to credit approval. Monthly payment amount for
              the first 36 months is based on creditworthiness. <br /> Limited
              time promotion.
            </p>

            <button className="bg-blue-700 my-6 text-white p-2 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  mt-10">
        {ProductData.map((el) => (
          <div className=" border-2 p-3" key={el.id}>
            <img src={el.imgUrl} alt="" />

            <p
              className={`text-2xl font-bold  text-sky-500 cursor-pointer hover:underline my-2 ${el.style}`}
            >
              {el.title}
            </p>

            <p className="text-sm text-gray-400 ">Get all {el.title}</p>
            <Link to={el.link}>
              {" "}
              <button className="bg-blue-900 text-white rounded-md py-1 mt-6 text-sm px-4 w-fit">
                Shop Now
              </button>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;
