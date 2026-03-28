import nexoraLogo from "@/assets/nexora-logo.png";

const FooterSection = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <img src={nexoraLogo} alt="Nexora" className="h-7 opacity-70" />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nexora Solar Energy. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
