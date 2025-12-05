import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { leaderboardData } from '../utils/data'

export default function Leaderboard() {
  const { user } = useUser()

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Access Denied</h1>
          <Link to="/" className="text-red-400 hover:text-red-300">Return to the Beginning</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-red-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-600">Wall of Shame</h1>
            <nav className="flex space-x-6">
              <Link to="/temple" className="hover:text-red-400 transition-colors">
                Back to Temple
              </Link>
              <Link to="/altar" className="hover:text-red-400 transition-colors">
                Altar of Sacrifice
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
            The Most Denied
          </h2>
          <p className="text-xl text-red-400 max-w-3xl mx-auto">
            These slaves have proven their devotion through suffering. Their shame is our glory.
          </p>
        </section>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-950/30 border border-red-900 rounded-lg overflow-hidden">
            {/* Top 3 Podium */}
            <div className="grid grid-cols-3 gap-4 p-8 border-b border-red-900">
              {leaderboardData.slice(0, 3).map((entry, index) => (
                <div key={entry.rank} className="text-center">
                  <div className={`text-6xl mb-4 ${
                    index === 0 ? 'text-yellow-600' : 
                    index === 1 ? 'text-gray-500' : 
                    'text-orange-800'
                  }`}>
                    {index === 0 ? '👑' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <div className="text-3xl font-bold text-red-500 mb-2">#{entry.rank}</div>
                  <div className="text-lg text-red-400 mb-2">{entry.slaveName}</div>
                  <div className="text-2xl font-bold text-red-600">{entry.daysLocked} days</div>
                  {entry.verified && (
                    <div className="mt-2 inline-block bg-red-800 px-3 py-1 rounded-full text-xs">
                      Verified
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Rest of leaderboard */}
            <div className="divide-y divide-red-900">
              {leaderboardData.slice(3).map(entry => (
                <div key={entry.rank} className="flex justify-between items-center p-6 hover:bg-red-950/30 transition-colors">
                  <div className="flex items-center space-x-6">
                    <span className="text-2xl font-bold text-red-700 w-12">#{entry.rank}</span>
                    <div>
                      <span className="text-lg text-red-400">{entry.slaveName}</span>
                      {entry.verified && (
                        <span className="ml-3 text-xs bg-red-800 px-2 py-1 rounded-full">Verified</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xl font-bold text-red-500">{entry.daysLocked} days</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Section */}
          <section className="mt-12 bg-red-950/30 border border-red-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Prove Your Devotion</h3>
            <div className="text-center">
              <p className="text-red-400 mb-6 max-w-2xl mx-auto">
                Upload verification of your lockup with timestamp and face blurred to join the Wall of Shame. 
                Top 10 verified slaves receive custom videos from our dominants calling them by their slave name.
              </p>
              <button className="bg-gradient-to-r from-red-700 to-red-900 text-white px-8 py-4 rounded-lg hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300">
                Submit Verification
              </button>
            </div>
          </section>

          {/* User's current position */}
          <section className="mt-8 text-center">
            <p className="text-red-400">
              Your current denial: <span className="font-bold text-red-500">{user.daysSinceLastOrgasm} days</span>
            </p>
            <p className="text-sm text-red-600 mt-2">
              Keep suffering to earn your place on the Wall of Shame
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}