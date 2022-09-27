import type { GetStaticProps, NextPage } from 'next';
import Blogs from '../components/Blogs/Blogs';
import Layout from '../components/Layout/Layout';
import { Blog } from '../types';

type Props = {
  blogs: Blog[];
};

const Home: NextPage<Props> = ({ blogs }: Props) => {
  return (
    <Layout
      title='Dev Community'
      description="DEV Community is a community of amazing developers. We're a place where coders share, stay up-to-date and grow their careers."
    >
      <Blogs data={blogs} />
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
  };
};

export default Home;
