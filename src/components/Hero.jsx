import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Send, Instagram, Linkedin, Dribbble } from 'lucide-react';

const NeonButton = ({ children, onClick, href, icon: Icon, variant = 'primary' }) => {
  const base = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-full transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-0';
  const variants = {
    primary:
      'bg-[#3d4cf5] text-white shadow-[0_0_20px_rgba(61,76,245,0.6)] hover:shadow-[0_0_30px_rgba(61,76,245,0.9)]',
    ghost:
      'bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/15',
  };
  const content = (
    <span className={`${base} ${variants[variant]}`}>
      {Icon && <Icon className="h-5 w-5" />}
      <span className="font-medium">{children}</span>
    </span>
  );
  if (href) {
    return (
      <a href={href} onClick={onClick} className="group">
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="group">
      {content}
    </button>
  );
};

export default function Hero({ t, onHireClick, onPortfolioClick, onDownloadCV }) {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0b1e] via-[#0a0b1e] to-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#3d4cf5]/30 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur border border-white/15 grid place-items-center">
              <span className="text-[#3d4cf5] font-extrabold">H</span>
            </div>
            <span className="text-xl font-semibold tracking-wide">Hamdnws.</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-2 py-1">
            <a href="#portfolio" className="text-sm px-3 py-1 rounded-full hover:bg-white/10 transition">{t.nav.portfolio}</a>
            <a href="#skills" className="text-sm px-3 py-1 rounded-full hover:bg-white/10 transition">{t.nav.skills}</a>
            <a href="#contact" className="text-sm px-3 py-1 rounded-full hover:bg-white/10 transition">{t.nav.contact}</a>
          </div>
        </div>

        <div className="relative z-10 mt-10 grid flex-1 place-items-center">
          <div className="max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#3d4cf5] shadow-[0_0_12px_#3d4cf5]" /> {t.hero.badge}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-white">Hamadani Wa Shofi</span>
              <span className="block bg-gradient-to-r from-[#7aa2ff] via-[#3d4cf5] to-[#00e6ff] bg-clip-text text-transparent">{t.hero.role}</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl">{t.hero.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <NeonButton icon={Send} onClick={onHireClick}>{t.cta.hire}</NeonButton>
              <NeonButton icon={Download} variant="ghost" onClick={onDownloadCV}>{t.cta.download}</NeonButton>
              <NeonButton variant="ghost" onClick={onPortfolioClick}>{t.cta.portfolio}</NeonButton>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur hover:bg-white/15">
                <Instagram className="h-5 w-5 text-white/80 group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur hover:bg-white/15">
                <Linkedin className="h-5 w-5 text-white/80 group-hover:text-white" />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="group rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur hover:bg-white/15">
                <Dribbble className="h-5 w-5 text-white/80 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
