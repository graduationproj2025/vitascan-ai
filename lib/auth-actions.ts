"use server"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma" // تأكدي أن لديك هذا الملف لتصدير Prisma Client

export async function registerUser(prevState: any, formData: FormData) {
  try {
    const firstName = formData.get("firstName")?.toString() || ""
    const lastName = formData.get("lastName")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const phone = formData.get("phone")?.toString() || ""
    const dateOfBirthRaw = formData.get("dateOfBirth")?.toString() || ""
    const password = formData.get("password")?.toString() || ""
    const confirmPassword = formData.get("confirmPassword")?.toString() || ""

    if (!firstName || !lastName || !email || !password) {
      return { error: "All required fields must be filled" }
    }

    if (password !== confirmPassword) {
      return { error: "Passwords do not match" }
    }

    if (password.length < 8) {
      return { error: "Password must be at least 8 characters long" }
    }

    // تحقق من أن المستخدم غير مسجل مسبقًا
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return { error: "Email is already registered" }
    }

    // تحويل تاريخ الميلاد إذا تم إدخاله
    const dateOfBirth = dateOfBirthRaw ? new Date(dateOfBirthRaw) : null

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10)

    // إنشاء المستخدم في قاعدة البيانات
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        dateOfBirth,
        password: hashedPassword,
      },
    })

    return { success: true, message: "Account created successfully!" }
  } catch (error) {
    console.error("Registration error:", error)
    return { error: "Registration failed. Please try again." }
  }
}
export async function signInUser(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email")?.toString() || ""
    const password = formData.get("password")?.toString() || ""

    if (!email || !password) {
      return { error: "Email and password are required" }
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return { error: "No account found with this email" }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return { error: "Incorrect password" }
    }

    // ✅ إذا تم تسجيل الدخول بنجاح، ارسل المستخدم إلى /dashboard
   
  return {
  success: true,
  user: {
    id: user.id, // 👈 ضروري!
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    dateOfBirth: user.dateOfBirth,
  },
  redirect: "/dashboard",
}


  } catch (error) {
    return { error: "Sign in failed. Please try again." }
  }
}