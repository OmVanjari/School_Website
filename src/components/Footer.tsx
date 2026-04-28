import { Link } from "react-router-dom";
import { Flame, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

/*
  Pick a combo by changing the number (1–4):
  1 → Red → Orange → Yellow  gradient  +  Dark Red text
  2 → Blue → Orange → Yellow gradient  +  Dark Blue text
  3 → Orange → Red → Yellow  gradient  +  Dark Red text
  4 → Yellow → Orange → Red  gradient  +  Dark Red text
*/
const COMBO = 1;

const combos: Record<number, { bg: string; text: string; muted: string; border: string }> = {
  1: {
    bg:     "linear-gradient(135deg,#f97316 0%,#fbbf24 45%,#fde68a 100%)",
    text:   "#7c2d12",
    muted:  "#9a3412",
    border: "#7c2d1230",
  },
  2: {
    bg:     "linear-gradient(135deg,#ef4444 0%,#f97316 45%,#fde68a 100%)",
    text:   "#7f1d1d",
    muted:  "#991b1b",
    border: "#7f1d1d30",
  },
  3: {
    bg:     "linear-gradient(135deg,#fbbf24 0%,#f97316 50%,#ef4444 100%)",
    text:   "#7c2d12",
    muted:  "#9a3412",
    border: "#7c2d1230",
  },
  4: {
    bg:     "linear-gradient(135deg,#60a5fa 0%,#f97316 50%,#fde68a 100%)",
    text:   "#1e3a8a",
    muted:  "#1e40af",
    border: "#1e3a8a30",
  },
};

const c = combos[COMBO];

const links = [
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/calendar", label: "Calendar" },
  { to: "/notices", label: "Notices" },
  { to: "/fees", label: "Fee Structure" },
  { to: "/contact", label: "Contact Us" },
];

export const Footer = () => (
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
          Where ancient wisdom meets modern learning. Nurturing every child with the rich heritage of Bharat.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-display text-lg mb-4" style={{ color: c.text }}>Quick Links</h4>
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
        <h4 className="font-display text-lg mb-4" style={{ color: c.text }}>Visit Us</h4>
        <ul className="space-y-3 text-sm">
          {[
            { Icon: MapPin, val: "108, Saraswati Marg, Bengaluru" },
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
      © {new Date().getFullYear()} Vidyalaya · Crafted with devotion · शुभम् भवतु
    </motion.div>
  </footer>
);
