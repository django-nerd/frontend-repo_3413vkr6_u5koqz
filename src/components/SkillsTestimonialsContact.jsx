import React, { useMemo, useState } from 'react';
import { PenTool, Layers, Figma, Camera, Users, MessageCircle, Mail, Globe2, Instagram, Linkedin, Dribbble, Send } from 'lucide-react';

const SkillBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
    <Icon className="h-5 w-5 text-[#7aa2ff]" />
    <span className="text-sm">{label}</span>
  </div>
);

export default function SkillsTestimonialsContact({ t }) {
  const designSkills = [
    { icon: PenTool, label: 'Adobe Photoshop' },
    { icon: Layers, label: 'Adobe Illustrator' },
    { icon: Figma, label: 'Figma' },
    { icon: Camera, label: 'Blender (3D)' },
  ];
  const softSkills = [
    { icon: Users, label: t.skills.soft.creativity },
    { icon: MessageCircle, label: t.skills.soft.communication },
    { icon: Layers, label: t.skills.soft.consistency },
  ];

  const testimonials = [
    {
      name: 'Adit Rahman',
      role: 'Founder, Neon Labs',
      quote:
        'Hamadani brings a fresh, futuristic touch to every piece. The attention to detail is exceptional.',
      avatar: 'https://i.pravatar.cc/100?img=12',
    },
    {
      name: 'Nadia Putri',
      role: 'Marketing Lead, Bloom Co',
      quote:
        'From concept to delivery, the visuals elevated our campaign. Professional and reliable.',
      avatar: 'https://i.pravatar.cc/100?img=32',
    },
    {
      name: 'Kenji Sato',
      role: 'Creative Director, HoloWorks',
      quote:
        'Modern aesthetics with strong storytelling. Highly recommended for brand work.',
      avatar: 'https://i.pravatar.cc/100?img=5',
    },
  ];

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="skills" className="relative bg-gradient-to-b from-[#070818] to-[#0a0b1e] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold">{t.skills.title}</h2>
          <p className="mt-2 text-white/70">{t.skills.subtitle}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{t.skills.design}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {designSkills.map((s, i) => (
                  <SkillBadge key={i} icon={s.icon} label={s.label} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{t.skills.soft.title}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {softSkills.map((s, i) => (
                  <SkillBadge key={i} icon={s.icon} label={s.label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="mt-16">
          <h2 className="text-3xl font-bold">{t.testimonials.title}</h2>
          <p className="mt-2 text-white/70">{t.testimonials.subtitle}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((c, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <img src={c.avatar} alt={c.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-white/60">{c.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-white/80">“{c.quote}”</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div id="roadmap" className="mt-16">
          <h2 className="text-3xl font-bold">{t.roadmap.title}</h2>
          <p className="mt-2 text-white/70">{t.roadmap.subtitle}</p>
          <div className="mt-8 overflow-x-auto">
            <div className="flex min-w-[720px] items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {[t.roadmap.q1, t.roadmap.q2, t.roadmap.q3, t.roadmap.q4].map((step, i) => (
                <div key={i} className="relative flex-1">
                  <div className="rounded-xl border border-white/10 bg-[#0e112b] p-4 text-center">
                    <div className="text-sm text-white/70">{t.roadmap.labels[i]}</div>
                    <div className="mt-1 font-semibold">{step}</div>
                  </div>
                  {i < 3 && (
                    <div className="absolute right-[-18px] top-1/2 hidden h-1 w-9 -translate-y-1/2 bg-gradient-to-r from-[#3d4cf5] to-cyan-400 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-16">
          <h2 className="text-3xl font-bold">{t.contact.title}</h2>
          <p className="mt-2 text-white/70">{t.contact.subtitle}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={t.contact.form.name}
                  className="w-full rounded-xl border border-white/10 bg-[#0e112b] px-4 py-3 outline-none placeholder:text-white/40"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder={t.contact.form.email}
                  className="w-full rounded-xl border border-white/10 bg-[#0e112b] px-4 py-3 outline-none placeholder:text-white/40"
                  required
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={t.contact.form.message}
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-[#0e112b] px-4 py-3 outline-none placeholder:text-white/40"
                  required
                />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3d4cf5] px-6 py-3 font-medium text-white shadow-[0_0_20px_rgba(61,76,245,0.6)] hover:shadow-[0_0_30px_rgba(61,76,245,0.9)]">
                  <Send className="h-5 w-5" /> {t.contact.form.cta}
                </button>
              </div>
            </form>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm text-white/70">{t.contact.connect}</div>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-[#0e112b] p-3 hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-[#0e112b] p-3 hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-[#0e112b] p-3 hover:bg-white/10">
                  <Dribbble className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-6 text-sm text-white/70">
                <p>
                  <Mail className="mr-2 inline h-4 w-4" /> hamdnws@example.com
                </p>
                <p className="mt-1">
                  <Globe2 className="mr-2 inline h-4 w-4" /> Bandung, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p>© 2025 Hamadani Wa Shofi (Hamdnws.)</p>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <span className="px-3 py-1 text-white">EN</span>
            <span className="rounded-full bg-[#3d4cf5] px-3 py-1 text-white">ID</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
