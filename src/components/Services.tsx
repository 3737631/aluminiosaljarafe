import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiHome, HiLockOpen, HiViewGrid, HiCollection, HiDuplicate, HiSun, HiCubeTransparent, HiTerminal, HiAdjustments } from 'react-icons/hi'

const SERVICES = [
  { icon: HiAcademicCap, title: 'Ventanas de aluminio', desc: 'Ventanas con rotura de puente térmico, climalit y apertura oscilobatiente. Aislamiento térmico y acústico superior.' },
  { icon: HiViewGrid, title: 'Cerramientos', desc: 'Cerramientos de terraza, porche y balcón con perfilería de aluminio y vidrio templado. Amplía tu hogar con luz natural.' },
  { icon: HiLockOpen, title: 'Puertas de aluminio', desc: 'Puertas balconeras, correderas y abatibles. Diseños modernos con alta seguridad y eficiencia energética.' },
  { icon: HiDuplicate, title: 'Mamparas', desc: 'Mamparas de baño a medida con vidrio templado de seguridad. Perfiles de aluminio lacado en blanco o negro.' },
  { icon: HiCollection, title: 'Barandillas', desc: 'Barandillas de aluminio y acero inoxidable para terrazas, balcones y escaleras. Diseño moderno sin mantenimiento.' },
  { icon: HiSun, title: 'Mosquiteras', desc: 'Mosquiteras enrollables, fijas y abatibles. Protección contra insectos sin perder ventilación ni vistas.' },
  { icon: HiCubeTransparent, title: 'Techos móviles', desc: 'Techos acristalados retráctiles para terrazas y porches. Disfruta del exterior todo el año con solo un gesto.' },
  { icon: HiHome, title: 'Estructuras metálicas', desc: 'Fabricación y montaje de estructuras metálicas para construcción industrial y residencial. Proyectos llave en mano.' },
  { icon: HiTerminal, title: 'Instalaciones a medida', desc: 'Diseño y fabricación de carpintería metálica a medida. Trabajamos con tus planos o creamos la solución contigo.' },
  { icon: HiAdjustments, title: 'Reparaciones', desc: 'Reparación de ventanas, puertas y cerramientos existentes. Ajustes, cambio de herrajes y mantenimiento profesional.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="servicios" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] -translate-y-1/2 translate-x-1/3" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.02] translate-y-1/2 -translate-x-1/4" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: 'spring', stiffness: 200 }} className="section-badge">
            Servicios
          </motion.span>
          <h2 className="section-title">Soluciones integrales en aluminio</h2>
          <p className="section-subtitle">De las ventanas a las estructuras metálicas, ofrecemos todo lo que necesita para su hogar o negocio en Mairena del Aljarafe.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.3 } }} className="premium-card p-6 group cursor-default">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.03))' }}>
                <service.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary text-[15px] mb-2.5 group-hover:text-accent transition-colors duration-300 tracking-tight">{service.title}</h3>
              <p className="body-sm">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <motion.a href="#contacto" className="btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Solicitar presupuesto personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
