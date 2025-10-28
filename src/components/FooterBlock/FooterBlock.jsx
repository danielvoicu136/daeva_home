import React from "react";

const officeCols = [
  ["Bogotá", "Guadalajara", "Manila"],
  ["Botoșani", "Kyiv", "Montreal"],
  ["Bucharest", "Los Angeles", "San Francisco"],
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Offices area spans 3 columns on large screens */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-6">
              Our Offices
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {officeCols.map((col, i) => (
                <ul key={i} className="space-y-4">
                  {col.map((city) => (
                    <li key={city}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                        aria-label={`Office in ${city}`}
                      >
                        {city}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Careers column */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
              Careers
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Amber is a lifestyle choice. We don’t hire employees, we’re always
              looking for partners.
            </p>

            <a
              href="/careers"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
            >
              join us <span className="ml-2 text-xl">›</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}