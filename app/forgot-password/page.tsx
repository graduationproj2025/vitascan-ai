"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Stethoscope, ArrowLeft, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate password reset email
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="relative">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <Stethoscope className="h-4 w-4 text-blue-800 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-2xl font-bold text-blue-900">VitaScan AI</span>
          </div>
          <CardTitle className="text-2xl font-bold text-blue-900">Reset Password</CardTitle>
          <CardDescription>
            {isSubmitted
              ? "Check your email for reset instructions"
              : "Enter your email to receive password reset instructions"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-blue-200 focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 py-3 text-lg font-semibold"
              >
                📧 Send Reset Instructions
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-gray-600">
                We've sent password reset instructions to <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500">Didn't receive the email? Check your spam folder or try again.</p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              href="/signin"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium hover:scale-105 transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />← Back to Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
