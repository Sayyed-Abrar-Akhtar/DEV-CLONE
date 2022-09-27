import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const router = useRouter();
  const searchHandle = () => {
    router.push(`/search?q=${searchValue}`);
  };

  const OnKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?q=${searchValue}`);
    }
  };

  return (
    <div className='relative'>
      <input
        type='search'
        placeholder='Search...'
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={OnKeyDownHandler}
        className='md:w-[402px] border-[1px] border-[rgb(163,163,163)] rounded py-[7px] px-[8px] outline-none placeholder-[rgb(49,49,49)]'
      />
      <span className='absolute right-[2px] top-[2px] rounded py-[10px] px-[8px] bg-white hover:bg-[rgb(235,236,252)] hover:text-[rgb(59,73,223)]'>
        <BsSearch onClick={searchHandle} />
      </span>
    </div>
  );
};

export default Search;
