import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios'

import { Header } from "./Header";
import { Footer } from "./Footer";
// import { BlogsPage } from "./BlogsPage";
import { BlogsIndex } from "./BlogsIndex";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <BlogsIndex />,
        loader: () => axios.get("http://localhost:3000/blogs.json").then(response => response.data)
      },
    ],
  },
]);

function App() {
  return (
    <div className="container">
    <RouterProvider router={router} />
    </div>
    )
}

export default App;