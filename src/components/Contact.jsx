import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const content = {
    title: { id: 'Mari', en: "Let's" },
    titleAccent: { id: 'Terhubung', en: 'Connect' },
    subtitle: {
      id: 'Punya proyek atau ingin ngobrol? Saya selalu terbuka untuk peluang dan kolaborasi baru.',
      en: "Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations."
    },
    sendMessage: { id: 'Kirim Pesan', en: 'Send Me a Message' },
    copyright: {
      id: '© 2026 Haryo. Dibuat dengan kreativitas dan passion.',
      en: '© 2026 Haryo. Crafted with creativity and passion.'
    }
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: '✉️',
      link: 'mailto:haryo@example.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      link: 'https://linkedin.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Instagram',
      icon: '📸',
      link: 'https://instagram.com',
      color: 'from-pink-500 to-orange-500'
    },
    {
      name: 'Behance',
      icon: '🎨',
      link: 'https://behance.net',
      color: 'from-blue-600 to-purple-600'
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
            {t(content.title)} <span className="text-accent-purple">{t(content.titleAccent)}</span>
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t(content.subtitle)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIcon(index)}
              onHoverEnd={() => setHoveredIcon(null)}
              className="relative group"
            >
              <div className={`relative border-2 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/30 ${
                theme === 'dark'
                  ? 'bg-dark-lighter border-accent-purple/30 hover:border-accent-purple'
                  : 'bg-white shadow-md border-accent-purple/40 hover:border-accent-purple'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="text-5xl mb-3">{social.icon}</div>
                  <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{social.name}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <motion.a
            href="mailto:haryo@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-bold text-xl hover:shadow-xl hover:shadow-accent-purple/50 transition-all duration-300"
          >{`text-sm mt-12 ${theme === 'dark' ? 'text-gray-500' : 'text-black/60'}`}
            {t(content.sendMessage)}
          </motion.a>

          <div className={`text-sm mt-12 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            <p>{t(content.copyright)}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
