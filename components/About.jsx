import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Rob Haynes',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+44 77174 62481',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'robhaynes0420@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 20 Apr, 2002',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'BSc Computer Science',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Manchester, UK',
  },
]

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'University of Manchester',
        qualification: 'Bachelor of Science in Computer Science',
        years: '2021 - 2025',
      },
      {
        university: 'Hilton College',
        qualification: 'National Senior Certificate (IEB)',
        years: '2016 - 2020',
      }
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'JLR (Jaguar Land Rover)',
        role: 'Undergraduate Software Engineer',
        years: '2023 - 2024',
      },
      {
        company: 'StudyDrive',
        role: 'Student Brand Ambassador',
        years: '2022 - 2022',
      }
    ]
  }
]

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'Swift'
      },
      {
        name: 'Python'
      },
      {
        name: 'Java'
      },
      {
        name: 'SQL, MongoDB'
      },
      {
        name: 'Web Development'
      },
      {
        name: 'C, C++'
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/firebase.svg',
      },
      {
        imgPath: '/about/react.svg',
      },
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/tailwind.svg',
      },
      {
        imgPath: '/about/docker.svg',
      }
    ]
  }
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  }

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value='qualifications'>Qualifications</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>Skills</TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value='personal'>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched Service Quality for 8 Years</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialise in crafting intuitive programs with cutting-edge technology, delivering dynamic and engaging user experiences</p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index)=> {
                        return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    {/* Experience and Education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map((item, index)=> {
                            const {company, role, years} = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map((item, index)=> {
                            const {university, qualification, years} = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value='skills'>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills List */}
                      <div>
                        {getData(skillData, 'skills').data.map((item, index)=> {
                          const {name} = item;
                          return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium">{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tools List */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'tools').data.map((item, index)=> {
                          const {imgPath} = item;
                          return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About