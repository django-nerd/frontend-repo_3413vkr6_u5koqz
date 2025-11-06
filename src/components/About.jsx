import React from 'react';
import { Sparkles, Palette, Heart } from 'lucide-react';

export default function About({ t }) {
  const hobbies = [
    { icon: Sparkles, label: t.about.hobbies.creativity },
    { icon: Palette, label: t.about.hobbies.arts },
    { icon: Heart, label: t.about.hobbies.minimal },
  ];

  return (
    <section id="about" className="relative w-full bg-[#0a0b1e] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#3d4cf5]/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
              alt="Profile"
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{t.about.title}</h2>
            <p className="mt-4 text-white/80 leading-relaxed">{t.about.p1}</p>
            <p className="mt-3 text-white/80 leading-relaxed">{t.about.p2}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {hobbies.map((h, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                >
                  <h.icon className="h-4 w-4 text-[#7aa2ff]" />
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
