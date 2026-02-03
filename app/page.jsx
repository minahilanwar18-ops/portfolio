"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, PenTool, Layers, Mail, Sparkles, ArrowRight, Download, Github, Linkedin, X, ZoomIn } from "lucide-react";

// Your 9 images - ALL PATHS FIXED
const projects = [
  {
    id: 1,
    title: "UI/UX Design",
    tags: ["UI/UX", "Mobile", "E-Commerce"],
    color: "from-pink-500 to-fuchsia-600",
    image: "/images/mockup2.jpg"
  },
  {
    id: 2,
    title: "Logo Design Collection",
    tags: ["Branding", "Logo Design"],
    color: "from-purple-500 to-pink-600",
    image: "/images/1vbn.jpg"
  },
  {
    id: 3,
    title: "Print Marketing Materials",
    tags: ["Print", "Flyer", "Marketing"],
    color: "from-violet-500 to-purple-600",
    image: "/images/7c3b0d104776837.5f6a725d739ef.png"
  },
  {
    id: 4,
    title: "Social Media Post",
    tags: ["Social Media", "Marketing"],
    color: "from-orange-500 to-pink-600",
    image: "/images/coming_soon.jpg"
  },
  {
    id: 5,
    title: "Digital Marketing Website",
    tags: ["Web Design", "Corporate", "Marketing"],
    color: "from-red-500 to-gray-600",
    image: "/images/website_design.png"
  },
  {
    id: 6,
    title: "Social Media Posts - Admissions",
    tags: ["Social Media", "Facebook", "Education"],
    color: "from-blue-500 to-teal-600",
    image: "/images/post1.jpeg"
  },
  {
    id: 7,
    title: "Countdown Post Design",
    tags: ["Social Media", "Marketing", "Campaign"],
    color: "from-yellow-500 to-orange-600",
    image: "/images/post2.jpeg"
  },
  {
    id: 8,
    title: "Job Hiring Post",
    tags: ["Social Media", "Hiring", "LinkedIn"],
    color: "from-yellow-400 to-pink-500",
    image: "/images/post3.jpeg"
  },
  {
    id: 9,
    title: "Service Promotion Post",
    tags: ["Social Media", "Promotion", "Service"],
    color: "from-yellow-500 to-gray-600",
    image: "/images/post4.jpeg"
  }
];

export default function Page() {
  const [selectedProject, setSelectedProject] = useState(null);

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
              href="https://github.com/minahilanwar18-ops"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#e879f9" }}
              className="cursor-pointer transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manahil-anwar-235142144/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#e879f9" }}
              className="cursor-pointer transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
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
            Available for Freelance Work
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
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(232, 121, 249, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg shadow-fuchsia-500/50"
            >
              Get in touch k <ArrowRight size={20} />
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
              <div className="relative w-full h-96 rounded-3xl overflow-hidden border border-white/10">
                {/* Background Image */}
                <img
                  src="/images/about-me.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Crect fill='%23111' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='16' dy='.3em'%3EYour Image Here%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-purple-600/10" />
              </div>
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

        {/* FEATURED PROJECTS - IMAGE CARDS */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="text-fuchsia-400 font-semibold mb-4 text-sm tracking-widest">PORTFOLIO</div>
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">A selection of my recent work</p>
          </motion.div>
          
          {/* Image Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 shadow-2xl">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.log("Image failed to load:", project.image);
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23111' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='16' dy='.3em'%3EImage Not Found%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Zoom Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <ZoomIn size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-fuchsia-500/20 backdrop-blur-md border border-fuchsia-400/30 rounded-full text-fuchsia-200 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-fuchsia-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECT MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 md:p-8"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors z-10 border border-white/20"
              >
                <X size={24} />
              </motion.button>

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-y-auto border border-white/10 shadow-2xl"
              >
                {/* Large Image */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-h-[60vh] object-contain bg-black"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-10`} />
                </div>

                {/* Project Details */}
                <div className="p-8 md:p-12">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-300 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              
              <motion.a
                href="https://www.upwork.com/freelancers/~01a347bd1f4aee905a?viewMode=1"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(232, 121, 249, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full font-bold text-xl shadow-lg shadow-fuchsia-500/50"
              >
                Start a Conversation
              </motion.a>
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
