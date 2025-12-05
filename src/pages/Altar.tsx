import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { calculateDiscount } from '../utils/data'

export default function Altar() {
  const { user } = useUser()
  const [prayer, setPrayer] = useState('')
  const [discount, setDiscount] = useState(0)
  const [showCheckout, setShowCheckout] = useState(false)

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

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const calculatedDiscount = calculateDiscount(prayer)
    setDiscount(calculatedDiscount)
    setShowCheckout(true)
  }

  return (
    <div className="min-h-screen bg-black text-red-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-600">Altar of Sacrifice</h1>
            <nav className="flex space-x-6">
              <Link to="/temple" className="hover:text-red-400 transition-colors">
                Back to Temple
              </Link>
              <Link to="/leaderboard" className="hover:text-red-400 transition-colors">
                Wall of Shame
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
            Complete Your Sacrifice
          </h2>
          <p className="text-xl text-red-400 max-w-3xl mx-auto">
            Your cart awaits humiliation. The more pathetic your prayer, the greater your discount.
          </p>
        </section>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Prayer Section */}
          <div className="bg-red-950/30 border border-red-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Prayer of Thanks</h3>
            <form onSubmit={handlePrayerSubmit} className="space-y-6">
              <div>
                <label className="block text-lg mb-4">
                  Explain why you don't deserve to cum:
                </label>
                <textarea
                  value={prayer}
                  onChange={(e) => setPrayer(e.target.value)}
                  className="w-full h-48 p-4 bg-red-950/50 border border-red-900 rounded-lg text-white placeholder-red-800 focus:border-red-700 focus:outline-none resize-none"
                  placeholder="I am a pathetic slave who doesn't deserve pleasure because..."
                  required
                />
                <p className="text-sm text-red-600 mt-2">
                  Use words like: pathetic, worthless, deserve, suffer, denial, permanent, obey, worship, slave, pet
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white px-8 py-4 text-lg font-bold rounded-lg hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300"
              >
                Submit Prayer for Discount
              </button>
            </form>

            {discount > 0 && (
              <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-400">
                  You've earned {discount}% off!
                </p>
                <p className="text-red-500 mt-2">
                  {discount >= 20 ? "Such humiliation! The Order is pleased." :
                   discount >= 15 ? "Acceptable begging, slave." :
                   "Pathetic attempt. Try harder next time."}
                </p>
              </div>
            )}
          </div>

          {/* Cart Summary */}
          <div className="bg-red-950/30 border border-red-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Your Sacrifice</h3>
            
            <div className="space-y-4 mb-8">
              {/* Mock cart items - in real app this would come from cart state */}
              <div className="flex justify-between items-center p-4 bg-red-950/50 rounded-lg">
                <div>
                  <h4 className="font-bold text-red-400">Holy Trainer v4</h4>
                  <p className="text-sm text-red-600">Beginner's Submission</p>
                </div>
                <span className="text-xl font-bold">$89.99</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-red-950/50 rounded-lg">
                <div>
                  <h4 className="font-bold text-red-400">Steel Eternal Cage</h4>
                  <p className="text-sm text-red-600">Steel Eternal</p>
                </div>
                <span className="text-xl font-bold">$149.99</span>
              </div>
            </div>

            <div className="border-t border-red-900 pt-6 space-y-3">
              <div className="flex justify-between text-lg">
                <span>Subtotal:</span>
                <span>$239.98</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-lg text-red-400">
                  <span>Humiliation Discount:</span>
                  <span>-{discount}%</span>
                </div>
              )}
              
              <div className="flex justify-between text-2xl font-bold text-red-500 pt-3 border-t border-red-900">
                <span>Total:</span>
                <span>${(239.98 * (1 - discount / 100)).toFixed(2)}</span>
              </div>
            </div>

            {showCheckout && (
              <button className="w-full mt-8 bg-gradient-to-r from-green-700 to-green-900 text-white px-8 py-4 text-lg font-bold rounded-lg hover:from-green-600 hover:to-green-800 transform hover:scale-105 transition-all duration-300">
                Complete Sacrifice
              </button>
            )}
          </div>
        </div>

        {/* Post-Purchase Indoctrination Preview */}
        <section className="mt-16 bg-red-950/30 border border-red-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Your Reward for Suffering</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📜</div>
              <h4 className="text-lg font-bold mb-2">30-Day Denial Guide</h4>
              <p className="text-red-400 text-sm">Instant PDF download with daily tasks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-lg font-bold mb-2">Voices from the Void</h4>
              <p className="text-red-400 text-sm">Daily email teasing and tasks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏷️</div>
              <h4 className="text-lg font-bold mb-2">Free Engraved Tag</h4>
              <p className="text-red-400 text-sm">60-day proof of lockup required</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}