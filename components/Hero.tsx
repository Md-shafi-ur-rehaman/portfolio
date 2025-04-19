import React from "react";
import { Cover } from "@/components/ui/Cover";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/utils/cn";
import ShinyText from "@/components/ui/ShinyText";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="gold"
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:80px_80px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Text */}
      <div className="h-[70vh]">
        <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto mt-[20vh]">
        <ShinyText text="Hi im Shafi ur rehaman!" disabled={false} speed={3} className='text-2xl uppercase antialiased' />
        </div>
        <div className="relative z-10 flex flex-col items-center  max-w-7xl mx-auto">
          <h1 className="text-4xl animate- md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            I Build amazing websites <br /> at <Cover>Supeeer speed</Cover>
          </h1>
        </div>
        <div className="relative z-10 flex justify-center gap-10 items-center max-w-7xl mx-auto mt-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 px-10 text-sm font-medium text-white backdrop-blur-3xl">
            Lets talk!
          </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
