import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

export const Hero = () => {
  return (
    <div className='pt-10'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>

        <div
            className="h-auto w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.03] bg-dot-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div
            // change the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
        </div>
        <div className="flex justify-center relative my-5">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs font-medium text-center dark:text-blue-100 text-slate-700 max-w-80">
                    Dynamic Web Magic with Next.js
                </h2>
                <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Hi, I&apos;m Zubayer, a Full Stack Developer"
                filter={true}
                duration={2}
                />

                <p className='text-center md:tracking-wider mb-4 text-base lg:text-2xl'>
                    Exploring NodeJS, ReactJS, NextJS since 2023
                </p>
                <MagicButton
                    title="Resume" 
                    icon={<FaLocationArrow />}
                    position="right" 
                />
            </div>
        </div>
    </div>
  )
}
