// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "./ui/button";
import { Alert } from "./main-alert";

// Asset imports
import Placeholder from "@/public/dashboard.webp";

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
                Introducing Heliup <ArrowUpRight className="w-4 ml-2" />
            </Link>
          </Button>
          <h1 className="text-4xl">
            <Balancer>
                Create stunning career pages, effortlessly.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground text-xl mt-4">
            <Balancer>
            Create stunning career pages, receive applicants & start the hiring process. All in one place.
            </Balancer>
          </h3>
          <div className="flex flex-row w-full max-w-fit items-center justify-center gap-4 mt-6">
            <Button asChild className="w-36 font-medium" variant={"secondary"}>
                <Link href={`https://demo.${process.env.NEXT_URL}`} target="_blank">
                See Demo
                </Link>
                </Button>
            <Button variant={"expandIcon"} className="font-medium" asChild>
                <Link href='/auth'>
                Start Hiring <i>&nbsp;- It&apos;s Free</i>
                </Link>
            </Button>
            </div>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;