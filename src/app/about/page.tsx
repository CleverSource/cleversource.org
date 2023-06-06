import type { Metadata } from "next";
import Icons from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Hey, I'm Ryan. I'm an 18-year-old software developer.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-white font-bold text-3xl">About Me</h1>
      <p className="my-5 max-w-[460px] text-cold-purple-100">
        Hey, I'm Ryan. Most people know me as <b>cleversource</b> online.
      </p>
      <div className="space-y-8 text-cold-purple-100">
        <p>
          Despite being a full-time student, I remain dedicated to my
          professional pursuits. Programming is a true passion of mine, and I
          make a point to engage in it whenever time permits.
        </p>
        <hr />
        <p>
          I have a <b>strong passion</b> for programming and prefer traditional
          approaches. I host my backend on reliable platforms like DigitalOcean
          and AWS, and for frontend needs, I rely on Vercel or Cloudflare Pages.
          My frontend tech stack includes Next.JS, TypeScript, and Tailwind,
          while for backend work, I use GraphQL, Redis, Prisma, and Postgres.
        </p>
        <p className="mb-8">
          I offer professional consulting services! If you're interested in
          exploring collaboration opportunities, please feel free to reach out
          to me via email. I'll respond as soon as I can!
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cleversource"
            className="flex w-full border border-cold-purple-200 rounded-lg p-4 no-underline items-center text-white hover:bg-cold-purple-600 transition-all justify-between"
          >
            <div className="flex items-center">
              <Icons.Github size={20} />
              <div className="ml-3">GitHub</div>
            </div>
            <Icons.ArrowUpRight size={20} />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:contact@cleversource.org"
            className="flex w-full border border-cold-purple-200 rounded-lg p-4 no-underline items-center text-white hover:bg-cold-purple-600 transition-all justify-between"
          >
            <div className="flex items-center">
              <Icons.Mail size={20} />
              <div className="ml-3">Email me</div>
            </div>
            <Icons.ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
