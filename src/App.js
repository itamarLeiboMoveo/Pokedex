
import HomePage from './pages/HomePage/HomePage.tsx';
import PokemonPage from './pages/PokemonPage/PokemonPage.tsx';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import RootLayout from './pages/Root.tsx';
import MapPage from './pages/MapPage/MapPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'pokemon/:pokeId',
        element: <PokemonPage />,
      },
      {
        path: 'map',
        element: <MapPage />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
