import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="grid gap-6 py-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        {siteConfig.name} <br className="hidden sm:inline" />
        build by Cool Pepegas.
      </h1>
      <p className="text-muted-foreground max-w-[700px] text-lg">
        {siteConfig.description}
      </p>
      <Link
        target="_blank"
        rel="noreferrer"
        href={siteConfig.links.github}
        className={cn(buttonVariants({ variant: "outline" }), "max-w-48")}
      >
        GitHub
      </Link>
    </section>
  );
}
