"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Any footer specific animations could go here
  }, []);

  return (
    <footer
      id="contacts"
      ref={footerRef}
      className="relative w-full bg-background border-t border-white/10 z-20 py-16 px-6 md:px-12"
    >
      <div className="w-full max-w-[90vw] md:max-w-[70vw] mx-auto">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Logo */}
          <div>
            <span className="text-4xl font-serif lowercase tracking-normal">
              F/s<span className="align-top text-base">®</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2 text-xs uppercase tracking-widest font-inter opacity-60">
            <a
              href="#ourmission"
              className="hover:opacity-100 transition-opacity"
            >
              Our mission
            </a>
            <a href="#catalog" className="hover:opacity-100 transition-opacity">
              Catalog
            </a>
            <a href="#team" className="hover:opacity-100 transition-opacity">
              Team
            </a>
            <a
              href="#contacts"
              className="hover:opacity-100 transition-opacity"
            >
              Contacts
            </a>
          </nav>

          {/* Social / Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-widest uppercase opacity-40">
              Social media is under development
            </p>
            <div className="flex gap-4 text-xs font-mono uppercase tracking-widest opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">
                (Ig)
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                (Tg)
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                (Vk)
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                (Wa)
              </a>
            </div>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-3 font-inter text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity group"
            >
              <span>Write to us</span>
              <span className="w-8 h-[0.5px] bg-white/40 group-hover:w-12 transition-all duration-500" />
            </a>
          </div>
        </div>

        {/* Catalog categories row */}
        <div className="h-[0.5px] bg-white/10 mb-8" />
        <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-widest opacity-40">
          <a href="#" className="hover:opacity-80 transition-opacity">
            Home and atmosphere
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            Office and mood
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            A gift and a person
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            Joy for no reason
          </a>
        </div>

        {/* Bottom credits */}
        <div className="mt-10 flex justify-between items-end text-xs font-mono opacity-20">
          <span>© 2024 F/s®</span>
          <span>flowers-sim.ru</span>
        </div>
      </div>
    </footer>
  );
}
