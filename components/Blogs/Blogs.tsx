import React from 'react';
import { Blog } from '../../types';
import BlogList from '../Blog/BlogList';
interface Props {
  data: Blog[];
}

const Blogs: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className='mx-0 my-10 md:mx-20'>
      <>
        {data.map((blog, idx) =>
          idx === 0 ? (
            <BlogList key={blog.id} blog={blog} showCoverImg={true} />
          ) : (
            <BlogList key={blog.id} blog={blog} />
          )
        )}
      </>
    </div>
  );
};

export default Blogs;
