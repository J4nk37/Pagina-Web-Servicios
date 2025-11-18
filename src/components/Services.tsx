import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Code, MessageSquare, Smartphone, Laptop, Database, Cpu, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web Full-Stack",
    description: "Aplicaciones web progresivas (PWA) con React, Next.js 15 y arquitecturas serverless que garantizan máximo rendimiento y escalabilidad.",
    features: ["Next.js 15 + React 19", "TypeScript Avanzado", "Deploy Automático", "SEO Optimizado"],
    image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzNDYxNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Chatbots con IA Avanzada",
    description: "Asistentes virtuales inteligentes con GPT-4, Claude y Gemini para automatizar atención al cliente 24/7 y aumentar conversiones.",
    features: ["Integración GPT-4", "Multi-idioma", "Analytics IA", "Conversión +40%"],
    image: "https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzQ2MzczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Apps Móviles Nativas",
    description: "Desarrollo multiplataforma con React Native y Flutter. Una sola base de código, experiencia nativa en iOS y Android.",
    features: ["React Native/Flutter", "Notificaciones Push", "Offline-First", "App Store Ready"],
    image: "https://images.unsplash.com/photo-1693880269221-c064425aa8a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzQ0NjMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Laptop,
    title: "Plataformas E-Commerce",
    description: "Tiendas online de alto rendimiento con Shopify, WooCommerce o soluciones custom. Optimizadas para conversión.",
    features: ["Shopify/Custom", "Pagos Seguros", "Gestión Inventario", "Analytics Avanzado"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Database,
    title: "APIs & Backend Escalable",
    description: "Arquitecturas cloud-native con Node.js, Python, GraphQL y microservicios. Preparadas para escalar a millones de usuarios.",
    features: ["GraphQL/REST", "Microservicios", "AWS/GCP", "99.9% Uptime"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    description: "Sistemas de ML personalizados, computer vision, análisis predictivo y automatización de procesos empresariales.",
    features: ["Machine Learning", "Computer Vision", "Predicción Datos", "RPA Avanzado"],
    gradient: "from-pink-500 to-rose-500"
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 mb-4">
            Servicios Premium
          </div>
          <h2 className="text-slate-900 mb-4">
            Soluciones Tecnológicas de Vanguardia
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Implementamos las tecnologías más avanzadas para crear productos digitales 
            que destacan en el mercado y generan resultados medibles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-slate-200 group bg-white">
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className={`absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  {!service.image && (
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  )}
                  <h3 className="text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-slate-700">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="group/btn text-purple-600 hover:text-purple-700 p-0 h-auto"
                  >
                    Más información
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 shadow-lg"
          >
            Solicitar Consultoría Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
