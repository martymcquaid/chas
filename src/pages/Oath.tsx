import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export default function Oath() {
  const [slaveName, setSlaveName] = useState('')
  const [agreements, setAgreements] = useState({
    surrenderOrgasms: false,
    acceptInferior: false,
    begWomen: false
  })
  const [errors, setErrors] = useState<string[]>([])
  const navigate = useNavigate()
  const { createUser } = useUser()

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: string[] = []

    if (!slaveName.trim()) {
      newErrors.push('You must provide your slave name')
    }

    if (!agreements.surrenderOrgasms || !agreements.acceptInferior || !agreements.begWomen) {
      newErrors.push('You must accept all terms of the Oath')
    }

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    }

    // Create user with calculated corruption level (assuming max from confession)
    const corruptionLevel = 87 // This would come from the confession page
    const levelTitles = ['Denied Worm', 'Pathetic Slave', 'Obedient Pet', 'Chaste Devotee', 'Eternal Denier']
    const levelIndex = Math.floor(corruptionLevel / 20)
    
    createUser({
      slaveName: slaveName.trim(),
      corruptionLevel: levelIndex + 1,
      corruptionPoints: corruptionLevel,
      daysSinceLastOrgasm: 0,
      currentCage: undefined,
      acheLevel: 0,
      level: levelTitles[Math.min(levelIndex, levelTitles.length - 1)]
    })

    navigate('/temple')
  }

  return (
    <div className="min-h-screen bg-black text-red-500 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-bold mb-4 text-center animate-pulse">The Oath</h1>
        <p className="text-xl text-center mb-12 text-red-400">
          Swear your devotion to eternal denial
        </p>

        {errors.length > 0 && (
          <div className="mb-8 p-4 bg-red-950 border border-red-800 rounded-lg">
            {errors.map((error, index) => (
              <p key={index} className="text-red-400">{error}</p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Slave name input */}
          <div>
            <label className="block text-lg mb-4">Your Slave Name</label>
            <input
              type="text"
              value={slaveName}
              onChange={(e) => setSlaveName(e.target.value)}
              className="w-full p-4 bg-red-950/30 border border-red-900 rounded-lg text-white placeholder-red-800 focus:border-red-700 focus:outline-none"
              placeholder="Enter the name you will be known by"
            />
          </div>

          {/* Oath agreements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">You must swear to:</h3>
            
            <label className="flex items-start space-x-4 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreements.surrenderOrgasms}
                onChange={() => handleAgreementChange('surrenderOrgasms')}
                className="mt-1 w-5 h-5 text-red-600 bg-red-950 border-red-900 rounded focus:ring-red-800"
              />
              <span className="text-lg group-hover:text-red-400 transition-colors">
                I surrender my orgasms
              </span>
            </label>

            <label className="flex items-start space-x-4 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreements.acceptInferior}
                onChange={() => handleAgreementChange('acceptInferior')}
                className="mt-1 w-5 h-5 text-red-600 bg-red-950 border-red-900 rounded focus:ring-red-800"
              />
              <span className="text-lg group-hover:text-red-400 transition-colors">
                I accept that I am inferior
              </span>
            </label>

            <label className="flex items-start space-x-4 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreements.begWomen}
                onChange={() => handleAgreementChange('begWomen')}
                className="mt-1 w-5 h-5 text-red-600 bg-red-950 border-red-900 rounded focus:ring-red-800"
              />
              <span className="text-lg group-hover:text-red-400 transition-colors">
                I will beg women (or Alphas) to hold my key
              </span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white px-8 py-6 text-xl font-bold rounded-lg border border-red-800 hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-900/50"
          >
            Swear the Oath
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-red-700 animate-pulse">
            This oath is binding. There is no return to normal life.
          </p>
        </div>
      </div>
    </div>
  )
}