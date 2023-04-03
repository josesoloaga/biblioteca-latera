import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-supabase';
import { supabase } from './api/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import './reset.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { AppProvider } from './config-adapters/context-provider';
import DonateBookFormPage from './pages/DonateBookForm';
<<<<<<< HEAD
import { NewBookForm } from './ui/features/new-book-form/new-book-form-component';
=======
>>>>>>> 1f02bcf2 (feat:donate book from component)
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
<<<<<<< HEAD
    path: '/new',
    element: <NewBookForm />
  },
  {
=======
>>>>>>> 1f02bcf2 (feat:donate book from component)
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
