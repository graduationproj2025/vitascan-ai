"use client"

import type React from "react"

import { useState } from "react"
import { ImageIcon } from "lucide-react"

interface SafeImageProps {
  src?: string
  alt: string
  className?: string
  width?: number
  height?: number
  fallback?: React.ReactNode
}

export function SafeImage({ src, alt, className = "", width, height, fallback }: SafeImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (!src || hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded ${className}`} style={{ width, height }}>
        {fallback || (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <ImageIcon className="h-8 w-8 mb-2" />
            <span className="text-xs">No Image</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-100 rounded animate-pulse ${className}`}
          style={{ width, height }}
        >
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={className}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        style={isLoading ? { opacity: 0 } : { opacity: 1 }}
      />
    </div>
  )
}
