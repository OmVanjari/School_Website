import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Wallet, Info, CheckCircle2 } from "lucide-react";
import heroAdmissions from "@/assets/hero-admissions.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Fees = () => {
  const { t } = useLanguage();

  const feeRecords = [
    { id: 1, className: t("fees.class1"), tuition: "₹2,500/month", admission: "₹5,000", exam: "₹800",   other: "₹500" },
    { id: 2, className: t("fees.class2"), tuition: "₹3,000/month", admission: "₹5,000", exam: "₹1,000", other: "₹500" },
    { id: 3, className: t("fees.class3"), tuition: "₹3,500/month", admission: "₹6,000", exam: "₹1,200", other: "₹600" },
    { id: 4, className: t("fees.class4"), tuition: "₹4,000/month", admission: "₹7,000", exam: "₹1,500", other: "₹700" },
    { id: 5, className: t("fees.class5"), tuition: "₹4,500/month", admission: "₹8,000", exam: "₹1,800", other: "₹800" },
  ];

  const paymentModes = [
    t("fees.pay1"),
    t("fees.pay2"),
    t("fees.pay3"),
    t("fees.pay4"),
  ];

  return (
    <>
      <PageHero
        title={t("fees.heroTitle")}
        sanskrit={t("fees.heroSanskrit")}
        subtitle={t("fees.heroSubtitle")}
        image={heroAdmissions}
      />

      <section className="container-narrow py-16">
        <SectionHeader
          eyebrow={t("fees.eyebrow")}
          title={t("fees.sectionTitle")}
          subtitle={t("fees.sectionSubtitle")}
        />

        {/* Fee table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="bg-card rounded-2xl border border-gold/20 overflow-x-auto shadow-soft"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-saffron text-white">
                <th className="text-left px-5 py-4 font-semibold">{t("fees.colClass")}</th>
                <th className="text-left px-5 py-4 font-semibold">{t("fees.colTuition")}</th>
                <th className="text-left px-5 py-4 font-semibold">{t("fees.colAdmission")}</th>
                <th className="text-left px-5 py-4 font-semibold">{t("fees.colExam")}</th>
                <th className="text-left px-5 py-4 font-semibold">{t("fees.colOther")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {feeRecords.map((fee, i) => (
                <motion.tr
                  key={fee.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ delay: i * 0.06 }}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-4 font-display font-semibold text-secondary">{fee.className}</td>
                  <td className="px-5 py-4 text-foreground/80">{fee.tuition}</td>
                  <td className="px-5 py-4 text-foreground/80">{fee.admission}</td>
                  <td className="px-5 py-4 text-foreground/80">{fee.exam}</td>
                  <td className="px-5 py-4 text-foreground/80">{fee.other}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Note */}
        <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          {t("fees.note")}
        </div>
      </section>

      {/* Payment modes */}
      <section className="container-narrow pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl border border-gold/20 p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-gradient-saffron text-white">
                <Wallet className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-secondary">{t("fees.paymentTitle")}</h3>
            </div>
            <ul className="space-y-3">
              {paymentModes.map((mode, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {mode}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-festive text-primary-foreground rounded-2xl p-6 shadow-warm flex flex-col justify-between">
            <div>
              <p className="font-sanskrit text-xl text-gold mb-3">{t("fees.scholarshipSanskrit")}</p>
              <h3 className="font-display text-2xl mb-2">{t("fees.scholarshipTitle")}</h3>
              <p className="opacity-90 text-sm leading-relaxed">{t("fees.scholarshipDesc")}</p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-sm font-medium transition-all"
            >
              {t("fees.scholarshipCta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
