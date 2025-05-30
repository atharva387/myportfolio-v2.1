"use client"

import { Button } from "@/components/ui/button"
import { Download, GitlabIcon as GitHub, Linkedin, Mail, Phone, Terminal, Code2 } from "lucide-react"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import EducationCard from "@/components/education-card"
import CertificationCard from "@/components/certification-card"
import ContactForm from "@/components/contact-form"
import FuturisticHeader from "@/components/futuristic-header"
import TechBackground from "@/components/tech-background"
import ScrollProgress from "@/components/scroll-progress"
import CodeRain from "@/components/code-rain"
import TerminalHero from "@/components/terminal-hero"
import GlitchText from "@/components/glitch-text"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden">
      <TechBackground />
      <CodeRain />
      <ScrollProgress />

      {/* Futuristic Header */}
      <FuturisticHeader />

      {/* Hero Section */}
      <motion.section className="pt-32 pb-20 relative z-10" style={{ y: heroY }}>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Terminal size={16} />
                <span className="text-sm font-mono">~/portfolio/atharva-kulkarni</span>
              </div>
              <div className="text-green-400 font-mono text-sm">
                <span className="text-cyan-400">$</span> whoami
              </div>
            </motion.div>

            <GlitchText
              text="ATHARVA KULKARNI"
              className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            />

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> cat role.txt
              </div>
              <div className="border-l-2 border-cyan-400 pl-4 mb-4">
                <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2">Full-Stack Developer</h2>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-400/30 rounded text-cyan-300">
                    State-Level Hackathon Winner
                  </span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-400/30 rounded text-purple-300">
                    ML Research Co-Author
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Architecting scalable solutions with <span className="text-cyan-400 font-semibold">2+ years</span> of
              experience in <span className="text-green-400">.NET</span>, <span className="text-blue-400">React</span>,{" "}
              <span className="text-orange-400">Java</span>, and <span className="text-yellow-400">Firebase</span>.
              Transforming ideas into reality through code.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30 shadow-lg shadow-cyan-500/25 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <a href="#projects" className="flex items-center gap-2 relative z-10">
                    <Code2 size={16} />
                    View Projects
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 shadow-lg shadow-cyan-500/10 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Download size={16} /> Download CV
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <TerminalHero />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Terminal size={20} />
              <span className="font-mono">cat about.md</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
                borderColor: "rgba(34, 211, 238, 0.4)",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  I'm a passionate <span className="text-cyan-400 font-semibold">full-stack developer</span> with a
                  strong foundation in both front-end and back-end technologies. My journey in software development has
                  been driven by a deep interest in creating efficient, scalable, and user-friendly applications that
                  solve real-world problems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  With experience in <span className="text-green-400">.NET</span>,{" "}
                  <span className="text-orange-400">Java</span>,<span className="text-blue-400"> React</span>, and{" "}
                  <span className="text-yellow-400">Firebase</span>, I've had the opportunity to work on diverse
                  projects ranging from e-commerce platforms to healthcare applications. I'm particularly proud of my
                  contributions to <span className="text-purple-400">machine learning research</span>, which resulted in
                  a published paper in the IJARSCT journal.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Beyond my technical skills, I value cross-functional collaboration and am committed to delivering
                  high-quality solutions on time. I'm also actively involved in extracurricular activities as the
                  <span className="text-cyan-400"> Founder of Explore X Escape</span>, a trekking and adventure club,
                  and as a member of the Rotaract Club in Pune.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Terminal size={20} />
              <span className="font-mono">ls -la skills/</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
          </motion.div>
          <SkillsSection />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Terminal size={20} />
              <span className="font-mono">git log --oneline projects/</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "One-Umbrella",
                subtitle: "Full-Stack E-Commerce Platform",
                technologies: ["C#", ".NET", "JavaScript", "SQL", "Bootstrap"],
                description:
                  "Enterprise-grade B2B/B2C platform with advanced security, real-time inventory management, and order tracking. Achieved 98% uptime across 500+ SKUs with optimized performance.",
                imageUrl: "/oneumbrella.png?height=300&width=500",
                featured: true,
              },
              {
                title: "Easy Trials",
                subtitle: "AI-Powered Healthcare Monitoring",
                technologies: ["Java", "Firebase", "IoT", "Machine Learning"],
                description:
                  "Revolutionary real-time patient monitoring system using smartwatches and AI. Winner of state-level hackathon among 200+ teams with innovative health analytics.",
                imageUrl: "/easytrials.png?height=300&width=500",
                featured: true,
              },
              {
                title: "Book-My-Table",
                subtitle: "Smart Restaurant Booking System",
                technologies: ["Java", "Firebase", "Android Studio", "Real-time DB"],
                description:
                  "Intelligent restaurant reservation platform with real-time availability, smart recommendations, and seamless payment integration.",
                imageUrl: "/bookmytable.png?height=300&width=500",
              },
              {
                title: "Credit Card Approval Prediction",
                subtitle: "ML Research & Publication",
                technologies: ["Python", "Machine Learning", "AWS S3", "Data Science"],
                description:
                  "Advanced predictive model using ensemble methods and logistic regression. Achieved 86% accuracy and published in IJARSCT journal (May 2023).",
                imageUrl: "credit.png?height=300&width=500",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Terminal size={20} />
              <span className="font-mono">history | grep work</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Journey
            </h2>
          </motion.div>
          <ExperienceTimeline />
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-20 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Terminal size={20} />
              <span className="font-mono">cat education.log</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Academic Background
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <EducationCard
                degree="B.E. in Information Technology"
                specialization="Honors in Cybersecurity"
                institution="Savitribai Phule Pune University"
                duration="2020–2023"
                gpa="8.65/10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <EducationCard
                degree="Diploma in Computer Science"
                institution="Ekalavya Polytechnic, Pune"
                duration="2018–2020"
                gpa="7.1/10"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="py-20 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Terminal size={20} />
              <span className="font-mono">find . -name "*.cert"</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", icon: "cloud" as const },
              { title: "DevOps with Docker and GitHub Actions", issuer: "Udemy", icon: "container" as const },
              { title: "The Complete Java Developer Course", issuer: "Udemy", icon: "code" as const },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationCard {...cert} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
              borderColor: "rgba(34, 211, 238, 0.4)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-600"></div>

            <h3 className="text-xl font-bold mb-6 text-white">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="text-green-400 font-semibold">State-Level Hackathon Winner</h4>
                  <p className="text-gray-300 text-sm">
                    1st place among 200+ teams for Easy Trials healthcare innovation (2022)
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="text-purple-400 font-semibold">Published Research Paper</h4>
                  <p className="text-gray-300 text-sm">ML research published in IJARSCT journal (May 2023)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Terminal size={20} />
              <span className="font-mono">./connect.sh</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Ready to collaborate on cutting-edge projects? Let's build something amazing together. I'm always
                  excited to discuss new opportunities, innovative ideas, or just talk tech!
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "atharvakulkarni1612@gmail.com",
                      href: "mailto:atharvakulkarni1612@gmail.com",
                      color: "text-red-400",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91-9518943376",
                      href: "tel:+919518943376",
                      color: "text-green-400",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "linkedin.com/in/atharva16",
                      href: "https://linkedin.com/in/atharva16",
                      color: "text-blue-400",
                    },
                    {
                      icon: GitHub,
                      label: "GitHub",
                      value: "github.com/atharva387",
                      href: "https://github.com/atharva387",
                      color: "text-purple-400",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group"
                      whileHover={{
                        x: 10,
                        backgroundColor: "rgba(34, 211, 238, 0.05)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`${contact.color} group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <contact.icon size={20} />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`${contact.color} hover:text-white transition-colors font-mono text-sm`}
                        >
                          {contact.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-12 border-t border-cyan-400/20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <motion.div
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Atharva Kulkarni
              </h3>
              <p className="text-gray-400 font-mono text-sm">Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
            </motion.div>

            <div className="flex gap-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/atharva16", color: "hover:text-blue-400" },
                { icon: GitHub, href: "https://github.com/atharva387", color: "hover:text-purple-400" },
                { icon: Mail, href: "mailto:atharvakulkarni1612@gmail.com", color: "hover:text-red-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg border border-gray-700/50 hover:border-cyan-400/30`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    backgroundColor: "rgba(34, 211, 238, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-8 pt-8 border-t border-gray-700/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-sm font-mono">
              © {new Date().getFullYear()} Atharva Kulkarni. Crafted with{" "}
              <span className="text-red-400 animate-pulse">♥</span> and lots of{" "}
              <span className="text-yellow-400">☕</span>
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
}
