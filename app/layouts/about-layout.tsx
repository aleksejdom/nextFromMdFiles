'use client';

import { ReactNode } from 'react';
import './about-layout.scss';

// Annotieren Sie die children-Prop mit dem Typ ReactNode
type AboutLayoutProps = {
  children: ReactNode;
};

const AboutLayout = ({ children }: AboutLayoutProps) => { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 about-page"> 
      {children}  
    </main>
  );
};

export default AboutLayout;