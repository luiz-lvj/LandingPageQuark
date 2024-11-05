'use client'

import { motion } from 'framer-motion'

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
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-white mb-12"
        >
          Let’s Get Started!
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Get started on your own</h2>
            <p className="text-lg mb-8 text-gray-300">You can invest with Quark in minutes. Get started below</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold hover:bg-blue-400 px-8 py-4 text-xl inline-block rounded-full"
              >
                Launch Quark Vaults
              </a>
            </motion.div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Let's chat!</h2>
            <p className="text-lg mb-8 text-gray-300">We can walk you through Quark, chat about cross-chain, or even share memes 🦆</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold hover:bg-blue-400 px-8 py-4 text-xl inline-block rounded-full"
              >
                Talk to us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}