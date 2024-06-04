import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';


function RootLayout() {
    

  return (
    <>
        <Outlet />
    </>
  );
}

export default RootLayout;