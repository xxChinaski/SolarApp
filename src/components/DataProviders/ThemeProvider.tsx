'use client'
import { ReactNode, createContext } from "react"

export const ThemeContext = createContext({})

const ThemeProvider = ({children}:{children:ReactNode}) => {
  return <ThemeContext.Provider value='dark'>{children}</ThemeContext.Provider>
}
export default ThemeProvider
