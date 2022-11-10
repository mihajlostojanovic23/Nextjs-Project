import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/favicon.ico';

//Components
import Navbar from './Navbar';

function Header() {
  return (
    <div className="header flex justify-between items-center px-[30px] bg-white border-b-[2px] border-[black] ">
      <Link className="image" href="/">
        <Image src={Logo} width="80" height="80" alt="not" />
      </Link>

      <div className="navbar flex ">
        <div className="flex px-[10px]">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
