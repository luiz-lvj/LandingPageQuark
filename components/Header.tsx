'use client'

import * as React from 'react'
import { motion, useScroll, useMotionValueEvent, animate } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Try Now', href: '#try-now' },
  { name: 'Team', href: '#team' },
  { name: 'Waitlist', href: '#contact' },
]

export function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      animate(window.scrollY, offsetPosition, {
        duration: 0.8,
        onUpdate: (value) => window.scrollTo(0, value),
        ease: 'easeInOut',
      })
    }
  }

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 0.8,
      onUpdate: (value) => window.scrollTo(0, value),
      ease: 'easeInOut',
    })
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-[80%]">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo/quark_full_logo_svg.svg"
            alt="Quark Logo"
            width={150}
            height={150}
            className="dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70] cursor-pointer"
            onClick={scrollToTop}
          />
        </div>
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className={cn(
                  "px-4 py-2 text-lg font-medium transition-colors rounded-full",
                  activeItem === item.name
                    ? "text-primary font-bold"
                    : "text-white hover:text-primary"
                )}
                onClick={(e) => {
                  scrollToSection(e, item.href)
                  setActiveItem(item.name)
                }}
              >
                {item.name}
              </a>
              {activeItem === item.name && (
                <motion.div
                  layoutId="activeItemOutline"
                  className="p-2 absolute inset-0 border border-primary rounded-full pointer-events-none"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          <Button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90">
            View Live Demo 🦆
          </Button>
          <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}