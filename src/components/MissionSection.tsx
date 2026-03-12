"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MissionSection() {
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate mission section
      if (missionRef.current) {
        gsap.fromTo(
          missionRef.current.querySelectorAll(".mission-anim"),
          { opacity: 0, y: 50, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: missionRef.current, start: "top 75%" },
          },
        );
      }
    }, missionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ourmission"
      ref={missionRef}
      className="relative w-full py-32 px-6 md:px-12 bg-background z-20 overflow-hidden"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-[0.5px] bg-white/10" />

      <div className="w-full max-w-[90vw] md:max-w-[70vw] mx-auto">
        {/* Large italic heading */}
        <div className="mb-20 mission-anim">
          <p className="font-mono text-xs tracking-widest uppercase opacity-50 mb-6">
            Our mission
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[0.9] tracking-tight">
            <em className="italic text-accent">A team</em> that reveals the
            beauty
            <br />
            of flowers <em className="italic">in every moment</em>
          </h2>
        </div>

        {/* Mission body text — two columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mission-anim">
          <p className="font-inter text-sm leading-relaxed tracking-wide opacity-75">
            We are a company of florists and aesthetes. People for whom form,
            silence, and attention to detail are more important than loud words,
            creating flowers that live in space, delight the eye and remain in
            the memory of everyone who sees them
          </p>
          <p className="font-inter text-sm leading-relaxed tracking-wide opacity-75">
            We pay attention to the shape, pauses, and sensations that flowers
            create in the space. It is important for us that the composition
            does not contradict the interior or the mood of the day, but rather
            gently supports them, remaining close at hand and reminding us of
            simple joys that do not require explanation.
          </p>
        </div>

        {/* The famous line */}
        <div className="mt-20 mission-anim">
          <div className="h-[0.5px] w-full bg-white/10 mb-10" />
          <p className="text-xl md:text-2xl font-inter font-light tracking-wide opacity-60 max-w-xl">
            We care passionately about the health and happiness
          </p>
          <p className="mt-8 font-inter text-sm leading-relaxed tracking-wide opacity-60 max-w-lg">
            We create minimalist floral arrangements that enhance the elegance
            of any space or event. You share your mood, and we choose the shape,
            rhythm, and single flower to create a precise visual accent. The
            purity and restraint of our designs ensure that the flowers look
            appropriate and expressive in any environment.
          </p>
        </div>
      </div>
    </section>
  );
}
