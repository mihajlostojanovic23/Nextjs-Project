import Image from 'next/image';
import React from 'react';

function ItemDetail({ details }) {
  function GraphCMSImageLoader() {
    const relativeSrc = (src) => src.split('/').pop();
    return details.strDrinkThumb;
  }
  return (
    <div className="item_details w-[80%] flex items-center h-[80vh] bg-[#ffffff] m-auto">
      <div className=" shadow-2xl info_details w-[90%] h-[70vh] m-auto border-[2px]  flex justify-between">
        <div className="picture w-[45%] flex items-center ">
          <Image
            alt="thumb"
            src={details.strDrinkThumb}
            loader={GraphCMSImageLoader}
            width="600"
            height="600"
            className="shadow-2xl mx-[30px] picture_info"
            unoptimized
          />
        </div>

        <div className="other_info w-[45%] relative">
          <h1 className="name text-[30px] text-center py-[20px]">
            Name: {details.strDrink}
          </h1>
          <p className="instructions px-[20px] text-center text-[20px]">
            Instructions: {details.strInstructions}
          </p>

          <p className="category px-[20px] text-center text-[16px] mt-[20px]">
            Category: {details.strCategory}
          </p>

          <p className="alcoholic px-[20px] text-center text-[16px] mt-[20px]">
            Alcoholic: {details.strAlcoholic}
          </p>

          <p className="date_modified px-[20px] text-center text-[20px] absolute left-[50%] translate-x-[-50%] bottom-[10px]">
            Date Modified: {details.dateModified}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
