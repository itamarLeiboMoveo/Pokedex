
import HomePage from './pages/HomePage/HomePage.tsx';
import InternalPage from './pages/InternalPage/InternalPage.tsx';
import { RouterProvider, createBrowserRouter , } from 'react-router-dom';
import RootLayout from './pages/Root.tsx';
import InternalRootLayout from './pages/InternalRoot.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'internal-page/:pokeId',
        element: <InternalPage />,
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
