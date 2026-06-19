import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiPaperAirplane } from 'react-icons/hi'

const BUSINESS = {
  name: "Aluminios Aljarafe",
  phone: "954768064",
  address: "C. Barcelona, 24, 41927 Mairena del Aljarafe, Sevilla",
  city: "Mairena del Aljarafe, Sevilla",
  hours: "L-V 09:00-14:00 · 16:00-19:00",
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hola, soy ${form.name}.\nTeléfono: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.open(`https://wa.me/34954768064?text=${text}`, '_blank')
    setSent(true)
    setForm({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contacto" ref={ref} className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,158,11,0.08)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Contacto</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Solicita tu presupuesto</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Sin compromiso. Te responderemos en menos de 24 horas con un presupuesto detallado.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email (opcional)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
              <textarea
                placeholder="Cuéntanos tu proyecto... (tipo de trabajo, medidas aproximadas, materiales deseados)"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
              />
              <button type="submit" className="btn-primary w-full justify-center text-base">
                {sent ? (
                  '✓ Mensaje enviado'
                ) : (
                  <>
                    <HiPaperAirplane className="w-5 h-5 rotate-90" />
                    Enviar solicitud por WhatsApp
                  </>
                )}
              </button>
              <p className="text-white/40 text-xs text-center">Al enviar aceptas que te contactemos para gestionar tu presupuesto.</p>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiPhone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">Teléfono</p>
                  <a href="tel:954768064" className="text-accent text-lg font-bold hover:underline">954 76 80 64</a>
                </div>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">Dirección</p>
                  <p className="text-white/70 text-sm">{BUSINESS.address}</p>
                </div>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiClock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">Horario</p>
                  <p className="text-white/70 text-sm">{BUSINESS.hours}</p>
                </div>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">Email</p>
                  <a href="mailto:info@aluminiosaljarafe.com" className="text-white/70 text-sm hover:text-accent transition-colors">info@aluminiosaljarafe.com</a>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
              <p className="text-accent font-heading font-bold text-lg">Respuesta en menos de 24h</p>
              <p className="text-white/60 text-sm mt-1">También puedes llamarnos directamente de lunes a viernes.</p>
            </div>

            <a href="tel:954768064" className="btn-phone w-full justify-center text-lg">
              <HiPhone className="w-5 h-5" />
              Llama ahora: 954 76 80 64
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
