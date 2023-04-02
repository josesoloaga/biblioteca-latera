import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { Provider } from 'react-supabase'
import { supabase } from "./api/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./ui/features/login/login-component";
const router = createBrowserRouter([
  {
      path: '/home',
      element: <Home />,
  },
  {
      path: '/',
      element: <Login  />,
  },

])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider value={supabase}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

