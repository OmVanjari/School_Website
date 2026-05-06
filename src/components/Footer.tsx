import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const COMBO = 1;

const contact = [
  { Icon: MapPin, val: "108, Saraswati Marg, Bengaluru – 560001" },
  { Icon: Phone,  val: "+91 98765 43210" },
  { Icon: Mail,   val: "hello@vidyalaya.in" },
];

export const Footer = () => {
  const { t } = useLanguage();

export const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { to: "/about",      label: t("nav.about") },
    { to: "/academics",  label: t("nav.academics") },
    { to: "/admissions", label: t("nav.admissions") },
    { to: "/calendar",   label: t("nav.calendar") },
    { to: "/notices",    label: t("nav.notices") },
    { to: "/fees",       label: t("nav.fees") },
    { to: "/contact",    label: t("nav.contact") },
  ];

  return (
    <footer className="relative mt-12 md:mt-16 overflow-hidden" style={{ background: c.bg }}>
      <div className="container-narrow relative grid gap-10 py-16 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: `${c.text}22`, border: `1px solid ${c.text}44` }}>
              <Flame className="h-6 w-6" style={{ color: c.text }} />
            </div>
            <div>
              <div className="font-display text-2xl font-bold" style={{ color: c.text }}>Vidyalaya</div>
              <div className="font-sanskrit text-sm" style={{ color: c.muted }}>विद्या ददाति विनयं</div>
            </div>
          </div>
          <p className="max-w-md leading-relaxed text-sm" style={{ color: c.muted }}>
            {t("footer.tagline")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg mb-4" style={{ color: c.text }}>{t("footer.quickLinks")}</h4>
          <ul className="space-y-2 text-sm">
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors inline-block hover:translate-x-1 duration-200 hover:opacity-100 opacity-80" style={{ color: c.muted }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg mb-4" style={{ color: c.text }}>{t("footer.visitUs")}</h4>
          <ul className="space-y-3 text-sm">
            {[
              { Icon: MapPin, val: t("footer.address") },
              { Icon: Phone, val: "+91 98765 43210" },
              { Icon: Mail,  val: "hello@vidyalaya.in" },
            ].map(({ Icon, val }) => (
              <li key={val} className="flex gap-2" style={{ color: c.muted }}>
                <Icon className="h-4 w-4 mt-0.5 shrink-0" style={{ color: c.text }} />
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="py-5 text-center text-sm"
        style={{ borderTop: `1px solid ${c.border}`, color: c.muted }}
      >
        {t("footer.copyright")}
      </motion.div>
    </footer>
  );
};
