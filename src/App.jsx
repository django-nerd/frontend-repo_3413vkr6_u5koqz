import React, { useEffect, useMemo, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import SkillsTestimonialsContact from './components/SkillsTestimonialsContact';

export default function App() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => (lang === 'en' ? en : id), [lang]);

  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleHireClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioClick = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const blob = new Blob([`Hamadani Wa Shofi — Curriculum Vitae\nRole: Graphic Designer\nEmail: hamdnws@example.com`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Hamadani_Wa_Shofi_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2 py-1 backdrop-blur">
        <button
          onClick={() => setLang('en')}
          className={`rounded-full px-3 py-1 text-sm ${lang === 'en' ? 'bg-[#3d4cf5] text-white' : 'hover:bg-white/10'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('id')}
          className={`rounded-full px-3 py-1 text-sm ${lang === 'id' ? 'bg-[#3d4cf5] text-white' : 'hover:bg-white/10'}`}
        >
          ID
        </button>
      </div>

      <Hero t={t} onHireClick={handleHireClick} onPortfolioClick={handlePortfolioClick} onDownloadCV={handleDownloadCV} />
      <About t={t} />
      <Portfolio t={t} />
      <Experience t={t} />
      <SkillsTestimonialsContact t={t} />
    </div>
  );
}

const en = {
  nav: { portfolio: 'Portfolio', skills: 'Skills', contact: 'Contact' },
  hero: {
    badge: 'Available for freelance • Bandung, ID',
    role: 'Graphic Designer',
    tagline: 'Turning Ideas into Impactful Visuals',
  },
  cta: { hire: 'Hire Me', portfolio: 'View Portfolio', download: 'Download CV' },
  about: {
    title: 'About Me',
    p1: `I’m Hamadani Wa Shofi — a designer crafting futuristic, minimal, and emotionally resonant visuals. I blend clean systems with expressive moments to build brands that feel both modern and timeless.`,
    p2: `With a Web3-inspired aesthetic, I focus on clarity, depth, and detail — translating concepts into visuals that communicate with precision and impact.`,
    hobbies: { creativity: 'Generative Art', arts: 'Color & Composition', minimal: 'Minimal Living' },
  },
  portfolio: { title: 'Selected Work', subtitle: 'A mix of brand identity, posters, UI visuals, and 3D experiments.' },
  experience: { title: 'Experience & Milestones', subtitle: 'A snapshot of growth and impact over the years.' },
  skills: {
    title: 'Skills',
    subtitle: 'Tools and traits that shape my work.',
    design: 'Design Tools',
    soft: { title: 'Soft Skills', creativity: 'Creativity', communication: 'Communication', consistency: 'Consistency' },
  },
  testimonials: { title: 'Testimonials', subtitle: 'What clients and collaborators say.' },
  roadmap: {
    title: 'Roadmap / Journey',
    subtitle: 'An evolving path of goals and focus areas.',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    q1: 'Refine portfolio and expand poster series',
    q2: 'Collaborate with Web3 startups on branding',
    q3: 'Explore real-time 3D visuals',
    q4: 'Launch personal design assets',
  },
  contact: {
    title: 'Let’s Collaborate',
    subtitle: 'Send a message — I’ll reply within 24 hours.',
    connect: 'Or reach me via social platforms:',
    form: { name: 'Your Name', email: 'Your Email', message: 'Your Message', cta: 'Send Message' },
  },
};

const id = {
  nav: { portfolio: 'Portofolio', skills: 'Keahlian', contact: 'Kontak' },
  hero: {
    badge: 'Tersedia untuk freelance • Bandung, ID',
    role: 'Desainer Grafis',
    tagline: 'Mengubah Ide Menjadi Visual yang Berdampak',
  },
  cta: { hire: 'Rekrut Saya', portfolio: 'Lihat Portofolio', download: 'Unduh CV' },
  about: {
    title: 'Tentang Saya',
    p1: `Saya Hamadani Wa Shofi — desainer yang meracik visual futuristik, minimal, dan beresonansi emosional. Saya memadukan sistem yang rapi dengan momen ekspresif untuk membangun brand modern dan tak lekang waktu.`,
    p2: `Dengan estetika terinspirasi Web3, saya fokus pada kejelasan, kedalaman, dan detail — menerjemahkan konsep menjadi visual yang komunikatif dan berimpact.`,
    hobbies: { creativity: 'Seni Generatif', arts: 'Warna & Komposisi', minimal: 'Hidup Minimalis' },
  },
  portfolio: { title: 'Karya Pilihan', subtitle: 'Kumpulan identitas brand, poster, UI visual, dan eksperimen 3D.' },
  experience: { title: 'Pengalaman & Tonggak', subtitle: 'Ringkasan perjalanan dan dampak tiap tahun.' },
  skills: {
    title: 'Keahlian',
    subtitle: 'Perangkat dan karakter yang membentuk karya saya.',
    design: 'Perangkat Desain',
    soft: { title: 'Keahlian Nonteknis', creativity: 'Kreativitas', communication: 'Komunikasi', consistency: 'Konsistensi' },
  },
  testimonials: { title: 'Testimoni', subtitle: 'Kata klien dan kolaborator.' },
  roadmap: {
    title: 'Roadmap / Perjalanan',
    subtitle: 'Lintasan tujuan dan fokus yang berkembang.',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    q1: 'Memoles portofolio dan memperluas seri poster',
    q2: 'Kolaborasi dengan startup Web3 untuk branding',
    q3: 'Eksplorasi visual 3D real-time',
    q4: 'Rilis aset desain pribadi',
  },
  contact: {
    title: 'Ayo Berkolaborasi',
    subtitle: 'Kirim pesan — akan saya balas dalam 24 jam.',
    connect: 'Atau hubungi melalui platform sosial:',
    form: { name: 'Nama Anda', email: 'Email Anda', message: 'Pesan Anda', cta: 'Kirim Pesan' },
  },
};
