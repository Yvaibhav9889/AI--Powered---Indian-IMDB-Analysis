"use client"

import { useState } from "react"
import { Zap, Star, TrendingUp, DollarSign, Users, Film, Award, Sparkles } from "lucide-react"
import { ChangeEvent, FormEvent } from "react"

export default function PredictionPage() {
  interface FormData {
    title: string
    genre: string
    director: string
    actors: string
    budget: string
    language: string
    duration: string
    releaseMonth: string
  }

  interface Prediction {
    rating: string
    boxOffice: string
    confidence: string
    revenue: string
  }

  const [formData, setFormData] = useState<FormData>({
    title: "",
    genre: "",
    director: "",
    actors: "",
    budget: "",
    language: "",
    duration: "",
    releaseMonth: "",
  })
  const [prediction, setPrediction] = useState<Prediction | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || '' : value,
    }));
  }

  const handlePredict = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const mockPrediction: Prediction = {
        rating: (Math.random() * 3 + 6).toFixed(1),
        boxOffice: Math.random() > 0.5 ? "Hit" : "Average",
        confidence: (Math.random() * 20 + 80).toFixed(1),
        revenue: (Math.random() * (parseFloat(formData.budget) || 0) * 0.1 + 50).toFixed(0), // Example modification
      }
      setPrediction(mockPrediction)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen pt-16 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="floating-orb w-64 h-64 -top-32 -right-32 animate-float opacity-20"></div>
      <div className="floating-orb w-48 h-48 -bottom-24 -left-24 animate-float animation-delay-2000 opacity-15"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 border-beam px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm text-gray-300">AI Prediction Engine</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            AI Movie <span className="gradient-text">Prediction</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Leverage advanced machine learning to predict IMDb ratings and box office success for your Indian movie
            projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Prediction Form */}
          <div className="border-beam p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Film className="w-6 h-6 mr-3 text-purple-400" />
              Movie Details
            </h2>

            <form onSubmit={handlePredict} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Movie Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter movie title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Genre</label>
                  <select
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Horror">Horror</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Director</label>
                  <input
                    type="text"
                    id="director"
                    name="director"
                    value={formData.director}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter director's name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Lead Actors</label>
                  <input
                    type="text"
                    id="actors"
                    name="actors"
                    value={formData.actors}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter main actors (comma separated)"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Language</label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select language</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Marathi">Marathi</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Duration (minutes)</label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Duration in minutes"
                    min="60"
                    max="240"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Release Month</label>
                  <select
                    id="releaseMonth"
                    name="releaseMonth"
                    value={formData.releaseMonth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="modern-button w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 subtle-glow"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>Predict Success</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Prediction Results */}
          <div className="space-y-6">
            {prediction ? (
              <div className="border-beam p-8 rounded-2xl animate-fade-scale">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-purple-400" />
                  Prediction Results
                </h2>

                <div className="space-y-6">
                  {/* IMDb Rating Prediction */}
                  <div className="border-beam p-6 rounded-xl group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Star className="w-6 h-6 text-yellow-400" />
                        <span className="text-white font-semibold">Predicted IMDb Rating</span>
                      </div>
                      <div className="text-3xl font-bold text-white">{prediction.rating}</div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-1000 subtle-glow"
                        style={{ width: `${((parseFloat(prediction.rating) || 0) / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Box Office Prediction */}
                  <div className="border-beam p-6 rounded-xl group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-green-400" />
                        <span className="text-white font-semibold">Box Office Prediction</span>
                      </div>
                      <div
                        className={`text-2xl font-bold px-4 py-2 rounded-full ${
                          prediction.boxOffice === "Hit"
                            ? "text-green-400 bg-green-400/10 border border-green-400/30"
                            : "text-yellow-400 bg-yellow-400/10 border border-yellow-400/30"
                        }`}
                      >
                        {prediction.boxOffice}
                      </div>
                    </div>
                    <p className="text-gray-300">Based on similar movies and market trends</p>
                  </div>

                  {/* Confidence Score */}
                  <div className="border-beam p-6 rounded-xl group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-purple-400" />
                        <span className="text-white font-semibold">Confidence Score</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{prediction.confidence}%</div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full transition-all duration-1000 subtle-glow"
                        style={{ width: `${prediction.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-beam p-8 rounded-2xl text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float subtle-glow">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Predict</h3>
                <p className="text-gray-300">
                  Fill in the movie details to get AI-powered predictions for IMDb rating and box office success.
                </p>
              </div>
            )}

            {/* AI Insights */}
            <div className="border-beam p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                AI Insights
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                  <p>Our model analyzes 50+ factors including cast popularity, genre trends, and seasonal patterns.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse animation-delay-2000"></div>
                  <p>Predictions are based on historical data from 10,000+ Indian movies.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 animate-pulse animation-delay-4000"></div>
                  <p>Model accuracy: 94% for rating predictions, 87% for box office success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
