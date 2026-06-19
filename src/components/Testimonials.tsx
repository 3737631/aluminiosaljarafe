import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar, HiChatAlt2 } from 'react-icons/hi'

const REVIEWS = [
  {
    name: 'María García',
    location: 'Mairena del Aljarafe',
    text: 'Excelente trabajo. Instalaron ventanas en toda mi casa y quedaron perfectas. Muy profesionales y puntuales. El aislamiento acústico ha mejorado muchísimo.',
    rating: 5,
    service: 'Ventanas de aluminio',
  },
  {
    name: 'Antonio Rodríguez',
    location: 'Tomares',
    text: 'Cerramiento de terraza espectacular. Nos asesoraron en todo momento y el resultado superó nuestras expectativas. Totalmente recomendables.',
    rating: 5,
    service: 'Cerramientos',
  },
  {
    name: 'Carmen López',
    location: 'Bormujos',
    text: 'Muy contenta con la mampara de baño que me instalaron. Medidas exactas, acabado impecable y un trato muy cercano. Repetiré sin dudar.',
    rating: 5,
    service: 'Mamparas',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <HiChatAlt2 className="w-3.5 h-3.5" />
            Testimonios destacados
          </motion.span>
          <h2 className="section-title mt-4">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">La satisfacción de nuestros clientes es nuestro mejor aval. Más de 18 años de experiencia nos respaldan.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="premium-card p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} animate={inView ? { scale: [0, 1.2, 1] } : {}} transition={{ delay: 0.3 + i * 0.1 + index * 0.05 }}>
                    <HiStar className={`w-5 h-5 ${i < review.rating ? 'text-accent' : 'text-gray-200'}`} />
                  </motion.div>
                ))}
              </div>
              <p className="text-secondary/75 text-sm leading-relaxed mb-4 italic border-l-2 border-accent/20 pl-4">&ldquo;{review.text}&rdquo;</p>
              <div className="pt-4 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1F2937, #374151)' }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary text-sm">{review.name}</p>
                    <div className="flex items-center gap-2 text-[11px] text-secondary/40">
                      <span>{review.location}</span>
                      <span>·</span>
                      <span className="text-accent/70 font-semibold">{review.service}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))',
              border: '1.5px solid rgba(245,158,11,0.15)',
            }}
          >
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} animate={{ rotate: [0, -5, 5, 0] }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                  <HiStar className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-primary text-lg">4.8 sobre 5</p>
              <p className="text-secondary/50 text-sm">Basado en 18 opiniones de clientes</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
