import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Abhilash Sahu | Full Stack Developer | Node.js | FastAPI Expert',
  description: 'Learn about Abhilash Sahu - Full Stack Developer with 5+ years experience in Node.js, Express.js, FastAPI, Next.js, React, Magento, Shopify, PostgreSQL, MongoDB. Education, experience, and technical journey.',
  keywords: [
    'About Abhilash Sahu', 'Abhilash Sahu Full Stack Developer', 'Abhilash Sahu Node.js Developer',
    'Abhilash Sahu FastAPI Developer', 'Abhilash Sahu Magento Developer', 'Abhilash Sahu Shopify Developer',
    'Full Stack Developer Experience', 'Node.js Developer Experience', 'FastAPI Developer Experience',
    'Software Engineer Background', 'Web Developer Journey', 'Backend Developer Career'
  ],
  openGraph: {
    title: 'About Abhilash Sahu - Full Stack Developer Journey',
    description: 'Professional journey of Abhilash Sahu - Full Stack Developer with expertise in Node.js, FastAPI, Next.js, Magento, and Shopify.',
    url: 'https://abhilashsahu.github.io/about',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://abhilashsahu.github.io/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
