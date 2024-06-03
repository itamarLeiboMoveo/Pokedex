import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';


function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
        <Outlet />
    </>
  );
}

export default RootLayout;