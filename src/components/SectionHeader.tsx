import { motion } from "framer-motion";

interface Props {
  eyebrow?: string; // kept for API compat but no longer rendered
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeader = ({ title, subtitle, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className={center ? "text-center max-w-3xl mx-auto mb-8" : "mb-8 max-w-3xl"}
  >
    <h2
      className="font-display text-3xl md:text-5xl font-bold"
      style={{
        backgroundImage: "linear-gradient(90deg, hsl(22 88% 52%) 0%, hsl(38 95% 58%) 50%, hsl(22 88% 48%) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1.3,
        paddingTop: "0.1em",
        display: "inline-block",
      }}
    >
      {title}
    </h2>
    <div className={`mt-3 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${center ? "mx-auto" : ""}`} />
    {subtitle && (
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);
