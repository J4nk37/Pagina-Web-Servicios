import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "CEO, TechStart España",
    image: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM0MDY1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Desarrollaron nuestra plataforma SaaS en tiempo récord. El chatbot con IA que implementaron aumentó nuestras conversiones un 45%. Totalmente recomendados.",
    rating: 5,
    project: "Plataforma SaaS + Chatbot IA"
  },
  {
    name: "María González",
    position: "Directora Digital, Retail Plus",
    image: "https://images.unsplash.com/photo-1628017975048-74768e00219e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjM0NDYyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Nuestro e-commerce ahora procesa 10x más pedidos sin problemas. La arquitectura que diseñaron es escalable y robusta. Excelente trabajo en cada detalle.",
    rating: 5,
    project: "E-commerce Enterprise"
  },
  {
    name: "Javier Martínez",
    position: "CTO, FinanceApp",
    image: "https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYzMzQ3ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "La app móvil que crearon supera todas las expectativas. Rendimiento nativo, diseño impecable y código limpio. Son verdaderos expertos en React Native.",
    rating: 5,
    project: "App Móvil iOS/Android"
  },
  {
    name: "Laura Sánchez",
    position: "Fundadora, EduLearn",
    image: null,
    text: "Transformaron nuestra idea en una plataforma educativa completa. El sistema de IA para personalización de contenidos es revolucionario. Profesionales de primer nivel.",
    rating: 5,
    project: "Plataforma Educativa con IA"
  },
  {
    name: "Pedro López",
    position: "Director IT, LogiTrans",
    image: null,
    text: "Automatizaron procesos que nos tomaban horas. El sistema que desarrollaron nos ahorra 20 horas semanales. ROI positivo en el primer mes.",
    rating: 5,
    project: "Sistema de Automatización"
  },
  {
    name: "Ana Torres",
    position: "Marketing Manager, BeautyBox",
    image: null,
    text: "La web que crearon carga instantáneamente y convierte visitantes en clientes. El diseño es espectacular y la integración con nuestro CRM es perfecta.",
    rating: 5,
    project: "Sitio Web Corporativo"
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 mb-4">
            Opiniones Reales
          </div>
          <h2 className="text-slate-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Más de 50 empresas confían en nosotros para sus proyectos tecnológicos más importantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-slate-100 hover:border-purple-100 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-50" />
                
                <div className="relative">
                  <Quote className="w-10 h-10 text-purple-200 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    {testimonial.image ? (
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="text-slate-900">{testimonial.name}</div>
                      <div className="text-slate-500 text-sm">{testimonial.position}</div>
                      <div className="text-purple-600 text-xs mt-1">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6">Tecnologías certificadas y partners oficiales</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['AWS Partner', 'Google Cloud', 'Vercel', 'OpenAI', 'Stripe'].map((partner, index) => (
              <div key={index} className="text-slate-400 px-6 py-3 border border-slate-200 rounded-lg">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
