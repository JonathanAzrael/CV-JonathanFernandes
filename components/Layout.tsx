import React, { ReactNode } from 'react';
import { SideBar } from './Sidebar';
import { NavBar } from './NavBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col overflow-hidden h-screen bg-gray-200">
        <SideBar />
        <NavBar />
        <div className="bg-white max-w-auto ml-70 mt-30 mr-8 rounded-xl">
          {children}
        </div>
    </div>
  );
};

export default Layout;
