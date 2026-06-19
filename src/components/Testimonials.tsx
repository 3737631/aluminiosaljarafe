import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar } from 'react-icons/hi'

const REVIEWS = [
  {
    name: 'María García',
    location: 'Mairena del Aljarafe',
    text: 'Excelente trabajo. Instalaron ventanas en toda mi casa y quedaron perfectas. Muy profesionales y puntuales. El aislamiento acústico ha mejorado muchísimo.',
    rating: 5,
    service: 'Ventanas de aluminio',
  },
  {
    name: 'Antonio Rodríguez',
    location: 'Tomares',
    text: 'Cerramiento de terraza espectacular. Nos asesoraron en todo momento y el resultado superó nuestras expectativas. Totalmente recomendables.',
    rating: 5,
    service: 'Cerramientos',
  },
  {
    name: 'Carmen López',
    location: 'Bormujos',
    text: 'Muy contenta con la mampara de baño que me instalaron. Medidas exactas, acabado impecable y un trato muy cercano. Repetiré sin dudar.',
    rating: 5,
    service: 'Mamparas',
  },
  {
    name: 'Francisco Moreno',
    location: 'San Juan de Aznalfarache',
    text: 'Gran profesionalidad. Instalaron la estructura metálica de mi nave en tiempo récord. Calidad y seriedad. Sin duda, los mejores de la zona.',
    rating: 5,
    service: 'Estructuras metálicas',
  },
  {
    name: 'Isabel Torres',
    location: 'Sevilla',
    text: 'Me hicieron un presupuesto muy competitivo para las mosquiteras. La instalación fue rápida y limpia. Llevo 3 meses con ellas y funcionan perfectamente.',
    rating: 4,
    service: 'Mosquiteras',
  },
  {
    name: 'Javier Ruiz',
    location: 'Camas',
    text: 'Repararon unas ventanas que tenía muy deterioradas. Quedaron como nuevas. Precio justo y trabajo de calidad. Les doy un 10.',
    rating: 5,
    service: 'Reparaciones',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Testimonios</span>
          <h2 className="section-title mt-2">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">La satisfacción de nuestros clientes es nuestro mejor aval. Más de 18 años de experiencia nos respaldan.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className={`w-5 h-5 ${i < review.rating ? 'text-accent' : 'text-gray-200'}`} />
                ))}
              </div>
              <p className="text-secondary/80 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-heading font-bold text-primary">{review.name}</p>
                <div className="flex items-center justify-between text-xs text-secondary/60 mt-1">
                  <span>📍 {review.location}</span>
                  <span className="bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded-full">{review.service}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-md">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <HiStar key={i} className="w-6 h-6" />)}
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-primary text-lg">4.8 sobre 5</p>
              <p className="text-secondary/60 text-sm">Basado en 18 opiniones de clientes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
