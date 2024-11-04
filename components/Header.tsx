'use client'

import * as React from 'react'
import { motion, useScroll, useMotionValueEvent, animate } from 'framer-motion';
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Try Now', href: '#try-now' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
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
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                )}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}