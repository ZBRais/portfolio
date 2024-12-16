"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { GradientHeading } from "./ui/GradientHeading";

export function Testimonials() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100 dark:bg-dot-white/[0.03] bg-dot-black-100/[0.2] items-center justify-center relative overflow-hidden">
      <GradientHeading text="Testimonials" />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    picture: "https://media.licdn.com/dms/image/v2/D4D03AQF_RtM_UzWT3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718297675324?e=2147483647&v=beta&t=u3DCo-CesfG2TI3FbtQN3D9OAdmvtgjqkFCanQYkCZE"
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    picture: "https://media.licdn.com/dms/image/v2/D4D03AQF_RtM_UzWT3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718297675324?e=2147483647&v=beta&t=u3DCo-CesfG2TI3FbtQN3D9OAdmvtgjqkFCanQYkCZE"
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    picture: "https://media.licdn.com/dms/image/v2/D4D03AQF_RtM_UzWT3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718297675324?e=2147483647&v=beta&t=u3DCo-CesfG2TI3FbtQN3D9OAdmvtgjqkFCanQYkCZE"
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    picture: "https://media.licdn.com/dms/image/v2/D4D03AQF_RtM_UzWT3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718297675324?e=2147483647&v=beta&t=u3DCo-CesfG2TI3FbtQN3D9OAdmvtgjqkFCanQYkCZE"
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    picture: "https://media.licdn.com/dms/image/v2/D4D03AQF_RtM_UzWT3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718297675324?e=2147483647&v=beta&t=u3DCo-CesfG2TI3FbtQN3D9OAdmvtgjqkFCanQYkCZE"
  },
];
