import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Mishen from './contex.tsx/mishen.tsx'
import UsersInfo from './components/Example/infoUsers.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  },
  {
    path: "/infoUsers/:id",
  element: <UsersInfo />,
  },
  {
    path: "/mishen/:id",
    element: <Mishen />,
    }

  ]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)




