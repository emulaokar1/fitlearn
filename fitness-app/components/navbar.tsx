"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Dumbbell } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">FitLearn</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </Link>
          <Link href="/plan-routine" className="text-sm font-medium hover:text-blue-600">
            Plan Your Routine
          </Link>
          <Link href="/progressive-overload" className="text-sm font-medium hover:text-blue-600">
            Progressive Overload
          </Link>
          <Link href="/nutrition" className="text-sm font-medium hover:text-blue-600">
            Nutrition Basics
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/plan-routine"
              className="text-sm font-medium hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Plan Your Routine
            </Link>
            <Link
              href="/progressive-overload"
              className="text-sm font-medium hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Progressive Overload
            </Link>
            <Link
              href="/nutrition"
              className="text-sm font-medium hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Nutrition Basics
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
