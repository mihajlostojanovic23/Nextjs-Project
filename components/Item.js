import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

function Item({ data }) {
  const { strDrinkThumb, idDrink, strDrink } = data;

  function GraphCMSImageLoader() {
    const relativeSrc = (src) => src.split('/').pop();
    return strDrinkThumb;
  }

  return (
    <div className="item  my-5  shadow-2xl">
      <div className="image">
        <Image
          alt="thumb"
          src={strDrinkThumb}
          loader={GraphCMSImageLoader}
          width="300"
          height="250"
          unoptimized
        />
      </div>

      <div className="text-center py-[10px] border-b-[2px] text-[20px]">
        {strDrink}
      </div>
      <Link href={`/${idDrink}`}>
        <div className="button w-[100%] flex justify-center items-center py-[20px]">
          <Button
            variant="contained"
            className="text-[black] hover:text-[white]"
          >
            Details
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default Item;
