// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "./ui/button";
import { Alert } from "./main-alert";

// Asset imports
import Placeholder from "@/public/dashboard.png";

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
              Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1 className="text-4xl">
            <Balancer>
                Create stunning career pages, effortlessly.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground text-xl">
            <Balancer>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Balancer>
          </h3>
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