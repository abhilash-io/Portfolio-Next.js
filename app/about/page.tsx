'use client'

import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Mail,
  Github,
  Linkedin,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Code
} from 'lucide-react'
import Link from 'next/link'

const timeline = [
  {
    period: "February 2022 - Present",
    role: "Software Engineer (Full Stack)",
    company: "Mango IT Solutions, Indore, MP (India)",
    type: "work",
    description: "Lead backend and full-stack development for diverse client projects across E-Commerce, SaaS, and AI platforms. Optimized system performance, reducing response times by 40% and lowering client infrastructure costs by 60% during peak traffic. Mentored and guided 5 junior developers in backend architecture, code reviews, and performance best practices."
  },
  {
    period: "September 2021 - February 2022",
    role: "Trainee Web Developer", 
    company: "Mango IT Solutions",
    type: "work",
    description: "Transitioned to web development, focusing on backend technologies and API development."
  },
  {
    period: "September 2021",
    role: "Data Entry Operator",
    company: "Mango IT Solutions", 
    type: "work",
    description: "Started professional career, gained understanding of data management and business processes."
  },
  {
    period: "2020 - 2021",
    role: "Skill Development & SSB Preparation",
    company: "Gap Period",
    type: "education",
    description: "Focused on learning cloud technologies and preparing for SSB interviews to enhance technical and leadership skills."
  },
  {
    period: "2016 - 2020",
    role: "Bachelor of Engineering in Computer Science & Engineering",
    company: "Indore Institute of Science & Technology (IIST)",
    type: "education",
    description: "Completed Computer Science & Engineering degree with strong foundation in software development and algorithms."
  }
]

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "5+" },
  { icon: Code, label: "Projects Delivered", value: "20+" },
  { icon: Users, label: "Team Leadership", value: "Yes" },
  { icon: Award, label: "Performance Gains", value: "40-60%" }
]

const expertise = [
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST & GraphQL APIs", "Microservices Architecture", "JWT/OAuth", "WebSockets", "Server-Side Rendering (SSR)"],
    icon: "⚙️"
  },
  {
    category: "Frontend & PWA", 
    skills: ["React.js", "Next.js (TypeScript)", "Magento PWA Studio (Venia)", "GraphQL", "Vanilla JS", "HTML5", "CSS3", "Responsive Design"],
    icon: "🎨"
  },
  {
    category: "E-Commerce Platforms",
    skills: ["Magento 2 (Community & Commerce)", "Shopify Theme & App Development", "Payment Gateway Integration", "PWA", "Custom Module Development"],
    icon: "🛒"
  },
  {
    category: "Database & Cloud",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "SQLModel/SQLAlchemy", "Mongoose", "Alembic", "AWS (EC2, SES, Lambda, S3)", "GCP", "Docker", "Firebase"],
    icon: "☁️"
  },
  {
    category: "Other Tools & Concepts",
    skills: ["Git", "Jira", "Postman", "Performance Testing", "Agile/Scrum", "SEO Optimization", "Accessibility (WCAG)", "Security Hardening", "Real-time Systems", "Mentoring"],
    icon: "🔧"
  }
]

export default function About() {
  const currentYear = new Date().getFullYear()

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
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              I'm Abhilash Sahu, a passionate Full Stack Developer with expertise in building 
              scalable web applications and e-commerce solutions. My journey from data entry to 
              software engineering showcases my dedication to continuous learning and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            My Journey
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg">
                    {item.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.role}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-600">{item.company}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Areas of Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={area.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{area.category}</h3>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {area.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Beyond Code
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My journey in technology began with a strong foundation in computer science engineering 
              and evolved through hands-on experience across different domains. What started as a data 
              entry role transformed into a passion for building scalable solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I believe in continuous learning and adapting to new technologies. Whether it's optimizing 
              database queries, implementing complex e-commerce features, or mentoring junior developers, 
              I approach every challenge with enthusiasm and a problem-solving mindset.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or preparing for technical interviews. My goal is to keep growing as a developer 
              while helping teams build amazing products that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
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
