// /data/history.ts
// This file contains the chronological journey of AI development

export interface AIHistoryEvent {
  year: string;
  title: string;
  description: string;
  significance: string;
  image?: string;
  category: 'milestone' | 'breakthrough' | 'innovation' | 'future';
}

export const aiHistoryData: AIHistoryEvent[] = [
  {
    year: "1950",
    title: "The Turing Test",
    description: "Alan Turing publishes 'Computing Machinery and Intelligence', proposing the Turing Test as a measure of machine intelligence.",
    significance: "Laid the philosophical foundation for AI and sparked decades of debate about machine consciousness.",
    category: "milestone",
    image: "/history/turing-test.jpg"
  },
  {
    year: "1956",
    title: "Birth of AI",
    description: "The Dartmouth Workshop coins the term 'Artificial Intelligence'. John McCarthy, Marvin Minsky, and others gather to discuss 'thinking machines'.",
    significance: "Officially marks the beginning of AI as an academic field of study.",
    category: "milestone",
    image: "/history/dartmouth.jpg"
  },
  {
    year: "1966",
    title: "ELIZA - First Chatbot",
    description: "Joseph Weizenbaum creates ELIZA, the first natural language processing computer program that simulated conversation.",
    significance: "Pioneered human-computer interaction and laid groundwork for modern chatbots.",
    category: "breakthrough",
    image: "/history/eliza.jpg"
  },
  {
    year: "1997",
    title: "Deep Blue Defeats Kasparov",
    description: "IBM's Deep Blue becomes the first computer to defeat a world chess champion, Garry Kasparov.",
    significance: "Demonstrated AI's ability to master complex strategic thinking.",
    category: "breakthrough",
    image: "/history/deep-blue.jpg"
  },
  {
    year: "2011",
    title: "Watson Wins Jeopardy!",
    description: "IBM's Watson defeats human champions in the quiz show Jeopardy!, showcasing advanced natural language understanding.",
    significance: "Proved AI could understand nuanced human language and context.",
    category: "innovation",
    image: "/history/watson.jpg"
  },
  {
    year: "2012",
    title: "Deep Learning Revolution",
    description: "AlexNet wins ImageNet competition, sparking the deep learning revolution in computer vision.",
    significance: "Transformed AI capabilities in image recognition and pattern detection.",
    category: "breakthrough",
    image: "/history/deep-learning.jpg"
  },
  {
    year: "2016",
    title: "AlphaGo Defeats Lee Sedol",
    description: "DeepMind's AlphaGo defeats world Go champion, solving one of the most complex board games.",
    significance: "Showcased AI's ability to handle intuitive and creative thinking.",
    category: "milestone",
    image: "/history/alphago.jpg"
  },
  {
    year: "2020",
    title: "GPT-3 Revolution",
    description: "OpenAI releases GPT-3, demonstrating unprecedented natural language understanding and generation.",
    significance: "Brought AI-generated content to the mainstream and democratized AI access.",
    category: "innovation",
    image: "/history/gpt3.jpg"
  },
  {
    year: "2022",
    title: "Generative AI Explosion",
    description: "DALL-E, Midjourney, and ChatGPT bring generative AI to the public, transforming creative industries.",
    significance: "Marked the beginning of widespread public adoption and creative AI tools.",
    category: "innovation",
    image: "/history/generative-ai.jpg"
  },
  {
    year: "2024",
    title: "Multimodal AI",
    description: "AI systems that understand and generate text, images, audio, and video seamlessly.",
    significance: "Brings us closer to human-like understanding and interaction.",
    category: "future",
    image: "/history/multimodal.jpg"
  },
  {
    year: "2030",
    title: "Artificial General Intelligence (Projected)",
    description: "Expected emergence of AGI - machines with human-level cognitive abilities across all domains.",
    significance: "Could fundamentally transform human civilization and consciousness.",
    category: "future",
    image: "/history/agi.jpg"
  }
];

// Timeline categories for filtering
export const timelineCategories = [
  { id: 'all', label: 'All Events' },
  { id: 'milestone', label: 'Milestones' },
  { id: 'breakthrough', label: 'Breakthroughs' },
  { id: 'innovation', label: 'Innovations' },
  { id: 'future', label: 'Future Visions' }
];

// Key statistics about AI development
export const aiStats = {
  papersPublished: "2M+",
  activeResearchers: "300K+",
  countriesInvesting: "50+",
  companiesDeveloping: "1000+",
  patentsFiled: "150K+",
  globalMarketValue: "$500B+",
  jobsCreated: "2.5M+",
  dailyUsers: "100M+"
};