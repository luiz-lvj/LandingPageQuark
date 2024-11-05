'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

const features = [
  {
    title: "Omnichain Vaults",
    description: "Deposit assets into managed vaults secured by policy-driven smart contracts.",
    icon: "🏛️",
  },
  {
    title: "Cross-Chain DeFi",
    description: "Access multiple chains and protocols through a single interface.",
    icon: "🌐",
  },
  {
    title: "Concentrated Liquidity",
    description: "Optimize your yields with automated liquidity management.",
    icon: "💧",
  },
  {
    title: "Safe Yielding",
    description: "Earn yields across chains with built-in security measures.",
    icon: "🛡️",
  },
]

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-card/40 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-colors duration-300 ease-in-out"
    >
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">{icon}</span>
        <h3 className="text-xl font-bold text-primary">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[80%]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionizing Cross-Chain DeFi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quark offers a suite of powerful features designed to optimize your DeFi experience across multiple chains.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}