
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "hi";

type TranslationKey =
  | "nav.home" | "nav.about" | "nav.academics" | "nav.admissions"
  | "nav.calendar" | "nav.notices" | "nav.fees" | "nav.contact"
  | "nav.applyNow" | "lang.english" | "lang.hindi"
  | "home.heroTitle" | "home.heroSubtitle" | "home.beginJourney" | "home.discoverUs"
  // Academics
  | "academics.heroTitle" | "academics.heroSubtitle"
  | "academics.statsPassRate" | "academics.statsUniversity" | "academics.statsExperts" | "academics.statsOlympiad"
  | "academics.pillarsEyebrow" | "academics.pillarsTitle" | "academics.pillarsSubtitle"
  | "academics.pillar1Title" | "academics.pillar1Desc"
  | "academics.pillar2Title" | "academics.pillar2Desc"
  | "academics.pillar3Title" | "academics.pillar3Desc"
  | "academics.pillar4Title" | "academics.pillar4Desc"
  | "academics.programsEyebrow" | "academics.programsTitle" | "academics.programsSubtitle"
  | "academics.prog1Level" | "academics.prog1Grades" | "academics.prog1Desc"
  | "academics.prog1h1" | "academics.prog1h2" | "academics.prog1h3" | "academics.prog1h4"
  | "academics.prog2Level" | "academics.prog2Grades" | "academics.prog2Desc"
  | "academics.prog2h1" | "academics.prog2h2" | "academics.prog2h3" | "academics.prog2h4"
  | "academics.prog3Level" | "academics.prog3Grades" | "academics.prog3Desc"
  | "academics.prog3h1" | "academics.prog3h2" | "academics.prog3h3" | "academics.prog3h4"
  | "academics.prog4Level" | "academics.prog4Grades" | "academics.prog4Desc"
  | "academics.prog4h1" | "academics.prog4h2" | "academics.prog4h3" | "academics.prog4h4"
  | "academics.cbseAffiliated" | "academics.keyHighlights"
  | "academics.subjectsEyebrow" | "academics.subjectsTitle" | "academics.subjectsSubtitle"
  | "academics.subj1Name" | "academics.subj1Desc" | "academics.subj2Name" | "academics.subj2Desc"
  | "academics.subj3Name" | "academics.subj3Desc" | "academics.subj4Name" | "academics.subj4Desc"
  | "academics.subj5Name" | "academics.subj5Desc" | "academics.subj6Name" | "academics.subj6Desc"
  | "academics.subj7Name" | "academics.subj7Desc" | "academics.subj8Name" | "academics.subj8Desc"
  | "academics.quoteTrans"
  | "academics.ctaBadge" | "academics.ctaTitle" | "academics.ctaSubtitle" | "academics.ctaApply" | "academics.ctaContact"
  // Admissions
  | "admissions.heroTitle" | "admissions.heroSubtitle"
  | "admissions.stepsEyebrow" | "admissions.stepsTitle" | "admissions.stepsSubtitle"
  | "admissions.step1Title" | "admissions.step1Desc"
  | "admissions.step2Title" | "admissions.step2Desc"
  | "admissions.step3Title" | "admissions.step3Desc"
  | "admissions.step4Title" | "admissions.step4Desc"
  | "admissions.whyEyebrow" | "admissions.whyTitle" | "admissions.whySubtitle"
  | "admissions.why1Title" | "admissions.why1Desc" | "admissions.why1StatLabel"
  | "admissions.why2Title" | "admissions.why2Desc" | "admissions.why2StatLabel"
  | "admissions.why3Title" | "admissions.why3Desc" | "admissions.why3StatLabel"
  | "admissions.why4Title" | "admissions.why4Desc" | "admissions.why4StatLabel"
  | "admissions.docsLabel" | "admissions.docsTitle"
  | "admissions.doc1" | "admissions.doc2" | "admissions.doc3"
  | "admissions.doc4" | "admissions.doc5" | "admissions.doc6"
  | "admissions.contactTitle"
  | "admissions.formTitle" | "admissions.formSubtitle"
  | "admissions.formParent" | "admissions.formParentPlaceholder"
  | "admissions.formChild" | "admissions.formChildPlaceholder"
  | "admissions.formEmail" | "admissions.formEmailPlaceholder" | "admissions.formEmailError"
  | "admissions.formPhone" | "admissions.formPhonePlaceholder" | "admissions.formPhoneError"
  | "admissions.formGrade" | "admissions.formGradePlaceholder"
  | "admissions.formMessage" | "admissions.formMessagePlaceholder" | "admissions.formMessageOptional"
  | "admissions.formSubmit" | "admissions.formSubmitting"
  | "admissions.successTitle" | "admissions.successDesc" | "admissions.successBtn"
  | "admissions.faqEyebrow" | "admissions.faqTitle" | "admissions.faqSubtitle"
  | "admissions.faq1Q" | "admissions.faq1A"
  | "admissions.faq2Q" | "admissions.faq2A"
  | "admissions.faq3Q" | "admissions.faq3A"
  | "admissions.faq4Q" | "admissions.faq4A"
  | "admissions.faq5Q" | "admissions.faq5A"
  | "admissions.faq6Q" | "admissions.faq6A"
  | "admissions.faq7Q" | "admissions.faq7A"
  | "admissions.ctaTitle" | "admissions.ctaSubtitle" | "admissions.ctaVisit" | "admissions.ctaCall";

const messages: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Nav & global
    "nav.home": "Home", "nav.about": "About Us", "nav.academics": "Academics",
    "nav.admissions": "Admissions", "nav.calendar": "Calendar", "nav.notices": "Notices",
    "nav.fees": "Fee Structure", "nav.contact": "Contact", "nav.applyNow": "Apply Now",
    "lang.english": "EN", "lang.hindi": "हिंदी",
    // Home
    "home.heroTitle": "A Gurukul Spirit for Modern Schooling",
    "home.heroSubtitle": "Our school blends Bharatiya sanskar, strong academics, and joyful learning to shape disciplined, compassionate, and confident students.",
    "home.beginJourney": "Begin the Journey",
    "home.discoverUs": "Discover Us",
    // Academics — hero
    "academics.heroTitle": "Academic Excellence",
    "academics.heroSubtitle": "A curriculum that honours Bharatiya wisdom while preparing students for a competitive, compassionate world.",
    // Academics — stats
    "academics.statsPassRate": "Board Pass Rate",
    "academics.statsUniversity": "University Admissions / Year",
    "academics.statsExperts": "Subject Experts",
    "academics.statsOlympiad": "Olympiad Medals",
    // Academics — pillars
    "academics.pillarsEyebrow": "॥ शिक्षा स्तम्भाः ॥",
    "academics.pillarsTitle": "Four Pillars of Learning",
    "academics.pillarsSubtitle": "Every lesson, activity, and interaction at Vidyalaya is built on these cornerstones.",
    "academics.pillar1Title": "Critical Thinking",
    "academics.pillar1Desc": "Socratic questioning, debates, and problem-solving woven into every lesson.",
    "academics.pillar2Title": "STEM Excellence",
    "academics.pillar2Desc": "Dedicated labs, robotics club, and national science olympiad coaching.",
    "academics.pillar3Title": "Creative Expression",
    "academics.pillar3Desc": "Art, music, drama, and craft as core subjects — not afterthoughts.",
    "academics.pillar4Title": "Cultural Roots",
    "academics.pillar4Desc": "Sanskrit, yoga, and Bharatiya values integrated across all grades.",
    // Academics — programs
    "academics.programsEyebrow": "॥ कार्यक्रमाः ॥",
    "academics.programsTitle": "Academic Programs",
    "academics.programsSubtitle": "Structured learning journeys from Class I through XII, each stage building on the last.",
    "academics.prog1Level": "Primary", "academics.prog1Grades": "Classes I – V",
    "academics.prog1Desc": "A joyful foundation in literacy, numeracy, and values through activity-based learning.",
    "academics.prog1h1": "Story-based learning", "academics.prog1h2": "Vedic maths introduction",
    "academics.prog1h3": "Art & music integration", "academics.prog1h4": "Yoga & play",
    "academics.prog2Level": "Middle School", "academics.prog2Grades": "Classes VI – VIII",
    "academics.prog2Desc": "Deepening subject knowledge with project work, labs, and co-curricular exploration.",
    "academics.prog2h1": "Science lab practicals", "academics.prog2h2": "Coding & robotics",
    "academics.prog2h3": "Sanskrit studies", "academics.prog2h4": "Leadership activities",
    "academics.prog3Level": "Secondary", "academics.prog3Grades": "Classes IX – X",
    "academics.prog3Desc": "Rigorous CBSE board preparation with mentorship, mock exams, and career guidance.",
    "academics.prog3h1": "Board exam coaching", "academics.prog3h2": "Career counselling",
    "academics.prog3h3": "Research projects", "academics.prog3h4": "Community service",
    "academics.prog4Level": "Senior Secondary", "academics.prog4Grades": "Classes XI – XII",
    "academics.prog4Desc": "Specialised streams — Science, Commerce, and Humanities — with expert faculty.",
    "academics.prog4h1": "Science / Commerce / Arts", "academics.prog4h2": "Competitive exam prep",
    "academics.prog4h3": "Internship opportunities", "academics.prog4h4": "College guidance",
    "academics.cbseAffiliated": "CBSE Affiliated",
    "academics.keyHighlights": "Key Highlights",
    // Academics — subjects
    "academics.subjectsEyebrow": "॥ विषयाः ॥",
    "academics.subjectsTitle": "Subjects We Offer",
    "academics.subjectsSubtitle": "A broad, balanced curriculum covering academics, arts, and physical development.",
    "academics.subj1Name": "Vak Vidya — Languages",
    "academics.subj1Desc": "English, Hindi, Sanskrit — building communication and cultural roots.",
    "academics.subj2Name": "Ganit Shastra — Mathematics",
    "academics.subj2Desc": "From arithmetic to calculus, with Vedic maths enrichment.",
    "academics.subj3Name": "Prakriti Vigyan — Sciences",
    "academics.subj3Desc": "Physics, Chemistry, Biology with hands-on lab sessions.",
    "academics.subj4Name": "Dharti Mata — Social Studies",
    "academics.subj4Desc": "History, Geography, Civics — understanding our world and heritage.",
    "academics.subj5Name": "Yantra Vidya — Computer Science",
    "academics.subj5Desc": "Coding, robotics, and digital literacy for the modern age.",
    "academics.subj6Name": "Shilpa Kala — Arts & Crafts",
    "academics.subj6Desc": "Drawing, painting, and traditional Indian art forms.",
    "academics.subj7Name": "Gandharva — Music & Dance",
    "academics.subj7Desc": "Classical and folk traditions alongside modern expression.",
    "academics.subj8Name": "Sharir Dharma — Physical Education",
    "academics.subj8Desc": "Yoga, kabaddi, athletics, and team sports for holistic fitness.",
    // Academics — quote & CTA
    "academics.quoteTrans": "\"Knowledge gives humility, from humility comes worthiness.\"",
    "academics.ctaBadge": "ADMISSIONS OPEN 2026–27",
    "academics.ctaTitle": "Ready to Begin the Journey?",
    "academics.ctaSubtitle": "Join a school where tradition and excellence walk hand in hand. Applications are open for all classes.",
    "academics.ctaApply": "Apply Now",
    "academics.ctaContact": "Contact Us",
    // Admissions — hero
    "admissions.heroTitle": "Join Our School",
    "admissions.heroSubtitle": "Every child carries a divine spark. Help us help yours shine brightly in a nurturing, values-driven environment.",
    // Admissions — steps
    "admissions.stepsEyebrow": "॥ प्रक्रिया ॥",
    "admissions.stepsTitle": "Simple Admission Process",
    "admissions.stepsSubtitle": "A welcoming path from inquiry to enrollment — just four easy steps.",
    "admissions.step1Title": "Inquiry",
    "admissions.step1Desc": "Reach out and share your child's interests, grade, and any questions you have.",
    "admissions.step2Title": "Application",
    "admissions.step2Desc": "Complete the online form and upload the required documents securely.",
    "admissions.step3Title": "Assessment",
    "admissions.step3Desc": "An informal, friendly interaction to understand your child's strengths.",
    "admissions.step4Title": "Enrollment",
    "admissions.step4Desc": "Welcome to the Vidyalaya parivaar — sealed with a sacred ceremony.",
    // Admissions — why
    "admissions.whyEyebrow": "॥ विशेषताएं ॥",
    "admissions.whyTitle": "Why Choose Vidyalaya",
    "admissions.whySubtitle": "What makes our school the perfect choice for your child's future.",
    "admissions.why1Title": "Holistic Development",
    "admissions.why1Desc": "We nurture mind, body, and spirit through integrated learning approaches.",
    "admissions.why1StatLabel": "Student Wellbeing Focus",
    "admissions.why2Title": "Expert Faculty",
    "admissions.why2Desc": "Passionate educators dedicated to bringing out the best in every student.",
    "admissions.why2StatLabel": "Qualified Teachers",
    "admissions.why3Title": "Rich Curriculum",
    "admissions.why3Desc": "Blend of traditional wisdom and modern education for complete growth.",
    "admissions.why3StatLabel": "Affiliated Board",
    "admissions.why4Title": "Proven Excellence",
    "admissions.why4Desc": "Outstanding academic results and holistic student achievements.",
    "admissions.why4StatLabel": "Board Pass Rate",
    // Admissions — documents
    "admissions.docsLabel": "Documents Required",
    "admissions.docsTitle": "What to Bring",
    "admissions.doc1": "Birth Certificate (original + photocopy)",
    "admissions.doc2": "Previous School Transfer Certificate",
    "admissions.doc3": "Recent passport-size photographs (4)",
    "admissions.doc4": "Aadhaar Card of child & parents",
    "admissions.doc5": "Address proof (utility bill / rental agreement)",
    "admissions.doc6": "Previous year's academic report card",
    "admissions.contactTitle": "Have Questions?",
    // Admissions — form
    "admissions.formTitle": "Apply for Admission",
    "admissions.formSubtitle": "Fill in the details below and we'll get back to you shortly.",
    "admissions.formParent": "Parent / Guardian Name",
    "admissions.formParentPlaceholder": "e.g. Ramesh Sharma",
    "admissions.formChild": "Child's Name",
    "admissions.formChildPlaceholder": "e.g. Arjun Sharma",
    "admissions.formEmail": "Email Address",
    "admissions.formEmailPlaceholder": "you@example.com",
    "admissions.formEmailError": "Please enter a valid email.",
    "admissions.formPhone": "Phone Number",
    "admissions.formPhonePlaceholder": "+91 98765 43210",
    "admissions.formPhoneError": "Please enter a valid phone number.",
    "admissions.formGrade": "Applying for Grade",
    "admissions.formGradePlaceholder": "e.g. Class VI",
    "admissions.formMessage": "Additional Message",
    "admissions.formMessagePlaceholder": "Any specific requirements or questions...",
    "admissions.formMessageOptional": "(optional)",
    "admissions.formSubmit": "Submit Application",
    "admissions.formSubmitting": "Submitting…",
    "admissions.successTitle": "Application Received!",
    "admissions.successDesc": "Thank you for applying to Vidyalaya. Our admissions team will contact you within 2 working days. 🪔",
    "admissions.successBtn": "Submit Another Application",
    // Admissions — FAQ
    "admissions.faqEyebrow": "॥ प्रश्नोत्तर ॥",
    "admissions.faqTitle": "Frequently Asked Questions",
    "admissions.faqSubtitle": "Find answers to common questions about our admission process.",
    "admissions.faq1Q": "What is the admission process timeline?",
    "admissions.faq1A": "The admission process typically takes 2–3 weeks from application submission to final enrollment. We conduct assessments within 5–7 days of receiving your application and notify you of the results within 48 hours.",
    "admissions.faq2Q": "Are there any entrance examinations?",
    "admissions.faq2A": "For Classes 1–5, we conduct an informal interaction to understand the child's interests and abilities. For Classes 6 and above, there is a simple assessment covering basic concepts to help us place students appropriately.",
    "admissions.faq3Q": "What documents are required for admission?",
    "admissions.faq3A": "You'll need: birth certificate, previous school transfer certificate (if applicable), recent photographs, Aadhaar cards, address proof, and previous academic records. All documents should be submitted in original along with photocopies.",
    "admissions.faq4Q": "Is there a sibling discount available?",
    "admissions.faq4A": "Yes, we offer a 10% discount on tuition fees for the second child and 15% for the third child from the same family. This reflects our commitment to supporting families who choose to grow with us.",
    "admissions.faq5Q": "What is the student-teacher ratio?",
    "admissions.faq5A": "We maintain a healthy student-teacher ratio of 20:1 to ensure personalised attention. For specialised subjects and labs, the ratio is even lower at 15:1.",
    "admissions.faq6Q": "When do admissions open for the new academic year?",
    "admissions.faq6A": "Admissions for the new academic year (2026–27) open in January and close by 31st March. We recommend applying early as seats are limited. Late applications may be considered subject to availability.",
    "admissions.faq7Q": "Is there a school bus or transport facility available?",
    "admissions.faq7A": "Yes, Vidyalaya operates a fleet of GPS-tracked school buses covering major routes across the city. Transport fees are charged separately based on the distance from school. Contact the office for the current route map and fee details.",
    // Admissions — CTA
    "admissions.ctaTitle": "Begin the Journey Today",
    "admissions.ctaSubtitle": "Admissions for 2026–27 are open. Walk through our gates and feel the heritage.",
    "admissions.ctaVisit": "Schedule a Visit",
    "admissions.ctaCall": "Call Us Now",
  },
  hi: {
    // Nav & global
    "nav.home": "मुख्य पृष्ठ", "nav.about": "हमारे बारे में", "nav.academics": "शैक्षणिक",
    "nav.admissions": "प्रवेश", "nav.calendar": "कैलेंडर", "nav.notices": "सूचनाएं",
    "nav.fees": "शुल्क संरचना", "nav.contact": "संपर्क", "nav.applyNow": "अभी आवेदन करें",
    "lang.english": "EN", "lang.hindi": "हिंदी",
    // Home
    "home.heroTitle": "आधुनिक शिक्षा में गुरुकुल की आत्मा",
    "home.heroSubtitle": "हमारा विद्यालय भारतीय संस्कार, सशक्त शिक्षा और आनंदमय सीख को साथ लेकर अनुशासित, करुणामय और आत्मविश्वासी विद्यार्थियों का निर्माण करता है।",
    "home.beginJourney": "यात्रा शुरू करें",
    "home.discoverUs": "हमारे बारे में जानें",
    // Academics — hero
    "academics.heroTitle": "शैक्षणिक उत्कृष्टता",
    "academics.heroSubtitle": "एक पाठ्यक्रम जो भारतीय ज्ञान का सम्मान करते हुए विद्यार्थियों को प्रतिस्पर्धी और करुणामय विश्व के लिए तैयार करता है।",
    // Academics — stats
    "academics.statsPassRate": "बोर्ड उत्तीर्ण दर",
    "academics.statsUniversity": "विश्वविद्यालय प्रवेश / वर्ष",
    "academics.statsExperts": "विषय विशेषज्ञ",
    "academics.statsOlympiad": "ओलंपियाड पदक",
    // Academics — pillars
    "academics.pillarsEyebrow": "॥ शिक्षा स्तम्भाः ॥",
    "academics.pillarsTitle": "शिक्षा के चार स्तम्भ",
    "academics.pillarsSubtitle": "विद्यालय का प्रत्येक पाठ, गतिविधि और संवाद इन्हीं आधारशिलाओं पर निर्मित है।",
    "academics.pillar1Title": "आलोचनात्मक सोच",
    "academics.pillar1Desc": "सुकराती प्रश्नोत्तर, वाद-विवाद और समस्या-समाधान हर पाठ में समाहित।",
    "academics.pillar2Title": "STEM उत्कृष्टता",
    "academics.pillar2Desc": "समर्पित प्रयोगशालाएं, रोबोटिक्स क्लब और राष्ट्रीय विज्ञान ओलंपियाड कोचिंग।",
    "academics.pillar3Title": "रचनात्मक अभिव्यक्ति",
    "academics.pillar3Desc": "कला, संगीत, नाटक और शिल्प — मुख्य विषयों के रूप में, न कि अतिरिक्त।",
    "academics.pillar4Title": "सांस्कृतिक जड़ें",
    "academics.pillar4Desc": "संस्कृत, योग और भारतीय मूल्य सभी कक्षाओं में एकीकृत।",
    // Academics — programs
    "academics.programsEyebrow": "॥ कार्यक्रमाः ॥",
    "academics.programsTitle": "शैक्षणिक कार्यक्रम",
    "academics.programsSubtitle": "कक्षा I से XII तक संरचित शिक्षा यात्रा, हर चरण पिछले पर आधारित।",
    "academics.prog1Level": "प्राथमिक", "academics.prog1Grades": "कक्षा I – V",
    "academics.prog1Desc": "गतिविधि-आधारित शिक्षा के माध्यम से साक्षरता, संख्या-ज्ञान और मूल्यों की आनंदमय नींव।",
    "academics.prog1h1": "कहानी-आधारित शिक्षा", "academics.prog1h2": "वैदिक गणित परिचय",
    "academics.prog1h3": "कला और संगीत एकीकरण", "academics.prog1h4": "योग और खेल",
    "academics.prog2Level": "मध्य विद्यालय", "academics.prog2Grades": "कक्षा VI – VIII",
    "academics.prog2Desc": "परियोजना कार्य, प्रयोगशाला और सह-पाठ्यक्रम गतिविधियों के साथ विषय-ज्ञान का विस्तार।",
    "academics.prog2h1": "विज्ञान प्रयोगशाला", "academics.prog2h2": "कोडिंग और रोबोटिक्स",
    "academics.prog2h3": "संस्कृत अध्ययन", "academics.prog2h4": "नेतृत्व गतिविधियाँ",
    "academics.prog3Level": "माध्यमिक", "academics.prog3Grades": "कक्षा IX – X",
    "academics.prog3Desc": "मार्गदर्शन, मॉक परीक्षा और करियर परामर्श के साथ कठोर CBSE बोर्ड तैयारी।",
    "academics.prog3h1": "बोर्ड परीक्षा कोचिंग", "academics.prog3h2": "करियर परामर्श",
    "academics.prog3h3": "शोध परियोजनाएं", "academics.prog3h4": "सामुदायिक सेवा",
    "academics.prog4Level": "वरिष्ठ माध्यमिक", "academics.prog4Grades": "कक्षा XI – XII",
    "academics.prog4Desc": "विशेषज्ञ शिक्षकों के साथ विज्ञान, वाणिज्य और मानविकी धाराएं।",
    "academics.prog4h1": "विज्ञान / वाणिज्य / कला", "academics.prog4h2": "प्रतियोगी परीक्षा तैयारी",
    "academics.prog4h3": "इंटर्नशिप अवसर", "academics.prog4h4": "कॉलेज मार्गदर्शन",
    "academics.cbseAffiliated": "CBSE संबद्ध",
    "academics.keyHighlights": "मुख्य विशेषताएं",
    // Academics — subjects
    "academics.subjectsEyebrow": "॥ विषयाः ॥",
    "academics.subjectsTitle": "हमारे विषय",
    "academics.subjectsSubtitle": "शिक्षा, कला और शारीरिक विकास को समेटने वाला व्यापक और संतुलित पाठ्यक्रम।",
    "academics.subj1Name": "वाक् विद्या — भाषाएं",
    "academics.subj1Desc": "अंग्रेजी, हिंदी, संस्कृत — संचार और सांस्कृतिक जड़ों का निर्माण।",
    "academics.subj2Name": "गणित शास्त्र — गणित",
    "academics.subj2Desc": "अंकगणित से कलन तक, वैदिक गणित संवर्धन के साथ।",
    "academics.subj3Name": "प्रकृति विज्ञान — विज्ञान",
    "academics.subj3Desc": "भौतिकी, रसायन, जीव विज्ञान — व्यावहारिक प्रयोगशाला सत्रों के साथ।",
    "academics.subj4Name": "धरती माता — सामाजिक अध्ययन",
    "academics.subj4Desc": "इतिहास, भूगोल, नागरिकशास्त्र — हमारी विरासत को समझना।",
    "academics.subj5Name": "यंत्र विद्या — कंप्यूटर विज्ञान",
    "academics.subj5Desc": "कोडिंग, रोबोटिक्स और आधुनिक युग की डिजिटल साक्षरता।",
    "academics.subj6Name": "शिल्प कला — कला और शिल्प",
    "academics.subj6Desc": "चित्रकला, रंगकला और पारंपरिक भारतीय कला रूप।",
    "academics.subj7Name": "गंधर्व — संगीत और नृत्य",
    "academics.subj7Desc": "शास्त्रीय और लोक परंपराएं, आधुनिक अभिव्यक्ति के साथ।",
    "academics.subj8Name": "शरीर धर्म — शारीरिक शिक्षा",
    "academics.subj8Desc": "योग, कबड्डी, एथलेटिक्स और टीम खेल — समग्र स्वास्थ्य के लिए।",
    // Academics — quote & CTA
    "academics.quoteTrans": "\"ज्ञान विनम्रता देता है, विनम्रता से योग्यता आती है।\"",
    "academics.ctaBadge": "प्रवेश खुले हैं 2026–27",
    "academics.ctaTitle": "यात्रा शुरू करने के लिए तैयार हैं?",
    "academics.ctaSubtitle": "एक ऐसे विद्यालय में शामिल हों जहाँ परंपरा और उत्कृष्टता साथ चलती है। सभी कक्षाओं के लिए आवेदन खुले हैं।",
    "academics.ctaApply": "अभी आवेदन करें",
    "academics.ctaContact": "संपर्क करें",
    // Admissions — hero
    "admissions.heroTitle": "हमारे विद्यालय में प्रवेश लें",
    "admissions.heroSubtitle": "हर बच्चे में एक दिव्य ज्योति है। हमें उसे एक पोषणकारी, मूल्य-आधारित वातावरण में चमकाने दें।",
    // Admissions — steps
    "admissions.stepsEyebrow": "॥ प्रक्रिया ॥",
    "admissions.stepsTitle": "सरल प्रवेश प्रक्रिया",
    "admissions.stepsSubtitle": "जिज्ञासा से नामांकन तक एक स्वागतपूर्ण मार्ग — केवल चार आसान चरण।",
    "admissions.step1Title": "जिज्ञासा",
    "admissions.step1Desc": "संपर्क करें और अपने बच्चे की रुचियाँ, कक्षा और प्रश्न साझा करें।",
    "admissions.step2Title": "आवेदन",
    "admissions.step2Desc": "ऑनलाइन फॉर्म भरें और आवश्यक दस्तावेज़ सुरक्षित रूप से अपलोड करें।",
    "admissions.step3Title": "मूल्यांकन",
    "admissions.step3Desc": "आपके बच्चे की शक्तियों को समझने के लिए एक अनौपचारिक, मैत्रीपूर्ण बातचीत।",
    "admissions.step4Title": "नामांकन",
    "admissions.step4Desc": "विद्यालय परिवार में आपका स्वागत है — एक पवित्र समारोह के साथ।",
    // Admissions — why
    "admissions.whyEyebrow": "॥ विशेषताएं ॥",
    "admissions.whyTitle": "विद्यालय क्यों चुनें",
    "admissions.whySubtitle": "जो हमारे विद्यालय को आपके बच्चे के भविष्य के लिए सर्वोत्तम विकल्प बनाता है।",
    "admissions.why1Title": "समग्र विकास",
    "admissions.why1Desc": "हम एकीकृत शिक्षण दृष्टिकोण के माध्यम से मन, शरीर और आत्मा का पोषण करते हैं।",
    "admissions.why1StatLabel": "विद्यार्थी कल्याण फोकस",
    "admissions.why2Title": "विशेषज्ञ शिक्षक",
    "admissions.why2Desc": "समर्पित शिक्षक जो हर विद्यार्थी में सर्वश्रेष्ठ निकालने के लिए प्रतिबद्ध हैं।",
    "admissions.why2StatLabel": "योग्य शिक्षक",
    "admissions.why3Title": "समृद्ध पाठ्यक्रम",
    "admissions.why3Desc": "पारंपरिक ज्ञान और आधुनिक शिक्षा का संगम — समग्र विकास के लिए।",
    "admissions.why3StatLabel": "संबद्ध बोर्ड",
    "admissions.why4Title": "सिद्ध उत्कृष्टता",
    "admissions.why4Desc": "उत्कृष्ट शैक्षणिक परिणाम और समग्र विद्यार्थी उपलब्धियाँ।",
    "admissions.why4StatLabel": "बोर्ड उत्तीर्ण दर",
    // Admissions — documents
    "admissions.docsLabel": "आवश्यक दस्तावेज़",
    "admissions.docsTitle": "क्या लाएं",
    "admissions.doc1": "जन्म प्रमाण पत्र (मूल + फोटोकॉपी)",
    "admissions.doc2": "पिछले विद्यालय का स्थानांतरण प्रमाण पत्र",
    "admissions.doc3": "हाल की पासपोर्ट आकार की तस्वीरें (4)",
    "admissions.doc4": "बच्चे और माता-पिता का आधार कार्ड",
    "admissions.doc5": "पता प्रमाण (बिजली बिल / किराया समझौता)",
    "admissions.doc6": "पिछले वर्ष की शैक्षणिक रिपोर्ट कार्ड",
    "admissions.contactTitle": "प्रश्न हैं?",
    // Admissions — form
    "admissions.formTitle": "प्रवेश के लिए आवेदन करें",
    "admissions.formSubtitle": "नीचे विवरण भरें और हम जल्द ही आपसे संपर्क करेंगे।",
    "admissions.formParent": "माता-पिता / अभिभावक का नाम",
    "admissions.formParentPlaceholder": "जैसे रमेश शर्मा",
    "admissions.formChild": "बच्चे का नाम",
    "admissions.formChildPlaceholder": "जैसे अर्जुन शर्मा",
    "admissions.formEmail": "ईमेल पता",
    "admissions.formEmailPlaceholder": "you@example.com",
    "admissions.formEmailError": "कृपया एक वैध ईमेल दर्ज करें।",
    "admissions.formPhone": "फ़ोन नंबर",
    "admissions.formPhonePlaceholder": "+91 98765 43210",
    "admissions.formPhoneError": "कृपया एक वैध फ़ोन नंबर दर्ज करें।",
    "admissions.formGrade": "किस कक्षा के लिए आवेदन",
    "admissions.formGradePlaceholder": "जैसे कक्षा VI",
    "admissions.formMessage": "अतिरिक्त संदेश",
    "admissions.formMessagePlaceholder": "कोई विशेष आवश्यकता या प्रश्न...",
    "admissions.formMessageOptional": "(वैकल्पिक)",
    "admissions.formSubmit": "आवेदन जमा करें",
    "admissions.formSubmitting": "जमा हो रहा है…",
    "admissions.successTitle": "आवेदन प्राप्त हुआ!",
    "admissions.successDesc": "विद्यालय में आवेदन के लिए धन्यवाद। हमारी प्रवेश टीम 2 कार्य दिवसों में आपसे संपर्क करेगी। 🪔",
    "admissions.successBtn": "एक और आवेदन जमा करें",
    // Admissions — FAQ
    "admissions.faqEyebrow": "॥ प्रश्नोत्तर ॥",
    "admissions.faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "admissions.faqSubtitle": "हमारी प्रवेश प्रक्रिया के बारे में सामान्य प्रश्नों के उत्तर पाएं।",
    "admissions.faq1Q": "प्रवेश प्रक्रिया की समय-सीमा क्या है?",
    "admissions.faq1A": "प्रवेश प्रक्रिया आमतौर पर आवेदन जमा करने से अंतिम नामांकन तक 2–3 सप्ताह लेती है। हम आपके आवेदन प्राप्त होने के 5–7 दिनों के भीतर मूल्यांकन करते हैं और 48 घंटों के भीतर परिणाम सूचित करते हैं।",
    "admissions.faq2Q": "क्या कोई प्रवेश परीक्षा है?",
    "admissions.faq2A": "कक्षा 1–5 के लिए, हम बच्चे की रुचियों और क्षमताओं को समझने के लिए एक अनौपचारिक बातचीत करते हैं। कक्षा 6 और उससे ऊपर के लिए, विद्यार्थियों को उचित रूप से रखने में मदद के लिए बुनियादी अवधारणाओं का एक सरल मूल्यांकन होता है।",
    "admissions.faq3Q": "प्रवेश के लिए कौन से दस्तावेज़ आवश्यक हैं?",
    "admissions.faq3A": "आपको चाहिए: जन्म प्रमाण पत्र, पिछले विद्यालय का स्थानांतरण प्रमाण पत्र (यदि लागू हो), हाल की तस्वीरें, आधार कार्ड, पता प्रमाण और पिछले शैक्षणिक रिकॉर्ड। सभी दस्तावेज़ मूल और फोटोकॉपी के साथ जमा करें।",
    "admissions.faq4Q": "क्या भाई-बहन के लिए छूट उपलब्ध है?",
    "admissions.faq4A": "हाँ, हम दूसरे बच्चे के लिए ट्यूशन फीस पर 10% और तीसरे बच्चे के लिए 15% छूट देते हैं। यह उन परिवारों के प्रति हमारी प्रतिबद्धता को दर्शाता है जो हमारे साथ बढ़ना चुनते हैं।",
    "admissions.faq5Q": "विद्यार्थी-शिक्षक अनुपात क्या है?",
    "admissions.faq5A": "हम व्यक्तिगत ध्यान सुनिश्चित करने के लिए 20:1 का स्वस्थ विद्यार्थी-शिक्षक अनुपात बनाए रखते हैं। विशेष विषयों और प्रयोगशालाओं के लिए, अनुपात 15:1 तक कम है।",
    "admissions.faq6Q": "नए शैक्षणिक वर्ष के लिए प्रवेश कब खुलते हैं?",
    "admissions.faq6A": "नए शैक्षणिक वर्ष (2026–27) के लिए प्रवेश जनवरी में खुलते हैं और 31 मार्च तक बंद हो जाते हैं। हम जल्दी आवेदन करने की सलाह देते हैं क्योंकि सीटें सीमित हैं। देर से आवेदन उपलब्धता के अधीन विचार किए जा सकते हैं।",
    "admissions.faq7Q": "क्या स्कूल बस या परिवहन सुविधा उपलब्ध है?",
    "admissions.faq7A": "हाँ, विद्यालय GPS-ट्रैक्ड स्कूल बसों का संचालन करता है जो शहर के प्रमुख मार्गों को कवर करती हैं। परिवहन शुल्क विद्यालय से दूरी के आधार पर अलग से लिया जाता है। वर्तमान मार्ग मानचित्र और शुल्क विवरण के लिए कार्यालय से संपर्क करें।",
    // Admissions — CTA
    "admissions.ctaTitle": "आज ही यात्रा शुरू करें",
    "admissions.ctaSubtitle": "2026–27 के लिए प्रवेश खुले हैं। हमारे द्वार से प्रवेश करें और विरासत को महसूस करें।",
    "admissions.ctaVisit": "भ्रमण निर्धारित करें",
    "admissions.ctaCall": "अभी कॉल करें",
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
