import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-supabase';
import { supabase } from './infra/api/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './reset.css';
import HomePage from './application/pages/Home';
import LoginPage from './application/pages/Login';
import { AppProvider } from './application/config-adapters/context-provider';
import DonateBookFormPage from './application/pages/DonateBookForm';
import  NewBookPage  from './application/pages/NewBook';
import  DonatedListAdminComponent  from './application/ui/features/donatedListAdmin/donated-list-admin-component';
//TODO: hacer ruta formulario, pagina y componente ...
const routes = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/donate',
    element: <DonateBookFormPage />,
  },
  {
    path: '/new',
    element: <NewBookPage />,
  },
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/donatedList',
    element: <DonatedListAdminComponent bookDonatedListAdmin={[]} />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Provider value={supabase}>
        <RouterProvider router={routes} />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
);
