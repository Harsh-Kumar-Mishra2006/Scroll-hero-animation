export interface Statistic {
  id: string;
  value: string;
  label: string;
  category: 'adoption' | 'impact' | 'future' | 'investment';
  description?: string;
  color?: 'indigo' | 'purple' | 'blue' | 'green' | 'orange' | 'pink';
}

export const aiStatistics: Statistic[] = [
  // ADOPTION STATISTICS
  {
    id: 'adoption-1',
    value: '97%',
    label: 'Mobile users use AI-powered voice assistants',
    category: 'adoption',
    description: 'Siri, Google Assistant, and Alexa have transformed how we interact with devices',
    color: 'indigo'
  },
  {
    id: 'adoption-2',
    value: '82%',
    label: 'Companies exploring or implementing AI',
    category: 'adoption',
    description: 'Enterprise AI adoption has accelerated post-2020',
    color: 'indigo'
  },
  {
    id: 'adoption-3',
    value: '65%',
    label: 'Organizations using generative AI regularly',
    category: 'adoption',
    description: 'From ChatGPT to Midjourney, genAI is now mainstream',
    color: 'indigo'
  },
  // IMPACT STATISTICS
  {
    id: 'impact-1',
    value: '40%',
    label: 'Increase in productivity with AI assistance',
    category: 'impact',
    description: 'Knowledge workers complete tasks faster with AI copilots',
    color: 'purple'
  },
  {
    id: 'impact-2',
    value: '60%',
    label: 'Reduction in diagnostic errors using AI in healthcare',
    category: 'impact',
    description: 'AI assists doctors in detecting diseases earlier',
    color: 'purple'
  },
  {
    id: 'impact-3',
    value: '70%',
    label: 'Financial trades executed by algorithms',
    category: 'impact',
    description: 'AI dominates high-frequency trading on Wall Street',
    color: 'purple'
  },

  // FUTURE PROJECTIONS
  {
    id: 'future-1',
    value: '$15.7T',
    label: 'AI contribution to global economy by 2030',
    category: 'future',
    description: 'Larger than current output of China and India combined',
    color: 'green'
  },
  {
    id: 'future-2',
    value: '100x',
    label: 'Increase in computing power for AI by 2030',
    category: 'future',
    description: 'Moore\'s Law for AI chips continues to accelerate',
    color: 'green'
  },
  {
    id: 'future-3',
    value: '20%',
    label: 'Of workers will have AI as their primary colleague',
    category: 'future',
    description: 'Human-AI collaboration becomes the norm',
    color: 'green'
  },

  // INVESTMENT & GROWTH
  {
    id: 'investment-1',
    value: '$500B',
    label: 'Annual global spending on AI by 2027',
    category: 'investment',
    description: 'Governments and corporations racing for AI dominance',
    color: 'blue'
  },
  {
    id: 'investment-2',
    value: '35%',
    label: 'Year-over-year growth in AI startup funding',
    category: 'investment',
    description: 'VCs betting big on AI-first companies',
    color: 'blue'
  },
  {
    id: 'investment-3',
    value: '70%',
    label: 'Of executives plan to increase AI investment',
    category: 'investment',
    description: 'AI remains top priority for business leaders',
    color: 'blue'
  },
];

// Pre-selected sets for different sections of your hero
export const heroStatistics: Statistic[] = [
  aiStatistics.find(stat => stat.id === 'adoption-2')!,
  aiStatistics.find(stat => stat.id === 'impact-1')!,  
  aiStatistics.find(stat => stat.id === 'future-1')!,  
  aiStatistics.find(stat => stat.id === 'investment-1')! 
];

// Statistics that change with scroll
export const scrollBasedStatistics: Statistic[][] = [
  // First set (scroll 33%)
  [
    aiStatistics.find(stat => stat.id === 'adoption-1')!,
    aiStatistics.find(stat => stat.id === 'impact-1')!,
    aiStatistics.find(stat => stat.id === 'future-1')!,
    aiStatistics.find(stat => stat.id === 'investment-1')!
  ],
  // Second set (scroll 66%)
  [
    aiStatistics.find(stat => stat.id === 'adoption-2')!,
    aiStatistics.find(stat => stat.id === 'impact-2')!,
    aiStatistics.find(stat => stat.id === 'future-2')!,
    aiStatistics.find(stat => stat.id === 'investment-2')!
  ],
  // Third set (scroll 100%)
  [
    aiStatistics.find(stat => stat.id === 'adoption-3')!,
    aiStatistics.find(stat => stat.id === 'impact-3')!,
    aiStatistics.find(stat => stat.id === 'future-3')!,
    aiStatistics.find(stat => stat.id === 'investment-3')!
  ],
];

// Helper function to get color classes
export const getStatColorClasses = (color?: string) => {
  switch(color) {
    case 'indigo':
      return {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        gradient: 'from-indigo-500 to-indigo-600'
      };
    case 'purple':
      return {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-purple-600'
      };
    case 'blue':
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-blue-600'
      };
    case 'green':
      return {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
        gradient: 'from-green-500 to-green-600'
      };
    case 'pink':
      return {
        bg: 'bg-pink-50',
        text: 'text-pink-600',
        border: 'border-pink-200',
        gradient: 'from-pink-500 to-pink-600'
      };
    default:
      return {
        bg: 'bg-gray-50',
        text: 'text-gray-600',
        border: 'border-gray-200',
        gradient: 'from-gray-500 to-gray-600'
      };
  }
};