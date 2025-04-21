"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react"

interface CollapsibleTipProps {
  title: string
  children: React.ReactNode
}

export default function CollapsibleTip({ title, children }: CollapsibleTipProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 rounded-lg border bg-blue-50">
      <button
        className="flex w-full items-center justify-between p-4 text-left font-medium text-blue-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5" />
          <span>Did You Know? {title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && <div className="border-t border-blue-200 p-4 text-blue-800">{children}</div>}
    </div>
  )
}
