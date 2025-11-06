import React from 'react';

const projects = [
  {
    title: 'Brand Identity — Neon Grid',
    desc: 'A futuristic brand system with glowing geometry and modular type.',
    image:
      'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Poster Series — Cyber Bloom',
    desc: 'Experimental poster exploration mixing floral forms with cyber textures.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'App UI — Holo Finance',
    desc: 'Web3-style dashboard with glass panels and soft neon accents.',
    image:
      'https://images.unsplash.com/photo-1551281044-8a5d2b70b62d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Visual — Prism Terrain',
    desc: 'Abstract 3D tilescape rendered with glowing edges and depth fog.',
    image:
      'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Portfolio({ t }) {
  return (
    <section id="portfolio" className="relative bg-gradient-to-b from-black to-[#070818] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-[#3d4cf5]/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">{t.portfolio.title}</h2>
            <p className="mt-2 text-white/70">{t.portfolio.subtitle}</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
