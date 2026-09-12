import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, GraduationCap, Calendar, Briefcase, Coffee, Database, Webhook, Boxes, FlaskConical, Globe } from 'lucide-react';
import {
  SiSwift, SiPython, SiTypescript, SiJavascript, SiC, SiCplusplus,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiGnubash,
  SiGit, SiGithubactions, SiGitlab, SiKubernetes, SiDocker, SiGooglecloud,
  SiPowerbi, SiTableau, SiFigma, SiFirebase, SiReact, SiVisualstudiocode, SiTailwindcss,
} from 'react-icons/si';
import Reveal from "./Reveal";

const infoData = [
  { icon: <User2 size={18} />, text: 'Rob Haynes' },
  { icon: <MailIcon size={18} />, text: 'robhaynes0420@gmail.com' },
  { icon: <Calendar size={18} />, text: 'Born in Apr, 2002' },
  { icon: <GraduationCap size={18} />, text: 'BSc (Hons) in Computer Science (First Class)' },
  { icon: <HomeIcon size={18} />, text: 'Manchester, UK' },
]

const experienceData = [
  { company: 'JLR (Jaguar Land Rover)', role: 'Data Engineer', years: '2025 – present' },
  { company: 'JLR (Jaguar Land Rover)', role: 'Undergraduate Software Engineer', years: '2023 – 2024' },
  { company: 'StudyDrive', role: 'Student Brand Ambassador', years: '2022 – 2022' },
]

const educationData = [
  { university: 'University of Manchester', qualification: 'BSc (Hons) in Computer Science (First Class)', years: '2021 – 2025' },
  { university: 'Hilton College', qualification: 'National Senior Certificate (IEB)', years: '2016 – 2020' },
]

const techData = [
  { name: 'Swift', Icon: SiSwift },
  { name: 'Python', Icon: SiPython },
  { name: 'Java', Icon: Coffee },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'C', Icon: SiC },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'SQL', Icon: Database },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Redis', Icon: SiRedis },
  { name: 'Bash / Shell', Icon: SiGnubash },
  { name: 'REST APIs', Icon: Webhook },
  { name: 'Microservices', Icon: Boxes },
  { name: 'Git', Icon: SiGit },
  { name: 'GitHub Actions', Icon: SiGithubactions },
  { name: 'GitLab CI/CD', Icon: SiGitlab },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: 'Docker', Icon: SiDocker },
  { name: 'GCP', Icon: SiGooglecloud },
  { name: 'Power BI', Icon: SiPowerbi },
  { name: 'Tableau', Icon: SiTableau },
  { name: 'Unit & Integration Testing', Icon: FlaskConical },
  { name: 'Web Development', Icon: Globe },
  { name: 'Figma', Icon: SiFigma },
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'React', Icon: SiReact },
  { name: 'VS Code', Icon: SiVisualstudiocode },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
];

const TimelineItem = ({ title, subtitle, years }) => (
  <div className="flex gap-4">
    <div className="relative w-px flex-none bg-[color:var(--ds-divider-strong)]">
      <span className="absolute -left-1 top-0 h-[9px] w-[9px] rounded-full bg-[color:var(--ds-accent-300)]" />
    </div>
    <div>
      <div className="mb-1 text-[17px] font-semibold">{title}</div>
      <div className="mb-1.5 text-[color:var(--ds-text-muted)]">{subtitle}</div>
      <div className="font-ds-mono text-[13px] text-[color:var(--ds-accent-300)]">{years}</div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative z-[1] scroll-mt-20 bg-[color:var(--ds-bg)] px-6 py-16 text-[color:var(--ds-text)]">
      <Reveal className="container mx-auto">
        <div className="font-ds-mono mb-2 text-xs uppercase tracking-[3px] text-[color:var(--ds-accent-300)]">// 02 — about</div>
        <h2 className="font-ds-heading mb-10 text-[clamp(30px,3.6vw,42px)] font-bold">About Me</h2>

        <Tabs defaultValue="personal" className="grid items-start gap-8 md:grid-cols-[200px_minmax(0,1fr)]">
          <TabsList className="grid h-auto w-full grid-cols-1 gap-1 rounded-none bg-transparent p-0 xl:bg-transparent">
            <TabsTrigger value="personal" className="font-ds-mono h-auto w-full justify-start rounded-none border-l-2 border-transparent bg-transparent px-4 py-3 text-[13px] text-[color:var(--ds-text-muted)] transition-all duration-200 hover:translate-x-1 hover:text-[color:var(--ds-text)] data-[state=active]:border-l-[color:var(--ds-accent-300)] data-[state=active]:bg-[color:var(--ds-surface)] data-[state=active]:text-[color:var(--ds-text)] data-[state=active]:shadow-none">
              personal_info
            </TabsTrigger>
            <TabsTrigger value="qualifications" className="font-ds-mono h-auto w-full justify-start rounded-none border-l-2 border-transparent bg-transparent px-4 py-3 text-[13px] text-[color:var(--ds-text-muted)] transition-all duration-200 hover:translate-x-1 hover:text-[color:var(--ds-text)] data-[state=active]:border-l-[color:var(--ds-accent-300)] data-[state=active]:bg-[color:var(--ds-surface)] data-[state=active]:text-[color:var(--ds-text)] data-[state=active]:shadow-none">
              qualifications
            </TabsTrigger>
            <TabsTrigger value="skills" className="font-ds-mono h-auto w-full justify-start rounded-none border-l-2 border-transparent bg-transparent px-4 py-3 text-[13px] text-[color:var(--ds-text-muted)] transition-all duration-200 hover:translate-x-1 hover:text-[color:var(--ds-text)] data-[state=active]:border-l-[color:var(--ds-accent-300)] data-[state=active]:bg-[color:var(--ds-surface)] data-[state=active]:text-[color:var(--ds-text)] data-[state=active]:shadow-none">
              skills
            </TabsTrigger>
          </TabsList>

          <div className="min-w-0">
            <TabsContent value="personal">
              <h3 className="font-ds-heading mb-3 text-2xl font-bold">Data & Software Engineering for {new Date().getFullYear() - 2018} Years</h3>
              <p className="mb-7 max-w-3xl text-base leading-relaxed text-[color:var(--ds-text-muted)]">
                By day I'm untangling terabytes of automotive data into pipelines JLR's engineers can actually trust; by night I'm usually knee-deep in a side project that has no real business existing — a school-project blockchain, a betting arbitrage bot, an app that tells a boarding school what's for lunch. I like software that's a little bit weird and a lot reliable, and I'm at my happiest turning a fuzzy idea into something people can click, poke, and (hopefully) enjoy. Equal parts data engineer, full-stack tinkerer, and professional overthinker of edge cases.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {infoData.map((item, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <span className="text-[color:var(--ds-accent-300)]">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="qualifications">
              <h3 className="font-ds-heading mb-6 text-2xl font-bold">My Awesome Journey</h3>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <div className="mb-5 flex items-center gap-2.5 text-[color:var(--ds-accent-300)]">
                    <Briefcase size={20} />
                    <h4 className="font-ds-heading text-lg font-semibold capitalize">experience</h4>
                  </div>
                  <div className="flex flex-col gap-6">
                    {experienceData.map((item, index) => (
                      <TimelineItem key={index} title={item.company} subtitle={item.role} years={item.years} />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-5 flex items-center gap-2.5 text-[color:var(--ds-accent-300)]">
                    <GraduationCap size={20} />
                    <h4 className="font-ds-heading text-lg font-semibold capitalize">education</h4>
                  </div>
                  <div className="flex flex-col gap-6">
                    {educationData.map((item, index) => (
                      <TimelineItem key={index} title={item.university} subtitle={item.qualification} years={item.years} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <h3 className="font-ds-heading mb-6 text-2xl font-bold">What I Use Everyday</h3>
              <div className="font-ds-mono mb-3 text-xs uppercase tracking-[2px] text-[color:var(--ds-accent-300)]">skills &amp; tools</div>
              <div className="mb-4 border-b border-[color:var(--ds-divider)]" />
              <div className="flex flex-wrap gap-2.5">
                {techData.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="font-ds-mono inline-flex items-center gap-2 rounded-sm border border-[color:var(--ds-divider-strong)] px-3 py-1.5 text-[13px]"
                  >
                    <Icon size={15} className="text-[color:var(--ds-accent-300)]" />
                    {name}
                  </span>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </Reveal>
    </section>
  )
}

export default About
