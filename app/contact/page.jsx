import { HomeIcon, PhoneCall, MailIcon } from "lucide-react"

import Form from "@/components/Form"

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">I'm always happy to have a conversation whether it's for a potential project request, to get some advice, to ask a question or just to network, my inbox is always open. I'll get back to you ASAP</p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat">

          </div>
        </div>
        {/* contact form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>robhaynes0420@gmail.com</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Manchester, UK</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+44 77174 62481</div>
            </div>
          </div>
          {/* form */}
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact