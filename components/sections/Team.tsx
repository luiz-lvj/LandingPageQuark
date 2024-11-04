'use client'

import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const teamMembers = [
  { name: 'Luiz Vasconcelos', role: 'Co-Founder', twitter: '#', linkedin: '#', github: '#' },
  { name: 'Daniel Yuki', role: 'Co-Founder', twitter: '#', linkedin: '#', github: '#' },
  { name: 'Arthur Jacobina', role: 'Co-Founder', twitter: '#', linkedin: '#', github: '#' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3 // Increased staggering
    }
  }
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 }, // Increased y offset
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Increased duration
      ease: 'easeInOut' // Added easing
    }
  }
}

export default function Team() {
  return (
    <motion.section
      id="team"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[80vh] py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">Our Team</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <div className="flex space-x-4">
                <motion.a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={24} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}