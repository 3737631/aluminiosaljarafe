import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'

const PROJECTS = [
  {
    title: 'Cerramiento Terraza — Mairena del Aljarafe',
    desc: 'Cerramiento de terraza principal con perfilería de aluminio y vidrio Climalit. Sistema corredero con rotura de puente térmico.',
    image: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883320/unnamed_4_tpfm6j.webp',
    tags: ['Cerramientos', 'Vidrio templado'],
  },
  {
    title: 'Ventanas OSCILOBATIENTES — Tomares',
    desc: 'Instalación de 12 ventanas oscilobatientes con rotura de puente térmico, doble acristalamiento y acabado lacado blanco.',
    image: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883319/unnamed_5_dn7kxr.webp',
    tags: ['Ventanas', 'Eficiencia'],
  },
  {
    title: 'Puerta Corredera — Bormujos',
    desc: 'Puerta de aluminio corredera de 4 metros con vidrio de seguridad. Acabado en negro mate con apertura automática.',
    image: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883318/unnamed_6_eel1sv.webp',
    tags: ['Puertas', 'Automatización'],
  },
  {
    title: 'Estructura Metálica — San Juan de Aznalfarache',
    desc: 'Estructura metálica para cubierta de nave industrial. Fabricación y montaje de cerchas y correas en acero laminado.',
    image: 'https://res.cloudinary.com/dmuxgamms/image/upload/v1781883317/unnamed_7_pkoxrd.webp',
    tags: ['Estructuras', 'Industrial'],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="proyectos" ref={ref} className="py-24 bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Proyectos</span>
          <h2 className="section-title mt-2">Trabajos realizados</h2>
          <p className="section-subtitle">Cada proyecto es único. Conoce algunos de nuestros trabajos recientes en el Aljarafe y Sevilla.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-accent/90 text-primary text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{project.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">{project.desc}</p>
                <div className="mt-4 flex items-center text-accent font-semibold text-sm group/link">
                  <span>Ver proyecto</span>
                  <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <a href="#contacto" className="btn-primary">
            Solicita tu proyecto a medida
          </a>
        </motion.div>
      </div>
    </section>
  )
}
