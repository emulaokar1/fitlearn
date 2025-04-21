import type React from "react"
interface StepCardProps {
  number: number
  title: string
  description: string
  children?: React.ReactNode
}

export default function StepCard({ number, title, description, children }: StepCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      {children}
    </div>
  )
}
