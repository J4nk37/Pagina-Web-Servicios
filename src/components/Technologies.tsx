import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Zap, Shield, Rocket, Users } from "lucide-react";

const technologies = [
  { name: "React 19", category: "Frontend", hot: true },
  { name: "Next.js 15", category: "Framework", hot: true },
  { name: "Vue 3", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "OpenAI GPT-4", category: "IA", hot: true },
  { name: "TensorFlow", category: "ML" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Supabase", category: "Backend" },
  { name: "Vercel", category: "Cloud" },
  { name: "Firebase", category: "Backend" },
  { name: "Stripe", category: "Payments" },
  { name: "Cloudflare", category: "CDN" },
];

const features = [
  {
    icon: Zap,
    title: "Desarrollo Ágil",
    description: "Sprints de 2 semanas con entregas incrementales. Metodología Scrum adaptada a cada proyecto.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Auditorías de seguridad, encriptación end-to-end y cumplimiento GDPR en todos nuestros proyectos.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Rendimiento Óptimo",
    description: "Optimización Core Web Vitals, lazy loading, CDN global. Webs que cargan en <1 segundo.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Soporte Dedicado",
    description: "Equipo técnico disponible, actualizaciones mensuales y mantenimiento proactivo incluido.",
    color: "from-blue-500 to-cyan-500"
  }
];

export function Technologies() {
  return (
    <section id="tecnologias" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-4">
            Stack Tecnológico 2025
          </div>
          <h2 className="text-slate-900 mb-4">
            Las Herramientas Más Potentes del Mercado
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Utilizamos únicamente tecnologías enterprise-grade, validadas por las empresas 
            líderes mundiales en tecnología
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Badge
                variant="outline"
                className={`px-5 py-2.5 text-sm border-2 transition-all cursor-default ${
                  tech.hot 
                    ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 shadow-md' 
                    : 'border-slate-200 hover:border-purple-400 hover:bg-purple-50 text-slate-700'
                }`}
              >
                {tech.hot && <span className="mr-2">🔥</span>}
                {tech.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              <div className="relative p-6 rounded-2xl border-2 border-slate-100 group-hover:border-slate-200 transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-12 text-center"
        >
          <h3 className="text-white mb-12">
            Resultados que Hablan por Nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Proyectos Entregados" },
              { value: "50+", label: "Empresas Confían en Nosotros" },
              { value: "99.8%", label: "Satisfacción del Cliente" },
              { value: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
