"use client"

import { useAuth } from "@/lib/auth-context"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import { UserCircle } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()

  useEffect(() => {
    if (!user) redirect("/signin")
  }, [user])

  if (!user) return null

  const formattedDate = new Date(user.dateOfBirth || "").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob)
    const diff = Date.now() - birthDate.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <UserCircle className="text-blue-600 w-14 h-14" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-800">My Profile</h1>
            <p className="text-gray-500">Welcome back, {user.firstName}!</p>
          </div>
        </div>

        <div className="space-y-4 text-gray-700 text-base">
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-semibold">Full Name:</span> {user.firstName} {user.lastName}</p><br></br>
            <p><span className="font-semibold">Email:</span> {user.email}</p><br></br>
            <p><span className="font-semibold">Phone:</span> {user.phone || "N/A"}</p><br></br>
            <p><span className="font-semibold">Date of Birth:</span> {formattedDate || "N/A"}</p><br></br>
            <p><span className="font-semibold">Age:</span> {user.dateOfBirth ? `${calculateAge(user.dateOfBirth)} years` : "N/A"}</p>
           
          </div>
        </div>
      </div>
    </div>
  )
}
