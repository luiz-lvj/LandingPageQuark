'use client'

import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa'

const teamMembers = [
  { name: 'Luiz Vasconcelos', profilePic: 'https://wallpapers.com/images/hd/olaf-the-lovable-snowman-from-disneys-frozen-greeting-you-with-a-smile-ys11kyjvdgypw70n.jpg', role: 'Co-Founder', twitter: 'https://x.com/lvj_luiz', telegram: 'https://t.me/luiz_lvj', github: 'https://github.com/luiz-lvj' },
  { name: 'Daniel Yuki', profilePic: 'https://i.pinimg.com/474x/68/65/04/6865048101d52e285cd3e1f87e50293e.jpg', role: 'Co-Founder', twitter: 'https://x.com/DanielYukiHiga', telegram: 'https://t.me/DanielYukiHiga', github: 'https://github.com/DanielYuki' },
  { name: 'Arthur Jacobina', profilePic: 'https://i.pinimg.com/1200x/14/1a/ab/141aab9e471868e7296655e89b962e42.jpg', role: 'Co-Founder', twitter: 'https://x.com/Arthur1Jacobina', telegram: 'https://t.me/arthurjacobina', github: 'https://github.com/Arthur-Jacobina' },
]

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

export default function Team() {
  return (
    <motion.section
      id="team"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[80vh] py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">Talk to our Team</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card bg-gray-900 text-card-foreground p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={member.profilePic}
                alt={`${member.name}'s profile picture`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-xl mb-6 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a
                  href={member.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTelegram size={24} />
                </motion.a>
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={24} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
