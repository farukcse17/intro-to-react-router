import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/about',
    element: <div>This is about page</div>
  },
  {
    path: '/contact',
    element: <div>This is a contact page</div>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
