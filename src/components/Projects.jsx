import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Projects = () => {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const projects = [
    {
      title: { id: 'Desain Identitas Brand', en: 'Brand Identity Design' },
      category: { id: 'Branding', en: 'Branding' },
      description: { 
        id: 'Identitas brand lengkap termasuk logo, palet warna, dan panduan visual untuk startup modern.',
        en: 'Complete brand identity including logo, color palette, and visual guidelines for modern startups.'
      },
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      title: { id: 'Reel Motion Graphics', en: 'Motion Graphics Reel' },
      category: { id: 'Animasi', en: 'Animation' },
      description: { 
        id: 'Motion graphics dinamis dan konten animasi untuk media sosial dan kampanye digital.',
        en: 'Dynamic motion graphics and animated content for social media and digital campaigns.'
      },
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: { id: 'Studi Kasus UI/UX', en: 'UI/UX Case Study' },
      category: { id: 'Desain', en: 'Design' },
      description: { 
        id: 'Solusi desain yang berpusat pada pengguna untuk aplikasi mobile dan web dengan fokus pada kegunaan.',
        en: 'User-centered design solutions for mobile and web applications with focus on usability.'
      },
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: { id: 'Produksi Video', en: 'Video Production' },
      category: { id: 'Video', en: 'Video' },
      description: { 
        id: 'Editing video kreatif dan post-production untuk berbagai platform digital dan media.',
        en: 'Creative video editing and post-production for various digital platforms and media.'
      },
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      title: { id: 'Konten Media Sosial', en: 'Social Media Content' },
      category: { id: 'Kreasi Konten', en: 'Content Creation' },
      description: { 
        id: 'Konten visual menarik yang dirancang khusus untuk platform media sosial untuk meningkatkan engagement.',
        en: 'Engaging visual content designed specifically for social media platforms to boost engagement.'
      },
      gradient: 'from-pink-600 to-purple-600'
    },
    {
      title: { id: 'Portofolio Desain Grafis', en: 'Graphic Design Portfolio' },
      category: { id: 'Grafis', en: 'Graphics' },
      description: { 
        id: 'Koleksi karya desain cetak dan digital termasuk poster, banner, dan materi promosi.',
        en: 'Collection of print and digital design work including posters, banners, and promotional materials.'
      },
      gradient: 'from-blue-600 to-purple-600'
    }
  ]

  const content = {
    title: { id: 'Karya', en: 'Featured' },
    titleAccent: { id: 'Unggulan', en: 'Work' },
    subtitle: {
      id: 'Showcase proyek kreatif saya di bidang desain, animasi, dan konten digital',
      en: 'A showcase of my creative projects across design, animation, and digital content'
    },
    viewProject: { id: 'Lihat Proyek →', en: 'View Project →' }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
            {t(content.title)} <span className="text-accent-purple">{t(content.titleAccent)}</span>
          </h2>
          <p className={`text-center text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t(content.subtitle)}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-dark-lighter/50 border-accent-purple/20 hover:border-accent-purple/50'
                  : 'bg-white shadow-md border-accent-purple/30 hover:border-accent-purple/50'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent-purple/20 text-accent-purple text-sm rounded-full font-semibold">
                    {t(project.category)}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 group-hover:text-accent-purple transition-colors duration-300 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  {t(project.title)}
                </h3>
                
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t(project.description)}
                </p>

                <div className="mt-6 flex items-center text-accent-purple font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t(content.viewProject)}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
