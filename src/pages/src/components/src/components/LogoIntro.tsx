import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nexoraLogo from "@/assets/nexora-logo.png";

interface LogoIntroProps {
  onComplete: () => void;
}

const LogoIntro = ({ onComplete }: LogoIntroProps) => {
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onAnimationComplete={() => {
              setTimeout(() => setShow(false), 3000);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, hsl(40 95% 55% / 0.3), transparent 70%)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <img
              src={nexoraLogo}
              alt="Nexora Logo"
              className="relative z-10 w-72 md:w-96 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
