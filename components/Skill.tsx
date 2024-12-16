"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { GradientHeading } from "./ui/GradientHeading";

function Skill() {
  return (
    <div className="flex flex-auto justify-center bg-transparent">
      {/* Skill Section */}
      <div className="h-3/5 w-3/5">
        {/* Wrap the entire skill card with BackgroundGradient */}
        <BackgroundGradient
          className="rounded-[22px] h-full p-6 bg-white dark:bg-zinc-900"
          containerClassName="h-full"
          animate
        >
          <div className="relative z-10 flex flex-col items-center">
            {/* Title */}
            <GradientHeading text="Dev Skill" />
            {/* Icons */}
            <img
              className="w-3/5"
              src="https://skillicons.dev/icons?i=nodejs,react,nextjs,postgres,graphql,prisma,git&perline=4"
              alt="Skill Icons"
            />
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}

export default Skill;
