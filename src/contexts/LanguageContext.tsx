import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "hi";

// ─── all translation keys ──────────────────────────────────────────────────────
type TranslationKey =
  // nav
  | "nav.home" | "nav.about" | "nav.academics" | "nav.admissions"
  | "nav.calendar" | "nav.notices" | "nav.fees" | "nav.contact"
  | "nav.applyNow" | "lang.english" | "lang.hindi"
  // hero
  | "home.heroTitle" | "home.heroSubtitle" | "home.beginJourney" | "home.discoverUs"
  // features section
  | "home.features.title" | "home.features.sub"
  | "home.feat1.title" | "home.feat1.desc"
  | "home.feat2.title" | "home.feat2.desc"
  | "home.feat3.title" | "home.feat3.desc"
  | "home.feat4.title" | "home.feat4.desc"
  // stats
  | "home.stat1.label" | "home.stat2.label" | "home.stat3.label" | "home.stat4.label"
  // quick links section
  | "home.quicklinks.title" | "home.quicklinks.sub"
  | "home.ql1.label" | "home.ql1.sub"
  | "home.ql2.label" | "home.ql2.sub"
  | "home.ql3.label" | "home.ql3.sub"
  | "home.ql4.label" | "home.ql4.sub"
  // announcements section
  | "home.announcements.title" | "home.announcements.sub" | "home.announcements.viewAll"
  | "home.announcements.latest"
  // testimonials section
  | "home.testimonials.title" | "home.testimonials.sub"
  | "home.test1.name" | "home.test1.role" | "home.test1.text"
  | "home.test2.name" | "home.test2.role" | "home.test2.text"
  | "home.test3.name" | "home.test3.role" | "home.test3.text"
  // cta section
  | "home.cta.title" | "home.cta.sub" | "home.cta.apply" | "home.cta.contact"
  // events section
  | "home.events.title" | "home.events.sub" | "home.events.viewAll"
  // features extra
  | "home.features.eyebrow" | "home.features.schoolLife"
  // cultural
  | "home.cultural.quote"
  // calendar page
  | "cal.heroTitle" | "cal.heroSubtitle"
  | "cal.sectionTitle" | "cal.sectionSub"
  | "cal.filterAll" | "cal.filterExam" | "cal.filterResult" | "cal.filterHoliday"
  | "cal.filterMeeting" | "cal.filterEvent" | "cal.filterLeave"
  | "cal.until" | "cal.noEvents"
  | "cal.cta.title" | "cal.cta.sub"
  // footer
  | "footer.tagline" | "footer.quicklinks" | "footer.visit" | "footer.copyright" | "footer.blessing";

// ─── translations ──────────────────────────────────────────────────────────────
const messages: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // nav
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
    // hero
    "home.heroTitle": "A Gurukul Spirit for Modern Schooling",
    "home.heroSubtitle": "Our school blends Bharatiya sanskar, strong academics, and joyful learning to shape disciplined, compassionate, and confident students.",
    "home.beginJourney": "Begin the Journey",
    "home.discoverUs": "Discover Us",
    // features
    "home.features.title": "Why Vidyalaya",
    "home.features.sub": "A school that nurtures the whole child — mind, body, and spirit.",
    "home.features.eyebrow": "Why Choose Us",
    "home.features.schoolLife": "School Life",
    "home.feat1.title": "Supportive Learning",
    "home.feat1.desc": "Balanced teaching, regular guidance, and personal attention for every child.",
    "home.feat2.title": "Science Labs",
    "home.feat2.desc": "Well-equipped labs that make science practical, fun, and easy to understand.",
    "home.feat3.title": "Arts & Activities",
    "home.feat3.desc": "Music, art, and creative programs that help students express themselves.",
    "home.feat4.title": "Sports & Fitness",
    "home.feat4.desc": "Outdoor games, yoga, and fitness activities for healthy growth.",
    // stats
    "home.stat1.label": "Years of Legacy",
    "home.stat2.label": "Happy Students",
    "home.stat3.label": "Devoted Teachers",
    "home.stat4.label": "Board Results",
    // quick links
    "home.quicklinks.title": "Quick Access",
    "home.quicklinks.sub": "Everything you need, right here.",
    "home.ql1.label": "Notices",
    "home.ql1.sub": "Circulars & updates",
    "home.ql2.label": "Fee Structure",
    "home.ql2.sub": "Class-wise fees",
    "home.ql3.label": "Calendar",
    "home.ql3.sub": "Exams & events",
    "home.ql4.label": "Admissions",
    "home.ql4.sub": "Apply for 2026–27",
    // announcements
    "home.announcements.title": "Latest Announcements",
    "home.announcements.sub": "Stay up to date with school news and events.",
    "home.announcements.viewAll": "View All",
    "home.announcements.latest": "Latest",
    // events
    "home.events.title": "Upcoming Events",
    "home.events.sub": "Important dates ahead",
    "home.events.viewAll": "Full calendar",
    // cultural
    "home.cultural.quote": "\"Lead us from the unreal to the real, from darkness unto light.\"",
    // testimonials
    "home.testimonials.title": "What Families Say",
    "home.testimonials.sub": "Voices from our school community.",
    "home.test1.name": "Anjali Sharma",
    "home.test1.role": "Parent, Class VIII",
    "home.test1.text": "Vidyalaya gave my daughter the confidence of modern science and the grace of Bharatiya sanskaars.",
    "home.test2.name": "Rahul Iyer",
    "home.test2.role": "Alumnus, Batch 2018",
    "home.test2.text": "My teachers shaped not only my mind, but my dharma. Forever grateful.",
    "home.test3.name": "Meera Patel",
    "home.test3.role": "Parent, Class V",
    "home.test3.text": "Festivals, Sanskrit, robotics — all under one roof. Truly a school of Bharat.",
    // cta
    "home.cta.title": "Ready to Join the Vidyalaya Family?",
    "home.cta.sub": "Admissions for 2026–27 are open. Take the first step today.",
    "home.cta.apply": "Apply Now",
    "home.cta.contact": "Contact Us",
    // calendar
    "cal.heroTitle": "Academic Calendar",
    "cal.heroSubtitle": "Exams, results, holidays, meetings and events — your complete academic year at a glance.",
    "cal.sectionTitle": "All Events",
    "cal.sectionSub": "Filter by category to find what matters most to you.",
    "cal.filterAll": "All",
    "cal.filterExam": "Exam",
    "cal.filterResult": "Result",
    "cal.filterHoliday": "Holiday",
    "cal.filterMeeting": "Meeting",
    "cal.filterEvent": "Event",
    "cal.filterLeave": "Leave",
    "cal.until": "Until",
    "cal.noEvents": "No events in this category.",
    "cal.cta.title": "Stay in the Loop",
    "cal.cta.sub": "Subscribe for monthly newsletter with calendar updates, photo highlights and parent notes.",
    // footer
    "footer.tagline": "Where ancient wisdom meets modern learning. Nurturing every child with the rich heritage of Bharat.",
    "footer.quicklinks": "Quick Links",
    "footer.visit": "Visit Us",
    "footer.copyright": "All rights reserved",
    "footer.blessing": "शुभम् भवतु · सर्वे भवन्तु सुखिनः",
  },

  hi: {
    // nav
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
    // hero
    "home.heroTitle": "आधुनिक शिक्षा में गुरुकुल की आत्मा",
    "home.heroSubtitle": "हमारा विद्यालय भारतीय संस्कार, सशक्त शिक्षा और आनंदमय सीख को साथ लेकर अनुशासित, करुणामय और आत्मविश्वासी विद्यार्थियों का निर्माण करता है।",
    "home.beginJourney": "यात्रा शुरू करें",
    "home.discoverUs": "हमारे बारे में जानें",
    // features
    "home.features.title": "विद्यालय क्यों चुनें",
    "home.features.sub": "एक विद्यालय जो बच्चे के मन, शरीर और आत्मा — तीनों का पोषण करता है।",
    "home.features.eyebrow": "हमें क्यों चुनें",
    "home.features.schoolLife": "विद्यालय जीवन",
    "home.feat1.title": "सहायक शिक्षण",
    "home.feat1.desc": "संतुलित शिक्षण, नियमित मार्गदर्शन और प्रत्येक बच्चे पर व्यक्तिगत ध्यान।",
    "home.feat2.title": "विज्ञान प्रयोगशाला",
    "home.feat2.desc": "सुसज्जित प्रयोगशालाएँ जो विज्ञान को व्यावहारिक, रोचक और सरल बनाती हैं।",
    "home.feat3.title": "कला एवं गतिविधियाँ",
    "home.feat3.desc": "संगीत, कला और रचनात्मक कार्यक्रम जो विद्यार्थियों को अभिव्यक्ति सिखाते हैं।",
    "home.feat4.title": "खेल एवं स्वास्थ्य",
    "home.feat4.desc": "स्वस्थ विकास के लिए मैदानी खेल, योग और फिटनेस गतिविधियाँ।",
    // stats
    "home.stat1.label": "वर्षों की विरासत",
    "home.stat2.label": "प्रसन्न विद्यार्थी",
    "home.stat3.label": "समर्पित शिक्षक",
    "home.stat4.label": "बोर्ड परिणाम",
    // quick links
    "home.quicklinks.title": "त्वरित पहुँच",
    "home.quicklinks.sub": "आपकी जरूरत की हर चीज़, यहीं मिलेगी।",
    "home.ql1.label": "सूचनाएं",
    "home.ql1.sub": "परिपत्र और अपडेट",
    "home.ql2.label": "शुल्क संरचना",
    "home.ql2.sub": "कक्षावार शुल्क",
    "home.ql3.label": "कैलेंडर",
    "home.ql3.sub": "परीक्षा और कार्यक्रम",
    "home.ql4.label": "प्रवेश",
    "home.ql4.sub": "2026–27 के लिए आवेदन",
    // announcements
    "home.announcements.title": "नवीनतम घोषणाएं",
    "home.announcements.sub": "विद्यालय की खबरों और कार्यक्रमों से अपडेट रहें।",
    "home.announcements.viewAll": "सभी देखें",
    "home.announcements.latest": "नवीनतम",
    // events
    "home.events.title": "आगामी कार्यक्रम",
    "home.events.sub": "महत्वपूर्ण आगामी तिथियाँ",
    "home.events.viewAll": "पूरा कैलेंडर",
    // cultural
    "home.cultural.quote": "\"हमें असत्य से सत्य की ओर, अंधकार से प्रकाश की ओर ले चलो।\"",
    // testimonials
    "home.testimonials.title": "परिवारों की राय",
    "home.testimonials.sub": "हमारे विद्यालय समुदाय की आवाज़ें।",
    "home.test1.name": "अंजलि शर्मा",
    "home.test1.role": "अभिभावक, कक्षा VIII",
    "home.test1.text": "विद्यालय ने मेरी बेटी को आधुनिक विज्ञान का आत्मविश्वास और भारतीय संस्कारों की शोभा दी।",
    "home.test2.name": "राहुल अय्यर",
    "home.test2.role": "पूर्व छात्र, बैच 2018",
    "home.test2.text": "मेरे शिक्षकों ने केवल मेरी बुद्धि नहीं, बल्कि मेरे धर्म को भी गढ़ा। सदा आभारी हूँ।",
    "home.test3.name": "मीरा पटेल",
    "home.test3.role": "अभिभावक, कक्षा V",
    "home.test3.text": "त्योहार, संस्कृत, रोबोटिक्स — सब एक छत के नीचे। सच में भारत का विद्यालय।",
    // cta
    "home.cta.title": "विद्यालय परिवार में शामिल होने के लिए तैयार हैं?",
    "home.cta.sub": "2026–27 के लिए प्रवेश खुले हैं। आज पहला कदम उठाएं।",
    "home.cta.apply": "अभी आवेदन करें",
    "home.cta.contact": "संपर्क करें",
    // calendar
    "cal.heroTitle": "शैक्षणिक कैलेंडर",
    "cal.heroSubtitle": "परीक्षाएं, परिणाम, छुट्टियाँ, बैठकें और कार्यक्रम — पूरे शैक्षणिक वर्ष की एक झलक।",
    "cal.sectionTitle": "सभी कार्यक्रम",
    "cal.sectionSub": "अपनी जरूरत के अनुसार श्रेणी से फ़िल्टर करें।",
    "cal.filterAll": "सभी",
    "cal.filterExam": "परीक्षा",
    "cal.filterResult": "परिणाम",
    "cal.filterHoliday": "छुट्टी",
    "cal.filterMeeting": "बैठक",
    "cal.filterEvent": "कार्यक्रम",
    "cal.filterLeave": "अवकाश",
    "cal.until": "तक",
    "cal.noEvents": "इस श्रेणी में कोई कार्यक्रम नहीं।",
    "cal.cta.title": "अपडेट रहें",
    "cal.cta.sub": "कैलेंडर अपडेट, फोटो हाइलाइट्स और अभिभावक नोट्स के साथ मासिक न्यूज़लेटर के लिए सदस्यता लें।",
    // footer
    "footer.tagline": "जहाँ प्राचीन ज्ञान आधुनिक शिक्षा से मिलता है। भारत की समृद्ध विरासत के साथ हर बच्चे का पोषण।",
    "footer.quicklinks": "त्वरित लिंक",
    "footer.visit": "हमसे मिलें",
    "footer.copyright": "सर्वाधिकार सुरक्षित",
    "footer.blessing": "शुभम् भवतु · सर्वे भवन्तु सुखिनः",
  },
};

// ─── context ───────────────────────────────────────────────────────────────────
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
    if (stored === "en" || stored === "hi") setLanguageState(stored);
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    localStorage.setItem("vidyalaya-language", next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: (key) => messages[language][key] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
