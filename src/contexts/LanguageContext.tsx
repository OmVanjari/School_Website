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
  // gallery section
  | "home.gallery.title" | "home.gallery.sub"
  | "home.gallery.l1" | "home.gallery.l2" | "home.gallery.l3"
  | "home.gallery.l4" | "home.gallery.l5" | "home.gallery.l6" | "home.gallery.l7"
  // calendar page
  | "cal.heroTitle" | "cal.heroSubtitle"
  | "cal.sectionTitle" | "cal.sectionSub"
  | "cal.filterAll" | "cal.filterExam" | "cal.filterResult" | "cal.filterHoliday"
  | "cal.filterMeeting" | "cal.filterEvent" | "cal.filterLeave"
  | "cal.until" | "cal.noEvents"
  | "cal.cta.title" | "cal.cta.sub"
  // footer
  | "footer.tagline" | "footer.quicklinks" | "footer.visit" | "footer.copyright" | "footer.blessing"
  // about page
  | "about.heroTitle" | "about.heroSanskrit" | "about.heroSubtitle"
  | "about.mvv.eyebrow" | "about.mvv.title" | "about.mvv.subtitle"
  | "about.mission.title" | "about.mission.desc" | "about.mission.footer"
  | "about.vision.title" | "about.vision.desc" | "about.vision.footer"
  | "about.values.title" | "about.values.desc" | "about.values.footer"
  | "about.timeline.eyebrow" | "about.timeline.title" | "about.timeline.subtitle"
  | "about.timeline.2005.title" | "about.timeline.2005.desc"
  | "about.timeline.2012.title" | "about.timeline.2012.desc"
  | "about.timeline.2018.title" | "about.timeline.2018.desc"
  | "about.timeline.2023.title" | "about.timeline.2023.desc"
  | "about.achievements.eyebrow" | "about.achievements.title" | "about.achievements.subtitle"
  | "about.achievement1.title" | "about.achievement1.desc"
  | "about.achievement2.title" | "about.achievement2.desc"
  | "about.achievement3.title" | "about.achievement3.desc"
  | "about.achievement4.title" | "about.achievement4.desc"
  | "about.facilities.eyebrow" | "about.facilities.title" | "about.facilities.subtitle"
  | "about.facility1.title" | "about.facility1.desc"
  | "about.facility2.title" | "about.facility2.desc"
  | "about.facility3.title" | "about.facility3.desc"
  | "about.facility4.title" | "about.facility4.desc"
  | "about.facility5.title" | "about.facility5.desc"
  | "about.facility6.title" | "about.facility6.desc"
  | "about.principal.quote"
  | "about.principal.name" | "about.principal.role"
  | "about.team.eyebrow" | "about.team.title" | "about.team.subtitle"
  | "about.team1.name" | "about.team1.role" | "about.team1.expertise"
  | "about.team2.name" | "about.team2.role" | "about.team2.expertise"
  | "about.team3.name" | "about.team3.role" | "about.team3.expertise"
  | "about.team4.name" | "about.team4.role" | "about.team4.expertise"
  | "about.team5.name" | "about.team5.role" | "about.team5.expertise"
  | "about.team6.name" | "about.team6.role" | "about.team6.expertise";

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
    // gallery
    "home.gallery.title": "Life at Vidyalaya",
    "home.gallery.sub": "A glimpse into our vibrant school community.",
    "home.gallery.l1": "Campus Life",
    "home.gallery.l2": "Academics",
    "home.gallery.l3": "Admissions",
    "home.gallery.l4": "Events & Festivals",
    "home.gallery.l5": "Contact & Community",
    "home.gallery.l6": "Sports & Fitness",
    "home.gallery.l7": "School Home",
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
    // about page
    "about.heroTitle": "About Our Vidyalaya",
    "about.heroSanskrit": "॥ सत्यं शिवं सुन्दरम् ॥",
    "about.heroSubtitle": "For over two decades, our school has nurtured character, scholarship, and seva through a joyful blend of Bharatiya tradition and modern learning.",
    "about.mvv.eyebrow": "॥ प्रेरणा ॥",
    "about.mvv.title": "Mission, Vision & Values",
    "about.mvv.subtitle": "The guiding principles behind our classrooms, assemblies, and community life.",
    "about.mission.title": "Mission",
    "about.mission.desc": "To nurture holistic excellence through inclusive education that honours our heritage and embraces innovation.",
    "about.mission.footer": "Learning with purpose, compassion, and confidence.",
    "about.vision.title": "Vision",
    "about.vision.desc": "A future-ready learning community rooted in Indian ethos, shaping global citizens with dharmic values.",
    "about.vision.footer": "Growing students who lead with clarity and character.",
    "about.values.title": "Values",
    "about.values.desc": "Respect, Integrity, Curiosity, Compassion — the four pillars of every Vidyalaya child.",
    "about.values.footer": "The daily culture that shapes every step.",
    "about.timeline.eyebrow": "॥ इतिहासः ॥",
    "about.timeline.title": "Our Journey",
    "about.timeline.subtitle": "Milestones along our two-decade path of dharmic education.",
    "about.timeline.2005.title": "Founding",
    "about.timeline.2005.desc": "Vidyalaya was founded with 60 students and a single banyan tree.",
    "about.timeline.2012.title": "Campus Expansion",
    "about.timeline.2012.desc": "Added Saraswati Block — labs, library and a temple courtyard.",
    "about.timeline.2018.title": "National Recognition",
    "about.timeline.2018.desc": "Awarded 'Best Heritage School' by Bharat Education Council.",
    "about.timeline.2023.title": "Digital Transformation",
    "about.timeline.2023.desc": "Smart classrooms, robotics labs and a Vedic mathematics centre.",
    "about.achievements.eyebrow": "॥ उपलब्धयः ॥",
    "about.achievements.title": "Achievements & Recognition",
    "about.achievements.subtitle": "Recognized excellence across academics, sports and culture.",
    "about.achievement1.title": "100% Pass Rate",
    "about.achievement1.desc": "Consistent 100% pass rate in board examinations for the past 5 years.",
    "about.achievement2.title": "National Awards",
    "about.achievement2.desc": "Multiple national awards for academic excellence and cultural programs.",
    "about.achievement3.title": "Global Reach",
    "about.achievement3.desc": "Alumni studying and working across 25+ countries worldwide.",
    "about.achievement4.title": "Innovation Hub",
    "about.achievement4.desc": "2nd position in National Science Olympiad for three consecutive years.",
    "about.facilities.eyebrow": "॥ सुविधाः ॥",
    "about.facilities.title": "Campus Facilities",
    "about.facilities.subtitle": "Modern infrastructure designed for holistic learning.",
    "about.facility1.title": "Smart Classrooms",
    "about.facility1.desc": "Interactive boards, projectors and high-speed internet in every room.",
    "about.facility2.title": "Science & Tech Labs",
    "about.facility2.desc": "State-of-the-art physics, chemistry, biology and computer labs.",
    "about.facility3.title": "Sports Complex",
    "about.facility3.desc": "Olympic-standard facilities for cricket, badminton, kabaddi and yoga.",
    "about.facility4.title": "Digital Library",
    "about.facility4.desc": "50,000+ books, digital archives and e-learning resources.",
    "about.facility5.title": "Auditorium",
    "about.facility5.desc": "3000-seat capacity venue with sound system for events and performances.",
    "about.facility6.title": "Cafeteria",
    "about.facility6.desc": "Nutritious meals prepared fresh daily following health guidelines.",
    "about.principal.quote": "Education is the sacred flame that illuminates the path of dharma. At our Vidyalaya, we strive to nurture not just the mind, but the soul and character of every student.",
    "about.principal.name": "Dr. Arvind Krishnan",
    "about.principal.role": "Principal · Vidyalaya",
    "about.team.eyebrow": "॥ नेतृत्वम् ॥",
    "about.team.title": "Leadership Team",
    "about.team.subtitle": "Dedicated educators shaping the future of our students.",
    "about.team1.name": "Dr. Arvind Krishnan",
    "about.team1.role": "Principal",
    "about.team1.expertise": "Education & Leadership",
    "about.team2.name": "Ms. Priya Sharma",
    "about.team2.role": "Vice Principal (Academics)",
    "about.team2.expertise": "Curriculum Design",
    "about.team3.name": "Mr. Rajesh Kumar",
    "about.team3.role": "Head of Science",
    "about.team3.expertise": "STEM Education",
    "about.team4.name": "Mrs. Sneha Patel",
    "about.team4.role": "Head of Languages",
    "about.team4.expertise": "Linguistic Excellence",
    "about.team5.name": "Mr. Vikram Singh",
    "about.team5.role": "Sports Director",
    "about.team5.expertise": "Holistic Development",
    "about.team6.name": "Ms. Anjali Verma",
    "about.team6.role": "Counselor",
    "about.team6.expertise": "Student Wellbeing",
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
    // gallery
    "home.gallery.title": "विद्यालय में जीवन",
    "home.gallery.sub": "हमारे जीवंत विद्यालय समुदाय की एक झलक।",
    "home.gallery.l1": "परिसर जीवन",
    "home.gallery.l2": "शैक्षणिक",
    "home.gallery.l3": "प्रवेश",
    "home.gallery.l4": "उत्सव एवं कार्यक्रम",
    "home.gallery.l5": "संपर्क एवं समुदाय",
    "home.gallery.l6": "खेल एवं स्वास्थ्य",
    "home.gallery.l7": "विद्यालय गृह",
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
    // about page
    "about.heroTitle": "हमारे विद्यालय के बारे में",
    "about.heroSanskrit": "॥ सत्यं शिवं सुन्दरम् ॥",
    "about.heroSubtitle": "बीस वर्षों से अधिक समय से, हमारा विद्यालय भारतीय परंपरा और आधुनिक शिक्षा के आनंदमय मिश्रण के माध्यम से चरित्र, विद्या और सेवा का पोषण करता है।",
    "about.mvv.eyebrow": "॥ प्रेरणा ॥",
    "about.mvv.title": "मिशन, विजन एवं मूल्य",
    "about.mvv.subtitle": "हमारे कक्षाओं, सभाओं और समुदाय जीवन के पीछे मार्गदर्शक सिद्धांत।",
    "about.mission.title": "मिशन",
    "about.mission.desc": "हमारी विरासत का सम्मान करने और नवाचार को अपनाने वाली समावेशी शिक्षा के माध्यम से समग्र उत्कृष्टता का पोषण करना।",
    "about.mission.footer": "उद्देश्य, करुणा और आत्मविश्वास के साथ सीखना।",
    "about.vision.title": "विजन",
    "about.vision.desc": "भारतीय मूल्यों में जड़ित भविष्य-तैयार सीखने वाला समुदाय, जो धर्मिक मूल्यों के साथ वैश्विक नागरिकों का निर्माण करता है।",
    "about.vision.footer": "स्पष्टता और चरित्र के साथ नेतृत्व करने वाले विद्यार्थियों का विकास।",
    "about.values.title": "मूल्य",
    "about.values.desc": "सम्मान, ईमानदारी, जिज्ञासा, करुणा — हर विद्यालय बच्चे के चार स्तंभ।",
    "about.values.footer": "दैनिक संस्कृति जो हर कदम को आकार देती है।",
    "about.timeline.eyebrow": "॥ इतिहासः ॥",
    "about.timeline.title": "हमारी यात्रा",
    "about.timeline.subtitle": "धर्मिक शिक्षा की हमारी दो दशकों की यात्रा में मील के पत्थर।",
    "about.timeline.2005.title": "स्थापना",
    "about.timeline.2005.desc": "विद्यालय की स्थापना 60 विद्यार्थियों और एक बरगद के पेड़ के साथ हुई।",
    "about.timeline.2012.title": "परिसर विस्तार",
    "about.timeline.2012.desc": "सरस्वती ब्लॉक जोड़ा गया — प्रयोगशालाएँ, पुस्तकालय और मंदिर का आंगन।",
    "about.timeline.2018.title": "राष्ट्रीय मान्यता",
    "about.timeline.2018.desc": "भारत शिक्षा परिषद द्वारा 'सर्वश्रेष्ठ विरासत विद्यालय' पुरस्कार प्राप्त।",
    "about.timeline.2023.title": "डिजिटल परिवर्तन",
    "about.timeline.2023.desc": "स्मार्ट कक्षाएँ, रोबोटिक्स प्रयोगशालाएँ और वेदिक गणित केंद्र।",
    "about.achievements.eyebrow": "॥ उपलब्धयः ॥",
    "about.achievements.title": "उपलब्धियाँ एवं मान्यता",
    "about.achievements.subtitle": "शैक्षणिक, खेलकूद और संस्कृति में मान्यता प्राप्त उत्कृष्टता।",
    "about.achievement1.title": "100% पास दर",
    "about.achievement1.desc": "पिछले 5 वर्षों में बोर्ड परीक्षाओं में निरंतर 100% पास दर।",
    "about.achievement2.title": "राष्ट्रीय पुरस्कार",
    "about.achievement2.desc": "शैक्षणिक उत्कृष्टता और सांस्कृतिक कार्यक्रमों के लिए कई राष्ट्रीय पुरस्कार।",
    "about.achievement3.title": "वैश्विक पहुँच",
    "about.achievement3.desc": "पूरे विश्व में 25+ देशों में अध्ययन और कार्य करने वाले पूर्व विद्यार्थी।",
    "about.achievement4.title": "नवाचार केंद्र",
    "about.achievement4.desc": "तीन लगातार वर्षों में राष्ट्रीय विज्ञान ओलंपियाड में दूसरा स्थान।",
    "about.facilities.eyebrow": "॥ सुविधाः ॥",
    "about.facilities.title": "परिसर सुविधाएँ",
    "about.facilities.subtitle": "समग्र शिक्षा के लिए डिज़ाइन की गई आधुनिक बुनियादी ढाँचा।",
    "about.facility1.title": "स्मार्ट कक्षाएँ",
    "about.facility1.desc": "प्रत्येक कक्ष में इंटरएक्टिव बोर्ड, प्रोजेक्टर और उच्च-गति इंटरनेट।",
    "about.facility2.title": "विज्ञान एवं प्रौद्योगिकी प्रयोगशालाएँ",
    "about.facility2.desc": "भौतिकी, रसायन विज्ञान, जीव विज्ञान और कंप्यूटर प्रयोगशालाओं की अत्याधुनिक सुविधाएँ।",
    "about.facility3.title": "खेल परिसर",
    "about.facility3.desc": "क्रिकेट, बैडमिंटन, कबड्डी और योग के लिए ओलंपिक-मानक सुविधाएँ।",
    "about.facility4.title": "डिजिटल पुस्तकालय",
    "about.facility4.desc": "50,000+ पुस्तकें, डिजिटल अभिलेख और ई-लर्निंग संसाधन।",
    "about.facility5.title": "सभागार",
    "about.facility5.desc": "कार्यक्रमों और प्रस्तुतियों के लिए ध्वनि प्रणाली के साथ 3000 सीटों की क्षमता वाला स्थान।",
    "about.facility6.title": "कैफेटेरिया",
    "about.facility6.desc": "स्वास्थ्य दिशानिर्देशों का पालन करते हुए प्रतिदिन ताजा तैयार पौष्टिक भोजन।",
    "about.principal.quote": "शिक्षा वह पवित्र ज्योति है जो धर्म के मार्ग को प्रकाशित करती है। हमारे विद्यालय में, हम न केवल मन का, बल्कि प्रत्येक विद्यार्थी की आत्मा और चरित्र का पोषण करने का प्रयास करते हैं।",
    "about.principal.name": "डॉ. अरविंद कृष्णन",
    "about.principal.role": "प्रधानाचार्य · विद्यालय",
    "about.team.eyebrow": "॥ नेतृत्वम् ॥",
    "about.team.title": "नेतृत्व दल",
    "about.team.subtitle": "हमारे विद्यार्थियों के भविष्य को आकार देने वाले समर्पित शिक्षक।",
    "about.team1.name": "डॉ. अरविंद कृष्णन",
    "about.team1.role": "प्रधानाचार्य",
    "about.team1.expertise": "शिक्षा एवं नेतृत्व",
    "about.team2.name": "श्रीमती प्रिया शर्मा",
    "about.team2.role": "उप प्रधानाचार्य (शैक्षणिक)",
    "about.team2.expertise": "पाठ्यक्रम डिजाइन",
    "about.team3.name": "श्री राजेश कुमार",
    "about.team3.role": "विज्ञान विभाग प्रमुख",
    "about.team3.expertise": "एसटीईएम शिक्षा",
    "about.team4.name": "श्रीमती स्नेहा पटेल",
    "about.team4.role": "भाषा विभाग प्रमुख",
    "about.team4.expertise": "भाषाई उत्कृष्टता",
    "about.team5.name": "श्री विक्रम सिंह",
    "about.team5.role": "खेल निदेशक",
    "about.team5.expertise": "समग्र विकास",
    "about.team6.name": "श्रीमती अंजलि वर्मा",
    "about.team6.role": "परामर्शदाता",
    "about.team6.expertise": "विद्यार्थी कल्याण",
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
