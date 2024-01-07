import React from 'react';
import AppRoutes from './utils/AppRoutes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
export const API_URL = "https://65990604a20d3dc41cef2a98.mockapi.io/api/react/ui/blog";
function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
    
  </>
}

export default App