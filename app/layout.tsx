import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhilash Sahu - Full Stack Developer | Node.js | FastAPI | Magento | Shopify',
  description: 'Abhilash Sahu - Expert Full Stack Developer specializing in Node.js, Express.js, FastAPI, Next.js, React, Magento, Shopify, PostgreSQL, MongoDB, TypeScript. Building scalable web applications, REST APIs, GraphQL, e-commerce solutions with 5+ years experience.',
  keywords: [
    'Abhilash Sahu', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'Node.js Developer',
    'Express.js', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'Magento Developer', 'Shopify Developer',
    'PostgreSQL', 'MongoDB', 'MySQL', 'GraphQL', 'REST APIs', 'e-commerce Developer', 'Web Developer',
    'Python Developer', 'JavaScript Developer', 'PHP Developer', 'AWS Developer', 'Cloud Developer',
    'Database Developer', 'API Developer', 'Software Engineer', 'MERN Stack', 'MEAN Stack',
    'LAMP Stack', 'Full Stack Engineer', 'Backend Engineer', 'Frontend Engineer'
  ],
  authors: [{ name: 'Abhilash Sahu' }],
  creator: 'Abhilash Sahu',
  publisher: 'Abhilash Sahu',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Abhilash Sahu - Full Stack Developer | Node.js | FastAPI | Magento Expert',
    description: 'Expert Full Stack Developer with 5+ years experience in Node.js, FastAPI, Next.js, Magento, Shopify. Building scalable web applications, REST APIs, and e-commerce solutions.',
    type: 'website',
    url: 'https://abhilashsahu.github.io',
    siteName: 'Abhilash Sahu Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abhilash Sahu - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhilash Sahu - Full Stack Developer | Node.js | FastAPI Expert',
    description: 'Expert Full Stack Developer specializing in Node.js, FastAPI, Next.js, Magento, Shopify with 5+ years experience.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://abhilashsahu.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abhilash Sahu",
              "jobTitle": ["Full Stack Developer", "Backend Developer", "Software Engineer"],
              "description": "Expert Full Stack Developer with 5+ years experience specializing in Node.js, Express.js, FastAPI, Next.js, React, Magento, Shopify, PostgreSQL, MongoDB, and TypeScript.",
              "url": "https://abhilashsahu.github.io",
              "sameAs": [
                "https://github.com/abhilashsahu",
                "https://linkedin.com/in/abhilashsahu"
              ],
              "knowsAbout": [
                "Node.js", "Express.js", "FastAPI", "Next.js", "React", "TypeScript",
                "Magento", "Shopify", "PostgreSQL", "MongoDB", "MySQL", "GraphQL",
                "REST APIs", "JavaScript", "Python", "PHP", "AWS", "Cloud Computing",
                "E-commerce Development", "Web Development", "Backend Development",
                "Frontend Development", "Database Design", "API Development",
                "Software Architecture", "Performance Optimization", "Scalable Systems"
              ],
              "skills": [
                "Full Stack Development", "Backend Development", "Frontend Development",
                "Node.js Development", "Python Development", "JavaScript Development",
                "TypeScript Development", "React Development", "Next.js Development",
                "Magento Development", "Shopify Development", "Database Development",
                "API Development", "REST API Design", "GraphQL Development",
                "E-commerce Solutions", "Web Application Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Mangoit",
                "jobTitle": "Software Engineer"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Indore Institute of Science and Technology",
                "degree": "Bachelor of Engineering in Computer Science & Engineering"
              },
              "workExperience": [
                {
                  "@type": "OccupationalExperience",
                  "employer": "Mangoit",
                  "jobTitle": "Software Engineer",
                  "startDate": "2021-09",
                  "description": "Full Stack Development with Node.js, FastAPI, Magento, Shopify"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
