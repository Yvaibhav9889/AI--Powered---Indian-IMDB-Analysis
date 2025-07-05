"use client"

import { useState, useEffect } from "react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, TooltipProps as RechartsTooltipProps } from "recharts"
import { Upload, Search, TrendingUp, Star, Film, Calendar } from "lucide-react"

interface GenreData {
  name: string
  value: number
  color: string
}

const genreData: GenreData[] = [
  { name: "Drama", value: 35, color: "#8B5CF6" },
  { name: "Action", value: 25, color: "#06B6D4" },
  { name: "Comedy", value: 20, color: "#F59E0B" },
  { name: "Romance", value: 15, color: "#EF4444" },
  { name: "Thriller", value: 5, color: "#10B981" },
]

const yearlyData = [
  { year: "2019", movies: 120, avgRating: 6.8 },
  { year: "2020", movies: 85, avgRating: 7.2 },
  { year: "2021", movies: 95, avgRating: 7.0 },
  { year: "2022", movies: 140, avgRating: 7.4 },
  { year: "2023", movies: 160, avgRating: 7.6 },
]

const topMovies = [
  { title: "RRR", rating: 8.8, year: 2022, genre: "Action" },
  { title: "KGF Chapter 2", rating: 8.4, year: 2022, genre: "Action" },
  { title: "Pushpa", rating: 7.6, year: 2021, genre: "Action" },
  { title: "Sooryavanshi", rating: 7.2, year: 2021, genre: "Action" },
  { title: "Gangubai Kathiawadi", rating: 7.8, year: 2022, genre: "Drama" },
]

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: RechartsTooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 border border-white/20 rounded-xl p-3 backdrop-blur-md">
        <p className="text-gray-200 font-medium">{label ? `${label}` : ''}</p>
        {payload.map((entry, i: number) => (
          <p key={`tooltip-${entry.name}-${i}`} className="text-white" style={{ color: entry.color ?? undefined }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Custom Label Component for Pie Chart
interface LabelProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  name: string
}

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: LabelProps) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="12"
      fontWeight="500"
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-cyan-500/20 border-b-cyan-500 rounded-full animate-spin mx-auto animate-reverse"></div>
          </div>
          <p className="text-white text-lg gradient-text">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Analytics <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-gray-300 text-lg">Comprehensive insights into Indian cinema trends and patterns</p>
        </div>

        {/* Controls */}
        <div className="border-beam p-6 rounded-2xl mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="minimal-input pl-10 pr-4 py-3 rounded-xl focus:outline-none w-full sm:w-64"
                />
              </div>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="minimal-input px-4 py-3 rounded-xl focus:outline-none"
              >
                <option value="All">All Genres</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
              </select>
            </div>
            <button className="modern-button flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 subtle-glow">
              <Upload className="w-5 h-5" />
              <span>Upload Dataset</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Movies", value: "2,847", icon: Film, change: "+12%", color: "from-blue-500 to-cyan-500" },
            { title: "Avg Rating", value: "7.2", icon: Star, change: "+0.3", color: "from-purple-500 to-pink-500" },
            {
              title: "This Year",
              value: "342",
              icon: Calendar,
              change: "+18%",
              color: "from-green-500 to-emerald-500",
            },
            { title: "Trending", value: "156", icon: TrendingUp, change: "+25%", color: "from-orange-500 to-red-500" },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.title}
                className="border-beam p-6 rounded-2xl hover:scale-105 transition-all duration-300 group subtle-glow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center subtle-glow`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.title}</div>
              </div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Genre Distribution */}
          <div className="chart-container border-beam p-6 group">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              Genre Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genreData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={CustomLabel}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genreData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Yearly Trends */}
          <div className="chart-container border-beam p-6 group">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              Yearly Movie Releases
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9CA3AF" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                <YAxis stroke="#9CA3AF" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                <Tooltip content={CustomTooltip} />
                <Bar dataKey="movies" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rating Trends */}
        <div className="chart-container border-beam p-6 mb-8 group">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
            Average Rating Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" domain={[6, 8]} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
              <Tooltip content={CustomTooltip} />
              <Line
                type="monotone"
                dataKey="avgRating"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: "#8B5CF6", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Movies Table */}
        <div className="border-beam p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            Top Rated Movies
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-300 font-semibold">Movie</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-semibold">Rating</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-semibold">Year</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-semibold">Genre</th>
                </tr>
              </thead>
              <tbody>
                {topMovies.map((movie) => (
                  <tr
                    key={movie.title}
                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-200 group"
                  >
                    <td className="py-4 px-4 text-white font-medium">{movie.title}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{movie.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{movie.year}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {movie.genre}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
