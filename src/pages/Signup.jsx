import { Link } from 'react-router-dom'
import SignupBgVideo from '../video/signup-bg.mp4'
import useSignup from '../hooks/useSignup'
import { useRef } from 'react'

function Signup() {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const form = useRef()

  const { isPending, error, signup } = useSignup()
  const handleSubmit = (e) => {
    e.preventDefault()

    signup(name.current.value, email.current.value, password.current.value)

    form.current.reset()
  }
  return (
    <div className="h-screen relative">
      <video
        muted
        autoPlay
        loop
        className="absolute h-screen w-screen object-cover z-[-1]"
        src={SignupBgVideo}
      ></video>
      <div className="h-screen w-full bg-black bg-opacity-50 grid place-items-center">
        <div className="bg-white bg-opacity-55 rounded-lg p-9 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center mb-4 text-black">
            Signup
          </h1>
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
            <label className="form-label">
              <span>Name:</span>
              <input
                ref={name}
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-label">
              <span>Email:</span>
              <input
                ref={email}
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-label">
              <span>Password:</span>
              <input
                ref={password}
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full"
              />
            </label>
            <button className="btn btn-success text-white mt-4 text-center justify-center ">
              {isPending ? (
                <span className="loading loading-ring loading-sm">Loading</span>
              ) : (
                'Signup'
              )}
            </button>
            <Link
              to="/login"
              className="btn btn-info text-white mt-4 text-center justify-center "
            >
              Login
            </Link>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
