import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProfilePage from './pages/ProfilePage.jsx'
import Notfoundpage from './pages/Notfoundpage.jsx'
import Homepage from './pages/Homepage.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <Notfoundpage/>
  },
  {
    path: '/profiles',
    element: <ProfilePage />,
    children:[
      {
    path: '/profiles/:profileId',
    element: <Homepage/>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
