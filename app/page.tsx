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
  ChevronRight,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Mail,
  Github,
  Linkedin
} from 'lucide-react'
import Link from 'next/link'

const projects = [
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
      "Developed Master Partner Dashboard reducing admin overhead by 50%"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Firebase", "AWS SES"],
    icon: Server
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
      "Implemented drag-and-drop PSD file uploads and real-time previews"
    ],
    technologies: ["FastAPI", "Next.js", "TypeScript", "Material-UI", "PostgreSQL", "Gemini API"],
    icon: Code2
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
      "Integrated multiple payment gateways and 360° video viewing"
    ],
    technologies: ["Magento 2.4", "PHP", "MySQL", "Payment APIs", "JavaScript"],
    icon: ShoppingCart
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
      "Integrated Google Maps API for store locator functionality"
    ],
    technologies: ["Shopify Liquid", "JavaScript", "CSS3", "Google Maps API"],
    icon: Palette
  }
]

const skills = [
  { name: "Node.js/Express", level: 95 },
  { name: "FastAPI/Python", level: 90 },
  { name: "Next.js/React", level: 90 },
  { name: "Magento 2", level: 85 },
  { name: "Shopify", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "MongoDB/PostgreSQL", level: 85 },
  { name: "GraphQL", level: 80 },
  { name: "AWS/Cloud Services", level: 75 },
  { name: "REST APIs", level: 95 },
  { name: "Microservices", level: 80 },
  { name: "Database Optimization", level: 85 }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const currentYear = new Date().getFullYear()
  
  const categories = ["All", "NodeJS/Express JS", "FastAPI", "NextJS", "Magento", "Shopify"]
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.type.includes(selectedCategory))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Abhilash Sahu
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Senior Software Engineer with 5+ years experience in architecting, developing, and scaling full-stack web applications. 
              Proven expertise in Node.js, Python (FastAPI/Flask), Magento 2, Shopify, and modern frontend frameworks. 
              Demonstrated ability to lead projects, optimize performance, reduce costs, and mentor junior developers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">20+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Team Leadership</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg"
              >
                View Projects
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/about"
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg border border-gray-200"
              >
                About Me
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Featured Projects
          </motion.h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
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
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
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
          
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg"
            >
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-8 text-gray-800"
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-12"
          >
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just have a chat!
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
              <Mail className="w-5 h-5" />
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© {currentYear} Abhilash Sahu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
