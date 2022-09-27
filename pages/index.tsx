import type { GetStaticProps, NextPage } from 'next';

import Layout from '../components/Layout/Layout';
import Paginate from '../components/Pagination/Paginate';
import { Blog } from '../types';

type Props = {
  blogs: Blog[];
};

const Home: NextPage<Props> = ({ blogs }: Props) => {
  console.log(blogs);
  return (
    <Layout
      title='Dev Community'
      description="DEV Community is a community of amazing developers. We're a place where coders share, stay up-to-date and grow their careers."
    >
      <>
        <Paginate blogs={blogs} blogsPerPage={10} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://dev.to/api/articles');
  const blogs: Blog[] = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
};

export default Home;
