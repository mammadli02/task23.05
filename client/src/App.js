import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import './pages/reset.css'
const routes = createBrowserRouter(ROUTES);
const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App