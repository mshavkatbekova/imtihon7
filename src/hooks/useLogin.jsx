import { useState } from 'react'
import { auth } from '../firebase/FirebaseConfig'
import { useGlobalContext } from './useGlobalContext'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'

function useLogin() {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useGlobalContext()
  const login = async (email, password) => {
    setIsPending(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        dispatch({ type: 'LOGIN', payload: userCredential.user })
        setIsPending(false)
        setError(null)
        toast.success('Well come back !')
      })
      .catch((error) => {
        const errorMessage = error.message
        toast.error(errorMessage)
        setError(errorMessage)
        setIsPending(false)
      })
  }

  return { isPending, error, login }
}

export default useLogin
