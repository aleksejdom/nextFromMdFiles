import React from 'react';
import Head from 'next/head';
import './globals.css';
import Navigation from './components/Navigation';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        <meta http-equiv="content-language" content="de" />
      </Head>
      <body>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </>
  );
}