"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
  }: {
    items: {
      quote: string;
      name: string;
      title: string;
      picture: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
  }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
  
    useEffect(() => {
      addAnimation();
    }, []);
    const [start, setStart] = useState(false);
  
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
  
        getDirection();
        getSpeed();
        setStart(true);
      }
    }
  
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    };
  
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };
  
    return (
      <>
        <div
          ref={containerRef}
          className={cn(
            "scroller bg-transparent relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
              start && "animate-scroll ",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item) => (
              <li
                className="w-[350px] rounded-[22px] max-w-full relative flex-shrink-0 md:w-[450px]"
                key={item.name}
              >
                {/* Wrap each card with BackgroundGradient */}
                <BackgroundGradient
                  className="rounded-[22px] h-full p-8 bg-white dark:bg-zinc-900"
                  containerClassName="h-full"
                  animate
                >
                  <blockquote className="relative">
                    <span className="tracking-wide text-sm leading-[1.6] text-gray-700 dark:text-white font-normal">
                      {item.quote}
                    </span>
                    <div className="mt-6 flex flex-row items-center">
                      <img
                        src={item.picture}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="flex flex-col px-2 gap-1">
                        <span className="text-sm text-gray-700 dark:text-white font-serif font-extrabold">
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-white font-serif">
                          {item.title}
                        </span>
                      </span>
                    </div>
                  </blockquote>
                </BackgroundGradient>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  