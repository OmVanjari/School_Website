import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { MandalaBg } from "@/components/MandalaBg";
import { Heart, Eye, Star, Users, Award, Zap, Book, Globe, CheckCircle2, Quote } from "lucide-react";
import heroAbout from "@/assets/aboutus.png";
import heroAcademics from "@/assets/acdemics.png";
import heroAdmissions from "@/assets/admission.png";
import heroCalendar from "@/assets/calenderpage.png";
import heroContact from "@/assets/conatctus.png";
import heroHome from "@/assets/hero-home.jpg";
import schoolHome from "@/assets/schoolhome.png";
import { loadAboutFacilities, loadAboutContent, defaultAboutContent, type AboutContent } from "@/lib/aboutContent";
import { useLanguage } from "@/contexts/LanguageContext";

const getInitials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map(p => p[0]?.toUpperCase() ?? "").join("");

// Stagger container variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const { t, language } = useLanguage();
  const [content, setContent] = useState<AboutContent>(defaultAboutContent);

  const c = (enKey: keyof AboutContent, hiKey: keyof AboutContent) =>
    language === "hi" ? (content[hiKey] as string) || (content[enKey] as string) : (content[enKey] as string);

  const timeline = [
    { year: "2005", title: t("about.timeline.2005.title"), desc: t("about.timeline.2005.desc") },
    { year: "2012", title: t("about.timeline.2012.title"), desc: t("about.timeline.2012.desc") },
    { year: "2018", title: t("about.timeline.2018.title"), desc: t("about.timeline.2018.desc") },
    { year: "2023", title: t("about.timeline.2023.title"), desc: t("about.timeline.2023.desc") },
  ];

  const achievements = [
    { icon: Award, title: t("about.achievement1.title"), desc: t("about.achievement1.desc") },
    { icon: Star,  title: t("about.achievement2.title"), desc: t("about.achievement2.desc") },
    { icon: Globe, title: t("about.achievement3.title"), desc: t("about.achievement3.desc") },
    { icon: Zap,   title: t("about.achievement4.title"), desc: t("about.achievement4.desc") },
  ];

  const translatedFacilities = [
    { title: t("about.facility1.title"), desc: t("about.facility1.desc"), image: heroAcademics },
    { title: t("about.facility2.title"), desc: t("about.facility2.desc"), image: heroAdmissions },
    { title: t("about.facility3.title"), desc: t("about.facility3.desc"), image: heroHome },
    { title: t("about.facility4.title"), desc: t("about.facility4.desc"), image: heroCalendar },
    { title: t("about.facility5.title"), desc: t("about.facility5.desc"), image: heroContact },
    { title: t("about.facility6.title"), desc: t("about.facility6.desc"), image: schoolHome },
  ];

  const team = [
    { name: t("about.team1.name"), role: t("about.team1.role"), expertise: t("about.team1.expertise") },
    { name: t("about.team2.name"), role: t("about.team2.role"), expertise: t("about.team2.expertise") },
    { name: t("about.team3.name"), role: t("about.team3.role"), expertise: t("about.team3.expertise") },
    { name: t("about.team4.name"), role: t("about.team4.role"), expertise: t("about.team4.expertise") },
    { name: t("about.team5.name"), role: t("about.team5.role"), expertise: t("about.team5.expertise") },
    { name: t("about.team6.name"), role: t("about.team6.role"), expertise: t("about.team6.expertise") },
  ];

  useEffect(() => {
    loadAboutFacilities();
    setContent(loadAboutContent());
  }, []);

  return (
    <>
      <PageHero
        title={t("about.heroTitle")}
        sanskrit={t("about.heroSanskrit")}
        subtitle={t("about.heroSubtitle")}
        image={heroAbout}
        size="full"
      />

      {/* ── Mission Vision Values ── */}
      <section className="container-narrow py-20 relative overflow-hidden">
        <MandalaBg className="absolute left-0 top-10 w-80 h-80 opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <SectionHeader eyebrow={t("about.mvv.eyebrow")} title={t("about.mvv.title")} subtitle={t("about.mvv.subtitle")} />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-6 md:grid-cols-3 relative z-10"
        >
          {[
            { icon: Heart, label: "01", title: t("about.mission.title"), desc: c("mission","missionHi"), footer: t("about.mission.footer"), color: "from-orange-500 to-red-500" },
            { icon: Eye,   label: "02", title: t("about.vision.title"),  desc: c("vision","visionHi"),   footer: t("about.vision.footer"),  color: "from-amber-500 to-orange-500" },
            { icon: Star,  label: "03", title: t("about.values.title"),  desc: c("values","valuesHi"),   footer: t("about.values.footer"),  color: "from-yellow-500 to-amber-500" },
          ].map((m) => (
            <motion.div
              key={m.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-3xl section-surface ornate-frame border border-gold/30 shadow-soft hover:shadow-warm transition-shadow duration-300"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${m.color}`} />
              {/* dot pattern on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: "radial-gradient(hsl(22 88% 52% / 0.05) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_12%_12%,hsl(43_88%_55%/0.16),transparent_42%)]" />
              {/* shimmer sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10 p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ rotate: 12, scale: 1.2 }}
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${m.color} text-white shadow-warm`}
                  >
                    <m.icon className="h-7 w-7" />
                  </motion.div>
                  <div className={`rounded-full border border-gold/30 bg-gradient-to-br ${m.color} bg-opacity-10 px-3 py-1 text-xs font-bold tracking-[0.22em] text-white`}
                    style={{ background: "hsl(43 88% 55% / 0.12)" }}>
                    {m.label}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl md:text-[1.75rem] text-secondary">{m.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-[0.98rem]">{m.desc}</p>
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold/20 bg-background/60 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-saffron shadow-gold animate-[glow-pulse_3s_ease-in-out_infinite]" />
                  <p className="text-sm font-medium text-foreground/80">{m.footer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-gradient-temple py-20">
        <div className="container-narrow">
          <SectionHeader eyebrow={t("about.timeline.eyebrow")} title={t("about.timeline.title")} subtitle={t("about.timeline.subtitle")} />
          <div className="relative mx-auto max-w-4xl pl-8 sm:pl-10">
            {/* vertical line */}
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-gold to-secondary"
            />
            {timeline.map((item, i) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-6 last:mb-0 group"
              >
                {/* dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                  className="absolute -left-[1.95rem] top-7 h-4 w-4 rounded-full bg-gradient-saffron shadow-gold ring-4 ring-background"
                />
                <motion.div
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="rounded-2xl section-surface p-5 md:p-6 border border-gold/30 shadow-soft hover:shadow-warm transition-shadow duration-300"
                >
                  <div className="inline-flex rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-primary">
                    YEAR {item.year}
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl text-secondary mt-3 mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{item.desc}</p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="container-narrow py-20 relative overflow-hidden">
        <SectionHeader eyebrow={t("about.achievements.eyebrow")} title={t("about.achievements.title")} subtitle={t("about.achievements.subtitle")} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 relative z-10"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
              className="group h-full overflow-hidden rounded-3xl border border-gold/20 bg-card/85 shadow-soft hover:shadow-warm transition-shadow duration-300"
            >
              <div className="h-2 w-full bg-gradient-festive" />
              {/* big watermark number */}
              <div className="absolute top-4 right-4 font-display text-[5rem] font-bold leading-none text-primary/[0.05] select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex h-full flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    whileHover={{ rotate: -12, scale: 1.25 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-festive text-primary-foreground shadow-md"
                  >
                    <a.icon className="h-7 w-7" />
                  </motion.div>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mt-5 font-display text-xl md:text-[1.65rem] text-secondary leading-tight">{a.title}</h4>
                <p className="mt-3 text-sm md:text-[0.98rem] text-muted-foreground leading-relaxed">{a.desc}</p>
                <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <span>Recognition</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <MandalaBg className="absolute right-0 bottom-0 w-96 h-96 opacity-5 pointer-events-none" />
      </section>

      {/* ── Facilities ── */}
      <section className="bg-gradient-temple py-20">
        <div className="container-narrow">
          <SectionHeader eyebrow={t("about.facilities.eyebrow")} title={t("about.facilities.title")} subtitle={t("about.facilities.subtitle")} />

          {/* facility cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {translatedFacilities.map((facility, i) => (
              <motion.div
                key={facility.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-gold/25 shadow-soft hover:shadow-warm transition-shadow duration-300"
              >
                {/* image top */}
                <div className="relative h-36 overflow-hidden">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-bold text-white/90 font-display tracking-wide">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                {/* content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-saffron text-white shrink-0 group-hover:shadow-gold transition-shadow">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <h4 className="font-display text-lg text-secondary">{facility.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-festive scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Principal ── */}
      <section className="py-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-temple"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-festive" />
            {/* decorative mandala */}
            <MandalaBg className="absolute -right-20 -top-20 w-64 h-64 opacity-5 pointer-events-none" />
            <div className="flex flex-col md:flex-row">
              {/* portrait */}
              <div className="flex items-center justify-center p-8 md:p-10 md:w-64 shrink-0">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-48"
                >
                  <div className="rounded-2xl overflow-hidden border-2 border-gold/40 shadow-warm bg-muted">
                    <img
                      src={content.principalPhoto || heroAbout}
                      alt={content.principalName}
                      className="w-full h-60 object-cover object-top"
                      onError={(e) => { (e.target as HTMLImageElement).src = heroAbout; }}
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-festive text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap shadow-warm">
                      Principal
                    </span>
                  </div>
                </motion.div>
              </div>
              {/* quote */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex-1 flex items-center p-8 md:p-12 md:pl-4"
              >
                <div className="w-full">
                  <Quote className="h-10 w-10 text-primary/30 mb-3" />
                  <p className="text-foreground/85 italic text-lg md:text-xl leading-relaxed font-display">
                    {c("principalMessage", "principalMessageHi")}
                  </p>
                  <div className="mt-8 border-t border-gold/20 pt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-saffron flex items-center justify-center text-white font-display font-bold shadow-gold">
                      {(c("principalName","principalNameHi") || "A").charAt(0)}
                    </div>
                    <div>
                      <div className="text-primary font-semibold text-base md:text-lg">{c("principalName", "principalNameHi")}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t("about.principal.role")}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="container-narrow py-20 relative overflow-hidden">
        <SectionHeader eyebrow={t("about.team.eyebrow")} title={t("about.team.title")} subtitle={t("about.team.subtitle")} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {team.map((member, i) => {
            const roleColors = [
              "bg-orange-100 text-orange-700",
              "bg-amber-100 text-amber-700",
              "bg-yellow-100 text-yellow-700",
              "bg-orange-50 text-orange-600",
              "bg-amber-50 text-amber-600",
              "bg-yellow-50 text-yellow-600",
            ];
            const avatarGradients = [
              "from-orange-500 to-red-500",
              "from-amber-500 to-orange-500",
              "from-yellow-500 to-amber-500",
              "from-orange-600 to-amber-600",
              "from-red-500 to-orange-500",
              "from-amber-600 to-yellow-500",
            ];
            return (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group rounded-2xl section-surface border border-gold/20 shadow-soft overflow-hidden hover:shadow-warm transition-shadow duration-300"
              >
                {/* gradient header */}
                <div className="relative h-28 bg-gradient-to-br from-primary/15 via-gold/10 to-amber-500/15 flex items-end justify-start px-6 pb-0 overflow-hidden">
                  {/* decorative circles */}
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5" />
                  <div className="absolute -right-2 top-4 h-12 w-12 rounded-full bg-gold/10" />
                  <MandalaBg className="absolute right-0 top-0 w-28 h-28 opacity-10 pointer-events-none" />
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative translate-y-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[i]} text-white font-display text-xl font-bold shadow-gold ring-4 ring-card`}
                  >
                    {getInitials(member.name)}
                    <span className="absolute inset-0 rounded-full bg-white/10 animate-[ring-pulse_2.5s_ease-out_infinite]" style={{ animationDelay: `${i * 0.3}s` }} />
                  </motion.div>
                </div>
                <div className="pt-10 px-6 pb-6">
                  <h4 className="font-display text-lg text-secondary">{member.name}</h4>
                  <span className={`inline-block mt-1 mb-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${roleColors[i]}`}>
                    {member.role}
                  </span>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.expertise}</p>
                </div>
                <div className="h-0.5 bg-gradient-festive scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
        <MandalaBg className="absolute left-0 bottom-10 w-80 h-80 opacity-5 pointer-events-none" />
      </section>
    </>
  );
};

export default About;
