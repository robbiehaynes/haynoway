import { Github, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const projectData = [
  {
    category: 'swift',
    name: 'Hilton Meals App',
    description: 'An iOS app for a school to view their meals for the current day. Reached 5th on SA App Store in Food & Beverage category. Built with Swift and Firebase',
    href: 'https://github.com/robbiehaynes/Hilton-meals-ios',
    linkLabel: 'source',
    icon: Github,
  },
  {
    category: 'web dev',
    name: 'Equine Group Website',
    description: 'A website for the leading bloodstock insurance provider in South Africa. Built with HTML/CSS/JS and Bootstrap',
    href: 'http://www.equine.co.za',
    linkLabel: 'live site',
    icon: ExternalLink,
  },
  {
    category: 'web dev',
    name: 'Portfolio Website',
    description: "The site you are on right now :) Built with modern web technology: NextJS, Tailwind CSS, Shadcn UI. Deployed on Vercel.",
    href: 'https://github.com/robbiehaynes/haynoway',
    linkLabel: 'source',
    icon: Github,
  },
  {
    category: 'python',
    name: 'Arbitrage Finder',
    description: 'A Python script that fetches betting odds from an API and finds arbitrage opportunities',
    href: 'https://github.com/robbiehaynes/arbitrage-finder',
    linkLabel: 'source',
    icon: Github,
  },
  {
    category: 'swift',
    name: 'Cactused',
    description: 'A 24 hour challenge for myself before my 18th birthday. A fun drinking game to play with friends',
    href: 'https://github.com/robbiehaynes/Cactused',
    linkLabel: 'source',
    icon: Github,
  },
  {
    category: 'java',
    name: 'KiftoCoin',
    description: 'A simple cryptocurrency and blockchain built in Java for my final year school project',
    href: 'https://github.com/robbiehaynes/KiftoCoin',
    linkLabel: 'source',
    icon: Github,
  },
]

const Work = () => {
  return (
    <section id="work" className="relative z-[1] scroll-mt-20 bg-[color:var(--ds-bg)] px-6 py-16 text-[color:var(--ds-text)]">
      <Reveal className="container mx-auto">
        <div className="font-ds-mono mb-2 text-xs uppercase tracking-[3px] text-[color:var(--ds-accent-300)]">// 03 — work</div>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-ds-heading mb-3 text-[clamp(30px,3.6vw,42px)] font-bold">Latest Projects</h2>
          </div>
          <a
            href="https://github.com/robbiehaynes"
            target="_blank"
            rel="noreferrer"
            className="font-ds-heading inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-[color:var(--ds-accent)] px-[22px] py-[11px] text-[15px] font-semibold text-[color:var(--ds-accent-300)] no-underline"
          >
            All projects on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.name}
                className="group rounded-lg border border-[color:var(--ds-divider)] bg-[color:var(--ds-surface)] p-6 transition-all duration-200 hover:-translate-y-1.5 hover:border-[color:var(--ds-accent-300)]"
              >
                <span className="font-ds-mono mb-3.5 inline-block rounded-sm bg-[color:var(--ds-accent-100)] px-2.5 py-1 text-[11px] tracking-wide text-[color:var(--ds-accent-800)]">
                  {project.category}
                </span>
                <h4 className="font-ds-heading mb-2 text-[19px] font-semibold">{project.name}</h4>
                <p className="mb-3.5 text-sm leading-relaxed text-[color:var(--ds-text-muted)]">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-ds-mono inline-flex items-center gap-1.5 text-xs text-[color:var(--ds-accent-300)] no-underline"
                >
                  <Icon size={14} /> {project.linkLabel}
                </a>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  )
}

export default Work
