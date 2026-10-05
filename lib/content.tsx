import React from 'react';
import { Brain, Plane, Code2, Database, Layout, Server, Wrench } from 'lucide-react';

export type Project = {
  index: string; title: string; description: string; highlights: string[];
  tags: string[]; github: string; demo?: string; caseStudy?: string;
  featured?: boolean; disclaimer?: string; icon: React.ReactNode;
};

export const stats = [
  { value: '500+', label: 'LeetCode / GFG Problems' },
  { value: '3', label: 'Shipped GenAI Apps' },
  { value: '8.39', label: 'CGPA at VIT' },
  { value: '100+', label: 'LLM Responses Eval' }
];

export const experience = [
  {
    role: 'LLM Evaluation Contributor / AI Trainer',
    company: 'Outlier',
    period: '2025 - Present',
    current: true,
    bullets: [
      'Evaluated 100+ LLM responses for accuracy, reasoning, relevance, and instruction following using structured evaluation rubrics.',
      'Generated, reviewed, and annotated training examples to support LLM response-quality improvement.',
      'Analyzed model failures including hallucinations, reasoning errors, factual inconsistencies, and instruction-following failures.',
      'Provided structured human feedback across diverse LLM evaluation tasks to support model training and evaluation workflows.',
      'Maintained consistent quality assessment across different prompts and model-generated responses.',
    ],
    skills: ['Generative AI', 'LLM Evaluation', 'LLM Training', 'AI Model Evaluation'],
  },
];

export const education = [
  {
    degree: 'B.Tech CSE (Data Science)',
    school: 'Vellore Institute of Technology',
    period: 'Aug 2023 - May 2027',
    details: 'CGPA 8.39/10. Coursework: DSA, DBMS, OOP, OS, Networks, ML.'
  },
  {
    degree: 'Class 12th (CBSE)',
    school: 'Holy Cross School',
    period: 'Completed 2022',
    details: 'Score: 85%'
  },
  {
    degree: 'Class 10th (CBSE)',
    school: 'Holy Cross School',
    period: 'Completed 2020',
    details: 'Score: 89.6%'
  }
];

export const skills = [
  {
    category: 'Generative AI',
    icon: <Brain className="h-5 w-5" />,
    items: ['LangChain', 'LangGraph', 'OpenAI', 'PyTorch', 'RAG', 'n8n', 'LLM Evaluation', 'Prompt Quality Analysis']
  },
  {
    category: 'Backend',
    icon: <Server className="h-5 w-5" />,
    items: ['FastAPI', 'Node.js', 'Express', 'REST APIs', 'WebSockets']
  },
  {
    category: 'Frontend',
    icon: <Layout className="h-5 w-5" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Databases',
    icon: <Database className="h-5 w-5" />,
    items: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    category: 'DevOps & Tools',
    icon: <Wrench className="h-5 w-5" />,
    items: ['Docker', 'AWS', 'Kubernetes', 'Git', 'Vercel', 'Postman']
  }
];

export const coreCS = ['DSA', 'DBMS', 'OOP', 'OS', 'Networks'];

export const projects: Project[] = [
  {
    index: '01',
    title: 'MedVision AI',
    description: 'AI-assisted chest X-ray analysis detecting 18 pathologies with RAG-powered medical Q&A.',
    highlights: [
      '7-stage LangGraph workflow for automated inference.',
      'Sub-3s inference latency using DenseNet121.',
      'Dual-source retrieval (Vector + Live web) for up-to-date facts.',
      'Automated PDF report synthesis with ReportLab.'
    ],
    tags: ['FastAPI', 'React', 'PyTorch', 'LangGraph', 'MongoDB'],
    github: 'https://github.com/Anishkr007/medi-AI',
    featured: true,
    disclaimer: 'Educational/assistive tool. Not a diagnostic device.',
    icon: <Brain className="h-5 w-5" />
  },
  {
    index: '02',
    title: 'Wander AI',
    description: 'Multi-agent travel planning system with live flight, weather, and destination data.',
    highlights: [
      'Coordinated 5 parallel LangGraph agents.',
      'Integrated AviationStack and OpenWeather APIs.',
      'MongoDB Atlas session persistence.',
      'Generates a complete itinerary in under 12 seconds.'
    ],
    tags: ['LangGraph', 'FastAPI', 'React', 'Vercel'],
    github: 'https://github.com/Anishkr007/travel_agent_langchain',
    featured: true,
    icon: <Plane className="h-5 w-5" />
  },
  {
    index: '03',
    title: 'NeoCode',
    description: 'Full-stack LeetCode-style practice platform with 20+ problems and a live code judge.',
    highlights: [
      'Built 10+ secure REST APIs with Express.',
      'Implemented robust JWT authentication & bcrypt.',
      'Integrated backend code execution environment.',
      'Clean React UI with real-time feedback.'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Anishkr007/neocode',
    icon: <Code2 className="h-5 w-5" />
  }
];