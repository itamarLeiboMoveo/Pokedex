import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import "../../src/context/PokemonContext.tsx";
import { PokemonProvider } from '../../src/context/PokemonContext.tsx';

function RootLayout() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active'}>
        <PokemonProvider>
          <Outlet />
        </PokemonProvider>
      </StyleSheetManager>
    </>
  );
}

export default RootLayout;