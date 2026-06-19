import { HiPhone, HiMail, HiLocationMarker, HiStar, HiArrowUp } from 'react-icons/hi'

const BUSINESS = {
  name: "Aluminios Aljarafe",
  phone: "954768064",
  address: "C. Barcelona, 24, 41927 Mairena del Aljarafe, Sevilla",
  city: "Mairena del Aljarafe",
  hours: "L-V 09:00-14:00 · 16:00-19:00",
}

const FOOTER_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-primary relative">
      <button onClick={scrollToTop} className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors group">
        <HiArrowUp className="w-5 h-5 text-primary group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-heading font-black text-lg">AA</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">Aluminios <span className="text-accent">Aljarafe</span></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">Especialistas en carpintería metálica y aluminio en {BUSINESS.city}. Más de 18 años de experiencia ofreciendo soluciones de calidad.</p>
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <HiStar key={i} className="w-5 h-5" />)}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {['Ventanas de aluminio', 'Cerramientos', 'Puertas de aluminio', 'Mamparas', 'Barandillas', 'Mosquiteras'].map((s) => (
                <li key={s}><a href="#servicios" className="text-white/50 hover:text-accent text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Enlaces</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}><a href={l.href} className="text-white/50 hover:text-accent text-sm transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:954768064" className="flex items-center gap-2 text-white/50 hover:text-accent text-sm transition-colors">
                  <HiPhone className="w-4 h-4 text-accent" />
                  954 76 80 64
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-white/50 text-sm">
                  <HiLocationMarker className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {BUSINESS.address}
                </span>
              </li>
              <li>
                <a href="mailto:info@aluminiosaljarafe.com" className="flex items-center gap-2 text-white/50 hover:text-accent text-sm transition-colors">
                  <HiMail className="w-4 h-4 text-accent" />
                  info@aluminiosaljarafe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.</p>
          <p className="text-white/30 text-xs">Diseñado y desarrollado con atención premium</p>
        </div>
      </div>
    </footer>
  )
}
