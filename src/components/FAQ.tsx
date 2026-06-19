import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi'

const FAQS = [
  { q: '¿Cuánto cuesta una ventana de aluminio?', a: 'El precio depende de las dimensiones, el tipo de apertura (abatible, oscilobatiente, corredera) y el acabado. Solicita un presupuesto personalizado y te daremos un precio detallado sin compromiso.' },
  { q: '¿Hacéis presupuestos a domicilio?', a: 'Sí. Nos desplazamos a tu domicilio en Mairena del Aljarafe y toda el área metropolitana de Sevilla para tomar medidas y ofrecerte un presupuesto detallado sin compromiso ni coste.' },
  { q: '¿Qué zonas cubrís?', a: 'Trabajamos en toda la comarca del Aljarafe (Mairena, Tomares, Bormujos, Camas, San Juan, etc.), Sevilla capital, Dos Hermanas, Alcalá de Guadaíra y localidades cercanas.' },
  { q: '¿Cuánto tiempo lleva instalar un cerramiento?', a: 'Dependiendo de la complejidad y el tamaño, una instalación estándar se completa en 2 a 5 días laborables. Te daremos un plazo concreto en el presupuesto.' },
  { q: '¿Ofrecéis garantía en vuestros trabajos?', a: 'Todos nuestros trabajos cuentan con garantía profesional. Utilizamos perfilería de primeras marcas (Cortizo, Technal) con certificación de calidad y garantía oficial.' },
  { q: '¿Trabajáis con comunidades de vecinos?', a: 'Sí, realizamos proyectos para comunidades: barandillas, puertas de acceso, cerramientos de zonas comunes y reparaciones. Presupuesto para comunidades sin compromiso.' },
  { q: '¿Qué tipos de acabados ofrecéis?', a: 'Trabajamos con lacados en todos los colores RAL, anodizado natural y bronce, imitación madera y texturizados. También ofrecemos acabado en blanco estándar.' },
  { q: '¿Hacéis trabajos urgentes o reparaciones?', a: 'Sí, tenemos servicio de reparaciones y pequeñas intervenciones. Llámanos y te atenderemos lo antes posible. Para reparaciones urgentes, contacta directamente por teléfono.' },
]

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section ref={ref} className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.025]" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <motion.span initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: 'spring', stiffness: 200 }} className="section-badge">
            <HiQuestionMarkCircle className="w-3.5 h-3.5" />
            FAQ
          </motion.span>
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle">Resolvemos tus dudas sobre nuestros servicios de carpintería metálica y aluminio.</p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="premium-card overflow-hidden"
            >
              <button onClick={() => toggle(index)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-heading font-semibold text-primary text-sm md:text-[15px] pr-4 tracking-tight">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(245,158,11,0.02))' }}>
                  <HiChevronDown className="w-4 h-4 text-accent" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.15), transparent)' }} />
                      <p className="body-sm">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }} className="text-center mt-10">
          <p className="text-secondary/50 text-sm mb-4">¿No encuentras lo que buscas?</p>
          <motion.a href="#contacto" className="btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Contactar ahora</motion.a>
        </motion.div>
      </div>
    </section>
  )
}
