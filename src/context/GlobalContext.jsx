import { createContext } from 'react'
import { useReducer } from 'react'

export const GlobalContext = createContext()

const changeState = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'LOGIN':
      return { ...state, user: payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'IS_AUTH_READY':
      return { ...state, isAuthReady: true }
    default:
      state
  }
}
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthReady: false,
  })
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
