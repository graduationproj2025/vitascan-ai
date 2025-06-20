"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  loading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

export function AnimatedButton({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  className,
  children,
  disabled,
  ...props
}: AnimatedButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 focus:ring-gray-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95",
    ghost: "text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:ring-blue-500 hover:scale-105 active:scale-95",
  }

  const sizeClasses = {
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-6 py-3 text-lg rounded-lg",
    xl: "px-8 py-4 text-xl rounded-xl",
  }

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-inherit"></span>

      {/* Loading spinner */}
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {/* Icon */}
      {icon && !loading && <span className="mr-2">{icon}</span>}

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></span>
    </button>
  )
}
