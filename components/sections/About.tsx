'use client'

import { motion } from 'framer-motion'

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

export default function About() {
  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[80vh] py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4 text-center">About Quark</motion.h2>
        <motion.p variants={itemVariants} className="text-lg mb-4">
          At Quark, we revolutionize asset management with omnichain messaging. QuarkVaults lets users deposit assets into managed vaults, each secured by policy-driven smart contracts, ensuring a secure and compliant experience across chains.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg">
          We leverage cutting-edge technologies like omnichain messaging and intents to offer a groundbreaking approach to decentralized asset management.
        </motion.p>
      </div>
    </motion.section>
  )
}