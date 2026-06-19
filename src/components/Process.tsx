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
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="proceso" ref={ref} className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1F2937 100%)' }}>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #F59E0B 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F59E0B 0%, transparent 50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <motion.span initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: 'spring', stiffness: 200 }} className="section-badge">
            Proceso
          </motion.span>
          <h2 className="font-heading text-[clamp(1.75rem,4vw,3.25rem)] font-bold text-white mb-5 leading-[1.08] tracking-[-0.03em]">Cómo trabajamos</h2>
          <p className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Un proceso claro, transparente y profesional de principio a fin. Sin sorpresas, con la garantía de un trabajo bien hecho.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.25), rgba(245,158,11,0.03), rgba(245,158,11,0.25))' }} />

          {STEPS.map((step, index) => (
            <motion.div key={step.title} variants={stepVariants} className="relative z-10 text-center group">
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }} className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.03))', border: '1.5px solid rgba(245,158,11,0.18)' }}>
                <step.icon className="w-7 h-7 text-accent relative z-10" />
                <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }} className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.25), transparent)' }} />
              </motion.div>
              <div className="text-5xl font-heading font-black mb-2 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500" style={{ color: '#F59E0B' }}>{step.step}</div>
              <h3 className="font-heading font-bold text-white text-[15px] mb-2.5 group-hover:text-accent transition-colors tracking-tight">{step.title}</h3>
              <p className="text-white/35 text-xs leading-relaxed max-w-[180px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }} className="text-center mt-16">
          <motion.a href="tel:954768064" className="btn-phone text-base inline-flex" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <HiPhone className="w-5 h-5" />
            Empieza tu proyecto: 954 76 80 64
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
