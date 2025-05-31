import { createRoot } from 'react-dom/client'
import Login from './LoginPage'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Counter from './Counter'
import Post from './post'
import NoPage from './NoPage'



const router = createBrowserRouter([
  { path: "/",
    element: <Home/>,
    errorElement: <NoPage/>
  },
  { path: "/login",
    element: <Login/>
  },
  {
    path: "/counter",
    element: <Counter/>
  },
  {
    path: "/post/:id",
    element: <Post/>
  }
]);




createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />
  
)
