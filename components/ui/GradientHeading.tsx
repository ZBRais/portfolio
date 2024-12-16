import React from "react";
import { cn } from "@/utils/cn"; // Optional: Use if you have a utility function for conditional classes.

export const GradientHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string; // Allow additional custom styles to be passed.
}) => {
  return (
    <p
      className={cn(
        "text-transparent uppercase bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold p-2 text-3xl md:text-4xl lg:text-5xl text-center rounded-full",
        className
      )}
    >
      {text}
    </p>
  );
};
