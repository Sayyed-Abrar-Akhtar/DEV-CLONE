import React, { useState } from 'react';
import { Blog } from '../../types';
import Pagination from '../Pagination/Pagination';

interface Props {
  data: Blog[];
}

const Blogs: React.FC<Props> = ({ data }: Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  return (
    <div>
      <Pagination blogs={data} setBlogs={setBlogs} blogsPerPage={10}>
        <>
          {blogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </>
      </Pagination>
    </div>
  );
};

export default Blogs;
