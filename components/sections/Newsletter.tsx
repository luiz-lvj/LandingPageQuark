'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'
import Image from 'next/image'

const socialLinks = [
  {
    icon: FaTwitter,
    href: 'https://twitter.com/finance_quark',
    label: 'Follow us on Twitter',
    color: 'hover:text-primary'
  },
//   {
//     icon: FaTelegram,
//     href: 'https://t.me/quarkprotocol',
//     label: 'Join our Telegram',
//     color: 'hover:text-secondary'
//   },
//   {
//     icon: FaDiscord,
//     href: 'https://discord.gg/quarkprotocol',
//     label: 'Join our Discord',
//     color: 'hover:text-accent'
//   }
]

export default function Newsletter() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 max-w-[80%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <Image
              src="/logo/quark_logo_svg.svg"
              alt="Quark Logo"
              width={80}
              height={80}
              className="dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            />

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join the Future of Cross-Chain DeFi
              </h2>
              <p className="text-muted-foreground text-lg">
                Subscribe to our newsletter and be the first to know about new features,
                updates, and exclusive opportunities.
              </p>
            </div>

            <motion.form 
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-background/50 border-border placeholder:text-muted-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Join Waitlist
              </Button>
            </motion.form>

            <div className="pt-8 border-t border-border w-full">
              <p className="text-muted-foreground mb-4">Follow us on Twitter/X</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}