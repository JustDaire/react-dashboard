import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Toolbar from '../parts/Toolbar';
import Sidebar from '../parts/Sidebar';

const Layout = () => {
  return (
    <>
      <Toolbar />
      <div className="row m-0">
        <Sidebar />
        <div className="main col-md-9 col-lg-10 p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
