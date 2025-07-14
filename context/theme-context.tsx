"use client"

import type React from "react"
import { createContext, useContext, useEffect } from "react"

type Theme = "dark"

interface ThemeContextType {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme: Theme = "dark"

  useEffect(() => {
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
  }, [])

  const value = { theme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}