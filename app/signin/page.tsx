"use client"

import { useEffect, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useActionState } from "react"
import { signInUser } from "@/lib/auth-actions"
import { useAuth } from "@/lib/auth-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import type { User } from "@/lib/auth-context"

export default function SignInPage() {
  const router = useRouter()
  const { setUser } = useAuth()
  const [state, formAction] = useActionState(signInUser, null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (state?.success && state?.user) {
      const user = state.user as User
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)

      startTransition(() => {
        router.push("/dashboard")
      })
    }
  }, [state, setUser, router, startTransition])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form action={formAction} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-center text-blue-800">Sign In to VitaScan AI</h2>
          {state?.error && (
            <p className="text-red-500 text-sm text-center mt-2">{state.error}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required className="mt-1" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required className="mt-1" />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          disabled={isPending}
        >
          {isPending ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  )
}
