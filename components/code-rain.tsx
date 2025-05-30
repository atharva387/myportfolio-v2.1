"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CodeRain() {
  const [columns, setColumns] = useState<number[]>([])

  useEffect(() => {
    // Reduce number of columns for better performance
    const columnCount = Math.floor(window.innerWidth / 40)
    setColumns(Array.from({ length: Math.min(columnCount, 20) }, (_, i) => i))
  }, [])

  const codeChars = ["0", "1", "{", "}", "[", "]", "<", ">", "/", "\\"]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {columns.map((column) => (
        <motion.div
          key={column}
          className="absolute top-0 text-cyan-400/10 font-mono text-xs"
          style={{ left: `${column * 40}px` }}
          initial={{ y: -100 }}
          animate={{ y: window.innerHeight + 100 }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="h-6 leading-6">
              {codeChars[Math.floor(Math.random() * codeChars.length)]}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
