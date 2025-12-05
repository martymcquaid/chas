import { useState, useEffect } from 'react'
import { User } from '../types'

const STORAGE_KEY = 'eternal-denial-user'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setUser(JSON.parse(stored))
    }
  }, [])

  const updateUser = (updates: Partial<User>) => {
    if (!user) return
    
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser))
  }

  const createUser = (userData: Omit<User, 'id' | 'joinedAt'>) => {
    const newUser: User = {
      ...userData,
      id: Math.random().toString(36).substring(2, 11),
      joinedAt: new Date()
    }
    setUser(newUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    return newUser
  }

  const addCorruptionPoints = (points: number) => {
    if (!user) return
    
    const newPoints = user.corruptionPoints + points
    const newLevel = Math.floor(newPoints / 100) + 1
    const levelTitles = ['Denied Worm', 'Pathetic Slave', 'Obedient Pet', 'Chaste Devotee', 'Eternal Denier']
    const levelTitle = levelTitles[Math.min(newLevel - 1, levelTitles.length - 1)]
    
    updateUser({
      corruptionPoints: newPoints,
      corruptionLevel: newLevel,
      level: levelTitle
    })
  }

  const increaseAcheLevel = () => {
    if (!user) return
    updateUser({ acheLevel: Math.min(user.acheLevel + 1, 100) })
  }

  return { user, updateUser, createUser, addCorruptionPoints, increaseAcheLevel }
}