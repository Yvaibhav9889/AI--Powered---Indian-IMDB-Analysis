"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search, Brain } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold gradient-text mb-4 animate-float">404</div>
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
            <Brain className="w-16 h-16 text-white animate-float" />
          </div>
        </div>

        {/* Error Message */}
        <div className="glass-effect p-8 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Oops! Page Not Found</h1>
          <p className="text-gray-300 text-lg mb-6">
            It seems like our AI couldn't predict this page would exist. The page you're looking for might have been
            moved, deleted, or never existed.
          </p>

          {/* Fun AI-themed message */}
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4 mb-6">
            <p className="text-purple-300 text-sm">
              🤖 <strong>AI Analysis:</strong> 94% chance you meant to visit a different page. Our recommendation
              algorithm suggests trying the links below!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/"
            className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="glass-effect p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
            <Search className="w-5 h-5 mr-2 text-purple-400" />
            Popular Destinations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href: "/dashboard", label: "Dashboard" },
              { href: "/prediction", label: "Predictions" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-purple-300 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-cyan-500/20 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-pink-500/20 rounded-full animate-float animation-delay-4000"></div>
      </div>
    </div>
  )
}
