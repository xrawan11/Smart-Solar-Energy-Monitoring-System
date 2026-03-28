import { motion } from "framer-motion";
import { Sun, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(40 95% 55% / 0.08), transparent 70%)" }} />
      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powering Tomorrow's Energy</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Harness the <span className="text-gradient-solar">Power of the Sun</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Nexora delivers cutting-edge solar solutions that reduce your energy costs and environmental footprint. Smart, sustainable, and built to last.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base font-semibold px-8 glow-solar">
              Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold px-8 border-muted-foreground/30">
              <Sun className="mr-2 w-5 h-5" /> Our Solutions
            </Button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
          {[
            { value: "15K+", label: "Installations" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "40%", label: "Avg. Cost Savings" },
            { value: "12", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient-solar">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
