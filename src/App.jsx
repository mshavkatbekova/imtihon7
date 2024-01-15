import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useGlobalContext } from './hooks/useGlobalContext'
import { Navigate } from 'react-router-dom'
import { auth } from './firebase/FirebaseConfig'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Chekout from './pages/Chekout'
import ProductsLayout from './layout/ProductsLayout'
import SingleProduct from './pages/SingleProduct'

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext()
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/products',
          element: <ProductsLayout />,
          children: [
            {
              index: true,
              element: <Products />,
            },
            {
              path: ':id',
              element: <SingleProduct />,
            },
          ],
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/chekout',
          element: <Chekout />,
        },
      ],
    },
    {
      path: '/login',
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: '/signup',
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'LOGIN', payload: user })
      dispatch({ type: 'IS_AUTH_READY', payload: user })
    })
  }, [])
  return isAuthReady && <RouterProvider router={router} />
}
export default App
