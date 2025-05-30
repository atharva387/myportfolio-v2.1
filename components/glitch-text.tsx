"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.98) {
        // Reduced frequency
        const glitched = text
          .split("")
          .map((char) => (Math.random() > 0.95 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
          .join("")

        setGlitchText(glitched)
        setTimeout(() => setGlitchText(text), 50) // Shorter glitch duration
      }
    }, 200) // Less frequent glitching

    return () => clearInterval(glitchInterval)
  }, [text])

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {glitchText}
    </motion.h1>
  )
}
