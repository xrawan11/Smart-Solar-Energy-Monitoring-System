import { motion } from "framer-motion";
import { Battery, Gauge, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const options = [
  { icon: Battery, title: "Energy Inventory", description: "Overview of stored energy levels across all battery units in your system." },
  { icon: Gauge, title: "Voltage, Current, Temperature", description: "Real-time electrical and thermal readings from each battery module." },
  { icon: HeartPulse, title: "Battery Status", description: "State of Health, State of Charge, Power In/Out, Cycle count, and Life Span tracking." },
];

const BatterySystem = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-6 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gradient-solar">Battery System</span>
      </motion.h1>
      <p className="text-muted-foreground mb-12 max-w-lg">Complete visibility into your energy storage health and performance.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((o, i) => (
          <motion.div key={o.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-colors">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <o.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{o.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default BatterySystem;
