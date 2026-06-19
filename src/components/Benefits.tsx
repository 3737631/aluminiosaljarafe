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

export default function Benefits() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Por qué elegirnos</span>
          <h2 className="section-title mt-2">Tu mejor elección en carpintería metálica</h2>
          <p className="section-subtitle">Nos diferenciamos por la calidad de nuestros materiales, la precisión en la instalación y el trato cercano.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary text-lg mb-1.5">{benefit.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }} className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">¿Listo para tu proyecto?</h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">Solicita tu presupuesto sin compromiso. Te responderemos en menos de 24 horas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:954768064" className="btn-phone">Llamar ahora</a>
            <a href="#contacto" className="btn-primary">Pedir presupuesto</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
