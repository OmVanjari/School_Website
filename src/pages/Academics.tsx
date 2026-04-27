import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  FlaskConical, 
  Palette, 
  Calculator, 
  Trophy, 
  BookOpen, 
  Music,
  Microscope,
  Globe,
  Laptop,
  Languages,
  Library,
  Lightbulb,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Atom,
  Beaker
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import heroAcademics from "@/assets/hero-academics.jpg";

const streams = [
  { icon: FlaskConical, name: "Science", desc: "STEM Labs, Robotics Club, Vedic Astronomy", color: "from-blue-500 via-cyan-500 to-teal-500", glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]" },
  { icon: Palette, name: "Arts", desc: "Classical Dance, Visual Arts, Drama", color: "from-pink-500 via-rose-500 to-red-500", glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]" },
  { icon: Calculator, name: "Commerce", desc: "Entrepreneurship, Accounting, Bharat Markets", color: "from-green-500 via-emerald-500 to-teal-500", glow: "group-hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]" },
  { icon: Trophy, name: "Sports", desc: "Yoga, Kabaddi, Cricket, Athletics", color: "from-orange-500 via-amber-500 to-yellow-500", glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]" },
  { icon: BookOpen, name: "Languages", desc: "Sanskrit, Hindi, English, Tamil", color: "from-purple-500 via-violet-500 to-indigo-500", glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]" },
  { icon: Music, name: "Music", desc: "Carnatic, Hindustani, Tabla, Veena", color: "from-indigo-500 via-blue-500 to-cyan-500", glow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]" },
];

const stages = [
  { stage: "Bal Vatika", grades: "Pre-K – KG", desc: "Play-based learning rooted in stories from the Panchatantra.", icon: Sparkles, color: "from-pink-400 to-rose-400" },
  { stage: "Prathama", grades: "Grades 1–5", desc: "Foundational literacy, Sanskrit shlokas, and curiosity-driven projects.", icon: BookOpen, color: "from-blue-400 to-cyan-400" },
  { stage: "Madhyama", grades: "Grades 6–8", desc: "STEM, arts and Vedic mathematics — building character and competence.", icon: Lightbulb, color: "from-purple-400 to-violet-400" },
  { stage: "Uttama", grades: "Grades 9–12", desc: "Board excellence, electives, and global readiness with rooted values.", icon: Award, color: "from-orange-400 to-amber-400" },
];

const subjects = [
  { name: "Mathematics", icon: Calculator, desc: "Vedic & Modern Math", gradient: "from-blue-500 to-cyan-500" },
  { name: "Science", icon: Microscope, desc: "Physics, Chemistry, Biology", gradient: "from-green-500 to-emerald-500" },
  { name: "English", icon: Globe, desc: "Literature & Communication", gradient: "from-purple-500 to-pink-500" },
  { name: "Computer Science", icon: Laptop, desc: "Coding & AI Fundamentals", gradient: "from-orange-500 to-red-500" },
  { name: "Sanskrit", icon: Languages, desc: "Classical Language Studies", gradient: "from-yellow-500 to-orange-500" },
  { name: "Social Studies", icon: Users, desc: "History, Geography, Civics", gradient: "from-indigo-500 to-purple-500" },
];

const facilities = [
  { 
    title: "Smart Classrooms", 
    desc: "Interactive digital boards and modern learning tools in every classroom for immersive education.", 
    icon: Laptop,
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Science Laboratories", 
    desc: "State-of-the-art physics, chemistry, and biology labs with latest equipment and safety standards.", 
    icon: Beaker,
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    title: "Digital Library", 
    desc: "Vast collection of books, e-resources, and quiet study spaces for focused learning.", 
    icon: Library,
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    title: "Sports Complex", 
    desc: "Indoor and outdoor facilities for yoga, athletics, and traditional sports development.", 
    icon: Trophy,
    gradient: "from-orange-500 to-red-500"
  },
];

const Academics = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Enhanced Hero Section with Parallax */}
      <motion.div 
        ref={heroRef} 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative"
      >
        <motion.div style={{ y: heroY }}>
          <PageHero
            title="Our Academic Excellence"
            sanskrit="॥ सा विद्या या विमुक्तये ॥"
            subtitle="A curriculum where Vedic mathematics and quantum physics share the same blackboard — nurturing minds for tomorrow."
            image={heroAcademics}
          >
            <Link to="/admissions">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Button 
                  size="lg" 
                  className="relative bg-white text-primary hover:bg-white/95 shadow-2xl text-lg px-8 py-6 rounded-xl overflow-hidden group"
                >
                  {/* Animated gradient border */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Our Programs
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </Link>
          </PageHero>
        </motion.div>
      </motion.div>

      {/* Curriculum Overview - Glassmorphism Cards */}
      <section className="container-narrow py-24 relative overflow-hidden">
        {/* Floating decorative blobs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            eyebrow="॥ पाठ्यक्रम ॥" 
            title="Our Curriculum" 
            subtitle="Comprehensive education from foundation to excellence" 
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative z-10">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all duration-500"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated gradient border */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent, ${s.color.split(' ')[1]}, transparent)`,
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              
              {/* Icon with bounce animation */}
              <motion.div 
                className={`relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white mb-6 shadow-2xl`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.15
                }}
                transition={{ duration: 0.6 }}
              >
                <s.icon className="h-10 w-10" />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/30"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-2">
                  <motion.span 
                    className="h-px w-8 bg-primary/60"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  />
                  {s.grades}
                </div>
                <h3 className="font-display text-2xl text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {s.stage}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ translateX: "200%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Streams of Knowledge - Neon Glow Cards */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-24 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              eyebrow="॥ विद्याशाखाः ॥" 
              title="Streams of Knowledge" 
              subtitle="Six branches of the kalpavriksha — choose your path to excellence" 
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {streams.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -15 }}
                className={`group relative rounded-3xl bg-card p-8 border-2 border-transparent hover:border-primary/50 shadow-xl ${s.glow} transition-all duration-500 cursor-pointer overflow-hidden`}
              >
                {/* Neon glow border effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
                
                {/* Icon with rotation */}
                <motion.div 
                  className="relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-card text-primary mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <s.icon className="h-10 w-10" />
                  
                  {/* Rotating ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100`}
                    style={{
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "2px"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                <div className="relative">
                  <h3 className="font-display text-2xl text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                    {s.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Background shift effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Shine sweep */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  whileHover={{ translateX: "200%" }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Grid - Interactive Tiles */}
      <section className="container-narrow py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            eyebrow="॥ विषयाः ॥" 
            title="Core Subjects" 
            subtitle="Building strong foundations across all disciplines" 
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {subjects.map((subject, i) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative rounded-2xl bg-card p-7 border border-border hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Glow border on hover */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                style={{ zIndex: -1 }}
              />
              
              <div className="relative flex items-start gap-5">
                <motion.div 
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${subject.gradient} text-white shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -15, 15, -15, 0],
                    scale: 1.15
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <subject.icon className="h-8 w-8" />
                </motion.div>
                
                <div className="flex-1">
                  <h4 className="font-display text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
                    {subject.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {subject.desc}
                  </p>
                </div>
              </div>

              {/* Background shift */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities Section - Split Layout with Scroll Reveal */}
      <section className="bg-gradient-temple py-24 relative overflow-hidden">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              eyebrow="॥ सुविधाएं ॥" 
              title="World-Class Facilities" 
              subtitle="Modern infrastructure for holistic development" 
            />
          </motion.div>

          <div className="space-y-12 mt-16">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-3xl bg-card p-10 border border-gold/30 shadow-2xl hover:shadow-temple transition-all duration-500 ${i % 2 === 0 ? '' : 'ml-auto'}`}
              >
                <div className={`flex gap-8 items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <motion.div 
                    className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${facility.gradient} text-white shadow-2xl`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <facility.icon className="h-12 w-12" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="font-display text-2xl text-secondary mb-3 group-hover:text-primary transition-colors">
                      {facility.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {facility.desc}
                    </p>
                  </div>
                </div>

                {/* Animated progress line */}
                <motion.div 
                  className={`absolute bottom-0 ${i % 2 === 0 ? 'left-10 right-10' : 'left-10 right-10'} h-1 bg-gradient-to-r ${facility.gradient} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  style={{ transformOrigin: i % 2 === 0 ? 'left' : 'right' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - High Conversion with Pulse Animation */}
      <section className="container-narrow py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] bg-gradient-to-br from-primary via-gold to-secondary p-16 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          {/* Animated background blobs */}
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm mb-8"
            >
              <GraduationCap className="h-12 w-12 text-white" />
            </motion.div>

            <motion.h2 
              className="font-display text-4xl md:text-5xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p 
              className="text-white/95 text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join our community of learners and experience education that blends tradition with innovation.
            </motion.p>

            <Link to="/admissions">
              <motion.div 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="relative bg-white text-primary hover:bg-white/95 shadow-2xl text-xl px-12 py-8 rounded-2xl group overflow-hidden"
                >
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-2xl"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3 font-semibold">
                    Apply for Admission
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </motion.div>
                  </span>

                  {/* Ripple on hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-2xl"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Academics;
