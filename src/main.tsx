import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import App from './App.tsx'
import ErrorPage from './routes/ErrorPage/ErrorPage.tsx';

import LandingPage from './routes/LandingPage/LandingPage';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import PhotoUpload from './routes/PhotoUpload/PhotoUpload.tsx';
import Results from './routes/Results/Results';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "register/",
        element: <Register />,
      },
      {
        path: "login/",
        element: <Login />,
      },
      {
        path: "upload/",
        element: <PhotoUpload />,
      },
      {
        path: "results/",
        element: <Results />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
