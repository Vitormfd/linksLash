import { Instagram, MessageCircle, Sparkles, GraduationCap, AtSign } from "lucide-react";

const links = [
  {
    label: "Fale comigo no WhatsApp",
    href: "https://wa.me/message/N5JZZLOM5WTBB1",
    icon: MessageCircle,
  },
  {
    label: "Aplicativo Easy Studio",
    href: "https://easystudio.com.br",
    icon: Sparkles,
  },
  {
    label: "Portfólio — Veja meus trabalhos",
    href: "https://instagram.com/nataliagrssi",
    icon: Sparkles,
  },
  {
    label: "Curso Start Lash — Curso Profissional",
    href: "#",
    icon: GraduationCap,
  },
  {
    label: "Threads @nataliagrssi",
    href: "https://threads.net/@nataliagrssi",
    icon: AtSign,
  },
];

const Star = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12 6.2-.6 11.4-5.8 12-12z" />
  </svg>
);

const Index = () => {
  return (
    <main className="min-h-[100dvh] bg-background text-foreground flex flex-col items-center px-5 pt-8 pb-6 sm:py-16 overflow-x-hidden">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* decorative top stars */}
        <div className="w-full flex items-center justify-center gap-3 opacity-60 animate-fade-in">
          <span className="h-px w-12 sm:w-16 bg-foreground/30" />
          <Star className="w-2.5 h-2.5 text-foreground/60" />
          <span className="h-px w-12 sm:w-16 bg-foreground/30" />
        </div>

        {/* header */}
        <header className="w-full text-center mt-8 sm:mt-10 animate-fade-up">
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-foreground shrink-0" />
            <h1 className="font-display font-light text-[2rem] leading-none sm:text-5xl tracking-wide">
              Natália Grassi
            </h1>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-foreground shrink-0" />
          </div>
          <p className="mt-3 text-[0.65rem] sm:text-xs tracking-[0.4em] sm:tracking-[0.45em] uppercase text-foreground/80">
            Lash Beauty
          </p>

          <p className="font-display italic text-base sm:text-xl mt-6 sm:mt-7 text-foreground/90 px-4 leading-snug">
            “Revolucione seu olhar com confiança.”
          </p>

          <p className="mt-5 text-[0.65rem] sm:text-xs tracking-[0.25em] uppercase text-foreground/70">
            📍 Jacobina — BA
          </p>
        </header>

        {/* links */}
        <nav className="w-full mt-10 sm:mt-12 flex flex-col gap-3.5 sm:gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${250 + i * 110}ms` }}
                className="rotating-border group relative overflow-hidden rounded-full min-h-[56px] px-5 py-4 text-center transition-all duration-500 ease-elegant hover:shadow-soft active:scale-[0.97] active:shadow-soft animate-fade-up touch-manipulation"
              >
                {/* hover/tap fill */}
                <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-500 ease-elegant group-hover:translate-y-0 group-active:translate-y-0" />
                <span className="relative z-10 flex items-center justify-center gap-2.5 sm:gap-3 text-[0.85rem] sm:text-[0.95rem] font-medium tracking-wide text-foreground transition-colors duration-500 group-hover:text-primary-foreground group-active:text-primary-foreground">
                  <Icon className="w-4 h-4 opacity-80 shrink-0" strokeWidth={1.5} />
                  <span className="truncate">{link.label}</span>
                </span>
              </a>
            );
          })}
        </nav>

        {/* footer */}
        <footer
          className="w-full mt-12 sm:mt-16 mb-2 flex flex-col items-center gap-3 animate-fade-in"
          style={{ animationDelay: "900ms" }}
        >
          <div className="flex items-center justify-center gap-3 opacity-60">
            <span className="h-px w-8 sm:w-10 bg-foreground/30" />
            <Star className="w-2 h-2 text-foreground/60" />
            <span className="h-px w-8 sm:w-10 bg-foreground/30" />
          </div>
          <p className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.3em] uppercase text-foreground/60 text-center">
            Jacobina · Bahia · Brasil
          </p>
          <p className="font-display italic text-[0.7rem] sm:text-xs text-foreground/50 text-center px-4">
            © {new Date().getFullYear()} Natália Grassi · Lash Beauty
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
