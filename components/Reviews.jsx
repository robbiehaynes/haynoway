import Image from "next/image";
import Reveal from "./Reveal";

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Luke Morton',
    job: 'Manager @ JLR',
    review: "Rob has been a great addition to my team within PI. He is confident, knowledgeable, attentive and very easy to do business with. Rob's insight in to the data engineering world, makes him an asset to any team or business."
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Prabhdeep Singh',
    job: 'Lead Data Engineer @ JLR',
    review: 'Rob is a top-notch programmer, exceptionally organized, and always eager to expand his knowledge. A valuable asset to any team.'
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Akhil Thomas',
    job: 'Lead Data Engineer @ JLR',
    review: "Rob is a highly personable and enthusiastic individual. He is a valuable asset to any team and I have no doubt he will continue to achieve great things in his career."
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Mariusz Truchlewski',
    job: 'Lead Data Engineer @ JLR',
    review: 'Rob is a truly valuable member of our team because of his devotion and pursuit of excellence. His remarkable work ethic, flexibility, and creativity are just a few of his many positive qualities.'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Omar Badawi',
    job: 'Software Engineer @ J.P. Morgan',
    review: "Rob's exceptional blend of technical prowess and creativity elevates project success. He consistently exceeds expectations, adapting seamlessly to evolving demands"
  },
]

const Reviews = () => {
  return (
    <section id="testimonials" className="relative z-[1] scroll-mt-20 bg-[color:var(--ds-bg)] px-6 py-16 text-[color:var(--ds-text)]">
      <Reveal className="container mx-auto">
        <div className="font-ds-mono mb-2 text-center text-xs uppercase tracking-[3px] text-[color:var(--ds-accent-300)]">// 04 — testimonials</div>
        <h2 className="font-ds-heading mb-12 text-center text-[clamp(30px,3.6vw,42px)] font-bold">Testimonials</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((person) => (
            <div
              key={person.name}
              className="rounded-lg border border-[color:var(--ds-divider)] bg-[color:var(--ds-surface)] p-7 transition-all duration-200 hover:-translate-y-1.5 hover:border-[color:var(--ds-accent-300)]"
            >
              <div className="mb-4.5 flex items-center gap-3.5">
                <Image src={person.avatar} alt={person.name} width={52} height={52} className="rounded-full" />
                <div>
                  <div className="text-[16px] font-semibold">{person.name}</div>
                  <div className="text-[13px] text-[color:var(--ds-text-muted)]">{person.job}</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[color:var(--ds-text-muted)]">{person.review}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Reviews
