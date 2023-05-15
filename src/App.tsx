import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import WelcomePage from './pages/Welcome';
import ServiceLayout from './pages/ServiceLayout';
import BlogLayout from './pages/BlogLayout';
import BlogPostsPage from './pages/BlogPosts';

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
        path: '/blog',
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <BlogPostsPage />,
          },
          // {
          //   path: ':id',
          //   element: <PostDetailPage />,
          //   // loader: blogPostLoader,
          // },
        ],
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
