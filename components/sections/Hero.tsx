'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Meteors from '@/components/ui/meteors'
import { ChevronDown } from 'lucide-react'

const TypingAnimation = ({ words }: { words: string[] }) => {
  const [currentWord, setCurrentWord] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const animateText = () => {
      const word = words[currentIndex % words.length]
      const shouldDelete = isDeleting ? 1 : -1
      setCurrentWord((prev) => word.substring(0, prev.length - shouldDelete))

      if (!isDeleting && currentWord === word) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => prev + 1)
      }
    }

    const timer = setTimeout(animateText, isDeleting ? 50 : 150)
    return () => clearTimeout(timer)
  }, [currentWord, currentIndex, isDeleting, words])

  return <span className="text-primary">{currentWord}</span>
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const oneLiners = [
    'universal liquidity',
    'cross-chain DeFi',
    'seamless asset management',
  ]

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-background/50 text-foreground"
    >
      <Meteors number={10} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
          <Image
            src="/logo/quark_full_logo_svg.svg"
            alt="Quark Logo"
            width={450}
            height={450}
            className="dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          />
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl mb-6">
          The atomic engine for <TypingAnimation words={oneLiners} />
        </motion.h2>
      </motion.div>
      {/* Add a subtle scroll indicator */}
      <motion.div
        className="absolute bottom-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-4 h-8 border-2 border-primary rounded-full flex justify-center items-start">
          <motion.div
            className="w-2 h-2 bg-primary rounded-full mb-1"
            animate={{ y: [0, 8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}