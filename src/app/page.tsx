import Image from "next/image";
import Icons from "@/components/icons";

export default function HomePage() {
  return (
    <section>
      <h1 className="text-white font-bold text-3xl">ryan</h1>
      <p className="my-5 max-w-[460px] text-cold-purple-100">
        Hey, I'm Ryan. I'm an 20-year-old software developer.
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="Ryan"
          className="rounded-full grayscale"
          src={"https://avatars.githubusercontent.com/u/21996470?v=4"}
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-cold-purple-100">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cleversource"
            className="flex items-center gap-2"
          >
            <Icons.Github size={20} />
            {`CleverSource`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:contact@cleversource.org"
            className="flex items-center gap-2"
          >
            <Icons.Mail size={20} />
            {`contact@cleversource.org`}
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-cold-purple-100">
        Currently I'm a full-time student and I occasionally tinker with the
        latest tech stacks. Currently I'm using Next.js, TypeScript, and
        Tailwind for this portfolio. I dabble in C++, C#, TypeScript, Python,
        and Lua.
      </p>
    </section>
  );
}
