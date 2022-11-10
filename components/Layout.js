import React from 'react';
import Head from 'next/head';

//Components
import Footer from './Footer';
import Header from './Header';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
