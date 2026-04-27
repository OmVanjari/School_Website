import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ClipboardList, 
  FileText, 
  UserCheck, 
  GraduationCap, 
  CheckCircle2,
  Heart,
  Users,
  BookOpen,
  Trophy,
  ChevronDown,
  Send,
  Sparkles,
  ArrowRight,
  Check,
  X
} from "lucide-react";
import { toast } from "sonner";
import heroAdmissions from "@/assets/hero-admissions.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  { 
    icon: ClipboardList, 
    title: "Inquiry", 
    desc: "Reach out — share your child's interests with us.",
    color: "from-blue-500 via-cyan-500 to-teal-500",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.4)]"
  },
  { 
    icon: FileText, 
    title: "Application", 
    desc: "Complete the online application with required documents.",
    color: "from-purple-500 via-pink-500 to-rose-500",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.4)]"
  },
  { 
    icon: UserCheck, 
    title: "Assessment", 
    desc: "An informal interaction to know your child better.",
    color: "from-orange-500 via-amber-500 to-yellow-500",
    glow: "shadow-[0_0_40px_rgba(249,115,22,0.4)]"
  },
  { 
    icon: GraduationCap, 
    title: "Enrollment", 
    desc: "Welcome to the Vidyalaya parivaar with a sacred ceremony.",
    color: "from-green-500 via-emerald-500 to-teal-500",
    glow: "shadow-[0_0_40px_rgba(34,197,94,0.4)]"
  },
];

const whyChooseUs = [
  {
    icon: Heart,
    title: "Holistic Development",
    desc: "We nurture mind, body, and spirit through integrated learning approaches.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Passionate educators dedicated to bringing out the best in every student.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Rich Curriculum",
    desc: "Blend of traditional wisdom and modern education for complete growth.",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: Trophy,
    title: "Proven Excellence",
    desc: "Outstanding academic results and holistic student achievements.",
    gradient: "from-orange-500 to-amber-500"
  },
];

const faqs = [
  {
    question: "What is the admission process timeline?",
    answer: "The admission process typically takes 2-3 weeks from application submission to final enrollment. We conduct assessments within 5-7 days of receiving your application and notify you of the results within 48 hours."
  },
  {
    question: "Are there any entrance examinations?",
    answer: "For classes 1-5, we conduct an informal interaction to understand the child's interests and abilities. For classes 6 and above, there is a simple assessment covering basic concepts to help us place students appropriately."
  },
  {
    question: "What documents are required for admission?",
    answer: "You'll need: birth certificate, previous school transfer certificate (if applicable), recent photographs, Aadhaar cards, address proof, and previous academic records. All documents should be submitted in original along with photocopies."
  },
  {
    question: "Is there a sibling discount available?",
    answer: "Yes, we offer a 10% discount on tuition fees for the second child and 15% for the third child from the same family. This reflects our commitment to supporting families who choose to grow with us."
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "We maintain a healthy student-teacher ratio of 20:1 to ensure personalized attention. For specialized subjects and labs, the ratio is even lower at 15:1."
  },
];

const Admissions = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    parent: "",
    child: "",
    email: "",
    phone: "",
    grade: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const validateField = (name: string, value: string) => {
    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setValidFields(prev => ({ ...prev, [name]: isValid && value.length > 0 }));
      setErrors(prev => ({ ...prev, [name]: !isValid && value.length > 0 }));
    } else if (name === "phone") {
      const isValid = /^[\d\s\+\-\(\)]{10,}$/.test(value);
      setValidFields(prev => ({ ...prev, [name]: isValid }));
      setErrors(prev => ({ ...prev, [name]: !isValid && value.length > 0 }));
    } else {
      const isValid = value.trim().length > 0;
      setValidFields(prev => ({ ...prev, [name]: isValid }));
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    validateField(id, value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Application received! We'll be in touch soon. 🪔");
  };

  const isFormValid = Object.keys(formData).filter(k => k !== 'message').every(key => 
    formData[key as keyof typeof formData].trim().length > 0
  ) && !Object.values(errors).some(e => e);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Enhanced Hero Section */}
      <motion.div ref={heroRef}>
        <PageHero
          title="Join Our School"
          sanskrit="॥ स्वागतम् ॥"
          subtitle="Every child carries a divine spark. Help us help yours shine brightly in a nurturing environment."
          image={heroAdmissions}
        >
          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-white/80" />
          </motion.div>
        </PageHero>
      </motion.div>

      {/* Admission Process - Animated Timeline */}
      <section className="container-narrow py-24 relative overflow-hidden">
        {/* Floating blobs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
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
            eyebrow="॥ प्रक्रिया ॥" 
            title="Simple Admission Process" 
            subtitle="A welcoming path from inquiry to enrollment — just four easy steps" 
          />
        </motion.div>

        <div className="relative mt-20">
          {/* Animated connection line */}
          <motion.div 
            className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Animated step number */}
                <motion.div 
                  className={`absolute -top-4 -left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${s.color} text-white font-bold shadow-2xl`}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  {i + 1}
                </motion.div>

                {/* Glassmorphism Card */}
                <motion.div
                  whileHover={{ y: -12, scale: 1.03 }}
                  className={`relative h-full rounded-3xl backdrop-blur-xl bg-white/10 border-2 border-white/20 p-8 shadow-2xl hover:${s.glow} transition-all duration-500 overflow-hidden`}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />

                  {/* Icon with glow */}
                  <motion.div 
                    className={`relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-2xl mb-6`}
                    whileHover={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <s.icon className="h-10 w-10" />
                    
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color}`}
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display text-xl text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* Shine sweep */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    whileHover={{ translateX: "200%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-12 -right-4 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4 }}
                  >
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Micro-interactions */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-24 relative overflow-hidden">
        {/* Animated pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: "40px 40px"
            }}
            animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              eyebrow="॥ विशेषताएं ॥" 
              title="Why Choose Us" 
              subtitle="What makes our school the perfect choice for your child's future" 
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group relative rounded-3xl bg-card p-8 border border-gold/30 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden"
              >
                {/* Glow effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                />

                {/* Icon with color shift */}
                <motion.div 
                  className={`inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white mb-6 shadow-2xl`}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <item.icon className="h-10 w-10" />
                </motion.div>

                <h3 className="font-display text-xl text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>

                {/* Background animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-temple py-24">
        <div className="container-narrow max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              eyebrow="॥ प्रश्नोत्तर ॥" 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about our admission process" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-16"
          >
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${i}`} 
                    className="rounded-2xl bg-card border-2 border-gold/30 px-8 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500"
                  >
                    <AccordionTrigger className="font-display text-lg text-secondary hover:text-primary transition-colors py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
