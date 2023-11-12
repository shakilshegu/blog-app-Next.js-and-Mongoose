"use clinet"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeProvider = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>ThemeProvider</div>
  )
}

export default ThemeProvider