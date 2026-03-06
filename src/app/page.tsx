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

// Catalog categories from the original site
const catalogCategories = [
  {
    id: "cat-1",
    label: "Home and atmosphere",
    sublabel:
      "Monocultures for living spaces create a feeling of calmness and aesthetic depth in any room",
    img: "/m-vasilyev_1.png",
    href: "#",
  },
  {
    id: "cat-2",
    label: "Office and mood",
    sublabel:
      "Monocultures in the office create a space where it is pleasant and calm to work, and attention to detail is felt in every corner",
    img: "/m-vasilyev_2.png",
    href: "#",
  },
  {
    id: "cat-3",
    label: "A gift and a person",
    sublabel:
      "A bouquet as a precise gesture — one flower chosen for a specific person, moment, and mood",
    img: "/m-vasilyev_3.jpg",
    href: "#",
  },
  {
    id: "cat-4",
    label: "Event and concept",
    sublabel:
      "We choose flowers for events, supporting the style, idea, and overall mood of the event",
    img: "/m-vasilyev_4.jpg",
    href: "#",
  },
];

// Team members from the original site
const teamMembers = [
  {
    role: "The main florist",
    name: "Sophia Laurent",
    description:
      "Sophia creates bouquets where each flower reveals its shape, rhythm, and character. She works with minimalism as a precise tool, removing all unnecessary elements and leaving only the essence. Her compositions exude a sense of calmness, confidence, and respect for the natural beauty of the flower.",
    tagline: "To feel the moment and stop at the right time",
    img: "/team-sophia.png",
    align: "right" as const,
  },
  {
    role: "Florist-designer",
    name: "Isabella Fox",
    description:
      "Isabella selects compositions that become a natural extension of the space, rather than just a decoration on top. She has a keen sense of scale, light, and pauses, creating bouquets that blend seamlessly into the interior. Her work is always understated yet profound.",
    tagline: "A silence where form speaks for itself",
    img: "/team-isabella.png",
    align: "left" as const,
  },
  {
    role: "Artistic consultant",
    name: "Amelia Fischer",
    description:
      "Amelia works with sensations and moods, helping colors to find their exact place and time. She listens carefully to people, context and space, turning the dialogue into a well-balanced visual solution. What is important for her is not spectacular, but appropriateness and inner response.",
    tagline: "Appropriateness is the highest form of beauty",
    img: "/gift.png",
    align: "right" as const,
  },
  {
    role: "Composition Specialist",
    name: "Charlotte Dubois",
    description:
      "Charlotte creates bouquets with a special attention to structure, rhythm, and texture. She knows how to create a balance that makes the composition feel whole and calm, without any tension or overload. Her work creates a sense of order and inner balance.",
    tagline: "Rhythm, order, and a calm depth",
    img: "/house.png",
    align: "left" as const,
  },
  {
    role: "Composition Specialist",
    name: "Elena Schmidt",
    description:
      "Elena works with flowers as a language of emotions and atmosphere. She feels how mood can be conveyed through form, color, and pause, and turns bouquets into a state that stays with a person for a long time. Her style is soft, expressive, and very personal.",
    tagline: "The emotion that remains after a glance",
    img: "/office.png",
    align: "right" as const,
  },
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
  const missionRef = useRef<HTMLDivElement>(null);
  const catalogSectionRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const teamMemberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initial Flash & Reveal Animation
    const entryTl = gsap.timeline({ delay: 0.1 });

    if (bgRef.current) {
      entryTl.fromTo(
        bgRef.current,
        { opacity: 0, filter: "brightness(2) contrast(1.2)", scale: 1.05 },
        {
          opacity: 1,
          filter: "brightness(1) contrast(1)",
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
        },
      );
    }

    const elementsToFade = [
      headerRef.current,
      heroTextRef.current,
      catalogRef.current,
    ].filter(Boolean);
    if (elementsToFade.length > 0) {
      entryTl.fromTo(
        elementsToFade,
        { opacity: 0, filter: "blur(10px)", y: 30 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=2",
      );
    }

    const ctx = gsap.context(() => {
      // Animate the top description paragraph
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, filter: "blur(8px)", y: 40 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: descRef.current, start: "top 85%" },
          },
        );
      }

      // Parallax for background image
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: -15,
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
          start: "top -100",
          end: 99999,
          onEnter: () => {
            if (!headerRef.current) return;
            headerRef.current.classList.add("fixed");
            headerRef.current.classList.remove("absolute");
            gsap.fromTo(
              headerRef.current,
              { yPercent: -100 },
              { yPercent: 0, duration: 0.5, ease: "power3.out" },
            );
          },
          onLeaveBack: () => {
            if (!headerRef.current) return;
            headerRef.current.classList.remove("fixed");
            headerRef.current.classList.add("absolute");
            gsap.set(headerRef.current, { yPercent: 0 });
          },
        });
      }

      // Animate each feature list item
      featureRefs.current.forEach((el, index) => {
        if (!el) return;
        const line = lineRefs.current[index];
        const textWrapper = el.querySelector(".feature-text");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 85%" },
        });

        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1,
              ease: "expo.out",
              transformOrigin: "left center",
            },
            0,
          );
        }

        if (textWrapper) {
          tl.fromTo(
            textWrapper,
            { opacity: 0, filter: "blur(10px)", y: 30 },
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 1.5,
              ease: "power3.out",
            },
            0.2,
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
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: imageRefs.current[0], start: "top 80%" },
          },
        );
      }

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

      // Horizontal scroll for catalog section
      if (catalogSectionRef.current && horizontalTrackRef.current) {
        const track = horizontalTrackRef.current;
        const numCards = catalogCategories.length;
        const getScrollDistance = () => track.scrollWidth - window.innerWidth;
        const panelTexts = Array.from(
          track.querySelectorAll<HTMLElement>(".h-panel-text"),
        );

        // Set initial state — all except first are invisible
        panelTexts.forEach((el, i) => {
          gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 });
        });

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: catalogSectionRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${getScrollDistance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // progress 0→1 maps to panels 0→(N-1)
              const rawProgress = self.progress * (numCards - 1);
              panelTexts.forEach((el, i) => {
                // distance of this panel from current scroll position (in panel units)
                const dist = Math.abs(rawProgress - i);
                const opacity = Math.max(0, 1 - dist * 2);
                const y = (1 - opacity) * 20;
                gsap.set(el, { opacity, y });
              });
            },
          },
        });
      }

      // Animate team members
      teamMemberRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 70, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.3,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
          },
        );
      });

      // Animate footer
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full text-foreground">
      {/* Background Image / Texture (Fixed for Parallax) */}
      <div className="fixed inset-0 z-0 bg-background pointer-events-none">
        <div
          ref={bgRef}
          className="absolute inset-x-0 top-0 w-full h-[120vh] opacity-0"
        >
          <Image
            src="/m-vasilyev_Fashionab.png"
            alt="Hero Background Default"
            fill
            sizes="100vw"
            className="object-cover object-top opacity-80"
            priority
          />
        </div>
        {/* Noise layer */}
        <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-10 mix-blend-screen" />
        {/* Gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[100dvh]">
        {/* Navigation Header */}
        <header
          ref={headerRef}
          className="absolute top-0 inset-x-0 z-50 flex justify-between items-start pt-6 px-6 md:px-12 uppercase text-xs tracking-widest font-inter mix-blend-difference pb-6 transition-colors duration-300 opacity-0"
        >
          <div className="leading-tight">
            <span className="text-3xl font-serif lowercase tracking-normal">
              F/S<span className="align-top text-sm">®</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            <nav className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity">
                Tg
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Wa
              </a>
            </nav>
          </div>

          <nav className="flex flex-col text-right gap-1">
            <a
              href="#ourmission"
              className="hover:opacity-70 transition-opacity"
            >
              Our mission
            </a>
            <a href="#catalog" className="hover:opacity-70 transition-opacity">
              Catalog
            </a>
            <a href="#team" className="hover:opacity-70 transition-opacity">
              Team
            </a>
            <a href="#contacts" className="hover:opacity-70 transition-opacity">
              Contacts
            </a>
          </nav>
        </header>

        <div className="relative z-10 w-full h-full p-6 md:p-12 flex flex-col justify-center">
          <div className="mt-20 self-center md:self-start max-w-4xl mix-blend-difference z-20">
            <h1
              ref={heroTextRef}
              className="text-xl md:text-3xl lg:text-5xl font-serif font-light leading-[1.1] tracking-tight opacity-0"
            >
              Flowers that{" "}
              <em className="italic text-accent">bring a quiet joy</em>
              <br />
              every day. For those who choose
              <br />
              aesthetics, attention to detail, and
              <br />
              the{" "}
              <em className="italic text-accent">
                pleasure of a subtle fragrance
              </em>
            </h1>
          </div>
        </div>

        {/* W. Nominee badge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right mr-4 text-xs tracking-widest uppercase opacity-70">
          <div className="bg-black p-3">W. Nominee</div>
        </div>

        {/* Catalog preview video */}
        <div
          ref={catalogRef}
          className="absolute bottom-12 left-6 md:left-12 w-64 md:w-80 aspect-[4/3] z-20 overflow-hidden shadow-2xl group opacity-0"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10 pointer-events-none" />
          <div className="absolute inset-0 flex items-end p-6 z-20 pointer-events-none mix-blend-difference">
            <span className="font-serif text-5xl italic text-white/90">
              Catalog
            </span>
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

      {/* ── FEATURE LIST SECTION ── */}
      <section className="relative w-full pb-32 pt-20 px-6 md:px-12 bg-transparent z-20">
        <div className="w-full flex justify-end mb-32">
          <p
            ref={descRef}
            className="max-w-md font-inter text-sm md:text-base leading-relaxed tracking-wide opacity-80 text-justify"
          >
            Our flowers feel different because we work with a single species,
            revealing its shape, rhythm, and character without visual noise.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[90vw] md:max-w-[70vw] mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.num}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="relative py-16 md:py-24"
            >
              <hr
                ref={(el) => {
                  lineRefs.current[index] = el;
                }}
                className="absolute top-0 left-0 w-full border-t-[0.5px] border-white/20"
              />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 font-serif text-4xl leading-none opacity-80">
                  {feature.num}
                </div>
                <div className="md:col-span-9 feature-text">
                  <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light leading-tight tracking-tight">
                    {feature.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
          <hr className="w-full border-t-[0.5px] border-white/20 mt-8" />
        </div>
      </section>

      {/* ── CATALOG GRID SECTION (existing 4-image grid) ── */}
      <section className="relative w-full pb-40 pt-20 px-6 md:px-12 bg-background z-20">
        <div className="flex flex-col gap-8 w-full max-w-[90vw] md:max-w-[70vw] mx-auto">
          {/* Top row of 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 items-end">
            {gridItems.slice(0, 3).map((item, i) => (
              <div
                key={item.label}
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="flex flex-col gap-3 group"
              >
                <div
                  className={`relative w-full overflow-hidden ${i === 1 ? "aspect-square" : "aspect-[3/4]"}`}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-15 mix-blend-overlay pointer-events-none" />
                </div>
                <div className="font-mono text-xs tracking-widest uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row — offset single image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 mt-12 md:mt-24">
            <div
              ref={(el) => {
                imageRefs.current[3] = el;
              }}
              className="md:col-span-1 flex flex-col gap-3 group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={gridItems[3].src}
                  alt={gridItems[3].label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-15 mix-blend-overlay pointer-events-none" />
              </div>
              <div className="font-mono text-xs tracking-widest uppercase">
                {gridItems[3].label}
              </div>
            </div>
            <div className="hidden md:block md:col-span-2 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── OUR MISSION SECTION ── */}
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
              silence, and attention to detail are more important than loud
              words, creating flowers that live in space, delight the eye and
              remain in the memory of everyone who sees them
            </p>
            <p className="font-inter text-sm leading-relaxed tracking-wide opacity-75">
              We pay attention to the shape, pauses, and sensations that flowers
              create in the space. It is important for us that the composition
              does not contradict the interior or the mood of the day, but
              rather gently supports them, remaining close at hand and reminding
              us of simple joys that do not require explanation.
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
              of any space or event. You share your mood, and we choose the
              shape, rhythm, and single flower to create a precise visual
              accent. The purity and restraint of our designs ensure that the
              flowers look appropriate and expressive in any environment.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATALOG CATEGORIES — HORIZONTAL SCROLL ── */}
      <section
        id="catalog"
        ref={catalogSectionRef}
        className="relative w-full h-screen overflow-hidden bg-background z-20"
      >
        {/* Section label — stays fixed in top-left while panels scroll */}
        <div className="absolute top-8 left-6 md:left-12 z-30 flex items-center gap-4">
          <p className="font-mono text-xs tracking-widest uppercase opacity-40">
            Catalog
          </p>
          <span className="inline-block w-8 h-[0.5px] bg-white/20" />
          <p className="font-mono text-xs tracking-widest uppercase opacity-20">
            {catalogCategories.length} categories
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-6 md:left-12 z-30 flex items-center gap-3 opacity-30">
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll
          </span>
          <span className="w-12 h-[0.5px] bg-white/40" />
        </div>

        {/* Horizontal track — width = numCards × 100vw */}
        <div
          ref={horizontalTrackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${catalogCategories.length * 100}vw` }}
        >
          {catalogCategories.map((cat, i) => (
            <a
              key={cat.id}
              href={cat.href}
              className="catalog-card relative flex-shrink-0 w-screen h-full overflow-hidden group"
            >
              {/* Full-bleed background image */}
              <Image
                src={cat.img}
                alt={cat.label}
                fill
                sizes="100vw"
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                priority={i === 0}
              />

              {/* Noise grain */}
              <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-10 mix-blend-overlay pointer-events-none z-10" />

              {/* Dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />

              {/* Panel number */}
              <span className="absolute top-8 right-8 font-mono text-xs tracking-widest opacity-30 z-20">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Text content */}
              <div className="h-panel-text absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-xl">
                <p className="font-mono text-xs tracking-widest uppercase opacity-50 mb-4">
                  {cat.label}
                </p>
                <h3 className="font-serif text-5xl md:text-7xl font-light leading-[0.9] tracking-tight text-white mb-6">
                  {i === 0 ? (
                    <>
                      <em className="italic text-accent">Home</em>
                      <br />
                      and atmosphere
                    </>
                  ) : i === 1 ? (
                    <>
                      <em className="italic text-accent">Office</em>
                      <br />
                      and condition
                    </>
                  ) : i === 2 ? (
                    <>
                      <em className="italic text-accent">A gift</em>
                      <br />
                      and a person
                    </>
                  ) : (
                    <>
                      Event and
                      <br />
                      <em className="italic text-accent">concept</em>
                    </>
                  )}
                </h3>
                <p className="font-inter text-sm leading-relaxed opacity-60 max-w-sm">
                  {cat.sublabel}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs font-mono uppercase tracking-widest opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                  <span>Explore</span>
                  <span className="w-8 h-[0.5px] bg-white group-hover:w-16 transition-all duration-700" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
      <section
        id="team"
        ref={teamSectionRef}
        className="relative w-full py-32 px-6 md:px-12 bg-background z-20"
      >
        <div className="absolute top-0 inset-x-0 h-[0.5px] bg-white/10" />

        <div className="w-full max-w-[90vw] md:max-w-[70vw] mx-auto">
          {/* Section intro */}
          <div className="mb-24">
            <p className="font-mono text-xs tracking-widest uppercase opacity-50 mb-6">
              Team
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-[0.9] tracking-tight max-w-2xl">
              Each flower reveals its
              <br />
              beauty, rhythm, and{" "}
              <em className="italic text-accent">character</em>
              <br />
              in any space
            </h2>
          </div>

          {/* Team member cards */}
          <div className="flex flex-col divide-y divide-white/10">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                ref={(el) => {
                  teamMemberRefs.current[index] = el;
                }}
                className={`py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start ${
                  member.align === "right" ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* Image */}
                <div className="md:col-span-5 [direction:ltr]">
                  <div className="relative w-full aspect-[3/4] overflow-hidden group">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center scale-125 group-hover:scale-150 transition-transform duration-[1500ms] ease-out"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-10 mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>

                {/* Text content */}
                <div className="md:col-span-7 flex flex-col justify-center gap-6 [direction:ltr]">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-2">
                      {member.role}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight tracking-tight">
                      {member.name}
                    </h3>
                  </div>

                  <p className="font-inter text-sm leading-relaxed tracking-wide opacity-70 max-w-md">
                    {member.description}
                  </p>

                  <p className="font-serif text-lg italic text-accent/80 leading-snug max-w-xs">
                    {member.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
              <a
                href="#catalog"
                className="hover:opacity-100 transition-opacity"
              >
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
    </div>
  );
}
