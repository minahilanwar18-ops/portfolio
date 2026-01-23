import { motion } from "framer-motion";
import { Palette, PenTool, Layers, Mail, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Makeup E-Commerce Mobile App",
    category: "UI / UX Design",
    description:
      "A complete UI/UX design for a makeup e-commerce mobile application, including onboarding, product listing, cart, checkout, and payment flow.",
    images: [
      "/images/ui-1.jpg",
      "/images/ui-2.jpg",
      "/images/ui-3.jpg",
      "/images/ui-4.jpg",
    ],
    tools: "Figma, Adobe Photoshop",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-fuchsia-900 text-white">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center py-36 px-6 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <Sparkles className="absolute top-10 left-10 opacity-20" size={80} />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Hi, I’m a <span className="text-fuchsia-400">Graphic Designer</span>
        </motion.h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-300">
          I craft bold visuals, memorable brands, and creative designs that help ideas stand out.
        </p>

        <div className="mt-12 flex gap-6">
          <button className="rounded-2xl px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 transition shadow-xl">
            View Projects
          </button>
          <button className="rounded-2xl px-8 py-4 border border-white/30 hover:bg-white/10 transition">
            Download CV
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>
        <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
          I’m a creative graphic designer passionate about transforming ideas into visually striking designs.
        </p>
      </section>

      {/* SKILLS */}
      <section className="bg-black/40 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <Skill icon={<Palette size={40} />} title="Branding" />
          <Skill icon={<PenTool size={40} />} title="Design Tools" />
          <Skill icon={<Layers size={40} />} title="Digital Design" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-6">Selected Works</h2>

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white/5 p-10 mt-12 border border-white/10"
          >
            <h3 className="text-3xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className="rounded-xl object-cover"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CONTACT */}
