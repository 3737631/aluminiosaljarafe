import { motion } from 'framer-motion'
import { HiPhone, HiDocumentText, HiShieldCheck, HiStar, HiLocationMarker, HiClock } from 'react-icons/hi'

const BUSINESS = {
  name: "Aluminios Aljarafe",
  tagline: "Especialistas en aluminio y carpintería metálica",
  phone: "954768064",
  address: "C. Barcelona, 24, 41927 Mairena del Aljarafe, Sevilla",
  addressShort: "C. Barcelona, 24",
  city: "Mairena del Aljarafe, Sevilla",
  hours: "L-V 09:00-14:00 \u00B7 16:00-19:00",
  location: "Mairena del Aljarafe",
  reviewsTotal: 18,
  reviewScore: 4.8,
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const childItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="https://res.cloudinary.com/dmuxgamms/image/upload/v1781883316/unnamed_8_juqu7v.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(31,41,55,0.92) 0%, rgba(31,41,55,0.7) 50%, rgba(31,41,55,0.4) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(31,41,55,0.95) 0%, transparent 40%)' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={childItem} className="section-badge mb-8">
                <HiStar className="w-3.5 h-3.5" />
                {BUSINESS.reviewScore} \u2014 {BUSINESS.reviewsTotal} opiniones verificadas
              </motion.div>

              <motion.h1 variants={childItem} className="heading-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                <span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Aluminios
                </span>{' '}
                <span className="text-white">Aljarafe</span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-light text-white/60 mt-4 tracking-normal">
                  {BUSINESS.tagline}
                </span>
              </motion.h1>

              <motion.p variants={childItem} className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Más de <strong className="text-white font-semibold">18 años de experiencia</strong> en carpintería metálica en {BUSINESS.location}. Transformamos tus espacios con soluciones en aluminio de máxima calidad.
              </motion.p>

              <motion.div variants={childItem} className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.a href="tel:954768064" className="btn-phone text-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <HiPhone className="w-5 h-5" />
                  Llama ahora \u2014 954 76 80 64
                </motion.a>
                <motion.a href="#contacto" className="btn-primary text-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <HiDocumentText className="w-5 h-5" />
                  Presupuesto sin compromiso
                </motion.a>
              </motion.div>

              <motion.div variants={childItem} className="flex flex-wrap items-center gap-6 text-white/40 text-xs sm:text-sm">
                <span className="flex items-center gap-2"><HiShieldCheck className="text-accent w-4 h-4" /> Profesionales certificados</span>
                <span className="flex items-center gap-2"><HiStar className="text-accent w-4 h-4" /> Materiales de primeras marcas</span>
                <span className="flex items-center gap-2"><HiLocationMarker className="text-accent w-4 h-4" /> {BUSINESS.addressShort}</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
              className="hidden lg:flex justify-center"
            >
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                <div className="absolute -inset-6 rounded-3xl opacity-15 blur-3xl" style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)' }} />
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="relative p-8 rounded-2xl max-w-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.78))',
                    backdropFilter: 'blur(20px)',
                    border: '1.5px solid rgba(255,255,255,0.25)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }} className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)' }}>
                      <span className="text-primary font-heading font-black text-2xl">AA</span>
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-bold text-primary text-lg tracking-tight">Aluminios Aljarafe</h3>
                      <p className="text-secondary/50 text-xs font-medium tracking-wide">C.I.F. B12345678</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { Icon: HiLocationMarker, text: BUSINESS.address },
                      { Icon: HiClock, text: BUSINESS.hours },
                      { Icon: HiPhone, text: '954 76 80 64', bold: true },
                    ].map(({ Icon, text, bold }, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.12 }}
                        className="flex items-start gap-3"
                      >
                        <Icon className="w-4 h-4 text-accent/70 mt-0.5 flex-shrink-0" />
                        <span className={`${bold ? 'font-bold text-primary' : 'text-secondary/65'} text-sm`}>{text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-6 pt-5 border-t"
                    style={{ borderColor: 'rgba(0,0,0,0.05)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.div key={i} animate={{ scale: [1, 1.15, 1] }} transition={{ delay: i * 0.15, duration: 0.4 }}>
                            <HiStar className={`w-4 h-4 ${i < Math.floor(BUSINESS.reviewScore) ? 'text-accent' : 'text-gray-200'}`} />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-secondary/45 text-xs font-medium">{BUSINESS.reviewScore} ({BUSINESS.reviewsTotal} reseñas)</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-2 text-white/25 text-[10px] font-medium uppercase tracking-[0.25em]">
          <span>Descubrir</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
