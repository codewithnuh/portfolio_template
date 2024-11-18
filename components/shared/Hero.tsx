import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-10">
      <Avatar>
        <Image src={"/avatar.webp"} fill alt="profile" />
      </Avatar>
      <div className="max-w-[60%] w-full">
        <h1 className="sm:text-5xl font-bold text-4xl my-4 ">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="text-gray-400 tracking-tight ">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
      </div>
    </section>
  );
};

export default Hero;
