// src/context/UserContext.js
import { createContext, useContext, useReducer, useEffect } from "react"
import { userReducer } from "../reducers/userReducer"

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [state, userDispatch] = useReducer(userReducer, {
    user: null,
    loading: false,
    error: false,
  })
  const { user, loading, error } = state
  return (
    <UserContext.Provider value={{ user, loading, error, userDispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(
      `You should use useUser only within the UserContext.Provider`
    )
  }
  return context
}