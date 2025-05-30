"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-200 rounded-full opacity-50"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-blue-300 rounded-full opacity-70"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-60 right-10 w-5 h-5 bg-indigo-200 rounded-full opacity-40"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating lines */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-0.5 bg-gradient-to-r from-blue-300 to-transparent opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-0.5 bg-gradient-to-l from-purple-300 to-transparent opacity-25"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
