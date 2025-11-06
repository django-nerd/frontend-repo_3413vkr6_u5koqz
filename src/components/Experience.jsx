import React from 'react';
import { Briefcase, Star, Rocket, Award } from 'lucide-react';

const items = [
  {
    year: '2022',
    title: 'Freelance Beginnings',
    desc: 'Started shaping brand identities and posters for local startups.',
    icon: Briefcase,
  },
  {
    year: '2023',
    title: 'Expanding to Web3',
    desc: 'Adopted futuristic design languages and motion graphics.',
    icon: Rocket,
  },
  {
    year: '2024',
    title: 'Lead Visual Designer',
    desc: 'Delivered end-to-end visual systems and high-impact campaigns.',
    icon: Star,
  },
  {
    year: '2025',
    title: 'Recognitions',
    desc: 'Featured in design galleries and community showcases.',
    icon: Award,
  },
];

export default function Experience({ t }) {
  return (
    <section id="experience" className="relative bg-[#0a0b1e] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">{t.experience.title}</h2>
        <p className="mt-2 text-white/70">{t.experience.subtitle}</p>

        <div className="mt-10 relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#3d4cf5] via-white/10 to-transparent" />
          <div className="space-y-8">
            {items.map((it, idx) => (
              <div key={idx} className="relative ml-10 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="absolute -left-10 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-[#0f1229]">
                  <it.icon className="h-5 w-5 text-[#7aa2ff]" />
                </div>
                <div className="text-sm text-white/60">{it.year}</div>
                <div className="mt-1 text-lg font-semibold">{it.title}</div>
                <p className="mt-1 text-white/75">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
