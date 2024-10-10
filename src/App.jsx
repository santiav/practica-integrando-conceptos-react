import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Layout from './pages/Layout'

function App() {

  const router = createBrowserRouter ([
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                path:'products/:id',
                element: <ProductDetails />
            },
            {
              // path:'products',
              index: true,
              element: <Products />
            }
        ]
        
    }
])

  return (
    <RouterProvider router={router} />
  )
}

export default App

{/* Estacionamiento */}

