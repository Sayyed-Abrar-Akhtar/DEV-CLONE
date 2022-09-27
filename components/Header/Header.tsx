import Link from 'next/link';
import React from 'react';
import Search from '../Search/Search';

const Header: React.FC = () => {
  return (
    <header className='w-full h-14 shadow-md fixed top-0 flex items-center justify-between px-4'>
      <div className='flex items-center space-x-5'>
        <Link href='/'>
          <a className='uppercase text-lg font-bold text-white bg-black px-[6px] py-[4px] rounded'>
            Dev
          </a>
        </Link>
        <Search />
      </div>
      <Link href='/auth/signin'>
        <a className='text-sm md:text-lg text-gray-700 hover:bg-[rgb(235,236,252)] hover:text-[rgb(59,73,223)] md:px-4 md:py-2 px-2 py-1 rounded hover:underline'>
          Sign in
        </a>
      </Link>
    </header>
  );
};

export default Header;
