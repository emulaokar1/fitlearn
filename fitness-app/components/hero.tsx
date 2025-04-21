import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Helping you build a sustainable workout plan that fits your life.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
          Learn how to create effective exercise routines, understand progressive overload, and master nutrition basics
          to achieve your fitness goals.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="/plan-routine">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Learning
            </Button>
          </Link>
          <Link href="#goals">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Choose Your Goal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
