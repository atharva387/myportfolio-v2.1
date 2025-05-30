"use client"

import { CalendarDays, GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"

interface EducationCardProps {
  degree: string
  specialization?: string
  institution: string
  duration: string
  gpa: string
}

export default function EducationCard({ degree, specialization, institution, duration, gpa }: EducationCardProps) {
  return (
    <motion.div
      className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
        borderColor: "rgba(34, 211, 238, 0.4)",
      }}
      viewport={{ once: true }}
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

      {/* Holographic effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex items-start relative z-10">
        <motion.div
          className="flex-shrink-0 mr-4"
          whileHover={{
            rotate: 360,
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-cyan-400" />
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.h3
            className="text-lg font-bold mb-2 text-white font-mono"
            whileHover={{ x: 5, color: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {degree}
          </motion.h3>

          {specialization && (
            <motion.p
              className="text-cyan-400 text-sm mb-3 font-mono"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🔒 {specialization}
            </motion.p>
          )}

          <motion.p
            className="text-gray-300 mb-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {institution}
          </motion.p>

          <motion.div
            className="flex items-center text-gray-400 mb-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <CalendarDays size={16} className="mr-2" />
            </motion.div>
            <span className="text-sm font-mono">{duration}</span>
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-400/30 px-4 py-2 rounded-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(34, 211, 238, 0.1)",
              borderColor: "rgba(34, 211, 238, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award size={16} className="text-cyan-400" />
            <span className="text-sm font-mono">
              <span className="text-gray-400">GPA: </span>
              <span className="font-bold text-cyan-400">{gpa}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
