import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiHome, HiLockOpen, HiViewGrid, HiCollection, HiDuplicate, HiSun, HiCubeTransparent, HiTerminal, HiAdjustments } from 'react-icons/hi'

const SERVICES = [
  { icon: HiAcademicCap, title: 'Ventanas de aluminio', desc: 'Ventanas con rotura de puente térmico, climalit y sistemas de apertura oscilobatiente. Aislamiento térmico y acústico superior.' },
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

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="servicios" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Servicios</span>
          <h2 className="section-title mt-2">Soluciones integrales en aluminio</h2>
          <p className="section-subtitle">De las ventanas a las estructuras metálicas, ofrecemos todo lo que necesita para su hogar o negocio en {BUSINESS.location}.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl border border-gray-100 bg-white hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{service.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <a href="#contacto" className="btn-primary">
            Solicitar presupuesto personalizado
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const BUSINESS = {
  location: "Mairena del Aljarafe",
}
