import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const { t } = useLanguage()
  const { theme } = useTheme()
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const content = {
    title: {
      id: 'Haryo',
      en: 'Haryo'
    },
    subtitle: {
      id: 'Pengembang Kreatif',
      en: 'Creative Developer'
    },
    tagline: {
      id: 'Menciptakan pengalaman digital yang menarik melalui desain kreatif dan solusi inovatif',
      en: 'Crafting engaging digital experiences through creative design and innovative solutions'
    },
    viewWork: {
      id: 'Lihat Karya',
      en: 'View My Work'
    },
    contact: {
      id: 'Hubungi Saya',
      en: 'Get In Touch'
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
            {t(content.title)}
          </h1>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
            {t(content.subtitle)}
          </h2>
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t(content.tagline)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accent-purple/50 transition-all duration-300"
            >
              {t(content.viewWork)}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 border-2 border-accent-purple rounded-lg font-semibold text-lg hover:bg-accent-purple/10 transition-all duration-300 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}
            >
              {t(content.contact)}
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-accent-purple rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-accent-purple rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
