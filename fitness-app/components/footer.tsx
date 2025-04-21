import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-600">Have questions or feedback? We'd love to hear from you.</p>
            <p className="mt-2 text-sm text-gray-600">Email: contact@fitlearn.example.com</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/plan-routine" className="hover:text-blue-600">
                  Plan Your Routine
                </Link>
              </li>
              <li>
                <Link href="/progressive-overload" className="hover:text-blue-600">
                  Progressive Overload
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="hover:text-blue-600">
                  Nutrition Basics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
