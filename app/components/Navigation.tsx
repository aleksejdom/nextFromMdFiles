import React from 'react';
import Link from 'next/link';

export default function Navigation() {
    return ( 
      <nav className='flex ml-auto p-3'>
        <ul className='ml-auto'>
          <Link href="/" className='px-3'>Home</Link>
          <Link href="/about" className='px-3'>About</Link>
          <Link href="/blog" className='px-3'>Blog</Link>
        </ul>
      </nav>
    )
}