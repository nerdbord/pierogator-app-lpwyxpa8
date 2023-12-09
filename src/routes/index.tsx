import MainLayout from '@layouts/MainLayout';
import CreatorPage from '@pages/CreatorPage';
import DumplingPage from '@pages/DumplingPage';
import DumplingShopPage from '@pages/DumplingShopPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <DumplingShopPage />,
      },
      {
        path: '/dumpling-creator',
        element: <CreatorPage />,
      },
      {
        path: '/dumpling/:id',
        element: <DumplingPage />,
      },
    ],
  },
]);
