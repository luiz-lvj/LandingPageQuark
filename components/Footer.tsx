'use client'

import { motion } from 'framer-motion'
import { FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-background/50"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <a
          href="https://twitter.com/QuarkProtocol"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary hover:text-primary/80 mb-6"
        >
          <FaTwitter size={32} />
        </a>
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <form className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </motion.footer>
  )
}