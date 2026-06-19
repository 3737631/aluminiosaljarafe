import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar, HiChat, HiCalendar } from 'react-icons/hi'

const COMMENTS = [
  {
    name: 'María García',
    location: 'Mairena del Aljarafe',
    text: 'Excelente trabajo. Instalaron ventanas en toda mi casa y quedaron perfectas. Muy profesionales y puntuales. El aislamiento acústico ha mejorado muchísimo. Sin duda los recomendaré a mis vecinos.',
    rating: 5,
    service: 'Ventanas de aluminio',
    date: '12 Mar 2026',
  },
  {
    name: 'Antonio Rodríguez',
    location: 'Tomares',
    text: 'Cerramiento de terraza espectacular. Nos asesoraron en todo momento y el resultado superó nuestras expectativas. La instalación fue rápida y limpia. Totalmente recomendables.',
    rating: 5,
    service: 'Cerramientos',
    date: '28 Feb 2026',
  },
  {
    name: 'Carmen López',
    location: 'Bormujos',
    text: 'Muy contenta con la mampara de baño que me instalaron. Medidas exactas, acabado impecable y un trato muy cercano. Repetiré sin dudar para futuros proyectos.',
    rating: 5,
    service: 'Mamparas',
    date: '15 Ene 2026',
  },
  {
    name: 'Francisco Moreno',
    location: 'San Juan de Aznalfarache',
    text: 'Gran profesionalidad. Instalaron la estructura metálica de mi nave en tiempo récord. Calidad y seriedad. Sin duda, los mejores de la zona en carpintería metálica.',
    rating: 5,
    service: 'Estructuras metálicas',
    date: '3 Dic 2025',
  },
  {
    name: 'Isabel Torres',
    location: 'Sevilla',
    text: 'Me hicieron un presupuesto muy competitivo para las mosquiteras. La instalación fue rápida y limpia. Llevo varios meses con ellas y funcionan perfectamente. Muy recomendables.',
    rating: 4,
    service: 'Mosquiteras',
    date: '20 Nov 2025',
  },
  {
    name: 'Javier Ruiz',
    location: 'Camas',
    text: 'Repararon unas ventanas que tenía muy deterioradas. Quedaron como nuevas. Precio justo y trabajo de calidad. Les doy un 10 sobre 10. Volveré a contar con ellos seguro.',
    rating: 5,
    service: 'Reparaciones',
    date: '8 Oct 2025',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Comments() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="comentarios" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.025]" style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <motion.span initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: 'spring', stiffness: 200 }} className="section-badge">
            <HiChat className="w-3.5 h-3.5" />
            Comentarios
          </motion.span>
          <h2 className="section-title">Lo que opinan nuestros clientes</h2>
          <p className="section-subtitle">La satisfacción de quienes confían en nosotros es nuestro mejor aval. Cada proyecto es una nueva historia que contar.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMENTS.map((comment, idx) => (
            <motion.div key={comment.name + idx} variants={cardVariants} whileHover={{ y: -3, transition: { duration: 0.3 } }} className="premium-card">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className={`w-3 h-3 ${i < comment.rating ? 'text-accent' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-medium text-secondary/40 uppercase tracking-wider">
                    <HiCalendar className="w-2.5 h-2.5" />
                    {comment.date}
                  </span>
                </div>

                <blockquote className="relative mb-3">
                  <p className="text-secondary/65 text-xs leading-relaxed italic pl-3 border-l-2 border-accent/15">
                    &ldquo;{comment.text}&rdquo;
                  </p>
                </blockquote>

                <div className="flex items-center gap-2.5 pt-2.5 border-t border-gray-50">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1F2937, #374151)' }}>
                    {comment.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-primary text-xs truncate">{comment.name}</p>
                    <p className="text-[10px] text-secondary/40 tracking-wide">{comment.location}</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-2 border-t border-gray-50/80" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.03), transparent)' }}>
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-accent/60">{comment.service}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.015 }}
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.05), rgba(245,158,11,0.015))',
              border: '1.5px solid rgba(245,158,11,0.12)',
            }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} animate={{ rotate: [0, -6, 6, 0] }} transition={{ delay: i * 0.12, duration: 0.4 }}>
                  <HiStar className="w-5 h-5 text-accent" />
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <p className="heading-md text-primary text-base">4.8 sobre 5</p>
              <p className="body-sm">Basado en 18 opiniones verificadas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
