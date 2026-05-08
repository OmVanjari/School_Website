import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import heroContact from "@/assets/hero-contact.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
import heroContact from "@/assets/conatctus.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const SUBJECT_OPTIONS = [
    t("contact.subjectGeneral"),
    t("contact.subjectAdmissions"),
    t("contact.subjectFees"),
    t("contact.subjectAcademic"),
    t("contact.subjectScholarships"),
    t("contact.subjectVisit"),
    t("contact.subjectPTM"),
    t("contact.subjectComplaint"),
    t("contact.subjectOther"),
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.toastSuccess"));
    (e.target as HTMLFormElement).reset();
  };

  const items = [
    { icon: MapPin, label: t("contact.mainCampusLabel"), value: t("contact.mainCampusValue") },
    { icon: Phone, label: t("contact.callLabel"), value: "+91 98765 43210" },
    { icon: Mail, label: t("contact.emailLabel"), value: "hello@vidyalaya.in" },
    { icon: Clock, label: t("contact.hoursLabel"), value: t("contact.hoursValue") },
    { icon: MapPin, label: t("contact.mainCampus"), value: "108, Saraswati Marg, Bengaluru — 560001" },
    { icon: Phone,  label: t("contact.callUs"),      value: "+91 98765 43210" },
    { icon: Mail,   label: t("contact.email"),       value: "hello@vidyalaya.in" },
    { icon: Clock,  label: t("contact.officeHours"), value: "Mon – Sat · 8 AM – 5 PM" },
  ];

  return (
    <>
      <PageHero
        title={t("contact.heroTitle")}
        sanskrit={t("contact.heroSanskrit")}
        sanskrit="॥ अतिथि देवो भव ॥"
        subtitle={t("contact.heroSubtitle")}
        image={heroContact}
        size="full"
      />

      <section className="container-narrow py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.reachUs")} center={false} />
          {items.map((i, idx) => (
            <motion.div
              key={i.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: idx * 0.08 }}
              className="flex gap-4 rounded-2xl bg-card p-5 border border-gold/30 shadow-soft hover:shadow-warm transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-saffron text-primary-foreground shadow-gold">
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">{i.label}</div>
                <div className="text-foreground/90 mt-1">{i.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-card p-8 md:p-10 border border-gold/25 shadow-temple overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-festive -mx-8 md:-mx-10 mb-8 w-[calc(100%+4rem)] md:w-[calc(100%+5rem)]" style={{ marginTop: "-2rem", paddingTop: "0" }} />
            <h3 className="font-display text-2xl text-secondary mb-1">{t("contact.formTitle")}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t("contact.formSubtitle")}</p>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input id="name" required className="mt-1.5 border-gold/25 focus:border-primary/50" />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input id="email" type="email" required className="mt-1.5 border-gold/25 focus:border-primary/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">{t("contact.subject")}</Label>
                <Input id="subject" required className="mt-1.5 border-gold/25 focus:border-primary/50" />
              </div>
              <div>
                <Label htmlFor="message">{t("contact.message")}</Label>
                <Textarea id="message" rows={5} required className="mt-1.5 border-gold/25 focus:border-primary/50 resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">{t("contact.send")}</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-narrow pb-20">
        <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
          <div className="rounded-2xl section-surface ornate-frame p-5 md:p-6 h-full">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{t("contact.campusTag")}</p>
            <h3 className="font-display text-2xl text-secondary mt-1">{t("contact.campusTitle")}</h3>
            <p className="mt-3 text-foreground/85 leading-relaxed">{t("contact.campusAddress")}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("contact.campusNear")}</p>
            <p className="mt-5 text-sm text-muted-foreground">{t("contact.campusDirections")}</p>
          </div>

          <div className="rounded-2xl section-surface ornate-frame p-3 md:p-4 flex items-center justify-center">
            <div className="w-full max-w-[360px] aspect-square rounded-xl overflow-hidden border border-gold/30 shadow-soft">
              <iframe
                title={t("contact.mapTitle")}
                src={`https://maps.google.com/maps?q=Saraswati+Marg,+Bengaluru&hl=${language}&z=15&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                key={language}
                allowFullScreen
              />
      {/* Main section — full width two-column on desktop */}
      <section className="container-narrow py-16">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left — form (wider) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <SectionHeader
              eyebrow={t("contact.eyebrow")}
              title={t("contact.formTitle")}
              subtitle={t("contact.formSubtitle")}
              center={false}
            />

            <div className="rounded-2xl bg-card p-8 border border-gold/30 shadow-temple mt-6">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input id="name" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t("contact.emailLabel")}</Label>
                    <Input id="email" type="email" required className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">{t("contact.subject")}</Label>
                  <div className="relative mt-1.5">
                    <select
                      id="subject"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-9 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                    >
                      <option value="" disabled>{t("contact.selectSubject")}</option>
                      {SUBJECT_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea id="message" rows={6} required className="mt-1.5 resize-none" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  {t("contact.send")}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right — info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Sanskrit callout */}
            <div className="rounded-2xl bg-gradient-festive text-primary-foreground p-6 shadow-warm relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(43_95%_88%/0.2),transparent_55%)]" />
              <div className="relative z-10">
                <p className="font-sanskrit text-2xl text-gold mb-3">॥ अतिथि देवो भव ॥</p>
                <p className="text-sm leading-relaxed opacity-90">
                  "The guest is God." At Vidyalaya, every parent, student, and visitor is welcomed with warmth and respect.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <MessageCircle className="h-3.5 w-3.5" />
                  We respond within one working day
                </div>
              </div>
            </div>

            {/* Contact info cards */}
            <div className="rounded-2xl bg-card border border-gold/20 shadow-soft overflow-hidden">
              <div className="h-1 w-full bg-gradient-festive" />
              <div className="divide-y divide-gold/10">
                {items.map(({ icon: Icon, label, value }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ delay: idx * 0.07 }}
                    className="flex items-start gap-3 px-5 py-4"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-primary/70">{label}</p>
                      <p className="text-sm text-foreground/80 mt-0.5">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;
