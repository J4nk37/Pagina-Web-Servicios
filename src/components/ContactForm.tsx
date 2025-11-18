import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Solicitud enviada exitosamente! Nos contactaremos en menos de 24 horas.", {
      description: "Revisa tu email para la confirmación"
    });
    setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 mb-4">
            Contacto Directo
          </div>
          <h2 className="text-white mb-4">
            ¿Listo para Impulsar tu Negocio?
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Cuéntanos sobre tu proyecto y recibe una propuesta personalizada en 24 horas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div>
              <h3 className="text-white mb-6">¿Por Qué Elegirnos?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Respuesta Rápida</p>
                    <p className="text-slate-400 text-sm">Propuesta en menos de 24h y reunión inicial gratuita</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Comunicación Directa</p>
                    <p className="text-slate-400 text-sm">Acceso directo al equipo técnico sin intermediarios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700">
              <h4 className="text-white mb-4">Contacto Directo</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">contacto@devinnovate.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">+34 910 123 456</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Madrid, España</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                <span className="text-purple-400">Horario:</span> Lunes a Viernes
              </p>
              <p className="text-slate-400 text-sm">9:00 - 18:00 CET</p>
              <p className="text-green-400 text-sm mt-2">● Disponible ahora</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-white border-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-900 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className="border-slate-300 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-900 mb-2">
                      Email corporativo *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      className="border-slate-300 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-slate-900 mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="border-slate-300 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-slate-900 mb-2">
                      Servicio de interés *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="border-slate-300 focus:border-purple-500">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Desarrollo Web</SelectItem>
                        <SelectItem value="chatbot">Chatbot con IA</SelectItem>
                        <SelectItem value="mobile">App Móvil</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="api">APIs & Backend</SelectItem>
                        <SelectItem value="automation">Automatización IA</SelectItem>
                        <SelectItem value="other">Otro / Consultoría</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-slate-900 mb-2">
                    Presupuesto estimado
                  </label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="border-slate-300 focus:border-purple-500">
                      <SelectValue placeholder="Selecciona un rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10k">5.000€ - 10.000€</SelectItem>
                      <SelectItem value="10-25k">10.000€ - 25.000€</SelectItem>
                      <SelectItem value="25-50k">25.000€ - 50.000€</SelectItem>
                      <SelectItem value="50k+">Más de 50.000€</SelectItem>
                      <SelectItem value="flexible">Flexible / A consultar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-900 mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tu proyecto, objetivos principales, usuarios objetivo, timeline esperado y cualquier requerimiento técnico específico..."
                    className="border-slate-300 focus:border-purple-500 min-h-32"
                    required
                  />
                </div>

                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    Acepto la política de privacidad y el tratamiento de mis datos para contacto comercial
                  </span>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg shadow-lg shadow-purple-500/30"
                  size="lg"
                >
                  Enviar Solicitud
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-slate-500 text-sm">
                  🔒 Tus datos están protegidos y nunca serán compartidos con terceros
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
