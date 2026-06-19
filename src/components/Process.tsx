import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiPhone, HiClipboardList, HiCubeTransparent, HiCube, HiShieldCheck } from 'react-icons/hi'

const STEPS = [
  { icon: HiPhone, step: '01', title: 'Contacto', desc: 'Llámanos o escríbenos. Te atenderemos personalmente para entender tu proyecto y resolver tus dudas.' },
  { icon: HiClipboardList, step: '02', title: 'Presupuesto', desc: 'Visita técnica sin compromiso. Te damos un presupuesto detallado y transparente sin sorpresas.' },
  { icon: HiCubeTransparent, step: '03', title: 'Medición', desc: 'Tomamos medidas precisas con herramientas láser para una fabricación perfecta y a medida.' },
  { icon: HiCube, step: '04', title: 'Fabricación', desc: 'Fabricamos en nuestro taller con materiales de primeras marcas y estrictos controles de calidad.' },
  { icon: HiShieldCheck, step: '05', title: 'Instalación', desc: 'Montaje profesional por nuestro equipo. Limpieza total, pruebas y explicación de funcionamiento.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="proceso" ref={ref} className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1F2937 100%)' }}>
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #F59E0B 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F59E0B 0%, transparent 50%)'
      }} />

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
            Proceso
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">Cómo trabajamos</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">Un proceso claro, transparente y profesional de principio a fin. Sin sorpresas, con la garantía de un trabajo bien hecho.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-5 gap-8 relative"
        >
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.3), rgba(245,158,11,0.05), rgba(245,158,11,0.3))' }} />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              className="relative z-10 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))',
                  border: '1.5px solid rgba(245,158,11,0.2)',
                }}
              >
                <step.icon className="w-7 h-7 text-accent relative z-10" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.3), transparent)' }}
                />
              </motion.div>
              <div className="text-4xl font-heading font-black mb-2 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity" style={{ color: '#F59E0B' }}>{step.step}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a href="tel:954768064" className="btn-phone text-base inline-flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <HiPhone className="w-5 h-5" />
            Empieza tu proyecto: 954 76 80 64
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
