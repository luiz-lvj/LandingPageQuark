'use client'

import { motion } from 'framer-motion'
import { FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import quarkLogo from '@/public/logo/quark_logo_white.png' 

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
        <div className="flex justify-center mb-4">
          <Image src={quarkLogo} alt="Quark Logo" width={50} height={50} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Subscribe to Newsletter</h3>
        <p className="text-muted-foreground mb-6">Stay updated with the latest news by subscribing to our newsletter.</p>
        <form className="flex space-x-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-input placeholder-text-muted-foreground"
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join Waitlist
          </Button>
        </form>
        <div className="mt-8">
          <a
            href="https://twitter.com/QuarkProtocol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary hover:text-primary/80"
          >
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
