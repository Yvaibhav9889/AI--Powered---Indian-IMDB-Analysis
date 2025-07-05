"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, TrendingUp, Users, Star, Film, BarChart3, Zap } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into Indian cinema trends and patterns",
    },
    {
      icon: Zap,
      title: "AI Predictions",
      description: "Machine learning-powered box office and rating predictions",
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Real-time analysis of genre popularity and market trends",
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: "Understanding viewer preferences and demographics",
    },
  ]

  const stats = [
    { label: "Movies Analyzed", value: "5k+", icon: Film },
    { label: "Predictions Made", value: "6k+", icon: Zap },
    { label: "Accuracy Rate", value: "94%", icon: Star },
    { label: "Active Users", value: "100+", icon: Users },
  ]

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="floating-orb w-96 h-96 -top-48 -right-48 animate-float opacity-30"></div>
      <div className="floating-orb w-64 h-64 -bottom-32 -left-32 animate-float animation-delay-2000 opacity-20"></div>
      <div className="floating-orb w-32 h-32 top-1/3 right-1/4 animate-float animation-delay-4000 opacity-25"></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              {/* AI Badge */}
              <div className="inline-flex items-center space-x-2 border-beam rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">AI-Powered Cinema Intelligence</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="gradient-text">AI-Powered</span>
                <br />
                <span className="relative">
                  Indian IMDb Analysis
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-lg -z-10 animate-pulse-slow"></div>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Unlock the power of machine learning to analyze, predict, and understand the Indian film industry like
                never before.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/dashboard"
                  className="group relative modern-button bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 subtle-glow"
                >
                  <span>Explore Dashboard</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <button className="group border-beam text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 subtle-glow">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`text-center border-beam p-6 rounded-2xl transition-all duration-500 hover:scale-105 subtle-glow group ${
                    isVisible ? "animate-fade-scale" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <Icon className="w-8 h-8 text-purple-400 mx-auto group-hover:animate-pulse" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful <span className="gradient-text">AI Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how our advanced machine learning algorithms transform Indian cinema data into actionable
              insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`border-beam-slow p-8 rounded-2xl transition-all duration-500 hover:scale-105 group relative ${
                    isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow subtle-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-beam p-12 rounded-3xl relative group">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Explore Indian Cinema with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of filmmakers, analysts, and enthusiasts who trust our AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prediction"
                className="modern-button bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl subtle-glow"
              >
                Start Predicting
              </Link>
              <Link
                href="/about"
                className="border-beam text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 subtle-glow"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
