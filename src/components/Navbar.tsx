import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'

const MENU_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Comentarios', href: '#comentarios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-primary/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-gradient-to-b from-primary/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.7 }} className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)' }}>
              <span className="text-primary font-heading font-black text-lg">AA</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                Aluminios{' '}
                <span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Aljarafe
                </span>
              </span>
            </div>
          </a>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="hidden lg:flex items-center gap-1">
            {MENU_ITEMS.map((item) => (
              <motion.a key={item.href} variants={itemVariants} href={item.href} className="relative px-4 py-2 text-white/70 hover:text-white font-medium transition-colors text-xs tracking-[0.12em] uppercase group/nav">
                {item.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-accent to-yellow-400 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-400 origin-left" />
              </motion.a>
            ))}
            <motion.a variants={itemVariants} href="tel:954768064" className="btn-phone !py-2.5 !px-5 text-xs tracking-wide ml-4" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <HiPhone className="w-3.5 h-3.5" />
              954 76 80 64
            </motion.a>
          </motion.div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 hover:text-accent transition-colors">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-white/5"
          >
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="px-4 py-6 space-y-1">
              {MENU_ITEMS.map((item) => (
                <motion.a key={item.href} variants={itemVariants} href={item.href} onClick={() => setIsOpen(false)} className="block text-white/70 hover:text-white font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm tracking-wide">
                  {item.label}
                </motion.a>
              ))}
              <motion.a variants={itemVariants} href="tel:954768064" className="btn-phone w-full justify-center mt-6 text-sm">
                <HiPhone className="w-4 h-4" />
                Llámanos: 954 76 80 64
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
