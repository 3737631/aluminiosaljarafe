import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiDocumentText, HiShieldCheck, HiStar, HiCube, HiBadgeCheck, HiHeart } from 'react-icons/hi'

const BENEFITS = [
  { icon: HiDocumentText, title: 'Presupuestos personalizados', desc: 'Cada proyecto es único. Te damos un presupuesto detallado adaptado a tus necesidades y sin compromiso.' },
  { icon: HiShieldCheck, title: 'Materiales de calidad', desc: 'Trabajamos con perfilería de primeras marcas: Cortizo, Technal, Hueck. Garantía y certificación oficial.' },
  { icon: HiStar, title: 'Instalación profesional', desc: 'Equipo propio de instaladores con formación continua. Montaje preciso, limpio y en los plazos acordados.' },
  { icon: HiCube, title: 'Soluciones a medida', desc: 'Diseñamos cada pieza según tus necesidades. Medidas especiales, colores personalizados y acabados únicos.' },
  { icon: HiBadgeCheck, title: 'Experiencia en el sector', desc: 'Más de 18 años de trayectoria en carpintería metálica en Sevilla. Cientos de proyectos entregados con éxito.' },
  { icon: HiHeart, title: 'Atención cercana', desc: 'Trato directo con el propietario. Te acompañamos en todo el proceso con comunicación clara y transparente.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Benefits() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full opacity-[0.025] -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <motion.span initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: 'spring', stiffness: 200 }} className="section-badge">
            Por qué elegirnos
          </motion.span>
          <h2 className="section-title">Tu mejor elección en carpintería metálica</h2>
          <p className="section-subtitle">Nos diferenciamos por la calidad de nuestros materiales, la precisión en la instalación y el trato cercano y profesional.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <motion.div variants={itemVariants} whileHover={{ x: 4 }} className="flex gap-4 group p-4 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.03))', border: '1px solid rgba(245,158,11,0.08)' }}>
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-primary text-[15px] mb-1.5 group-hover:text-accent transition-colors tracking-tight">{benefit.title}</h3>
                <p className="body-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 md:p-12 rounded-2xl text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1F2937, #374151)' }}
        >
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #F59E0B, transparent 50%), radial-gradient(circle at 70% 30%, #F59E0B, transparent 50%)' }} />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4 tracking-tight">¿Listo para tu proyecto?</h3>
            <p className="text-white/50 text-base mb-6 max-w-lg mx-auto">Solicita tu presupuesto sin compromiso. Te responderemos en menos de 24 horas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="tel:954768064" className="btn-phone" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Llamar ahora</motion.a>
              <motion.a href="#contacto" className="btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Pedir presupuesto</motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
