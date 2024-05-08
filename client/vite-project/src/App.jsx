
import './App.css'
// import * as ReactDOM from "react-dom/vite-project/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <span>Home</span>,
  },
  {
    path: "/products/:id",
    element: <span>Category</span>,
  },
  {
    path: "/product/:id",
    element: <span>Product</span>,
  },
]);
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
