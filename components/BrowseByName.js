import Link from 'next/link';
import React from 'react';
import { Data } from '../json/Data';

function BrowseByName() {
  return (
    <div className="text-center">
      <h1 className="text-[23px]">Browse By Name</h1>
      {Data.map((char, index) => (
        <Link key={index} href={`/character/${char}`}>
          <div
            className="inline-block text-[20px] cursor-pointer my-[10px] mx-[5px]"
            key={index}
          >
            {char} {char != 'Z' && <span>/</span>}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BrowseByName;
