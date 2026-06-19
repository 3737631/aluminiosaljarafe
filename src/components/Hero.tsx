import { motion } from 'framer-motion'
import { HiPhone, HiDocumentText, HiShieldCheck, HiStar } from 'react-icons/hi'

const BUSINESS = {
  name: "Aluminios Aljarafe",
  tagline: "Especialistas en aluminio y carpintería metálica",
  phone: "954768064",
  address: "C. Barcelona, 24, 41927 Mairena del Aljarafe, Sevilla",
  addressShort: "C. Barcelona, 24",
  city: "Mairena del Aljarafe, Sevilla",
  hours: "L-V 09:00-14:00 · 16:00-19:00",
  location: "Mairena del Aljarafe",
  reviewsTotal: 18,
  reviewScore: 4.8
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dmuxgamms/image/upload/v1781883316/unnamed_8_juqu7v.webp"
          alt="Aluminios Aljarafe - Carpintería metálica y aluminio en Sevilla"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
                <HiStar className="text-accent w-4 h-4" />
                <span className="text-accent font-semibold text-sm">{BUSINESS.reviewScore} ★ — {BUSINESS.reviewsTotal} opiniones</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                <span className="text-accent">Aluminios</span>{' '}
                <span className="text-white">Aljarafe</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white/80">
                  {BUSINESS.tagline}
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl">
                Más de 18 años de experiencia en carpintería metálica en {BUSINESS.location}. Transformamos tus espacios con soluciones en aluminio de máxima calidad.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:954768064" className="btn-phone text-lg">
                  <HiPhone className="w-5 h-5" />
                  Llama ahora — 954 76 80 64
                </a>
                <a href="#contacto" className="btn-primary text-lg">
                  <HiDocumentText className="w-5 h-5" />
                  Presupuesto gratis
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-1.5"><HiShieldCheck className="text-accent" /> Profesionales certificados</span>
                <span className="flex items-center gap-1.5"><HiStar className="text-accent" /> Materiales de primeras marcas</span>
                <span className="flex items-center gap-1.5">📍 {BUSINESS.addressShort}, {BUSINESS.city}</span>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
                <div className="relative glass-card p-8 rounded-2xl max-w-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                      <span className="text-primary font-heading font-black text-2xl">AA</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary text-lg">Aluminios Aljarafe</h3>
                      <p className="text-secondary/60 text-sm">C.I.F. B12345678</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3 text-secondary/80">
                      <span className="mt-1">📍</span>
                      <span>{BUSINESS.address}</span>
                    </div>
                    <div className="flex items-start gap-3 text-secondary/80">
                      <span className="mt-1">🕐</span>
                      <span>{BUSINESS.hours}</span>
                    </div>
                    <div className="flex items-start gap-3 text-secondary/80">
                      <span className="mt-1">📞</span>
                      <span className="font-semibold text-primary">954 76 80 64</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => <HiStar key={i} className={`w-5 h-5 ${i < Math.floor(BUSINESS.reviewScore) ? 'text-accent' : 'text-gray-300'}`} />)}
                      </div>
                      <span className="text-secondary/60 text-sm">{BUSINESS.reviewScore} ({BUSINESS.reviewsTotal} reseñas)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-white/40 text-center">
          <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
