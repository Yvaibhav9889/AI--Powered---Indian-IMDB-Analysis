"use client"

import { useState } from "react"
import { Users, Film, TrendingUp, Settings, Plus, Edit, Trash2, Search } from "lucide-react"

const mockUsers = [
  { id: 1, name: "Ritik Kanaujiya", email: "kritik214@gmail.com", role: "User", status: "Active", joined: "2024-01-15" },
  { id: 2, name: "Yashika Patel", email: "yashikaisha@gmail.com", role: "Premium", status: "Active", joined: "2024-02-20" },
  { id: 3, name: "Adarsh Tiwari", email: "addytiwari54@gmail.com", role: "User", status: "Inactive", joined: "2024-03-10" },
  { id: 4, name: "vasu sahu", email: "vasusahu@gmail.com", role: "User", status: "Inactive", joined: "2024-03-10" },
  {id: 5, name: "nilima yadav", email: "nilimayadav@gmail.com", role: "User", status: "Inactive", joined: "2024-03-10" },
]

const mockMovies = [
  { id: 1, title: "RRR", genre: "Action", year: 2022, rating: 8.8, status: "Published" },
  { id: 2, title: "KGF Chapter 2", genre: "Action", year: 2022, rating: 8.4, status: "Published" },
  { id: 3, title: "Pushpa", genre: "Action", year: 2021, rating: 7.6, status: "Draft" },
  {id: 4, title: "Pushpa 2", genre: "Action", year: 2024, rating: 7.6, status: "Published" },
  {id: 3, title: "DDLJ", genre: "Romantic", year: 2011, rating: 7.6, status: "Draft" },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const stats = [
    { title: "Total Users", value: "526", change: "+12%", icon: Users, color: "from-blue-500 to-cyan-500" },
    { title: "Movies Analyzed", value: "5000", change: "+8%", icon: Film, color: "from-purple-500 to-pink-500" },
    {
      title: "Predictions Made",
      value: "6300",
      change: "+25%",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    { title: "Active Sessions", value: "342", change: "+5%", icon: Settings, color: "from-orange-500 to-red-500" },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "users", label: "Users", icon: Users },
    { id: "movies", label: "Movies", icon: Film },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen pt-16 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Admin <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-gray-300 text-lg">Manage users, movies, and monitor platform performance</p>
        </div>

        {/* Tabs */}
        <div className="glass-effect p-2 rounded-2xl mb-8">
          <div className="flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.title}
                    className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.title}</div>
                  </div>
                )
              })}
            </div>

            {/* Recent Activity */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "New user registered", user: "kritik2104@gmail.com", time: "2 minutes ago" },
                  { action: "Movie prediction made", user: "yashikaisha1611@gmail.com", time: "5 minutes ago" },
                  { action: "Dataset uploaded", user: "addytiwari54@gmail.com", time: "10 minutes ago" },
                  { action: "User upgraded to premium", user: "nilimayadav@gmail.com", time: "15 minutes ago" },
                ].map((activity) => (
                  <div key={activity.action} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-gray-400 text-sm">{activity.user}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            {/* Controls */}
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                  />
                </div>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  <Plus className="w-5 h-5" />
                  <span>Add User</span>
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="glass-effect p-6 rounded-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Email</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Role</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Joined</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="py-4 px-4 text-white font-medium">{user.name}</td>
                        <td className="py-4 px-4 text-gray-300">{user.email}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              user.role === "Premium"
                                ? "bg-purple-600/30 text-purple-300"
                                : "bg-gray-600/30 text-gray-300"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              user.status === "Active" ? "bg-green-600/30 text-green-300" : "bg-red-600/30 text-red-300"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-300">{user.joined}</td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Movies Tab */}
        {activeTab === "movies" && (
          <div className="space-y-6">
            {/* Controls */}
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search movies..."
                    className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                  />
                </div>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  <Plus className="w-5 h-5" />
                  <span>Add Movie</span>
                </button>
              </div>
            </div>

            {/* Movies Table */}
            <div className="glass-effect p-6 rounded-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Title</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Genre</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Year</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Rating</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockMovies.map((movie) => (
                      <tr
                        key={movie.id}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="py-4 px-4 text-white font-medium">{movie.title}</td>
                        <td className="py-4 px-4 text-gray-300">{movie.genre}</td>
                        <td className="py-4 px-4 text-gray-300">{movie.year}</td>
                        <td className="py-4 px-4 text-white">{movie.rating}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              movie.status === "Published"
                                ? "bg-green-600/30 text-green-300"
                                : "bg-yellow-600/30 text-yellow-300"
                            }`}
                          >
                            {movie.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Platform Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="AI IMDb"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Admin Email</label>
                  <input
                    type="email"
                    defaultValue="kritik214@gmail.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Max Predictions per User</label>
                  <input
                    type="number"
                    defaultValue="100"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
