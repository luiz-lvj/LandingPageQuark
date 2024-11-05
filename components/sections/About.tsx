'use client'

import { animate, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Hero from './Hero';
import * as React from 'react'

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

export default function AboutSection() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = React.useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      animate(window.scrollY, offsetPosition, {
        duration: 0.8,
        onUpdate: (value) => window.scrollTo(0, value),
        ease: 'easeInOut',
      });
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })
  
  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[80vh] py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row items-center lg: gap-8 lg:justify-between">
        <div className="max-w-lg w-[600px] text-center lg:text-left">
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl font-bold mb-4"
          >
            Invest in <span className="text-blue-500">all chains</span> using only <span className="text-blue-500">one hub</span>.
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-gray-200 text-lg mb-8"
          >
            Quark offers omnichain vaults for effortless multichain investments, concentrated liquidity, and safe yielding. No more boring bridges nor fragmented investments.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href='#try-now' onClick={(e) => scrollToSection(e, "#try-now")} className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">
              Get started
            </a>
            <a href='#contact' onClick={(e) => scrollToSection(e, "#contact")} className="bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-200">
              Join waitlist
            </a>
          </div>
        </div>
        <div className="w-[600px]">
          <Hero />
        </div>
      </div>
    </motion.section>
  );
}
