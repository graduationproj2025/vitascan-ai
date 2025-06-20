import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/lib/auth-context"
import { FloatingActionButtons } from "@/components/floating-action-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VitaScan AI - Advanced Medical Imaging Analysis",
  description: "AI-powered lung and heart X-ray analysis for accurate medical diagnosis",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-100/50 to-blue-200/50">
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
            <FloatingActionButtons />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
