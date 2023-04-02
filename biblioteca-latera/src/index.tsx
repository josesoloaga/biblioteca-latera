import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-supabase'
import { supabase } from "./api/client";
import {  RouterProvider } from "react-router-dom";
import {routes} from './routing/routes'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider value={supabase}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
);

