import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { auth } from '../firebase/FirebaseConfig'
import { signOut } from 'firebase/auth'

function Navbar() {
  const { user } = useGlobalContext()
  const [isPending, setIsPending] = useState(false)

  const handleSignOut = () => {
    setIsPending(true)
    signOut(auth)
      .then(() => {
        setIsPending(false)
      })
      .catch((error) => {
        toast.error(error)
      })
  }

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleChange = (e) => {
    if (e.target.checked) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <>
      <div className="bg-slate-900 text-white">
        <div className="max-container flex justify-end items-center gap-7 py-2">
          <p>Welcome, {user.displayName}</p>
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-info py-0 rounded"
          >
            Logout
          </button>
        </div>
      </div>
      <header className="max-container flex items-center justify-between mt-3 mb-7">
        <Link
          to="/"
          className="btn btn-active btn-info dark:text-white font-bold text-xl"
        >
          C
        </Link>
        <div className="flex items-center">
          <nav>
            <div className="flex gap-3">
              <Link className="btn btn-neutral" to="/">
                Home
              </Link>
              <Link className="btn btn-neutral" to="/about">
                About
              </Link>
              <Link className="btn btn-neutral" to="/products">
                Products
              </Link>
              <Link className="btn btn-neutral" to="/cart">
                Cart
              </Link>
              <Link className="btn btn-neutral" to="/chekout">
                Chekout
              </Link>
            </div>
          </nav>
        </div>
        <div className="gap-2 flex items-center">
          <label className="swap swap-rotate">
            <input
              onChange={handleChange}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
