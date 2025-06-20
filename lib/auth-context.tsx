"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string 
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: string
}


interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (userData: User) => void
  signOut: () => void
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem("user") || localStorage.getItem("vitascan_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = (userData: User) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData)) // لازم تكون متطابقة مع اللي في Navbar
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
