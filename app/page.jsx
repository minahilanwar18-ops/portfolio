"use client";
import { motion } from "framer-motion";
import { Palette, PenTool, Layers, Mail, Sparkles, ArrowRight, Download, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "Makeup E-Commerce Mobile App",
    description:
      "A complete UI/UX design for a makeup e-commerce mobile application including onboarding, cart, checkout and payment flow.",
    tags: ["UI/UX", "Mobile", "E-Commerce"],
    color: "from-pink-500 to-fuchsia-600"
  },
  {
    title: "Brand Identity Suite",
    description:
      "Complete brand redesign including logo, color palette, typography, and marketing materials for a tech startup.",
    tags: ["Branding", "Identity", "Print"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "SaaS Dashboard Interface",
    description:
      "Modern, intuitive dashboard design for a B2B analytics platform with complex data visualization.",
    tags: ["UI/UX", "Web", "Dashboard"],
    color: "from-violet-500 to-purple-600"
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-fuchsia-950/20 via-black to-purple-950/20" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="fixed top-20 right-20 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        {/* NAVIGATION */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
          >
            Designer
          </motion.div>
          <div className="flex gap-6 items-center">
            <motion.a
              whileHover={{ scale: 1.1, color: "#e879f9" }}
              className="cursor-pointer transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#e879f9" }}
              className="cursor-pointer transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full font-semibold"
            >
              Resume
            </motion.button>
          </div>
        </motion.nav>

        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 min-h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 right-20"
          >
            <Sparkles className="text-fuchsia-400 opacity-60" size={60} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-300 text-sm font-medium"
          >
            ✨ Available for Freelance Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black leading-tight"
          >
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-xl text-gray-400"
          >
            Transforming ideas into stunning visual stories through innovative UI/UX design, branding, and creative direction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(232, 121, 249, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg shadow-fuchsia-500/50"
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-fuchsia-500/30 rounded-full font-bold text-lg hover:bg-fuchsia-500/10 transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-24 text-gray-500 text-sm"
          >
            Scroll to explore ↓
          </motion.div>
        </section>

        {/* ABOUT */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="text-fuchsia-400 font-semibold mb-4 text-sm tracking-widest">ABOUT ME</div>
              <h2 className="text-5xl font-bold mb-6">Passion Meets Creativity</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                With over 5 years of experience in graphic design, I specialize in creating memorable brand identities and intuitive digital experiences that connect with audiences.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My approach combines strategic thinking with artistic expression, ensuring every project not only looks beautiful but achieves measurable results.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-fuchsia-400">50+</div>
                  <div className="text-gray-500 text-sm">Projects</div>
                </div>
                <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">30+</div>
                  <div className="text-gray-500 text-sm">Clients</div>
                </div>
                <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-pink-400">5Y</div>
                  <div className="text-gray-500 text-sm">Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 rounded-3xl border border-white/10 backdrop-blur-sm" />
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="text-fuchsia-400 font-semibold mb-4 text-sm tracking-widest">EXPERTISE</div>
              <h2 className="text-5xl font-bold">What I Do Best</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <Skill
                icon={<Palette size={40} />}
                title="Branding & Identity"
                description="Creating cohesive brand systems that tell your story and resonate with your audience."
                delay={0.1}
              />
              <Skill
                icon={<PenTool size={40} />}
                title="UI / UX Design"
                description="Designing intuitive, user-centered interfaces that delight and convert."
                delay={0.2}
              />
              <Skill
                icon={<Layers size={40} />}
                title="Graphic Design"
                description="Crafting visually stunning designs for print, digital, and social media."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-fuchsia-400 font-semibold mb-4 text-sm tracking-widest">PORTFOLIO</div>
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">A selection of my recent work</p>
          </motion.div>
          
          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight size={24} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-fuchsia-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 p-16 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Mail className="mx-auto mb-6 text-fuchsia-400" size={60} />
              </motion.div>
              
              <h2 className="text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
              <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's work together to bring your vision to life.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(232, 121, 249, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full font-bold text-xl shadow-lg shadow-fuchsia-500/50"
              >
                Start a Conversation
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500">
              © 2026 Designer Portfolio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors">Dribbble</a>
              <a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors">Behance</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Skill({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/0 to-purple-600/0 group-hover:from-fuchsia-600/10 group-hover:to-purple-600/10 rounded-3xl transition-all duration-300" />
      
      <div className="relative z-10">
        <div className="text-fuchsia-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
