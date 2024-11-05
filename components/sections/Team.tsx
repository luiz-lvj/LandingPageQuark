'use client'

import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

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
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const socialIconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.2 } },
  tap: { scale: 0.9, transition: { duration: 0.1 } }
}

export default function Team() {
  return (
    <motion.section
      id="team"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[80vh] py-16 flex items-center justify-center bg-gradient-to-b from-background to-background/80"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center border border-primary/10 hover:border-primary/30 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className="mb-6 mx-auto w-40 h-40 overflow-hidden rounded-xl"
              >
                <img
                  src={member.profilePic}
                  alt={`${member.name}'s profile picture`}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
                {/* WHEN RIGHT IMAGES, USE THE CODE BELOW */}
                {/* <Image
                  src={member.profilePic}
                  alt={`${member.name}'s profile picture`}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                /> */}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a
                  href={member.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaTelegram size={24} />
                </motion.a>
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
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