'use client';

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { Send, Download, Briefcase, ClipboardCheck, Users, ChevronDown } from "lucide-react";
import Socials from "./Socials";

const CODING_YEARS = new Date().getFullYear() - 2018;

const PHRASES = [
  "Data Engineer, Full-Stack & App Developer",
  `${CODING_YEARS} years coding experience`,
  "5th on the App Store",
  "25+ technologies & languages",
];

const useTypewriter = (phrases) => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let timer;
    let index = 0;
    let deleting = false;
    let current = "";

    const tick = () => {
      const phrase = phrases[index];
      if (!deleting) {
        current = phrase.slice(0, current.length + 1);
        setTyped(current);
        if (current === phrase) {
          deleting = true;
          timer = setTimeout(tick, 1800);
        } else {
          timer = setTimeout(tick, 55);
        }
      } else {
        current = current.slice(0, -1);
        setTyped(current);
        if (current === "") {
          deleting = false;
          index = (index + 1) % phrases.length;
          timer = setTimeout(tick, 400);
        } else {
          timer = setTimeout(tick, 28);
        }
      }
    };

    timer = setTimeout(tick, 55);
    return () => clearTimeout(timer);
  }, [phrases]);

  return typed;
};

const Hero = () => {
  const typed = useTypewriter(PHRASES);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[color:var(--ds-bg)] text-[color:var(--ds-text)]"
    >
      <div
        className="ds-animate-grid pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(color-mix(in srgb, var(--ds-accent) 14%, transparent) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          animation: 'ds-drift-grid 18s linear infinite',
        }}
      />

      <div className="container relative z-[1] mx-auto flex flex-wrap items-center gap-12 px-6 py-16 xl:py-24">
        {/* text */}
        <div className="min-w-0 flex-1 basis-[460px]">
          <div className="font-ds-mono mb-4 text-xs uppercase tracking-[3px] text-[color:var(--ds-accent-300)]">
            full-stack &amp; app developer
          </div>
          <h1 className="font-ds-heading mb-5 text-[clamp(40px,6vw,68px)] font-bold leading-[1.05] tracking-[-1px]">
            Hey, I&apos;m Rob Haynes
          </h1>
          <p className="mb-7 max-w-[490px] text-lg leading-relaxed text-[color:var(--ds-text-muted)]">
            Data Engineer from South Africa based in Manchester working for Jaguar Land Rover (JLR)
          </p>

          <div className="font-ds-mono mb-7 max-w-[460px] rounded-md border border-[color:var(--ds-divider)] bg-[color:var(--ds-surface)] p-4 text-sm shadow-[var(--ds-shadow-sm)]">
            <div className="mb-3 flex gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#7d7979]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#7d7979]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#7d7979]" />
            </div>
            <div className="text-[color:var(--ds-text-muted)]">
              <span className="text-[color:var(--ds-accent-300)]">$</span> whoami
              <br />
              <span className="text-[color:var(--ds-text)]">{typed}</span>
              <span className="ds-animate-blink inline-block w-2 text-[color:var(--ds-accent-300)]" style={{ animation: 'ds-blink 1s step-end infinite' }}>
                |
              </span>
            </div>
          </div>

          <div className="mb-7 flex flex-wrap gap-3.5">
            <a
              href="mailto:robhaynes0420@gmail.com"
              className="font-ds-heading inline-flex items-center gap-2 rounded-md border border-[color:var(--ds-accent)] px-[22px] py-[11px] text-[15px] font-semibold text-[color:var(--ds-accent-300)] no-underline"
            >
              Contact Me <Send size={16} />
            </a>
            <a
              href="/pdf/robhaynes-cv.pdf"
              download="robhaynes-cv"
              className="font-ds-heading inline-flex items-center gap-2 rounded-md border border-[color:var(--ds-divider-strong)] px-[22px] py-[11px] text-[15px] font-semibold text-[color:var(--ds-text)] no-underline"
            >
              Download CV <Download size={16} />
            </a>
          </div>

          <Socials
            containerStyles="flex gap-5"
            iconsStyles="text-[color:var(--ds-text-muted)] hover:text-[color:var(--ds-accent-300)] transition-colors text-[20px]"
          />
        </div>

        {/* image */}
        <div className="relative flex min-w-0 flex-1 basis-[380px] justify-center">
          <div className="relative w-full max-w-[420px]">
            <div
              className="ds-animate-float absolute left-[-40px] top-[8%] z-[2] flex items-center gap-2.5 rounded-md bg-[#f8f4f4] p-3 px-4 shadow-[var(--ds-shadow-md)]"
              style={{ animation: 'ds-float-slow 6s ease-in-out infinite' }}
            >
              <Briefcase size={22} color="#b68235" strokeWidth={1.8} />
              <div>
                <div className="font-ds-mono text-xl font-semibold leading-none text-[#201f1d] tabular-nums">
                  <CountUp end={CODING_YEARS} delay={1} duration={2} />
                </div>
                <div className="max-w-[90px] text-[11px] leading-tight text-[#605d5d]">Years Coding Experience</div>
              </div>
            </div>
            <div
              className="ds-animate-float absolute left-[-24px] top-[74%] z-[2] flex items-center gap-2.5 rounded-md bg-[#f8f4f4] p-3 px-4 shadow-[var(--ds-shadow-md)]"
              style={{ animation: 'ds-float-slow 7s ease-in-out infinite 1s' }}
            >
              <ClipboardCheck size={22} color="#b68235" strokeWidth={1.8} />
              <div>
                <div className="font-ds-mono text-xl font-semibold leading-none text-[#201f1d] tabular-nums">
                  <CountUp end={5} delay={1} duration={2} />th
                </div>
                <div className="max-w-[90px] text-[11px] leading-tight text-[#605d5d]">on App Store</div>
              </div>
            </div>
            <div
              className="ds-animate-float absolute right-[-28px] top-[44%] z-[2] flex items-center gap-2.5 rounded-md bg-[#f8f4f4] p-3 px-4 shadow-[var(--ds-shadow-md)]"
              style={{ animation: 'ds-float-slow 6.5s ease-in-out infinite .5s' }}
            >
              <Users size={22} color="#b68235" strokeWidth={1.8} />
              <div>
                <div className="font-ds-mono text-xl font-semibold leading-none text-[#201f1d] tabular-nums">
                  <CountUp end={25} delay={1} duration={2} />+
                </div>
                <div className="max-w-[100px] text-[11px] leading-tight text-[#605d5d]">Technologies &amp; Languages</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border-[6px] border-[color:var(--ds-surface)] shadow-[var(--ds-shadow-lg)] outline outline-1 outline-[color:var(--ds-divider)]">
              <Image
                src="/hero/headshot-8bit.png"
                alt="Rob Haynes 8-bit portrait"
                width={420}
                height={420}
                priority
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[1] flex justify-center pb-10">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex text-[color:var(--ds-accent-300)]"
        >
          <ChevronDown
            size={26}
            className="ds-animate-bounce"
            style={{ animation: 'ds-bounce-arrow 1.6s ease-in-out infinite' }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
