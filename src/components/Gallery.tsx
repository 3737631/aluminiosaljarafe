import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiX, HiPhotograph } from 'react-icons/hi'

const GALLERY_IMAGES = [
  { src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883320/unnamed_4_tpfm6j.webp', alt: 'Cerramientos de aluminio y cristal en terraza', title: 'Cerramientos de terraza' },
  { src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883319/unnamed_5_dn7kxr.webp', alt: 'Ventanas de aluminio oscilobatientes modernas', title: 'Ventanas de aluminio' },
  { src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883318/unnamed_6_eel1sv.webp', alt: 'Puerta corredera de aluminio con vidrio', title: 'Puertas correderas' },
  { src: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883317/unnamed_7_pkoxrd.webp', alt: 'Estructura metálica industrial', title: 'Estructuras metálicas' },
  { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', alt: 'Mampara de baño de aluminio y cristal', title: 'Mamparas de baño' },
  { src: 'https://images.unsplash.com/photo-1541888946425-d81bbd297d3b?w=800&q=80', alt: 'Barandilla de aluminio moderna', title: 'Barandillas' },
  { src: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80', alt: 'Techos móviles acristalados', title: 'Techos móviles' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Instalación profesional de carpintería metálica', title: 'Instalación profesional' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="galeria" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200 }}
            className="badge-premium"
          >
            <HiPhotograph className="w-3.5 h-3.5" />
            Galería
          </motion.span>
          <h2 className="section-title mt-4">Nuestros trabajos</h2>
          <p className="section-subtitle">Imágenes reales de instalaciones realizadas por nuestro equipo en Sevilla y el Aljarafe.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setSelected(index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3] premium-card"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(0deg, rgba(31,41,55,0.8) 0%, rgba(31,41,55,0.2) 50%, transparent 100%)' }}
              >
                <div className="text-center p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-heading font-semibold text-sm tracking-wide">{img.title}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelected(null)}
                className="absolute -top-14 right-0 text-white/60 hover:text-white transition-colors"
              >
                <HiX className="w-8 h-8" />
              </motion.button>
              <motion.img
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={GALLERY_IMAGES[selected].src}
                alt={GALLERY_IMAGES[selected].alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <p className="text-white/70 text-center mt-4 font-heading font-semibold text-lg">{GALLERY_IMAGES[selected].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
