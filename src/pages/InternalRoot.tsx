import React from 'react';
import { Outlet } from 'react-router-dom';


function InternalRootLayout() {
  return (
    <>
        <Outlet />
    </>
  );
}

export default InternalRootLayout;