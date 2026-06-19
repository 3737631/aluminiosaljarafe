import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiX } from 'react-icons/hi'

const GALLERY_IMAGES = [
  {
    src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883320/unnamed_4_tpfm6j.webp',
    alt: 'Cerramientos de aluminio y cristal en terraza',
    title: 'Cerramientos de terraza',
  },
  {
    src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883319/unnamed_5_dn7kxr.webp',
    alt: 'Ventanas de aluminio oscilobatientes modernas',
    title: 'Ventanas de aluminio',
  },
  {
    src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883318/unnamed_6_eel1sv.webp',
    alt: 'Puerta corredera de aluminio con vidrio',
    title: 'Puertas correderas',
  },
  {
    src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883317/unnamed_7_pkoxrd.webp',
    alt: 'Estructura metálica industrial',
    title: 'Estructuras metálicas',
  },
  {
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    alt: 'Mampara de baño de aluminio y cristal',
    title: 'Mamparas de baño',
  },
  {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bbd297d3b?w=800&q=80',
    alt: 'Barandilla de aluminio moderna',
    title: 'Barandillas',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80',
    alt: 'Techos móviles acristalados',
    title: 'Techos móviles',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Instalación profesional de carpintería metálica',
    title: 'Instalación profesional',
  },
]

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="galeria" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Galería</span>
          <h2 className="section-title mt-2">Nuestros trabajos</h2>
          <p className="section-subtitle">Imágenes reales de instalaciones realizadas por nuestro equipo en Sevilla y el Aljarafe.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelected(index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <p className="text-white font-heading font-semibold text-sm">{img.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button onClick={() => setSelected(null)} className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors">
                <HiX className="w-8 h-8" />
              </button>
              <img src={GALLERY_IMAGES[selected].src} alt={GALLERY_IMAGES[selected].alt} className="w-full h-auto rounded-2xl shadow-2xl" />
              <p className="text-white/80 text-center mt-4 font-heading font-semibold">{GALLERY_IMAGES[selected].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
