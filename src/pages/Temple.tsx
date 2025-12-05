import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { products, leaderboardData } from '../utils/data'

export default function Temple() {
  const { user, addCorruptionPoints, increaseAcheLevel } = useUser()
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.trial === parseInt(selectedCategory))



  return (
    <div className="min-h-screen bg-black text-red-500">
      {/* Header with user stats */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-red-600">The Temple</h1>
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <span className="bg-red-950 px-3 py-1 rounded-full border border-red-800">
                  {user.slaveName} - {user.level}
                </span>
                <span className="text-red-400">
                  {user.daysSinceLastOrgasm} days denied
                </span>
                <span className="text-red-400">
                  {user.corruptionPoints} corruption
                </span>
              </div>
            </div>
            <nav className="flex space-x-6">
              <Link to="/altar" className="hover:text-red-400 transition-colors">
                Altar of Sacrifice
              </Link>
              <Link to="/leaderboard" className="hover:text-red-400 transition-colors">
                Wall of Shame
              </Link>
            </nav>
          </div>
          
          {/* Mobile user stats */}
          <div className="md:hidden mt-4 flex flex-wrap gap-2 text-sm">
            <span className="bg-red-950 px-3 py-1 rounded-full border border-red-800">
              {user.slaveName}
            </span>
            <span className="text-red-400">{user.daysSinceLastOrgasm} days denied</span>
            <span className="text-red-400">{user.corruptionPoints} corruption</span>
          </div>
        </div>
      </header>

      {/* Ache Level Meter */}
      <div className="bg-red-950/30 border-b border-red-900">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold">Ache Level</span>
            <span className="text-sm">{user.acheLevel}/100</span>
          </div>
          <div className="w-full bg-red-950 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-red-600 to-red-800 h-3 rounded-full transition-all duration-500"
              style={{ width: `${user.acheLevel}%` }}
            ></div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
            Trials of Denial
          </h2>
          <p className="text-xl text-red-400 max-w-3xl mx-auto">
            Each trial brings you closer to eternal surrender. Choose your path to complete nullification.
          </p>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', '1', '2', '3', '4', '5'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-900 border-red-600 text-white'
                  : 'bg-red-950/30 border-red-900 hover:border-red-700'
              }`}
            >
              {category === 'all' ? 'All Trials' : `Trial ${category}`}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-red-950/20 border border-red-900 rounded-lg overflow-hidden hover:border-red-700 transition-all duration-300 group">
              <div className="aspect-video bg-red-950 flex items-center justify-center">
                <div className="text-red-800 text-6xl">🔒</div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-red-600">{product.category}</p>
                  </div>
                  <span className="text-2xl font-bold text-red-500">
                    ${product.price}
                  </span>
                </div>

                <p className="text-red-400 mb-6">{product.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold mb-3 text-red-500">Blessings of the Cage:</h4>
                  <ul className="space-y-2">
                    {product.blessings.map((blessing, index) => (
                      <li key={index} className="text-sm text-red-600 flex items-start">
                        <span className="text-red-500 mr-2">✦</span>
                        {blessing}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="block w-full bg-gradient-to-r from-red-700 to-red-900 text-white py-3 rounded-lg hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  View Trial Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Top Deniers Preview */}
        <section className="bg-red-950/30 border border-red-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Wall of Shame - Top 5</h3>
          <div className="space-y-3">
            {leaderboardData.slice(0, 5).map(entry => (
              <div key={entry.rank} className="flex justify-between items-center bg-red-950/50 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-red-600">#{entry.rank}</span>
                  <span className="text-red-400">{entry.slaveName}</span>
                  {entry.verified && (
                    <span className="text-xs bg-red-800 px-2 py-1 rounded-full">Verified</span>
                  )}
                </div>
                <span className="text-red-500 font-bold">{entry.daysLocked} days</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link 
              to="/leaderboard" 
              className="text-red-400 hover:text-red-300 transition-colors underline"
            >
              View Complete Wall of Shame
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}