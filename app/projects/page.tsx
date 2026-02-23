'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  ShoppingCart, 
  Server, 
  Palette,
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react'
import Link from 'next/link'

const allProjects = [
  {
    title: "Unicorn Mobility",
    period: "May 2025 - Present",
    type: "NodeJS/Express JS",
    description: "Optimized REST APIs and MongoDB queries, reducing response times by 40% and balancing server/database load.",
    achievements: [
      "Reduced response times by 40% and infrastructure costs by 60%",
      "Improved fleet utilization by 45% with maintenance scheduling",
      "Built end-to-end group ride functionality with 99.9% accuracy",
      "Fixed refund calculation logic preventing $20K+ monthly revenue loss",
      "Created bulk email system for 10K+ users with 99.5% delivery rate",
      "Developed Master Partner Dashboard reducing admin overhead by 50%",
      "Implemented geo-aware scheduling for hotels and intelligent bike assignment",
      "Designed universal voucher generation system increasing utilization by 30%"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Firebase", "AWS SES", "JWT"],
    icon: Server,
    featured: true
  },
  {
    title: "AI Storyboard Generator",
    period: "November 2025 - January 2026",
    type: "FastAPI + NextJS",
    description: "Developed AI-powered storyboard generation platform with FastAPI backend and Next.js frontend.",
    achievements: [
      "Built FastAPI backend with JWT authentication and role-based access control",
      "Implemented user management with CRUD operations and image uploads",
      "Integrated AI storyboard generation using Gemini API",
      "Designed robust database architecture with SQLModel and Alembic",
      "Developed responsive Next.js frontend with Material-UI",
      "Implemented drag-and-drop PSD file uploads and real-time previews",
      "Created dashboard and analytics endpoints for real-time statistics",
      "Ensured security best practices with XSS/CSRF protection"
    ],
    technologies: ["FastAPI", "Next.js", "TypeScript", "Material-UI", "PostgreSQL", "Gemini API", "JWT"],
    icon: Code2,
    featured: true
  },
  {
    title: "Mango-MIS",
    period: "April 2024",
    type: "FastAPI",
    description: "Created office attendance system using Google Sheets API and migrated REST APIs to GraphQL.",
    achievements: [
      "Developed FastAPI application for attendance management",
      "Integrated Google Sheets API for data processing",
      "Migrated REST APIs to GraphQL using Graphene",
      "Enabled flexible queries and reduced over-fetching",
      "Created admin dashboard for data management"
    ],
    technologies: ["FastAPI", "GraphQL", "Google Sheets API", "MySQL", "Graphene"],
    icon: Database,
    featured: false
  },
  {
    title: "TPC-C Web Application",
    period: "August 2025",
    type: "Flask/Vanilla JS",
    description: "Collaborated on CockroachDB application with multi-region AWS deployment and performance testing.",
    achievements: [
      "Refactored and restructured application for better maintainability",
      "Enhanced API endpoints for order, inventory, and payment services",
      "Conducted performance testing across multi-region AWS deployment",
      "Validated distributed transaction handling and ACID compliance",
      "Deployed application on AWS multi-region setup"
    ],
    technologies: ["Flask", "CockroachDB", "AWS", "JavaScript", "Python"],
    icon: Globe,
    featured: false
  },
  {
    title: "JPMS PWA Project",
    period: "July 2023 - January 2024",
    type: "Magento PWA",
    description: "Led UI modernization by migrating from Magento Luma to React-based PWA using Magento PWA Studio.",
    achievements: [
      "Led migration to React-based PWA with Magento PWA Studio",
      "Integrated multiple payment gateways (Apple Pay, AfterPay, PayPal)",
      "Developed optimized GraphQL queries for custom modules",
      "Implemented MageWorx Gift Card functionality in PWA",
      "Enhanced performance and scalability of the platform"
    ],
    technologies: ["React", "Magento PWA Studio", "GraphQL", "Payment Gateways", "PWA"],
    icon: ShoppingCart,
    featured: false
  },
  {
    title: "Pierre Diamonds",
    period: "March 2024 - May 2024",
    type: "Magento",
    description: "Developed customizable diamond jewelry e-commerce platform with advanced ring-builder functionality.",
    achievements: [
      "Built 5+ custom Magento modules for ring-builder functionality",
      "Implemented RESTful APIs with 25+ custom attributes",
      "Created interactive Ring Builder with real-time pricing",
      "Optimized diamond search performance by ~60%",
      "Integrated multiple payment gateways and 360° video viewing",
      "Developed complex bundle products with dynamic configuration"
    ],
    technologies: ["Magento 2.4", "PHP", "MySQL", "Payment APIs", "JavaScript", "REST APIs"],
    icon: ShoppingCart,
    featured: true
  },
  {
    title: "Netwave Technology",
    period: "June 2024 - July 2024",
    type: "Magento",
    description: "Built custom Magento 2.4.7-p1 Luma child theme with responsive layouts and reusable UI components.",
    achievements: [
      "Built custom Magento child theme from scratch",
      "Developed multiple custom Netwave modules for category management",
      "Integrated Amasty and MageWorx extensions",
      "Implemented page speed optimizations improving performance by ~30%",
      "Created reusable UI components and responsive layouts"
    ],
    technologies: ["Magento 2.4.7", "PHP", "CSS3", "JavaScript", "Amasty", "MageWorx"],
    icon: ShoppingCart,
    featured: false
  },
  {
    title: "Brew Express",
    period: "March 2023 - May 2023",
    type: "Magento",
    description: "Upgraded e-commerce platform from Magento 2.3 to 2.4.5, ensuring system stability and security compliance.",
    achievements: [
      "Upgraded platform from Magento 2.3 to 2.4.5",
      "Refactored custom and third-party modules for compatibility",
      "Led post-upgrade stabilization focusing on PDP and checkout",
      "Implemented responsive UI/UX improvements increasing engagement by 45%",
      "Fixed multiple admin-side issues and optimized performance"
    ],
    technologies: ["Magento 2.4.5", "PHP", "MySQL", "JavaScript", "CSS3"],
    icon: ShoppingCart,
    featured: false
  },
  {
    title: "Inclusive-Web Theme",
    period: "August 2024 – January 2025",
    type: "Shopify",
    description: "Designed accessibility-compliant Shopify theme with 30+ advanced e-commerce features.",
    achievements: [
      "Developed fully accessibility-compliant Shopify theme from scratch",
      "Implemented 30+ e-commerce features (pre-order, gift wrapping, etc.)",
      "Enhanced accessibility with screen reader compatibility and ARIA labels",
      "Integrated Google Maps API for store locator functionality",
      "Created responsive design with mobile-first approach"
    ],
    technologies: ["Shopify Liquid", "JavaScript", "CSS3", "Google Maps API", "Shopify CLI"],
    icon: Palette,
    featured: true
  },
  {
    title: "Surf Waikiki Store",
    period: "February 2025 - April 2025",
    type: "Shopify",
    description: "Developed and customized Shopify store for surf equipment rentals with responsive design.",
    achievements: [
      "Developed Shopify store for surf equipment rentals",
      "Integrated IzyRent rental booking system",
      "Resolved cross-browser compatibility issues including Safari bugs",
      "Implemented inventory management and product reviews",
      "Created responsive design optimizations"
    ],
    technologies: ["Shopify", "JavaScript", "CSS3", "IzyRent", "Judge.me"],
    icon: Palette,
    featured: false
  },
  {
    title: "MCP Group Blue Diamond",
    period: "Feb 2023 - Present",
    type: "Magento",
    description: "Developed custom Magento 2 module for dynamic case study management with product association.",
    achievements: [
      "Developed custom Magento module for case study management",
      "Designed complex relational database schema",
      "Built full-featured admin interface with CRUD operations",
      "Configured SMTP mailing system and caching",
      "Implemented Magento best practices for performance"
    ],
    technologies: ["Magento 2", "PHP", "MySQL", "SMTP", "Caching"],
    icon: ShoppingCart,
    featured: false
  },
  {
    title: "IrrigationKing Security",
    period: "September 2024",
    type: "Magento",
    description: "Investigated and mitigated CosmicSting REST API vulnerability in Magento platform.",
    achievements: [
      "Investigated and mitigated CosmicSting REST API vulnerability",
      "Implemented immediate remediation blocking malicious payloads",
      "Applied official Magento security patch",
      "Conducted post-fix security verification and regression testing",
      "Ensured CMS integrity and API safety"
    ],
    technologies: ["Magento 2", "Security", "PHP", "API Security"],
    icon: ShoppingCart,
    featured: false
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const categories = ["All", "NodeJS/Express JS", "FastAPI", "NextJS", "Magento", "Shopify", "Flask"]
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.type.includes(selectedCategory))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            All Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl"
          >
            A comprehensive collection of my work spanning Node.js, FastAPI, Magento, Shopify, and more. 
            Each project represents unique challenges and innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                      {project.achievements.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{project.achievements.length - 3} more achievements
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-8 text-gray-800"
          >
            Interested in Collaboration?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-12"
          >
            I'm always open to discussing new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="mailto:abhilashsahu.aks@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Send Email
            </a>
            <a
              href="https://github.com/abhilash-sahu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhilash-sahu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
