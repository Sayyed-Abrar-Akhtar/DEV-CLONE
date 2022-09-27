import React, { useEffect, useState } from 'react';
import { Blog } from '../../types';
import Blogs from '../Blogs/Blogs';
import Button from '../Button/Button';

interface Props {
  blogs: Blog[];
  blogsPerPage: number;
}

const sliceBlogs = (arr: Blog[], start: number, end: number) => {
  return arr.slice(start, end);
};

const Paginate: React.FC<Props> = ({ blogs, blogsPerPage }: Props) => {
  const [blogsArr, setBlogsArr] = useState<Blog[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(10);

  useEffect(() => {
    setBlogsArr(sliceBlogs(blogs, start, end));
    setStart((page - 1) * blogsPerPage);
    setEnd(page * blogsPerPage);
    setPages(Math.ceil(blogs.length / blogsPerPage));
  }, [blogs, page, start, end, blogsPerPage]);

  const pageClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as Element;
    setPage(Number(target.innerHTML));
  };

  return (
    <div className='w-full'>
      <Blogs data={blogsArr} />
      {pages > 1 && (
        <div className='flex justify-center space-x-2 w-full mx-auto mb-20'>
          {blogs.map(
            (blog, idx) =>
              idx < pages && (
                <Button
                  key={blog.id + idx * Date.now()}
                  active={idx + 1 === page}
                  text={`${idx + 1}`}
                  clickHandle={pageClickHandle}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Paginate;
