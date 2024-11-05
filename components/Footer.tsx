'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 bg-background/50 text-center"
    >
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground">
          Even more coming soon...
        </p>
      </div>
    </motion.footer>
  )
}