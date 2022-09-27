import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import Paginate from '../../components/Pagination/Paginate';
import { Blog } from '../../types';

interface Props {
  blogs: Blog[];
}

const BlogsPage: NextPage<Props> = ({ blogs }: Props) => {
  return (
    <Layout
      title='DEV | All Blogs'
      description="DEV Community is a community of amazing developers. We're a place where coders share, stay up-to-date and grow their careers."
    >
      <Paginate blogs={blogs} blogsPerPage={10} />
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

export default BlogsPage;
