import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../Header/Header';

interface Props {
  title: string;
  description: string;
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='mt-14'>{children}</main>

      <footer className=''></footer>
    </>
  );
};

export default Layout;
