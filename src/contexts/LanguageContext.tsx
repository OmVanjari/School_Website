import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "hi";

type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.academics"
  | "nav.admissions"
  | "nav.calendar"
  | "nav.notices"
  | "nav.fees"
  | "nav.contact"
  | "nav.applyNow"
  | "lang.english"
  | "lang.hindi"
  | "home.heroTitle"
  | "home.heroSubtitle"
  | "home.beginJourney"
  | "home.discoverUs"
  | "contact.heroSanskrit"
  | "contact.heroTitle"
  | "contact.heroSubtitle"
  | "contact.eyebrow"
  | "contact.reachUs"
  | "contact.mainCampusLabel"
  | "contact.mainCampusValue"
  | "contact.callLabel"
  | "contact.emailLabel"
  | "contact.hoursLabel"
  | "contact.hoursValue"
  | "contact.formTitle"
  | "contact.formSubtitle"
  | "contact.name"
  | "contact.email"
  | "contact.subject"
  | "contact.message"
  | "contact.send"
  | "contact.toastSuccess"
  | "contact.campusTag"
  | "contact.campusTitle"
  | "contact.campusAddress"
  | "contact.campusNear"
  | "contact.campusDirections"
  | "contact.mapTitle"
  | "footer.tagline"
  | "footer.quickLinks"
  | "footer.visitUs"
  | "footer.address"
  | "footer.copyright"
  | "fees.heroSanskrit"
  | "fees.heroTitle"
  | "fees.heroSubtitle"
  | "fees.eyebrow"
  | "fees.sectionTitle"
  | "fees.sectionSubtitle"
  | "fees.colClass"
  | "fees.colTuition"
  | "fees.colAdmission"
  | "fees.colExam"
  | "fees.colOther"
  | "fees.note"
  | "fees.paymentTitle"
  | "fees.pay1"
  | "fees.pay2"
  | "fees.pay3"
  | "fees.pay4"
  | "fees.scholarshipSanskrit"
  | "fees.scholarshipTitle"
  | "fees.scholarshipDesc"
  | "fees.scholarshipCta"
  | "fees.class1"
  | "fees.class2"
  | "fees.class3"
  | "fees.class4"
  | "fees.class5";

const messages: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.academics": "Academics",
    "nav.admissions": "Admissions",
    "nav.calendar": "Calendar",
    "nav.notices": "Notices",
    "nav.fees": "Fee Structure",
    "nav.contact": "Contact",
    "nav.applyNow": "Apply Now",
    "lang.english": "EN",
    "lang.hindi": "हिंदी",
    "home.heroTitle": "A Gurukul Spirit for Modern Schooling",
    "home.heroSubtitle": "Our school blends Bharatiya sanskar, strong academics, and joyful learning to shape disciplined, compassionate, and confident students.",
    "home.beginJourney": "Begin the Journey",
    "home.discoverUs": "Discover Us",
    "contact.heroSanskrit": "॥ अतिथि देवो भव ॥",
    "contact.heroTitle": "Visit Our Vidyalaya",
    "contact.heroSubtitle": "Parents, students, and guests are always welcome. Come meet us on campus or reach out for admissions and support.",
    "contact.eyebrow": "॥ संपर्कः ॥",
    "contact.reachUs": "Reach Us",
    "contact.mainCampusLabel": "Main Campus",
    "contact.mainCampusValue": "108, Saraswati Marg, Bengaluru — 560001",
    "contact.callLabel": "Call Us",
    "contact.emailLabel": "Email",
    "contact.hoursLabel": "Office Hours",
    "contact.hoursValue": "Mon – Sat · 8 AM – 5 PM",
    "contact.formTitle": "Send Us a Message",
    "contact.formSubtitle": "We'll respond within one working day.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.toastSuccess": "Message sent! We will reply soon. 🙏",
    "contact.campusTag": "Campus Address",
    "contact.campusTitle": "Vidyalaya Main Campus",
    "contact.campusAddress": "108, Saraswati Marg, Bengaluru - 560001",
    "contact.campusNear": "Near Temple Square",
    "contact.campusDirections": "Reach us by metro or city bus. Parent parking is available at the entrance gate.",
    "contact.mapTitle": "Vidyalaya location on map",
    "footer.tagline": "Where ancient wisdom meets modern learning. Nurturing every child with the rich heritage of Bharat.",
    "footer.quickLinks": "Quick Links",
    "footer.visitUs": "Visit Us",
    "footer.address": "108, Saraswati Marg, Bengaluru",
    "footer.copyright": "© 2026 Vidyalaya · Crafted with devotion · शुभम् भवतु",
    "fees.heroSanskrit": "॥ शुल्क विवरण ॥",
    "fees.heroTitle": "Fee Structure",
    "fees.heroSubtitle": "Transparent, class-wise fee details for the academic year 2025–26.",
    "fees.eyebrow": "॥ शुल्काः ॥",
    "fees.sectionTitle": "Class-wise Fee Details",
    "fees.sectionSubtitle": "All fees are for the academic year 2025–26. Contact the office for scholarship information.",
    "fees.colClass": "Class / Grade",
    "fees.colTuition": "Tuition Fee",
    "fees.colAdmission": "Admission Fee",
    "fees.colExam": "Exam Fee",
    "fees.colOther": "Other Charges",
    "fees.note": "Admission fee is a one-time charge. Tuition fee is payable monthly or quarterly. All fees are subject to revision for the next academic year.",
    "fees.paymentTitle": "Payment Modes",
    "fees.pay1": "Cash payment at school office (Mon–Sat, 9 AM – 2 PM)",
    "fees.pay2": "Online transfer via NEFT/RTGS to school bank account",
    "fees.pay3": "Demand Draft in favour of 'Vidyalaya School'",
    "fees.pay4": "UPI payment at the school counter",
    "fees.scholarshipSanskrit": "॥ विद्यार्थी सर्वोपरि ॥",
    "fees.scholarshipTitle": "Need Financial Assistance?",
    "fees.scholarshipDesc": "Vidyalaya offers merit-based and need-based scholarships. No deserving child should be denied education due to financial constraints.",
    "fees.scholarshipCta": "Contact Us for Scholarships",
    "fees.class1": "Class I – II",
    "fees.class2": "Class III – V",
    "fees.class3": "Class VI – VIII",
    "fees.class4": "Class IX – X",
    "fees.class5": "Class XI – XII",
  },
  hi: {
    "nav.home": "मुख्य पृष्ठ",
    "nav.about": "हमारे बारे में",
    "nav.academics": "शैक्षणिक",
    "nav.admissions": "प्रवेश",
    "nav.calendar": "कैलेंडर",
    "nav.notices": "सूचनाएं",
    "nav.fees": "शुल्क संरचना",
    "nav.contact": "संपर्क",
    "nav.applyNow": "अभी आवेदन करें",
    "lang.english": "EN",
    "lang.hindi": "हिंदी",
    "home.heroTitle": "आधुनिक शिक्षा में गुरुकुल की आत्मा",
    "home.heroSubtitle": "हमारा विद्यालय भारतीय संस्कार, सशक्त शिक्षा और आनंदमय सीख को साथ लेकर अनुशासित, करुणामय और आत्मविश्वासी विद्यार्थियों का निर्माण करता है।",
    "home.beginJourney": "यात्रा शुरू करें",
    "home.discoverUs": "हमारे बारे में जानें",
    "contact.heroSanskrit": "॥ अतिथि देवो भव ॥",
    "contact.heroTitle": "हमारे विद्यालय में पधारें",
    "contact.heroSubtitle": "अभिभावक, विद्यार्थी और अतिथि — सभी का हार्दिक स्वागत है। परिसर में मिलें या प्रवेश व सहायता के लिए संपर्क करें।",
    "contact.eyebrow": "॥ संपर्कः ॥",
    "contact.reachUs": "संपर्क करें",
    "contact.mainCampusLabel": "मुख्य परिसर",
    "contact.mainCampusValue": "१०८, सरस्वती मार्ग, बेंगलुरु — ५६०००१",
    "contact.callLabel": "फ़ोन करें",
    "contact.emailLabel": "ईमेल",
    "contact.hoursLabel": "कार्यालय समय",
    "contact.hoursValue": "सोम – शनि · प्रातः ८ – सायं ५",
    "contact.formTitle": "हमें संदेश भेजें",
    "contact.formSubtitle": "हम एक कार्य दिवस के भीतर उत्तर देंगे।",
    "contact.name": "नाम",
    "contact.email": "ईमेल",
    "contact.subject": "विषय",
    "contact.message": "संदेश",
    "contact.send": "संदेश भेजें",
    "contact.toastSuccess": "संदेश भेज दिया गया! हम शीघ्र उत्तर देंगे। 🙏",
    "contact.campusTag": "परिसर का पता",
    "contact.campusTitle": "विद्यालय मुख्य परिसर",
    "contact.campusAddress": "१०८, सरस्वती मार्ग, बेंगलुरु - ५६०००१",
    "contact.campusNear": "मंदिर चौक के निकट",
    "contact.campusDirections": "मेट्रो या सिटी बस से पहुँचें। अभिभावकों के लिए प्रवेश द्वार पर पार्किंग उपलब्ध है।",
    "contact.mapTitle": "मानचित्र पर विद्यालय का स्थान",
    "footer.tagline": "जहाँ प्राचीन ज्ञान आधुनिक शिक्षा से मिलता है। भारत की समृद्ध विरासत के साथ हर बच्चे का पोषण।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.visitUs": "हमसे मिलें",
    "footer.address": "१०८, सरस्वती मार्ग, बेंगलुरु",
    "footer.copyright": "© २०२६ विद्यालय · श्रद्धा से निर्मित · शुभम् भवतु",
    "fees.heroSanskrit": "॥ शुल्क विवरण ॥",
    "fees.heroTitle": "शुल्क संरचना",
    "fees.heroSubtitle": "शैक्षणिक वर्ष २०२५–२६ के लिए पारदर्शी, कक्षावार शुल्क विवरण।",
    "fees.eyebrow": "॥ शुल्काः ॥",
    "fees.sectionTitle": "कक्षावार शुल्क विवरण",
    "fees.sectionSubtitle": "सभी शुल्क शैक्षणिक वर्ष २०२५–२६ के लिए हैं। छात्रवृत्ति जानकारी के लिए कार्यालय से संपर्क करें।",
    "fees.colClass": "कक्षा / ग्रेड",
    "fees.colTuition": "शिक्षण शुल्क",
    "fees.colAdmission": "प्रवेश शुल्क",
    "fees.colExam": "परीक्षा शुल्क",
    "fees.colOther": "अन्य शुल्क",
    "fees.note": "प्रवेश शुल्क एकमुश्त है। शिक्षण शुल्क मासिक या त्रैमासिक देय है। सभी शुल्क अगले शैक्षणिक वर्ष में संशोधन के अधीन हैं।",
    "fees.paymentTitle": "भुगतान के तरीके",
    "fees.pay1": "विद्यालय कार्यालय में नकद भुगतान (सोम–शनि, प्रातः ९ – दोपहर २)",
    "fees.pay2": "विद्यालय बैंक खाते में NEFT/RTGS द्वारा ऑनलाइन ट्रांसफर",
    "fees.pay3": "'विद्यालय स्कूल' के पक्ष में डिमांड ड्राफ्ट",
    "fees.pay4": "विद्यालय काउंटर पर UPI भुगतान",
    "fees.scholarshipSanskrit": "॥ विद्यार्थी सर्वोपरि ॥",
    "fees.scholarshipTitle": "आर्थिक सहायता चाहिए?",
    "fees.scholarshipDesc": "विद्यालय योग्यता-आधारित और आवश्यकता-आधारित छात्रवृत्तियाँ प्रदान करता है। किसी भी योग्य बच्चे को आर्थिक कारणों से शिक्षा से वंचित नहीं किया जाना चाहिए।",
    "fees.scholarshipCta": "छात्रवृत्ति के लिए संपर्क करें",
    "fees.class1": "कक्षा I – II",
    "fees.class2": "कक्षा III – V",
    "fees.class3": "कक्षा VI – VIII",
    "fees.class4": "कक्षा IX – X",
    "fees.class5": "कक्षा XI – XII",
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("vidyalaya-language");
    if (stored === "en" || stored === "hi") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    localStorage.setItem("vidyalaya-language", next);
  };

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (key: TranslationKey) => messages[language][key],
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
