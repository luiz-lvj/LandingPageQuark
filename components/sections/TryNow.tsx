'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaComments } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardContent = ({ title, description, buttonText, icon: Icon, href } : any) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 150 }}
    className="bg-card/30 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center border border-primary/10 hover:border-primary/30 transition-colors duration-300 flex flex-col h-full justify-between"
  >
    <div>
    <Icon className="text-5xl mb-4 text-primary mx-auto" />
      <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
      <p className="text-lg mb-8 text-muted-foreground">{description}</p>
    </div>
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-8 py-4 text-xl inline-block rounded-full transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      {buttonText}
    </motion.a>
  </motion.div>
)

export default function TryNow() {
  return (
    <motion.section
      id="try-now"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[80vh] py-16 flex items-center justify-center bg-gradient-to-b from-background/80 to-background"
    >
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-12 text-primary"
        >
          Let's Get Started!
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CardContent
            title="Launch Quark Vaults"
            description="You can invest with Quark in minutes. Get started now and explore our omnichain vaults."
            buttonText="Start Investing"
            icon={FaRocket}
            href="https://app.quarkprotocol.com"
          />
          <CardContent
            title="Let's Chat!"
            description="We can walk you through Quark, discuss cross-chain DeFi, or even share memes 🦆"
            buttonText="Talk to Us"
            icon={FaComments}
            href="https://t.me/quarkprotocol"
          />
        </div>
      </div>
    </motion.section>
  )
}