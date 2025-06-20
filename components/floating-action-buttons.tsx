"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, MessageCircle, Upload, X, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Secondary buttons */}
      <div
        className={cn(
          "flex flex-col space-y-3 mb-4 transition-all duration-300 transform",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none",
        )}
      >
        <Link href="/analysis">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            title="Start Analysis"
          >
            <Upload className="h-6 w-6" />
          </Button>
        </Link>

        <Link href="/contact">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            title="Contact Support"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </Link>

        <Link href="/dashboard">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            title="View Dashboard"
          >
            <BarChart3 className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      {/* Main FAB */}
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95",
          isOpen && "rotate-45",
        )}
        title={isOpen ? "Close menu" : "Quick actions"}
      >
        {isOpen ? <X className="h-8 w-8" /> : <Plus className="h-8 w-8" />}
      </Button>
    </div>
  )
}
