"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    num: "01",
    title: (
      <>
        <em className="italic text-accent">The depth</em> <br />
        of a single flower
      </>
    ),
  },
  {
    num: "02",
    title: (
      <>
        Bouquet as <em className="italic text-accent">an</em> <br />
        <em className="italic text-accent">emotional gesture</em>
      </>
    ),
  },
  {
    num: "03",
    title: (
      <>
        <em className="italic text-accent">An extension</em> <br />
        of your space
      </>
    ),
  },
  {
    num: "04",
    title: (
      <>
        <em className="italic text-accent">Joy</em> for no reason
      </>
    ),
  },
];

const gridItems = [
  { src: "/house.png", label: "For the house" },
  { src: "/office.png", label: "For the office" },
  { src: "/gift.png", label: "As a gift" },
  { src: "/event.png", label: "For the event" },
];

export default function Home() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLHRElement | null)[]>([]);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial Flash & Reveal Animation
    const entryTl = gsap.timeline({ delay: 0.1 });
    
    // Flash effect on the hero background (fade in from bright and scaled down)
    if (bgRef.current) {
      entryTl.fromTo(bgRef.current,
        { opacity: 0, filter: "brightness(2) contrast(1.2)", scale: 1.05 },
        { opacity: 1, filter: "brightness(1) contrast(1)", scale: 1, duration: 2.5, ease: "power3.out" }
      );
    }

    // Fade in header, title, and catalog video simultaneously but slightly delayed
    const elementsToFade = [headerRef.current, heroTextRef.current, catalogRef.current].filter(Boolean);
    if (elementsToFade.length > 0) {
      entryTl.fromTo(elementsToFade,
        { opacity: 0, filter: "blur(10px)", y: 30 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5, stagger: 0.15, ease: "power3.out" },
        "-=2" // Overlap with the background flash animation
      );
    }

    // Scroll Animations for the list
    const ctx = gsap.context(() => {
      // Animate the top description paragraph
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, filter: "blur(8px)", y: 40 },
          {
            opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power2.out",
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Parallax for background image
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: -15, // Move the background UP slightly as we scroll (standard parallax)
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Sticky Header Animation
      if (headerRef.current) {
        ScrollTrigger.create({
          start: 'top -100',
          end: 99999,
          onEnter: () => {
            if (!headerRef.current) return;
            // Switch to fixed and animate down
            // headerRef.current.classList.add("fixed", "bg-background/90", "backdrop-blur-md");
            headerRef.current.classList.add("fixed");
            headerRef.current.classList.remove("absolute");
            gsap.fromTo(headerRef.current, { yPercent: -100 }, { yPercent: 0, duration: 0.5, ease: "power3.out" });
          },
          onLeaveBack: () => {
            if (!headerRef.current) return;
            // Revert back to absolute
            // headerRef.current.classList.remove("fixed", "bg-background/90", "backdrop-blur-md");
            headerRef.current.classList.remove("fixed");
            headerRef.current.classList.add("absolute");
            gsap.set(headerRef.current, { yPercent: 0 });
          }
        });
      }

      // Animate each list item
      featureRefs.current.forEach((el, index) => {
        if (!el) return;
        const line = lineRefs.current[index];
        const textWrapper = el.querySelector(".feature-text");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Trigger when top of element is 85% down viewport
          }
        });

        if (line) {
          tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "expo.out", transformOrigin: "left center" }, 0);
        }
        
        if (textWrapper) {
          tl.fromTo(
            textWrapper,
            { opacity: 0, filter: "blur(10px)", y: 30 },
            { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5, ease: "power3.out" },
            0.2
          );
        }
      });

      // Animate the image grid
      if (imageRefs.current.length > 0) {
        gsap.fromTo(
          imageRefs.current,
          { opacity: 0, filter: "blur(4px)", y: 50 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.2,
            stagger: 0.2, // Adds a cascading effect
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRefs.current[0],
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full text-foreground">
      {/* Background Image / Texture (Fixed for Parallax) */}
      <div className="fixed inset-0 z-0 bg-background pointer-events-none">
        <div ref={bgRef} className="absolute inset-x-0 top-0 w-full h-[120vh] opacity-0">
          <Image
            src="/m-vasilyev_Fashionab.png" // Actual User Asset
            alt="Hero Background Default"
            fill
            sizes="100vw"
            className="object-cover object-top opacity-80"
            priority
          />
        </div>
        {/* Noise layer overlaid dynamically - screen blend mode ensures it shows on dark background */}
        <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-10 mix-blend-screen" />
        {/* Subtle dark gradient overlay to make text readable */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[100dvh]">
        
        {/* Navigation Header */}
        <header 
          ref={headerRef} 
          className="absolute top-0 inset-x-0 z-50 flex justify-between items-start pt-6 px-6 md:px-12 uppercase text-xs tracking-widest font-inter mix-blend-difference pb-6 transition-colors duration-300 opacity-0"
        >
          <div className="leading-tight">
            <span className="text-3xl font-serif lowercase tracking-normal">F/S<span className="align-top text-sm">®</span></span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <nav className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity">Tg</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Wa</a>
            </nav>
          </div>

          <nav className="flex flex-col text-right gap-1">
            <a href="#" className="hover:opacity-70 transition-opacity">Our mission</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Catalog</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Team</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Contacts</a>
          </nav>
        </header>

        <div className="relative z-10 w-full h-full p-6 md:p-12 flex flex-col justify-center">
          <div className="mt-20 self-center md:self-start max-w-4xl mix-blend-difference z-20">
             <h1 ref={heroTextRef} className="text-xl md:text-3xl lg:text-5xl font-serif font-light leading-[1.1] tracking-tight opacity-0">
               Flowers that <em className="italic text-accent">bring a quiet joy</em><br />
               every day. For those who choose<br />
               aesthetics, attention to detail, and<br />
               the <em className="italic text-accent">pleasure of a subtle fragrance</em>
             </h1>
          </div>
        </div>

        {/* Small floating element on the side like 'W. Nominee' */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right mr-4 text-xs tracking-widest uppercase opacity-70">
          <div className="bg-black p-3">
            W. Nominee
          </div>
        </div>

        {/* Preview video overlay for bottom left */}
        <div ref={catalogRef} className="absolute bottom-12 left-6 md:left-12 w-64 md:w-80 aspect-[4/3] z-20 overflow-hidden shadow-2xl group opacity-0">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10 pointer-events-none"></div>
          <div className="absolute inset-0 flex items-end p-6 z-20 pointer-events-none mix-blend-difference">
            <span className="font-serif text-5xl italic text-white/90">Catalog</span>
          </div>
          
          <div className="absolute inset-0 scale-110 group-hover:scale-125 transition-transform duration-[3s] ease-out pointer-events-auto z-0">
            <video
              src="/m-vasilyev_A_white_o.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-20 mix-blend-overlay pointer-events-none" />
          </div>
        </div>

      </section>

      {/* Feature List Section with Asymmetric Layout */}
      <section className="relative w-full pb-32 pt-20 px-6 md:px-12 bg-transparent z-20">
        
        <div className="w-full flex justify-end mb-32">
          <p ref={descRef} className="max-w-md font-inter text-sm md:text-base leading-relaxed tracking-wide opacity-80 text-justify">
            Our flowers feel different because we work with a single species, revealing its shape, rhythm, and character without visual noise.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[90vw] md:max-w-[70vw] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.num} 
              ref={(el) => { featureRefs.current[index] = el; }}
              className="relative py-16 md:py-24"
            >
              {/* Top Separator Line */}
              <hr 
                ref={(el) => { lineRefs.current[index] = el; }}
                className="absolute top-0 left-0 w-full border-t-[0.5px] border-white/20" 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="md:col-span-3 font-serif text-4xl leading-none opacity-80">
                  {feature.num}
                </div>
                
                {/* Title */}
                <div className="md:col-span-9 feature-text">
                  <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light leading-tight tracking-tight">
                    {feature.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border for the last element */}
          <hr className="w-full border-t-[0.5px] border-white/20 mt-8" />
        </div>
      </section>

      {/* Final Catalog Grid Section */}
      <section className="relative w-full pb-40 pt-20 px-6 md:px-12 bg-background z-20">
        <div className="flex flex-col gap-8 w-full max-w-[90vw] md:max-w-[70vw] mx-auto">
          {/* Top row of 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 items-end">
            {gridItems.slice(0, 3).map((item, i) => (
              <div 
                key={item.label}
                ref={(el) => { imageRefs.current[i] = el; }}
                className="flex flex-col gap-3 group"
              >
                <div className={`relative w-full overflow-hidden ${i === 1 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                  <Image 
                    src={item.src} 
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-15 mix-blend-overlay pointer-events-none" />
                </div>
                <div className="font-mono text-xs tracking-widest uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row of 1 image, intentionally offset */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 mt-12 md:mt-24">
            <div 
              ref={(el) => { imageRefs.current[3] = el; }}
              className="md:col-span-1 flex flex-col gap-3 group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image 
                  src={gridItems[3].src} 
                  alt={gridItems[3].label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-15 mix-blend-overlay pointer-events-none" />
              </div>
              <div className="font-mono text-xs tracking-widest uppercase">
                {gridItems[3].label}
              </div>
            </div>
            {/* Empty columns for spacing */}
            <div className="hidden md:block md:col-span-2 pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
