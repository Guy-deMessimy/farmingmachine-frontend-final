import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import WelcomePage from './pages/Welcome';
import BlogLayout from './pages/Post/BlogLayout';
import BlogPostsPage from './pages/Post/BlogPosts';
import CategoryLayout from './pages/Category/CategoryLayout';
import CategoriesPage from './pages/Category/Categories';
import ConfigurationLayout from './pages/Configuration/ConfigurationLayout';
import ConfigurationPage from './pages/Configuration/Configuration';
import RentLayout from './pages/Rent/RentLayout';
import RentPage from './pages/Rent/Rent';
import MachineLayout from './pages/Machine/machine-layout';
import MachinePage from './pages/Machine/components/machine-page';
import * as Styled from './app-styled';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: '/machines',
        element: <MachineLayout />,
        children: [
          {
            index: true,
            element: <MachinePage />,
          },
        ],
      },
      {
        path: '/category',
        element: <CategoryLayout />,
        children: [
          {
            index: true,
            element: <CategoriesPage />,
          },
        ],
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
        element: <RentLayout />,
        children: [
          {
            index: true,
            element: <RentPage />,
          },
        ],
      },
      {
        path: '/share',
      },
      {
        path: '/configuration',
        element: <ConfigurationLayout />,
        children: [
          {
            index: true,
            element: <ConfigurationPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Styled.App>
      <RouterProvider router={router} />
    </Styled.App>
  );
}

export default App;
