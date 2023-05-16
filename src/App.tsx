import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import WelcomePage from './pages/Welcome';
import BlogLayout from './pages/Post/BlogLayout';
import BlogPostsPage from './pages/Post/BlogPosts';
import CategoryLayout from './pages/Category/CategoryLayout';
import CategoriesPage from './pages/Category/Categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
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
