import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Projects | Abhilash Sahu - Full Stack Developer Portfolio',
  description: 'Explore all projects by Abhilash Sahu - Full Stack Developer. Node.js, Express.js, FastAPI, Next.js, React, Magento, Shopify, PostgreSQL, MongoDB projects with detailed case studies and technical implementations.',
  keywords: [
    'Abhilash Sahu Projects', 'Full Stack Developer Projects', 'Node.js Projects', 'Express.js Projects',
    'FastAPI Projects', 'Next.js Projects', 'React Projects', 'Magento Projects', 'Shopify Projects',
    'Web Development Projects', 'Backend Projects', 'Frontend Projects', 'E-commerce Projects',
    'API Development Projects', 'Database Projects', 'Full Stack Applications'
  ],
  openGraph: {
    title: 'Projects by Abhilash Sahu - Full Stack Developer',
    description: 'Complete portfolio of projects showcasing expertise in Node.js, FastAPI, Next.js, Magento, Shopify, and more.',
    url: 'https://abhilashsahu.github.io/projects',
    type: 'website',
  },
  alternates: {
    canonical: 'https://abhilashsahu.github.io/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
