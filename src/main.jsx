import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home/Home';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
import ProjectDetails from './Component/ProjectDetails/ProjectDetails';
import Projects from './Component/Home/Project/Projects';
import About from './Component/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
          path:'/',
          element:<Home></Home>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
  },
  {
    path:'/about',
    element:<About></About>
},
  {
    path:'/project/:id',
    element:<ProjectDetails></ProjectDetails>,
    loader:({params})=> fetch(`http://localhost:5000/project/${params.id}`)
},
    {
        path:'/project',
        element:<Projects></Projects>
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
