import { link } from 'fs';
import React, { useEffect, useState } from 'react';
import { Blog } from '../../types';
import Button from '../Button/Button';

interface Props {
  blogsPerPage: number;
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
  children: JSX.Element;
}

const Pagination: React.FC<Props> = ({
  blogsPerPage = 10,
  blogs,
  setBlogs,
  children,
}: Props) => {
  const [page, setPage] = useState<number>(1);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(10);
  const [pages, setPages] = useState<number>(0);

  useEffect(() => {
    setStart((page - 1) * blogsPerPage);
    setEnd(page * blogsPerPage);
    setPages(Math.ceil(blogs.length / blogsPerPage));
    setBlogs(blogs.slice(start, end));
  }, [setBlogs, blogs, start, end, page, blogsPerPage]);

  const pageClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as Element;
    setPage(Number(target.innerHTML));
  };

  return (
    <div>
      {children}

      <div className='space-x-2'>
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
    </div>
  );
};

export default Pagination;
