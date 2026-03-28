import { useState } from "react";
import { Menu, X } from "lucide-react";
import nexoraLogo from "@/assets/nexora-logo.png";

const navItems = ["Solutions", "About", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <img src={nexoraLogo} alt="Nexora" className="h-8" />
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
