import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { useEffect } from "react";
import { useState } from "react";

import SingleProductPage from "../../Components/SingleProductPage/SingleProductPage";
import TopSinglepage from "../../Components/SingleProductPage/TopSinglepage";
import SinglePageSideBar from "../../Components/SingleProductPage/SinglePageSideBar";
import { product_api } from "../../url";

const AcerProductPage = () => {
  const [data, setData] = useState([]);

  let url = `${product_api}/acer`;
  
  const handleSubmit = async () => {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <div className="border-solid border-b-4 border-gray-200 w-screen mt-8"></div>
      <div className="flex items-center gap-1 text-sm my-2 border-solid border-b-2 border-gray-200 w-screen pb-2">
        {" "}
        Best Buy <BiRightArrow size={10} />
        All categories
      </div>
      <div className="flex w-11/12 m-auto gap-8  ">
        <SinglePageSideBar />

        <div className="sm:w-3/4">
          <TopSinglepage length={20} />
          <div className="grid grid-cols-1">
            {data.map((el) => (
              <SingleProductPage
                imgUrl={el.imgUrl}
                title={el.title}
                id={el._id}
                price={el.price}
                save={el.save}
                brand={el.brand}
                rate={el.rate}
                top={el.top}
                end={el.end}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AcerProductPage;
