import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLocationMarker } from 'react-icons/hi'

const BUSINESS = {
  name: "Aluminios Aljarafe",
  address: "C. Barcelona, 24, 41927 Mairena del Aljarafe, Sevilla",
}

export default function MapSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-light relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center"
      >
        <span className="section-badge mx-auto"><HiLocationMarker className="w-3.5 h-3.5" />Ubicación</span>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mt-2 tracking-tight">Encuéntranos</h2>
        <p className="text-secondary/60 text-sm mt-1">{BUSINESS.address}</p>
      </motion.div>
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5!2d-6.0674!3d37.3431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIwJzM1LjIiTiA2fMOsMDQnMDIuNiJF!5e0!3m2!1ses!2ses!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Aluminios Aljarafe"
        />
      </div>
    </section>
  )
}
