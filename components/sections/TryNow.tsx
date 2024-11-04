'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function TryNow() {
  return (
    <motion.section
      id="try-now"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Experience the power of Quark's revolutionary asset management platform.</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="" // when deployed replace with the actual link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-xl inline-block rounded-full"
          >
            Try Quark Now
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}