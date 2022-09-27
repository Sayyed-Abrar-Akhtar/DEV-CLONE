import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const PageNotFound: NextPage = () => {
  return (
    <Layout
      title='404 | Page Not Found'
      description='Page is not available or removed'
    >
      <div className='flex w-full h-full my-[20%] justify-center flex-col items-center space-y-5'>
        <h1 className='text-5xl font-bold'>404</h1>
        <p className='text-2xl'>Page Not Found!</p>
        <Link href='/'>
          <a className='bg-blue-500 text-white font-semibold rounded px-6 py-2'>
            Go Back!
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
