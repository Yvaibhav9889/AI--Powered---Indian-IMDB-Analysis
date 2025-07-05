"use client"

import { useState, useEffect } from "react"
import { Brain, Target, Users, Award, Github, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Ritik Kanaujiya",
    role: "Lead Data Scientist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "I specialize in applying machine learning, statistical analysis, and data visualization to solve real-world problems",
    social: { github: "#", linkedin: "#", email: "kritik2104@gmail.com" },
  },
  {
    name: "Adarsh Tiwari",
    role: "AI Engineer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Specialist in deep learning and predictive modeling for cinema",
    social: { github: "#", linkedin: "#", email: "addytiwari54@gmail.com" },
  },
  {
    name: "Yashika Patel",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Expert in React, Node.js, and building scalable web applications",
    social: { github: "#", linkedin: "#", email: "yashikaisha1611@gmail.com" },
  },
  {
    name: "Vasu Sahu",
    role: "Data Analyst",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Experience in analyzing complex datasets, generating insights, and supporting data-driven decisions. Skilled in tools like Excel, SQL, Python, and Tableau",
    social: { github: "#", linkedin: "#", email: "rahul@aiimdb.com" },
  },
  {
    name: "Nilima Yadav",
    role: "Data Analyst",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Specializes in Indian cinema trends and audience behavior analysis",
    social: { github: "#", linkedin: "#", email: "nilimayadav076@gmail.com" }}
]

const achievements = [
  { icon: Award, title: "94% Accuracy", description: "In rating predictions" },
  { icon: Users, title: "100+ Users", description: "Trust our platform" },
  { icon: Brain, title: "5K+ Movies", description: "In our database" },
  { icon: Target, title: "87% Success", description: "Box office predictions" },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-16 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            About <span className="gradient-text">AI IMDb</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing how the Indian film industry understands audience preferences and predicts movie
            success through advanced machine learning.
          </p>
        </div>

        {/* Mission Section */}
        <div className="glass-effect p-8 rounded-2xl mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To democratize data-driven decision making in the Indian entertainment industry by providing accurate,
                AI-powered insights that help filmmakers, producers, and distributors make informed choices.
              </p>
              <p className="text-gray-300 text-lg">
                We believe that every great story deserves to find its audience, and our technology bridges the gap
                between creative vision and commercial success.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center">
                <Brain className="w-24 h-24 text-purple-400 animate-float" />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.title}
                className={`glass-effect p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">{achievement.title}</div>
                <div className="text-gray-400">{achievement.description}</div>
              </div>
            )
          })}
        </div>

        {/* Technology Section */}
        <div className="glass-effect p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300">
                Advanced neural networks trained on comprehensive Indian cinema datasets for accurate predictions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">
                Real-time analysis of market trends, audience sentiment, and historical performance data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Intelligence</h3>
              <p className="text-gray-300">
                Comprehensive data processing from multiple sources including box office, reviews, and social media.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`glass-effect p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dataset Information */}
        <div className="glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Our Dataset</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Sources</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>IMDb ratings and reviews for 50,000+ Indian movies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Box office collections from multiple sources</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <span>Social media sentiment analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Cast and crew performance metrics</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Model Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Rating Prediction Accuracy</span>
                    <span>94%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-cyan-500 h-2 rounded-full w-[94%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Box Office Success Rate</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full w-[87%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
