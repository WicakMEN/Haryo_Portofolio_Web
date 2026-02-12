import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-dark-bg/90 backdrop-blur-lg shadow-lg'
            : 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent cursor-pointer"
        >
          Haryo
        </motion.div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-lg border border-accent-purple/30 hover:border-accent-purple/60 transition-all duration-300 ${
              theme === 'dark' ? 'bg-dark-lighter/50' : 'bg-gray-100 shadow-sm'
            }`}
          >
            <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
              {language.toUpperCase()}
            </span>
            <motion.div
              animate={{ rotate: language === 'id' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              🌐
            </motion.div>
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full border border-accent-purple/30 hover:border-accent-purple/60 transition-all duration-300 ${
              theme === 'dark' ? 'bg-dark-lighter/50' : 'bg-gray-100 shadow-sm'
            }`}
          >
            <motion.div
              animate={{
                x: theme === 'dark' ? 2 : 34
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center text-xs"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
