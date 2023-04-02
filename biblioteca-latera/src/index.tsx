import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-supabase'
import { supabase } from "./api/client";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import './reset.css'
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
const routes = createBrowserRouter([
  {
    path: "/home",
    element:  <HomePage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider value={supabase}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
);

