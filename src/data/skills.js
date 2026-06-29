import {
  SiCplusplus,
  SiPython,
  SiC,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiStreamlit,
  SiVercel,
  SiRender,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Code2, Brain, Wrench, Cloud, Lightbulb, BarChart3, Monitor } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: SiPython },
      { name: 'C', icon: SiC },
    ],
  },
  {
    category: 'Machine Learning & Data Science',
    icon: Brain,
    items: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Seaborn', icon: BarChart3 },
      { name: 'K-Means Clustering', icon: Brain },
    ],
  },
  {
    category: 'Core Concepts',
    icon: Lightbulb,
    items: [
      { name: 'Data Structures and Algorithms', icon: Code2 },
      { name: 'Problem Solving', icon: Lightbulb },
      { name: 'Object-Oriented Programming', icon: Code2 },
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'VS Code', icon: Monitor },
    ],
  },
  {
    category: 'Platforms & Deployment',
    icon: Cloud,
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Render', icon: SiRender },
    ],
  },
  {
    category: 'Other Skills',
    icon: Wrench,
    items: [
      { name: 'API Integration', icon: Code2 },
      { name: 'Debugging', icon: Wrench },
      { name: 'Basic Web Development', icon: Code2 },
      { name: 'AI-assisted Development', icon: Brain },
    ],
  },
];

export default skills;
