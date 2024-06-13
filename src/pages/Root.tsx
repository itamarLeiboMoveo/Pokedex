import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';


function RootLayout() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active'}>
        <Outlet />
      </StyleSheetManager>
    </>
  );
}

export default RootLayout;