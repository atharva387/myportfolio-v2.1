"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Terminal, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus({
        type: "success",
        message: "Message transmitted successfully! I'll respond within 24 hours.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Transmission failed. Please try again or contact directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
        borderColor: "rgba(34, 211, 238, 0.4)",
      }}
      viewport={{ once: true }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-400/20">
        <Terminal size={16} className="text-cyan-400" />
        <span className="text-cyan-400 font-mono text-sm">contact-form.exe</span>
        <div className="ml-auto flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

      {/* Holographic effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="space-y-6 relative z-10">
        {[
          { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
          { id: "email", label: "Email", type: "email", placeholder: "your.email@domain.com" },
          { id: "subject", label: "Subject", type: "text", placeholder: "Project inquiry / Collaboration" },
        ].map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <label htmlFor={field.id} className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
              {field.label}
            </label>
            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Input
                id={field.id}
                name={field.id}
                type={field.type}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-cyan-400/25 transition-all duration-200 font-mono"
              />
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
            Message
          </label>
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project, collaboration idea, or just say hello..."
              rows={5}
              required
              className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-cyan-400/25 transition-all duration-200 font-mono resize-none"
            />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {submitStatus.type && (
            <motion.div
              className={`p-4 rounded-lg border font-mono text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-900/20 border-green-400/30 text-green-400"
                  : "bg-red-900/20 border-red-400/30 text-red-400"
              }`}
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2">
                <Terminal size={16} />
                {submitStatus.message}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border border-cyan-400/30 shadow-lg shadow-cyan-500/25 relative overflow-hidden group font-mono"
              disabled={isSubmitting}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Zap size={16} />
                    </motion.div>
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.form>
  )
}
