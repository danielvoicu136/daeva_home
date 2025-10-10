import React from 'react'

const cards = [
  {
    title: "Full Development",
    description: "End-to-end game production, from concept to launch, and beyond",
  },
  {
    title: "Product Development Solutions",
    description: "Custom-tailored game development services",
  },
  {
    title: "Art Production",
    description: "Complete game art production",
  },
  {
    title: "Development Support Services",
    description: "Award-winning set of solutions for development support on all game platforms",
  },
  {
    title: "Live Ops",
    description: "A comprehensive and scalable solution for operating live services",
  },
  {
    title: "Marketing",
    description: "Plan and execute global go-to-marketing strategies and effective campaigns",
  },
];

export default function ProjectCards() {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border border-yellow-500 rounded-lg bg-black/60 backdrop-blur-sm p-8 min-h-[160px] flex flex-col justify-center shadow-lg transition hover:bg-black/80"
          >
            <h3 className="text-white font-bold text-xl mb-2 font-sans">{card.title}</h3>
            <p className="text-gray-200 text-lg font-sans">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
