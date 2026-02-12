import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const About = () => {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const content = {
    title: { id: 'Tentang', en: 'About' },
    titleAccent: { id: 'Saya', en: 'Me' },
    bio1: {
      id: 'Halo! Saya Haryo, seorang profesional kreatif yang suka menghidupkan ide melalui desain dan pengalaman digital.',
      en: "Hey there! I'm Haryo, a creative professional who loves bringing ideas to life through design and digital experiences."
    },
    bio2: {
      id: 'Meskipun saya bukan coder hardcore, kekuatan saya terletak pada sisi kreatif — membuat desain yang memukau secara visual, motion graphics yang menarik, dan pengalaman pengguna yang berdampak.',
      en: 'While I may not be a hardcore coder, my strength lies in the creative side — crafting visually stunning designs, engaging motion graphics, and user experiences that make an impact.'
    },
    bio3: {
      id: 'Saya percaya pada kekuatan kreativitas untuk memecahkan masalah dan bercerita. Mari ciptakan sesuatu yang luar biasa bersama!',
      en: "I believe in the power of creativity to solve problems and tell stories. Let's create something amazing together!"
    }
  }

  const skills = [
    { id: 'Desain UI/UX', en: 'UI/UX Design' },
    { id: 'Desain Grafis', en: 'Graphic Design' },
    { id: 'Video Editing', en: 'Video Editing' },
    { id: 'Motion Graphics', en: 'Motion Graphics' },
    { id: 'Desain Web', en: 'Web Design' },
    { id: 'Branding', en: 'Branding' },
    { id: 'Arahan Kreatif', en: 'Creative Direction' },
    { id: 'Adobe Suite', en: 'Adobe Suite' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
            {t(content.title)} <span className="text-accent-purple">{t(content.titleAccent)}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={`text-lg mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t(content.bio1)}
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t(content.bio2)}
            </p>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t(content.bio3)}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`backdrop-blur-sm border rounded-lg px-6 py-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/20 ${
                  theme === 'dark' 
                    ? 'bg-dark-lighter/50 border-accent-purple/20 hover:border-accent-purple/50' 
                    : 'bg-white shadow-md border-accent-purple/30 hover:border-accent-purple/50'
                }`}
              >
                <span className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{t(skill)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
