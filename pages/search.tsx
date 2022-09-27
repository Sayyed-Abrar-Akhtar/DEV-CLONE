import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import { GetStaticProps, NextPage } from 'next';
import { Blog } from '../types';
import Paginate from '../components/Pagination/Paginate';

type Props = {
  blogs: Blog[];
};

const SearchPage: NextPage<Props> = ({ blogs }: Props) => {
  const router = useRouter();
  const searchQuery: string = router.query.q as string;

  const [searchedBlogs, setSearchedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setSearchedBlogs(
      blogs.filter((blog) => blog.title.toLowerCase().search(searchQuery) > -1)
    );
  }, [blogs, searchQuery]);

  return (
    <Layout
      title='Search Articles'
      description='Search from thousand of articles from developers around the world'
    >
      <>
        <h1 className='font-bold text-3xl'>
          Search results for {router.query.q}{' '}
        </h1>
        <Paginate blogs={searchedBlogs} blogsPerPage={10} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://dev.to/api/articles');
  const blogs: Blog[] = await res.json();

  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
};

export default SearchPage;
