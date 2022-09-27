import React from 'react';

import { BsSearch } from 'react-icons/bs';

const Search: React.FC = () => {
  return (
    <div className='relative'>
      <input
        type='search'
        placeholder='Search...'
        className='md:w-[402px] border-[1px] border-[rgb(163,163,163)] rounded py-[7px] px-[8px] outline-none placeholder-[rgb(49,49,49)]'
      />
      <span className='absolute right-[2px] top-[2px] rounded py-[10px] px-[8px] hover:bg-[rgb(235,236,252)] hover:text-[rgb(59,73,223)]'>
        <BsSearch className='' />
      </span>
    </div>
  );
};

export default Search;
