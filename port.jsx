import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, Layers, Mail, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Makeup E‑Commerce Mobile App",
    category: "UI / UX Design",
    description:
      "A complete UI/UX design for a makeup e‑commerce mobile application, including onboarding, product listing, cart, checkout, and payment flow.",
    images: [
      "/images/ui-1.jpg",
      "/images/ui-2.jpg",
      "/images/ui-3.jpg",
      "/images/ui-4.jpg",
    ],
    tools: "Figma, Adobe Photoshop",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-fuchsia-900 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-36 px-6 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <Sparkles className="absolute top-10 left-10 opacity-20" size={80} />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Hi, I’m a <span className="text-fuchsia-400">Graphic Designer</span>
        </motion.h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-300">
          I craft bold visuals, memorable brands, and creative designs that help
          ideas stand out.
        </p>
        <div className="mt-12 flex gap-6">
          <Button className="rounded-2xl px-8 py-6 text-lg shadow-xl">
            View Projects
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl px-8 py-6 text-lg border-white/30"
          >
            Download CV
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-10"
        >
          About Me
        </motion.h2>
        <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
          I’m a creative graphic designer passionate about transforming ideas into
          visually striking designs. With a strong foundation in color,
          typography, and layout, I focus on creating work that is both beautiful
          and effective for real‑world brands.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-black/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-14">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="rounded-2xl bg-white/5 border-white/10 hover:scale-105 transition">
              <CardContent className="p-8">
                <Palette size={42} className="mb-5 text-fuchsia-400" />
                <h3 className="text-xl font-semibold mb-2">Branding</h3>
                <p className="text-gray-300">
                  Logo design, brand identity systems, and visual storytelling.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl bg-white/5 border-white/10 hover:scale-105 transition">
              <CardContent className="p-8">
                <PenTool size={42} className="mb-5 text-fuchsia-400" />
                <h3 className="text-xl font-semibold mb-2">Design Tools</h3>
                <p className="text-gray-300">
                  Photoshop, Illustrator, InDesign, Figma, and Canva.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl bg-white/5 border-white/10 hover:scale-105 transition">
              <CardContent className="p-8">
                <Layers size={42} className="mb-5 text-fuchsia-400" />
                <h3 className="text-xl font-semibold mb-2">Digital Design</h3>
                <p className="text-gray-300">
                  Social media posts, ads, banners, and UI visuals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
        <p className="text-gray-400 mb-14 max-w-2xl">A curated selection of UI/UX and graphic design projects showcasing my creative process, visual style, and problem‑solving approach.</p>
        <div className="grid md:grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-10 shadow-2xl border border-white/10 overflow-hidden"
            >
              <span className="text-sm uppercase tracking-wider text-fuchsia-400">
                {project.category}
              </span>
              <h3 className="text-3xl font-semibold mt-3 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 max-w-3xl mb-6">
                {project.description}
              </p>
              <p className="text-sm text-gray-400 mb-10">
                Tools Used: {project.tools}
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {project.images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl overflow-hidden bg-black/30"
                  >
                    <img
                      src={img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-gradient-to-t from-black to-transparent py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center px-6">
          <Mail size={44} className="mx-auto mb-6 text-fuchsia-400" />
          <h2 className="text-4xl font-bold mb-6">Let’s Create Something</h2>
          <p className="text-gray-300 mb-10 text-lg">
            I’m open to full‑time roles, freelance projects, and creative
            collaborations.
          </p>
          <Button className="rounded-2xl px-12 py-6 text-lg shadow-xl">
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  );
}
