"use client"

import { useActionState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Stethoscope, Loader2 } from "lucide-react"
import { registerUser } from "@/lib/auth-actions"

export default function RegisterPage() {
  const [state, action, isPending] = useActionState(registerUser, null)

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="relative">
              
              <Stethoscope className="h-4 w-4 text-blue-800 absolute -bottom-1 -right-1" />
            </div>
            
          </div>
          <CardTitle className="text-2xl font-bold text-blue-900">Create Account</CardTitle>
          <CardDescription>Join VitaScan AI to access advanced medical imaging analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" required className="border-blue-200 focus:border-blue-500" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="border-blue-200 focus:border-blue-500"
                placeholder="+962 7X XXX XXXX"
              />
            </div>

            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                className="border-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="border-blue-200 focus:border-blue-500"
                minLength={8}
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="border-blue-200 focus:border-blue-500"
                minLength={8}
              />
            </div>

            {state?.error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{state.error}</div>}

            {state?.success && <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">{state.message}</div>}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 py-3 text-lg font-semibold"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating Your Account...
                </>
              ) : (
                <> Create My Account</>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center">
            By creating an account, you agree to our{" "}
            <Link href="/terms-of-service" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
