import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white mb-4">DevInnovate</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transformamos ideas en productos digitales exitosos utilizando las tecnologías más avanzadas del mercado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Desarrollo Web Full-Stack
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Chatbots con IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Apps Móviles
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Plataformas E-Commerce
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  APIs & Backend
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Automatización con IA
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#tecnologias" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog Técnico
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Únete al Equipo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm mb-1">Oficina Central</p>
                  <p className="text-sm">Calle Serrano 123, 28006</p>
                  <p className="text-sm">Madrid, España</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm mb-1">Teléfono</p>
                  <a href="tel:+34910123456" className="text-sm hover:text-purple-400 transition-colors">
                    +34 910 123 456
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm mb-1">Email</p>
                  <a href="mailto:contacto@devinnovate.com" className="text-sm hover:text-purple-400 transition-colors">
                    contacto@devinnovate.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>&copy; 2025 DevInnovate. Todos los derechos reservados.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidad</a>
                {" · "}
                <a href="#" className="hover:text-purple-400 transition-colors">Términos de Servicio</a>
                {" · "}
                <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
              </p>
            </div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Volver arriba
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
