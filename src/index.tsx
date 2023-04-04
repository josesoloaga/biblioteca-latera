import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-supabase';
import { supabase } from './api/client';
import { RouterProvider, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import './reset.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { AppProvider } from './config-adapters/context-provider';
import DonateBookFormPage from './pages/DonateBookForm';
import { NewBookForm } from './ui/features/new-book-form/new-book-form-component';
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
    element: <NewBookForm />
  },
  {
    path: '/',
    element: <LoginPage />,
  }
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
