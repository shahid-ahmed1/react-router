import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Usears from './components/Users/Usears.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Pots from './components/Pots/Pots.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Eror from './components/Error/Eror.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<Eror></Eror>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Usears>
        </Usears>
      },
      {
        path:'/user/:userId',
       loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Pots></Pots>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element:<PostDetails></PostDetails>
      }
      // {
      //   path:'/user/:userid',
      //   loader:({prams})=> fetch(`https://jsonplaceholder.typicode.com/users/${prams.userid}`),
      //   element:<UserDetails></UserDetails>
      // }
    
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
