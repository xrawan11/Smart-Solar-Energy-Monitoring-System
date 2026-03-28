import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Activity, Database, Battery } from "lucide-react";

const categories = [
  {
    icon: Activity,
    title: "Performance",
    description: "Profits, reports, current performance, and comparisons.",
    path: "/performance",
  },
  {
    icon: Database,
    title: "Expected Data",
    description: "Weather, predictive maintenance, forecasts, and alerts.",
    path: "/expected-data",
  },
  {
    icon: Battery,
    title: "Battery System",
    description: "Energy inventory, readings, and battery health status.",
    path: "/battery-system",
  },
];

const ServicesSection = () => {
  return (
    <section id="solutions" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-solar">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            End-to-end solar energy services designed to maximize your return on investment.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <Link to={c.path}
                className="group block rounded-xl border border-border bg-card p-8 hover:border-primary/60 hover:glow-solar transition-all">
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
