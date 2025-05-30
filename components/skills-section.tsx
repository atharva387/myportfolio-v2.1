"use client"

import type React from "react"
import { Code, Database, Globe, Server, Settings, Cloud } from "lucide-react"
import { motion } from "framer-motion"

interface SkillCategoryProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  index: number
  color: string
}

const SkillCategory = ({ title, skills, icon, index, color }: SkillCategoryProps) => {
  return (
    <motion.div
      className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      whileHover={{
        scale: 1.01,
        borderColor: "rgba(34, 211, 238, 0.4)",
      }}
      viewport={{ once: true }}
    >
      {/* Static border */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}></div>

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="mr-4 text-cyan-400 p-2 bg-cyan-400/10 rounded-lg border border-cyan-400/20">{icon}</div>
          <h3 className="text-xl font-bold text-white font-mono">{title}</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill, skillIndex) => (
            <div
              key={skill}
              className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 hover:border-cyan-400/30 transition-colors duration-200 group/skill"
            >
              <span className="text-gray-300 text-sm font-mono group-hover/skill:text-cyan-300 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Java", "C++", "JavaScript", "C", "Python", "TypeScript"],
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Frontend",
      icon: <Globe size={24} />,
      skills: ["React", "Next.js", "React Native", "Bootstrap", "Tailwind CSS", "HTML5"],
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [".NET Core", "Node.js", "Express", "REST APIs", "GraphQL", "Microservices"],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "DevOps",
      icon: <Settings size={24} />,
      skills: ["Docker", "CI/CD", "Git", "GitHub Actions", "Jenkins", "Kubernetes"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["Firebase", "SQL Server", "MongoDB", "PostgreSQL", "Redis", "MySQL"],
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Cloud & AI",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Firebase Hosting", "Machine Learning", "TensorFlow", "Azure", "GCP"],
      color: "from-cyan-400 to-blue-500",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          skills={category.skills}
          icon={category.icon}
          index={index}
          color={category.color}
        />
      ))}
    </div>
  )
}
