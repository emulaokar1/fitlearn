import Hero from "@/components/hero"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import GoalReflection from "@/components/goal-reflection"

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Your Fitness Journey Starts Here</h2>
              <p className="mb-6 text-lg text-gray-600">
                Whether you're just starting out or looking to take your fitness to the next level, our step-by-step
                guides will help you create a workout routine that works for you.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <div className="mr-2 h-5 w-5 rounded-full bg-blue-600"></div>
                  <span>Learn how to structure your workouts</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-5 w-5 rounded-full bg-blue-600"></div>
                  <span>Understand progressive overload principles</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-5 w-5 rounded-full bg-blue-600"></div>
                  <span>Master nutrition basics for optimal results</span>
                </li>
              </ul>
              <Link href="/plan-routine">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/homeimg.jpg"
                alt="Person working out"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <GoalReflection />

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to transform your fitness journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of students and young professionals who have already improved their workout routines with our
            guidance.
          </p>
          <Link href="/plan-routine">
            <Button size="lg" variant="secondary">
              Start Learning Now
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-sm text-gray-600">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or before starting any exercise program. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
