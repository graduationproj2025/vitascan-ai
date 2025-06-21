"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Stethoscope, User, LogOut } from "lucide-react"

export function Navbar() {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSignOut = () => {
    signOut()
    router.push("/signin")
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Stethoscope className="h-4 w-4 text-blue-800 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-2xl font-bold text-blue-900">VitaScan AI</span>
          </Link>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">Home</Link>
            <Link href="/analysis" className="text-blue-700 hover:text-blue-900 font-medium">Analysis</Link>
            <Link href="/contact" className="text-blue-700 hover:text-blue-900 font-medium">Contact</Link>
            {user ? (
              <>
                <Link href="/dashboard" className="text-blue-700 hover:text-blue-900 font-medium">Dashboard</Link>
                <Link href="/profile">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-full">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-blue-700 font-medium">Hi, {user.firstName}!</span>
                  </div>
                </Link>
                <Button onClick={handleSignOut} variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                  <LogOut className="h-4 w-4 mr-2" /> Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800">Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden flex flex-col items-start gap-4 py-4 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">Home</Link>
          <Link href="/analysis" className="text-blue-700 hover:text-blue-900 font-medium">Analysis</Link>
          <Link href="/contact" className="text-blue-700 hover:text-blue-900 font-medium">Contact</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="text-blue-700 hover:text-blue-900 font-medium">Dashboard</Link>
              <Link href="/profile" className="text-blue-700 hover:text-blue-900 font-medium">Profile</Link>
              <Button onClick={handleSignOut} variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                <LogOut className="h-4 w-4 mr-2" /> Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-800">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
