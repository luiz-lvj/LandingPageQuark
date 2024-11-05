'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import TryNow from '@/components/sections/TryNow'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-between overflow-hidden"
    >
      <Hero />
      <About />
      <TryNow />
      <Team />
      <Newsletter />
      {/* <Footer /> */}
    </motion.main>
  )
}