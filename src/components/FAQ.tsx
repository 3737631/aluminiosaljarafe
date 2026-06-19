import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiChevronDown } from 'react-icons/hi'

const FAQS = [
  {
    q: '¿Cuánto cuesta una ventana de aluminio?',
    a: 'El precio depende de las dimensiones, el tipo de apertura (abatible, oscilobatiente, corredera) y el acabado. Solicita un presupuesto personalizado y te daremos un precio detallado sin compromiso.',
  },
  {
    q: '¿Hacéis presupuestos a domicilio?',
    a: 'Sí. Nos desplazamos a tu domicilio en Mairena del Aljarafe y toda el área metropolitana de Sevilla para tomar medidas y ofrecerte un presupuesto detallado sin compromiso ni coste.',
  },
  {
    q: '¿Qué zonas cubrís?',
    a: 'Trabajamos en toda la comarca del Aljarafe (Mairena, Tomares, Bormujos, Camas, San Juan, etc.), Sevilla capital, Dos Hermanas, Alcalá de Guadaíra y localidades cercanas.',
  },
  {
    q: '¿Cuánto tiempo lleva instalar un cerramiento?',
    a: 'Dependiendo de la complejidad y el tamaño, una instalación estándar se completa en 2 a 5 días laborables. Te daremos un plazo concreto en el presupuesto.',
  },
  {
    q: '¿Ofrecéis garantía en vuestros trabajos?',
    a: 'Todos nuestros trabajos cuentan con garantía profesional. Utilizamos perfilería de primeras marcas (Cortizo, Technal) con certificación de calidad y garantía oficial.',
  },
  {
    q: '¿Trabajáis con comunidades de vecinos?',
    a: 'Sí, realizamos proyectos para comunidades: barandillas, puertas de acceso, cerramientos de zonas comunes y reparaciones. Presupuesto para comunidades sin compromiso.',
  },
  {
    q: '¿Qué tipos de acabados ofrecéis?',
    a: 'Trabajamos con lacados en todos los colores RAL, anodizado natural y bronce, imitación madera y texturizados. También ofrecemos acabado en blanco estándar.',
  },
  {
    q: '¿Hacéis trabajos urgentes o reparaciones?',
    a: 'Sí, tenemos servicio de reparaciones y pequeñas intervenciones. Llámanos y te atenderemos lo antes posible. Para reparaciones urgentes, contacta directamente por teléfono.',
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section ref={ref} className="py-24 bg-light relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="section-title mt-2">Preguntas frecuentes</h2>
          <p className="section-subtitle">Resolvemos tus dudas sobre nuestros servicios de carpintería metálica y aluminio.</p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button onClick={() => toggle(index)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-heading font-semibold text-primary text-sm md:text-base pr-4">{faq.q}</span>
                <HiChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-secondary/70 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-10">
          <p className="text-secondary/70 mb-4">¿No encuentras lo que buscas? Escríbenos</p>
          <a href="#contacto" className="btn-primary">Contactar ahora</a>
        </motion.div>
      </div>
    </section>
  )
}
