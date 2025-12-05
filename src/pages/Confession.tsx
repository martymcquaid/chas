import { useState } from 'react'
import { Link } from 'react-router-dom'
import { quizQuestions } from '../utils/data'

export default function Confession() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [corruptionPoints, setCorruptionPoints] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const handleAnswer = (points: number, answerText: string) => {
    const newPoints = corruptionPoints + points
    const newAnswers = [...answers, answerText]
    
    setCorruptionPoints(newPoints)
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 500)
    }
  }

  const getCorruptionLevel = () => {
    const percentage = (corruptionPoints / 250) * 100
    if (percentage >= 80) return { level: 87, text: "The Order has use for weak boys like you." }
    if (percentage >= 60) return { level: 73, text: "Your pathetic nature is noted and appreciated." }
    if (percentage >= 40) return { level: 58, text: "You show promise, but need more training." }
    return { level: 42, text: "Barely adequate, but we'll work with you." }
  }

  if (currentQuestion >= quizQuestions.length) {
    const result = getCorruptionLevel()
    
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-8 animate-pulse">Your Corruption Level</h1>
          <div className="text-8xl font-black text-red-600 mb-6">{result.level}%</div>
          <p className="text-xl mb-12">{result.text}</p>
          
          <div className="mb-8">
            <div className="w-full bg-red-950 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-red-600 to-red-800 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${result.level}%` }}
              ></div>
            </div>
          </div>

          <Link
            to="/oath"
            className="inline-block group"
          >
            <div className="absolute inset-0 bg-red-600 blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
            <button className="relative bg-gradient-to-r from-red-700 to-red-900 text-white px-8 py-4 text-lg font-bold rounded-lg border border-red-800 hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300">
              Continue to Your Oath
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-black text-red-500 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        {/* Progress indicator */}
        <div className="mb-12">
          <div className="flex justify-between text-sm mb-4">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>Corruption Points: {corruptionPoints}</span>
          </div>
          <div className="w-full bg-red-950 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-600 to-red-800 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-pulse">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.corruptionPoints, answer.text)}
              className="w-full text-left p-6 bg-red-950/30 border border-red-900 rounded-lg hover:bg-red-900/40 hover:border-red-700 transform hover:scale-102 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg group-hover:text-red-400 transition-colors">
                  {answer.text}
                </span>
                <span className="text-sm text-red-700 group-hover:text-red-600">
                  +{answer.corruptionPoints} corruption
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}