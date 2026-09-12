const links = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#testimonials", label: "testimonials" },
];

const DevHeader = () => {
  return (
    <header
      className="font-ds-mono sticky top-0 z-30 border-b border-[color:var(--ds-divider)] backdrop-blur-md"
      style={{ backgroundColor: 'color-mix(in srgb, var(--ds-bg) 82%, transparent)' }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 py-4">
        <a href="#top" className="text-[15px] text-[color:var(--ds-accent-300)] no-underline tracking-[0.5px]">
          rob<span className="text-[color:var(--ds-text-muted)]">@</span>haynoway<span className="text-[color:var(--ds-text-muted)]">:~$</span>
        </a>
        <nav className="flex flex-wrap gap-7 text-[13px]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[color:var(--ds-text)] no-underline hover:text-[color:var(--ds-accent-300)] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="mailto:robhaynes0420@gmail.com" className="text-[color:var(--ds-accent-300)] no-underline">contact</a>
        </nav>
      </div>
    </header>
  );
};

export default DevHeader;
