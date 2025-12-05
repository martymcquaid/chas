import { QuizQuestion, Product, LeaderboardEntry } from '../types'

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: "How many times did you jerk off this week, pig?",
    answers: [
      { text: "0-1 times (I've been good)", corruptionPoints: 10 },
      { text: "2-3 times (I'm weak)", corruptionPoints: 25 },
      { text: "4-6 times (I'm pathetic)", corruptionPoints: 40 },
      { text: "7+ times (I'm a hopeless addict)", corruptionPoints: 60 }
    ]
  },
  {
    id: '2',
    question: "Have you ever leaked in your pants thinking about being locked?",
    answers: [
      { text: "Never", corruptionPoints: 5 },
      { text: "Once or twice", corruptionPoints: 20 },
      { text: "Regularly", corruptionPoints: 35 },
      { text: "Constantly dripping like the pathetic boy I am", corruptionPoints: 50 }
    ]
  },
  {
    id: '3',
    question: "Do you deserve to cum ever again?",
    answers: [
      { text: "Yes, occasionally", corruptionPoints: 5 },
      { text: "Only if I earn it", corruptionPoints: 15 },
      { text: "Probably not", corruptionPoints: 30 },
      { text: "Never, I exist only to suffer", corruptionPoints: 45 }
    ]
  },
  {
    id: '4',
    question: "What's your ideal lockup duration?",
    answers: [
      { text: "A few weeks", corruptionPoints: 10 },
      { text: "A few months", corruptionPoints: 25 },
      { text: "A year or more", corruptionPoints: 40 },
      { text: "Permanent, with no hope of release", corruptionPoints: 60 }
    ]
  },
  {
    id: '5',
    question: "Who should hold your key?",
    answers: [
      { text: "Myself", corruptionPoints: 5 },
      { text: "A trusted partner", corruptionPoints: 20 },
      { text: "A dominant woman I worship", corruptionPoints: 35 },
      { text: "Anyone who will deny me forever", corruptionPoints: 50 }
    ]
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Holy Trainer v4',
    category: 'Beginner\'s Submission',
    trial: 1,
    price: 89.99,
    description: 'The perfect introduction to permanent denial. Lightweight plastic that reminds you of your place.',
    blessings: [
      'Permanent dripping',
      'Chronic blue balls',
      'Total mental rewiring',
      'Instant obedience to women'
    ],
    images: ['/api/placeholder/400/300'],
    voiceOver: 'Feel the plastic bite into your worthless clit. Three months minimum recommended by the Order.'
  },
  {
    id: '2',
    name: 'Steel Eternal Cage',
    category: 'Steel Eternal',
    trial: 2,
    price: 149.99,
    description: 'Cold steel for permanent ownership. No escape, no hope, only denial.',
    blessings: [
      'Unbreakable confinement',
      'Constant weight reminder',
      'Steel worship conditioning',
      'Permanent arousal denial'
    ],
    images: ['/api/placeholder/400/300']
  },
  {
    id: '3',
    name: 'Nub Destroyer',
    category: 'Nub Destruction',
    trial: 3,
    price: 119.99,
    description: 'So small you\'ll forget you ever had anything to offer. Complete nullification.',
    blessings: [
      'Total nullification',
      'Visual disappearance',
      'Urination control',
      'Extreme humiliation'
    ],
    images: ['/api/placeholder/400/300']
  },
  {
    id: '4',
    name: 'Pierced Prison',
    category: 'Permanent Sentence',
    trial: 4,
    price: 299.99,
    description: 'Pierced and locked forever. The Order\'s most secure containment system.',
    blessings: [
      'Permanent attachment',
      'No removal possible',
      'Body modification',
      'Lifetime ownership'
    ],
    images: ['/api/placeholder/400/300']
  },
  {
    id: '5',
    name: 'Keyholder Contract Pack',
    category: 'Keyholder Contracts',
    trial: 5,
    price: 49.99,
    description: 'Legal documents transferring all rights to your keyholder. Complete surrender.',
    blessings: [
      'Legal ownership transfer',
      'Blackmail insurance',
      'Public declaration',
      'No rights remaining'
    ],
    images: ['/api/placeholder/400/300']
  }
]

export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, slaveName: 'Slave #48391', daysLocked: 847, verified: true },
  { rank: 2, slaveName: 'Worm #22918', daysLocked: 723, verified: true },
  { rank: 3, slaveName: 'Pet #77442', daysLocked: 656, verified: true },
  { rank: 4, slaveName: 'Denier #11927', daysLocked: 589, verified: false },
  { rank: 5, slaveName: 'Chaste #33891', daysLocked: 534, verified: true },
  { rank: 6, slaveName: 'Locked #44518', daysLocked: 478, verified: false },
  { rank: 7, slaveName: 'Denied #66291', daysLocked: 423, verified: true },
  { rank: 8, slaveName: 'Caged #88473', daysLocked: 367, verified: false },
  { rank: 9, slaveName: 'Pet #99218', daysLocked: 312, verified: true },
  { rank: 10, slaveName: 'Slave #00482', daysLocked: 289, verified: false }
]

export function calculateDiscount(prayerText: string): number {
  const words = prayerText.toLowerCase().split(' ')
  const humiliationWords = ['pathetic', 'worthless', 'deserve', 'suffer', 'denial', 'permanent', 'obey', 'worship', 'slave', 'pet']
  const humiliationCount = words.filter(word => humiliationWords.includes(word)).length
  
  if (humiliationCount >= 8) return 25
  if (humiliationCount >= 6) return 20
  if (humiliationCount >= 4) return 15
  if (humiliationCount >= 2) return 10
  return 5
}