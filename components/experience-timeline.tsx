"use client"

import { CalendarDays, MapPin, Zap } from "lucide-react"
import { motion } from "framer-motion"

interface ExperienceItemProps {
  company: string
  position: string
  duration: string
  location?: string
  responsibilities: string[]
  index: number
}

const ExperienceItem = ({ company, position, duration, location, responsibilities, index }: ExperienceItemProps) => {
  return (
    <motion.div
      className="relative pl-8 pb-12 border-l border-cyan-400/30 last:border-0 last:pb-0"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-black"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 300,
        }}
        whileHover={{
          scale: 1.3,
          boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
        }}
      />

      <motion.div
        className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden group"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
          borderColor: "rgba(34, 211, 238, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

        {/* Holographic effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0, rotate: 45 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <motion.h3
            className="text-xl font-bold mb-2 text-white font-mono"
            whileHover={{ x: 5, color: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {company}
          </motion.h3>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-4 text-gray-400"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <CalendarDays size={16} />
              </motion.div>
              <span className="text-sm font-mono">{duration}</span>
            </div>
            {location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm font-mono">{location}</span>
              </div>
            )}
          </motion.div>

          <motion.p
            className="font-semibold text-cyan-400 mb-6 text-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {position}
          </motion.p>

          <motion.ul
            className="space-y-4"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {responsibilities.map((responsibility, respIndex) => (
              <motion.li
                key={respIndex}
                className="flex items-start group/item"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex-shrink-0 w-6 h-6 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mt-1 group-hover/item:bg-cyan-400/20 group-hover/item:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <Zap size={12} className="text-cyan-400" />
                </motion.div>
                <p className="ml-3 text-gray-300 leading-relaxed">{responsibility}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "QuantumSky Info Pvt. Ltd.",
      position: "Software Developer",
      duration: "Jul 2023–Present",
      location: "Pune, India",
      responsibilities: [
        "Architected and deployed full-stack e-commerce platform using .NET, React, and SQL, achieving 40% faster load times and supporting 1K+ monthly active users",
        "Engineered RESTful APIs with advanced caching strategies, reducing response latency by 35% and improving overall system performance",
        "Delivered 10+ client-facing websites with mobile-first responsive design, maintaining 100% on-time delivery record",
        "Implemented automated CI/CD pipeline using Docker and GitHub Actions, reducing deployment time from 2 hours to 20 minutes",
      ],
    },
    {
      company: "ARS Infotech",
      position: "Trainee Support Software Engineer",
      duration: "Jan 2023–Jul 2023",
      location: "Pune, India",
      responsibilities: [
        "Resolved 50+ critical support issues and system bugs, achieving 90% client satisfaction rating through efficient problem-solving",
        "Optimized application performance by identifying bottlenecks using advanced log analysis and SQL query optimization techniques",
        "Enhanced Excel-based reporting workflows with automation scripts, increasing team productivity by 30%",
      ],
    },
  ]

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          company={exp.company}
          position={exp.position}
          duration={exp.duration}
          location={exp.location}
          responsibilities={exp.responsibilities}
          index={index}
        />
      ))}
    </motion.div>
  )
}
