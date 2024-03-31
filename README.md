[![Project Banner](readme-banner.png)](https://www.haynoway.com)

A lot has changed since I originally developed my portfolio website back in 2018. I've grown as a developer, learnt so much more and I thought it was about time to put it to work. Aside, modern web technology has come a long way and it's about time I learnt modern frameworks!

## Built with:

- :computer: **Front-end**: [NextJS 14](https://nextjs.org)
- :art: **Styling**: [TailwindCSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com)
- :electric_plug: **Back-end**: NextJS App Routers, [Nodemailer](https://www.npmjs.com/package/nodemailer)
- :key: **Deployed on**: [Vercel](https://vercel.com/)

## CI/CD

While working for JLR we had CI/CD pipelines to compile and test executables and web applications which I found fascinating. So fascinating infact that I thought I would incorporate CI/CD into this project in various ways :hammer:
- The site being deployed on Vercel means any commits pushed to the master branch instantly trigger a build and deploy to haynoway.com
- My CV is automatically compiled with pdflatex when there is a .tex file pushed to public/pdf making it instantly available on my site. To find out more take a look at the pipeline's [YAML file](https://github.com/robbiehaynes/haynoway/blob/4b3f5dd54fd90d0e311adc6a4ce8002f0d54ee53/.github/workflows/main.yml)

## Installation

1. Clone the repository: `git clone https://github.com/robbiehaynes/haynoway.git`
2. Install dependencies: `npm install`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Outfit, a custom Google Font.

## Contact

For any questions or feedback, please contact [robhaynes0420@gmail.com](mailto:robhaynes0420@gmail.com).