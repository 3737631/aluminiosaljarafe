import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiPhone, HiClipboardList, HiCubeTransparent, HiCube, HiShieldCheck } from 'react-icons/hi'

const STEPS = [
  { icon: HiPhone, step: '01', title: 'Contacto', desc: 'Llámanos o escríbenos. Te atenderemos personalmente para entender tu proyecto.' },
  { icon: HiClipboardList, step: '02', title: 'Presupuesto', desc: 'Visita técnica sin compromiso. Te damos un presupuesto detallado y transparente.' },
  { icon: HiCubeTransparent, step: '03', title: 'Medición', desc: 'Tomamos medidas precisas con herramientas láser para una fabricación perfecta.' },
  { icon: HiCube, step: '04', title: 'Fabricación', desc: 'Fabricamos en nuestro taller con materiales de primeras marcas y control de calidad.' },
  { icon: HiShieldCheck, step: '05', title: 'Instalación', desc: 'Montaje profesional por nuestro equipo. Limpieza total y pruebas de funcionamiento.' },
]

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="proceso" ref={ref} className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Proceso</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Cómo trabajamos</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Un proceso claro y transparente de principio a fin. Sin sorpresas, con la garantía de un trabajo bien hecho.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-accent/30 -translate-y-1/2 z-0 origin-left" style={{ width: '0%' }} />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 border border-white/10">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-accent font-heading font-black text-3xl mb-2 opacity-20 group-hover:opacity-40 transition-opacity">{step.step}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }} className="text-center mt-16">
          <a href="tel:954768064" className="btn-phone text-lg inline-flex">
            <HiPhone className="w-5 h-5" />
            Empieza tu proyecto: 954 76 80 64
          </a>
        </motion.div>
      </div>
    </section>
  )
}
