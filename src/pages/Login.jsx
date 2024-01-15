import { Link } from 'react-router-dom'
import LoginBgVideo from '../video/login-bg.mp4'
import useLogin from '../hooks/useLogin'
import { useRef } from 'react'

function Login() {
  const email = useRef()
  const password = useRef()
  const form = useRef()

  const { isPending, error, login } = useLogin()
  const handleSubmit = (e) => {
    e.preventDefault()

    login(email.current.value, password.current.value)

    form.current.reset()
  }

  return (
    <div className="h-screen relative">
      <video
        muted
        autoPlay
        loop
        className="absolute h-screen w-screen object-cover z-[-1]"
        src={LoginBgVideo}
      ></video>
      <div className="h-screen w-full bg-black bg-opacity-50 grid place-items-center">
        <div className="bg-white bg-opacity-30 rounded-lg p-9 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center mb-4 text-black">
            Login
          </h1>
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
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
                'Login'
              )}
            </button>
            <p className=" text-white mt-4 text-center justify-center ">
              Not a member yet?{' '}
              <Link className="text-indigo-600 font-bold" to="/signup">
                Signup
              </Link>
              {error && <p>{error}</p>}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
