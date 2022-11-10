import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="flex nav_items">
      <Link className="text-[23px] px-[10px] text-black" href="/">
        Home
      </Link>
      <Link className="text-[23px] px-[10px] text-black" href="/about">
        About Us
      </Link>

      {status == 'unauthenticated' && (
        <Link
          className="text-[23px] px-[10px] text-black"
          onClick={(e) => {
            e.preventDefault();
            signIn('github');
          }}
          href={`/api/auth/signin`}
        >
          Sign In
        </Link>
      )}

      {session && status == 'authenticated' && (
        <Link
          className="text-[23px] px-[10px] text-black"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
          href={`/api/auth/signout`}
        >
          Sign Out
        </Link>
      )}
    </div>
  );
}

export default Navbar;
