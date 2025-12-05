import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { products } from '../utils/data'

export default function Product() {
  const { productId } = useParams<{ productId: string }>()
  const { user, addCorruptionPoints, increaseAcheLevel } = useUser()
  const [currentView, setCurrentView] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const product = products.find(p => p.id === productId)

  if (!user || !product) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Product Not Found</h1>
          <Link to="/temple" className="text-red-400 hover:text-red-300">Return to Temple</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addCorruptionPoints(50)
    increaseAcheLevel()
    alert(`The voices laugh at you. +50 Corruption Points.\n\n${product.name} added to the Altar of Sacrifice.`)
  }

  const playVoiceOver = () => {
    setIsPlaying(true)
    // In a real app, this would play actual audio
    setTimeout(() => setIsPlaying(false), 3000)
  }

  return (
    <div className="min-h-screen bg-black text-red-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/temple" className="text-red-400 hover:text-red-300 transition-colors">
              ← Back to Temple
            </Link>
            <nav className="flex space-x-6">
              <Link to="/altar" className="hover:text-red-400 transition-colors">
                Altar of Sacrifice
              </Link>
              <Link to="/leaderboard" className="hover:text-red-400 transition-colors">
                Wall of Shame
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Viewer */}
          <div className="space-y-6">
            <div className="aspect-square bg-red-950/30 border border-red-900 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-red-800 text-9xl">🔒</div>
              </div>
              
              {/* View indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {[0, 1, 2, 3].map(view => (
                  <button
                    key={view}
                    onClick={() => setCurrentView(view)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentView === view ? 'bg-red-500' : 'bg-red-900'
                    }`}
                  />
                ))}
              </div>

              {/* 3D rotation hint */}
              <div className="absolute top-4 right-4 bg-red-950/80 px-3 py-1 rounded-full text-sm">
                View {currentView + 1} of 4
              </div>
            </div>

            {/* Thumbnail views */}
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map(view => (
                <button
                  key={view}
                  onClick={() => setCurrentView(view)}
                  className={`aspect-square bg-red-950/30 border rounded-lg p-4 transition-all duration-300 ${
                    currentView === view ? 'border-red-500' : 'border-red-900 hover:border-red-700'
                  }`}
                >
                  <div className="text-red-800 text-2xl">🔒</div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-red-400 mb-2">{product.name}</h1>
                  <p className="text-lg text-red-600">{product.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-500">${product.price}</div>
                  <div className="text-sm text-red-600">Trial {product.trial}</div>
                </div>
              </div>

              <p className="text-xl text-red-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Voice Over Section */}
            {product.voiceOver && (
              <div className="bg-red-950/30 border border-red-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Voice of the Order</h3>
                <p className="text-red-400 mb-4 italic">"{product.voiceOver}"</p>
                <button
                  onClick={playVoiceOver}
                  disabled={isPlaying}
                  className="bg-red-900 hover:bg-red-800 disabled:bg-red-950 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>{isPlaying ? '🔊 Playing...' : '🔊 Play Voice Over'}</span>
                </button>
              </div>
            )}

            {/* Blessings */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Blessings of the Cage</h3>
              <div className="space-y-4">
                {product.blessings.map((blessing, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-red-950/20 p-4 rounded-lg">
                    <div className="text-2xl text-red-600">✦</div>
                    <div>
                      <h4 className="font-bold text-red-400 mb-1">Blessing {index + 1}</h4>
                      <p className="text-red-500">{blessing}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trial Requirements */}
            <div className="bg-red-950/30 border border-red-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Trial Requirements</h3>
              <ul className="space-y-2 text-red-400">
                <li>• Minimum lockup: {product.trial <= 2 ? '3 months' : product.trial <= 3 ? '6 months' : '1 year'}</li>
                <li>• Daily worship required</li>
                <li>• Monthly progress reports</li>
                <li>• Complete surrender of pleasure</li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white px-8 py-6 text-xl font-bold rounded-lg hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-900/50"
            >
              Add to Altar of Sacrifice
            </button>

            {/* Warning */}
            <div className="text-center text-sm text-red-600 italic">
              Warning: This purchase represents permanent commitment to denial
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}