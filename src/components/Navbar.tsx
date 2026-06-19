import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'

const MENU_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary font-heading font-black text-lg">AA</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
                Aluminios <span className="text-accent">Aljarafe</span>
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-accent font-medium transition-colors text-sm tracking-wide uppercase relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
            <a href="tel:954768064" className="btn-phone !py-2.5 !px-5 text-sm">
              <HiPhone className="w-4 h-4" />
              954 76 80 64
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {MENU_ITEMS.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block text-white/80 hover:text-accent font-medium py-2 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="tel:954768064" className="btn-phone w-full justify-center mt-4">
                <HiPhone className="w-5 h-5" />
                Llámanos: 954 76 80 64
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
