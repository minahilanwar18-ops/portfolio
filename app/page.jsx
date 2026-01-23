"use client";

import { motion } from "framer-motion";
import { Palette, PenTool, Layers, Mail, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Makeup E-Commerce Mobile App",
    description:
      "A complete UI/UX design for a makeup e-commerce mobile application including onboarding, cart, checkout and payment flow.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-fuchsia-900 text-white">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center py-36 px-6">
        <Sparkles className="absolute top-10 left-10 opacity-20" size={80} />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Hi, I’m a <span className="text-fuchsia-400">Graphic Designer</span>
        </motion.h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          I create bold visuals, modern UI/UX, and creative designs for brands.
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg">
          I’m a passionate graphic designer focused on UI/UX, branding, and digital design.
        </p>
      </section>

      {/* SKILLS */}
      <section className="bg-black/40 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <Skill icon={<Palette />} title="Branding" />
          <Skill icon={<PenTool />} title="UI / UX" />
          <Skill icon={<Layers />} title="Graphic Design" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Selected Works</h2>

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-3">{p.description}</p>
          </motion.div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="text-center py-24">
        <Mail className="mx-auto mb-4 text-fuchsia-400" size={40} />
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
      </section>

    </div>
  );
}

function Skill({ icon, title }) {
  return (
    <div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
      <div className="text-fuchsia-400 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}
