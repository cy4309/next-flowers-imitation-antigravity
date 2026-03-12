import React from "react";

export const features = [
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

export const gridItems = [
  { src: "/house.png", label: "For the house" },
  { src: "/office.png", label: "For the office" },
  { src: "/gift.png", label: "As a gift" },
  { src: "/event.png", label: "For the event" },
];

export const catalogCategories = [
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

export const teamMembers = [
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
