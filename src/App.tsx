import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import WelcomePage from './pages/Welcome';
import ServiceLayout from './pages/ServiceLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: '/service',
        element: <ServiceLayout />,
      },
      {
        path: '/rent',
      },
      {
        path: '/share',
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
