// /data/ai-applications.ts
// This file details where AI is being used and how it helps mankind

export interface AIApplication {
  sector: string;
  icon: string;
  color: string;
  description: string;
  useCases: {
    title: string;
    description: string;
    impact: string;
  }[];
  impact: string;
  futurePotential: string;
}

export interface AIBenefit {
  category: string;
  benefits: {
    title: string;
    description: string;
    example: string;
  }[];
}

// Detailed AI applications across different sectors
export const aiApplications: AIApplication[] = [
  {
    sector: "Healthcare & Medicine",
    icon: "🏥",
    color: "from-red-400 to-pink-500",
    description: "Revolutionizing patient care, diagnosis, and drug discovery",
    useCases: [
      {
        title: "Early Disease Detection",
        description: "AI algorithms analyze medical images to detect cancer, tumors, and abnormalities with 95% accuracy",
        impact: "Saves millions of lives through early intervention"
      },
      {
        title: "Drug Discovery",
        description: "Accelerates drug development by predicting molecular interactions",
        impact: "Reduces drug development time from 10 years to 3-5 years"
      },
      {
        title: "Personalized Treatment",
        description: "AI analyzes patient data to recommend personalized treatment plans",
        impact: "50% better treatment outcomes"
      },
      {
        title: "Virtual Health Assistants",
        description: "24/7 AI-powered health monitoring and consultation",
        impact: "Reduces hospital visits by 30%"
      }
    ],
    impact: "AI could save the healthcare industry $150 billion annually by 2026",
    futurePotential: "Predictive healthcare, AI-assisted surgery, and genetic disease prevention"
  },
  {
    sector: "Education",
    icon: "📚",
    color: "from-blue-400 to-indigo-500",
    description: "Personalized learning experiences and accessible education for all",
    useCases: [
      {
        title: "Personalized Learning",
        description: "AI adapts curriculum to individual student's pace and learning style",
        impact: "Students learn 2x faster with personalized content"
      },
      {
        title: "Intelligent Tutoring",
        description: "24/7 AI tutors providing instant feedback and guidance",
        impact: "Bridges the education gap in underserved areas"
      },
      {
        title: "Automated Grading",
        description: "AI assists teachers by automating assessments and feedback",
        impact: "Teachers save 40% time on administrative tasks"
      },
      {
        title: "Language Learning",
        description: "AI-powered language apps with real-time pronunciation correction",
        impact: "500M+ people learning new languages through AI"
      }
    ],
    impact: "AI in education market expected to reach $20 billion by 2027",
    futurePotential: "Universal access to quality education, VR-powered immersive learning"
  },
  {
    sector: "Environmental Protection",
    icon: "🌍",
    color: "from-green-400 to-emerald-500",
    description: "Combating climate change and protecting our planet",
    useCases: [
      {
        title: "Climate Modeling",
        description: "AI predicts weather patterns and climate change impacts",
        impact: "90% accurate disaster prediction"
      },
      {
        title: "Wildlife Conservation",
        description: "AI cameras track endangered species and prevent poaching",
        impact: "Protected 100,000+ animals"
      },
      {
        title: "Energy Optimization",
        description: "Smart grids reduce energy waste using AI prediction",
        impact: "30% reduction in energy consumption"
      },
      {
        title: "Ocean Cleanup",
        description: "AI-powered drones identify and collect ocean plastic",
        impact: "Removed 1M+ kg of plastic from oceans"
      }
    ],
    impact: "AI could help reduce global emissions by 4% by 2030",
    futurePotential: "Reverse climate change, restore ecosystems"
  },
  {
    sector: "Agriculture",
    icon: "🌾",
    color: "from-yellow-400 to-orange-500",
    description: "Feeding the world sustainably with precision farming",
    useCases: [
      {
        title: "Precision Farming",
        description: "AI analyzes soil conditions and optimizes crop yield",
        impact: "20% increase in crop production"
      },
      {
        title: "Pest Detection",
        description: "Early identification of crop diseases and pests",
        impact: "Prevents 30% of crop loss"
      },
      {
        title: "Autonomous Farming",
        description: "Self-driving tractors and harvesters",
        impact: "Reduces labor costs by 50%"
      },
      {
        title: "Water Conservation",
        description: "Smart irrigation systems using AI prediction",
        impact: "Saves 40% of water usage"
      }
    ],
    impact: "AI agriculture market to reach $4 billion by 2026",
    futurePotential: "End world hunger through optimized food production"
  },
  {
    sector: "Accessibility & Inclusion",
    icon: "♿",
    color: "from-purple-400 to-violet-500",
    description: "Breaking barriers for people with disabilities",
    useCases: [
      {
        title: "Visual Assistance",
        description: "AI describes surroundings to visually impaired users",
        impact: "1M+ visually impaired people gain independence"
      },
      {
        title: "Hearing Aid",
        description: "Real-time sign language translation and captioning",
        impact: "500M+ deaf people can communicate freely"
      },
      {
        title: "Mobility Assistance",
        description: "AI-powered smart wheelchairs and prosthetics",
        impact: "Improved quality of life for 100M+ people"
      },
      {
        title: "Communication Aids",
        description: "Predictive text and speech synthesis for nonverbal individuals",
        impact: "Giving voice to millions"
      }
    ],
    impact: "AI accessibility market growing at 40% annually",
    futurePotential: "Brain-computer interfaces for complete independence"
  },
  {
    sector: "Disaster Response",
    icon: "🚨",
    color: "from-red-500 to-orange-500",
    description: "Predicting and responding to natural disasters",
    useCases: [
      {
        title: "Early Warning Systems",
        description: "AI predicts earthquakes, tsunamis, and floods",
        impact: "Hours of advance warning saves lives"
      },
      {
        title: "Search & Rescue",
        description: "Drones with AI find survivors in disaster zones",
        impact: "50% faster rescue operations"
      },
      {
        title: "Damage Assessment",
        description: "AI analyzes satellite imagery for rapid damage mapping",
        impact: "24-hour assessment reduced to 30 minutes"
      },
      {
        title: "Resource Optimization",
        description: "AI coordinates relief efforts and supply chains",
        impact: "Efficient aid delivery to affected areas"
      }
    ],
    impact: "AI disaster response could save 100,000+ lives annually",
    futurePotential: "Prevent natural disasters through climate intervention"
  }
];

// How AI helps mankind - comprehensive benefits
export const aiBenefits: AIBenefit[] = [
  {
    category: "Healthcare",
    benefits: [
      {
        title: "Lifesaving Diagnostics",
        description: "AI detects diseases earlier and more accurately than humans",
        example: "Google Health's AI detects breast cancer with 94% accuracy"
      },
      {
        title: "Affordable Healthcare",
        description: "Reduces costs through automation and efficient resource allocation",
        example: "AI-powered telemedicine reaches remote areas"
      },
      {
        title: "Elderly Care",
        description: "AI companions monitor and assist aging population",
        example: "Robotic assistants help seniors live independently"
      }
    ]
  },
  {
    category: "Education",
    benefits: [
      {
        title: "Universal Access",
        description: "Quality education reaches every corner of the world",
        example: "AI tutors teach in 100+ languages"
      },
      {
        title: "Lifelong Learning",
        description: "Continuous skill development for changing job markets",
        example: "Personalized upskilling for workers"
      }
    ]
  },
  {
    category: "Environment",
    benefits: [
      {
        title: "Climate Action",
        description: "AI optimizes renewable energy and reduces carbon footprint",
        example: "Google's AI reduced data center cooling by 40%"
      },
      {
        title: "Biodiversity Protection",
        description: "Monitoring and protecting endangered species",
        example: "AI tracks 1000+ species automatically"
      }
    ]
  },
  {
    category: "Human Potential",
    benefits: [
      {
        title: "Augmented Intelligence",
        description: "AI enhances human capabilities rather than replacing them",
        example: "Doctors + AI = better diagnoses"
      },
      {
        title: "Creativity Boost",
        description: "AI tools help humans create art, music, and innovation",
        example: "AI-assisted music composition"
      },
      {
        title: "Time Liberation",
        description: "Automation frees humans for meaningful work",
        example: "40 hours/week saved through automation"
      }
    ]
  },
  {
    category: "Global Challenges",
    benefits: [
      {
        title: "Poverty Reduction",
        description: "AI optimizes resource distribution and economic planning",
        example: "AI predicts and prevents food shortages"
      },
      {
        title: "Disease Eradication",
        description: "AI accelerates vaccine development and disease tracking",
        example: "COVID-19 vaccine development accelerated by AI"
      },
      {
        title: "Peace & Security",
        description: "AI helps prevent conflicts and cyber threats",
        example: "Early detection of cyber attacks"
      }
    ]
  }
];

// Inspirational quotes about AI's potential
export const aiQuotes = [
  {
    quote: "AI will be the best or worst thing ever for humanity. We must be careful.",
    author: "Elon Musk"
  },
  {
    quote: "The development of full artificial intelligence could spell the end of the human race. But it would also be the greatest event in human history.",
    author: "Stephen Hawking"
  },
  {
    quote: "AI is not about replacing humans, it's about augmenting human intelligence and capabilities.",
    author: "Fei-Fei Li"
  },
  {
    quote: "The real question is not whether machines think but whether men do.",
    author: "B.F. Skinner"
  },
  {
    quote: "AI will be the ultimate tool for humanity's progress.",
    author: "Demis Hassabis"
  }
];

// Future predictions
export const aiPredictions = [
  {
    year: 2030,
    prediction: "AI discovers cure for cancer"
  },
  {
    year: 2035,
    prediction: "First AI-human collaborative art wins Pulitzer"
  },
  {
    year: 2040,
    prediction: "Brain-computer interfaces become mainstream"
  },
  {
    year: 2050,
    prediction: "AI helps achieve global sustainability goals"
  }
];