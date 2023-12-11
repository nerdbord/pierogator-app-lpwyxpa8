import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from '@src/routes';
import { RouterProvider } from 'react-router-dom';
import { AppContainer } from '@components/AppContainer/AppContainer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  </React.StrictMode>,
);
