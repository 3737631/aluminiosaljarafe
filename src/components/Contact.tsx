import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiPaperAirplane, HiChatAlt2 } from 'react-icons/hi'

const BUSINESS = {
  name: "Aluminios Aljarafe",
  phone: "954768064",
  address: "C. Barcelona, 24, 41927 Mairena del Aljarafe, Sevilla",
  city: "Mairena del Aljarafe, Sevilla",
  hours: "L-V 09:00-14:00 · 16:00-19:00",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Hola, soy ${form.name}.\nTeléfono: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`https://wa.me/34954768064?text=${text}`, '_blank')
    setSent(true)
    setForm({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contacto" ref={ref} className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1F2937 100%)' }}>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 30% 80%, #F59E0B 0%, transparent 50%), radial-gradient(circle at 70% 20%, #F59E0B 0%, transparent 50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200 }}
            className="badge-premium"
          >
            <HiChatAlt2 className="w-3.5 h-3.5" />
            Contacto
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">Solicita tu presupuesto</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">Sin compromiso. Te responderemos en menos de 24 horas con un presupuesto detallado y personalizado.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Nombre completo" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" />
                <input type="tel" placeholder="Teléfono" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <input type="email" placeholder="Email (opcional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <textarea placeholder="Cuéntanos tu proyecto... (tipo de trabajo, medidas aproximadas, materiales deseados)" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm resize-none" />
              </motion.div>
              <motion.button variants={itemVariants} type="submit" className="btn-primary w-full justify-center text-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {sent ? (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>✓ Mensaje enviado</motion.span>
                ) : (
                  <><HiPaperAirplane className="w-5 h-5 rotate-90" />Enviar solicitud por WhatsApp</>
                )}
              </motion.button>
              <motion.p variants={itemVariants} className="text-white/30 text-xs text-center">Al enviar aceptas que te contactemos para gestionar tu presupuesto.</motion.p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl space-y-5"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1.5px solid rgba(255,255,255,0.08)',
              }}
            >
              {[
                { icon: HiPhone, label: 'Teléfono', value: '954 76 80 64', href: 'tel:954768064', accent: true },
                { icon: HiLocationMarker, label: 'Dirección', value: BUSINESS.address, href: null },
                { icon: HiClock, label: 'Horario', value: BUSINESS.hours, href: null },
                { icon: HiMail, label: 'Email', value: 'info@aluminiosaljarafe.com', href: 'mailto:info@aluminiosaljarafe.com' },
              ].map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))', border: '1px solid rgba(245,158,11,0.1)' }}>
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white/50 text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`${item.accent ? 'text-accent font-bold text-lg' : 'text-white/70 text-sm'} hover:underline transition-colors`}>{item.value}</a>
                      ) : (
                        <p className="text-white/70 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                  {i < 3 && <div className="h-px mt-5" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05), transparent)' }} />}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(245,158,11,0.03))',
                border: '1.5px solid rgba(245,158,11,0.15)',
              }}
            >
              <p className="text-accent font-heading font-bold text-lg">Respuesta en menos de 24h</p>
              <p className="text-white/50 text-sm mt-1">También puedes llamarnos directamente de lunes a viernes.</p>
            </motion.div>

            <motion.a href="tel:954768064" className="btn-phone w-full justify-center text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <HiPhone className="w-5 h-5" />
              Llama ahora: 954 76 80 64
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
