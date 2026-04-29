
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
    "lang.english": "EN", "lang.hindi": "αñ╣αñ┐αñéαñªαÑÇ",
    // Home
    "home.heroTitle": "A Gurukul Spirit for Modern Schooling",
    "home.heroSubtitle": "Our school blends Bharatiya sanskar, strong academics, and joyful learning to shape disciplined, compassionate, and confident students.",
    "home.beginJourney": "Begin the Journey",
    "home.discoverUs": "Discover Us",
    // Academics ΓÇö hero
    "academics.heroTitle": "Academic Excellence",
    "academics.heroSubtitle": "A curriculum that honours Bharatiya wisdom while preparing students for a competitive, compassionate world.",
    // Academics ΓÇö stats
    "academics.statsPassRate": "Board Pass Rate",
    "academics.statsUniversity": "University Admissions / Year",
    "academics.statsExperts": "Subject Experts",
    "academics.statsOlympiad": "Olympiad Medals",
    // Academics ΓÇö pillars
    "academics.pillarsEyebrow": "αÑÑ αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñ╕αÑìαññαñ«αÑìαñ¡αñ╛αñâ αÑÑ",
    "academics.pillarsTitle": "Four Pillars of Learning",
    "academics.pillarsSubtitle": "Every lesson, activity, and interaction at Vidyalaya is built on these cornerstones.",
    "academics.pillar1Title": "Critical Thinking",
    "academics.pillar1Desc": "Socratic questioning, debates, and problem-solving woven into every lesson.",
    "academics.pillar2Title": "STEM Excellence",
    "academics.pillar2Desc": "Dedicated labs, robotics club, and national science olympiad coaching.",
    "academics.pillar3Title": "Creative Expression",
    "academics.pillar3Desc": "Art, music, drama, and craft as core subjects ΓÇö not afterthoughts.",
    "academics.pillar4Title": "Cultural Roots",
    "academics.pillar4Desc": "Sanskrit, yoga, and Bharatiya values integrated across all grades.",
    // Academics ΓÇö programs
    "academics.programsEyebrow": "αÑÑ αñòαñ╛αñ░αÑìαñ»αñòαÑìαñ░αñ«αñ╛αñâ αÑÑ",
    "academics.programsTitle": "Academic Programs",
    "academics.programsSubtitle": "Structured learning journeys from Class I through XII, each stage building on the last.",
    "academics.prog1Level": "Primary", "academics.prog1Grades": "Classes I ΓÇô V",
    "academics.prog1Desc": "A joyful foundation in literacy, numeracy, and values through activity-based learning.",
    "academics.prog1h1": "Story-based learning", "academics.prog1h2": "Vedic maths introduction",
    "academics.prog1h3": "Art & music integration", "academics.prog1h4": "Yoga & play",
    "academics.prog2Level": "Middle School", "academics.prog2Grades": "Classes VI ΓÇô VIII",
    "academics.prog2Desc": "Deepening subject knowledge with project work, labs, and co-curricular exploration.",
    "academics.prog2h1": "Science lab practicals", "academics.prog2h2": "Coding & robotics",
    "academics.prog2h3": "Sanskrit studies", "academics.prog2h4": "Leadership activities",
    "academics.prog3Level": "Secondary", "academics.prog3Grades": "Classes IX ΓÇô X",
    "academics.prog3Desc": "Rigorous CBSE board preparation with mentorship, mock exams, and career guidance.",
    "academics.prog3h1": "Board exam coaching", "academics.prog3h2": "Career counselling",
    "academics.prog3h3": "Research projects", "academics.prog3h4": "Community service",
    "academics.prog4Level": "Senior Secondary", "academics.prog4Grades": "Classes XI ΓÇô XII",
    "academics.prog4Desc": "Specialised streams ΓÇö Science, Commerce, and Humanities ΓÇö with expert faculty.",
    "academics.prog4h1": "Science / Commerce / Arts", "academics.prog4h2": "Competitive exam prep",
    "academics.prog4h3": "Internship opportunities", "academics.prog4h4": "College guidance",
    "academics.cbseAffiliated": "CBSE Affiliated",
    "academics.keyHighlights": "Key Highlights",
    // Academics ΓÇö subjects
    "academics.subjectsEyebrow": "αÑÑ αñ╡αñ┐αñ╖αñ»αñ╛αñâ αÑÑ",
    "academics.subjectsTitle": "Subjects We Offer",
    "academics.subjectsSubtitle": "A broad, balanced curriculum covering academics, arts, and physical development.",
    "academics.subj1Name": "Vak Vidya ΓÇö Languages",
    "academics.subj1Desc": "English, Hindi, Sanskrit ΓÇö building communication and cultural roots.",
    "academics.subj2Name": "Ganit Shastra ΓÇö Mathematics",
    "academics.subj2Desc": "From arithmetic to calculus, with Vedic maths enrichment.",
    "academics.subj3Name": "Prakriti Vigyan ΓÇö Sciences",
    "academics.subj3Desc": "Physics, Chemistry, Biology with hands-on lab sessions.",
    "academics.subj4Name": "Dharti Mata ΓÇö Social Studies",
    "academics.subj4Desc": "History, Geography, Civics ΓÇö understanding our world and heritage.",
    "academics.subj5Name": "Yantra Vidya ΓÇö Computer Science",
    "academics.subj5Desc": "Coding, robotics, and digital literacy for the modern age.",
    "academics.subj6Name": "Shilpa Kala ΓÇö Arts & Crafts",
    "academics.subj6Desc": "Drawing, painting, and traditional Indian art forms.",
    "academics.subj7Name": "Gandharva ΓÇö Music & Dance",
    "academics.subj7Desc": "Classical and folk traditions alongside modern expression.",
    "academics.subj8Name": "Sharir Dharma ΓÇö Physical Education",
    "academics.subj8Desc": "Yoga, kabaddi, athletics, and team sports for holistic fitness.",
    // Academics ΓÇö quote & CTA
    "academics.quoteTrans": "\"Knowledge gives humility, from humility comes worthiness.\"",
    "academics.ctaBadge": "ADMISSIONS OPEN 2026ΓÇô27",
    "academics.ctaTitle": "Ready to Begin the Journey?",
    "academics.ctaSubtitle": "Join a school where tradition and excellence walk hand in hand. Applications are open for all classes.",
    "academics.ctaApply": "Apply Now",
    "academics.ctaContact": "Contact Us",
    // Admissions ΓÇö hero
    "admissions.heroTitle": "Join Our School",
    "admissions.heroSubtitle": "Every child carries a divine spark. Help us help yours shine brightly in a nurturing, values-driven environment.",
    // Admissions ΓÇö steps
    "admissions.stepsEyebrow": "αÑÑ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛ αÑÑ",
    "admissions.stepsTitle": "Simple Admission Process",
    "admissions.stepsSubtitle": "A welcoming path from inquiry to enrollment ΓÇö just four easy steps.",
    "admissions.step1Title": "Inquiry",
    "admissions.step1Desc": "Reach out and share your child's interests, grade, and any questions you have.",
    "admissions.step2Title": "Application",
    "admissions.step2Desc": "Complete the online form and upload the required documents securely.",
    "admissions.step3Title": "Assessment",
    "admissions.step3Desc": "An informal, friendly interaction to understand your child's strengths.",
    "admissions.step4Title": "Enrollment",
    "admissions.step4Desc": "Welcome to the Vidyalaya parivaar ΓÇö sealed with a sacred ceremony.",
    // Admissions ΓÇö why
    "admissions.whyEyebrow": "αÑÑ αñ╡αñ┐αñ╢αÑçαñ╖αññαñ╛αñÅαñé αÑÑ",
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
    // Admissions ΓÇö documents
    "admissions.docsLabel": "Documents Required",
    "admissions.docsTitle": "What to Bring",
    "admissions.doc1": "Birth Certificate (original + photocopy)",
    "admissions.doc2": "Previous School Transfer Certificate",
    "admissions.doc3": "Recent passport-size photographs (4)",
    "admissions.doc4": "Aadhaar Card of child & parents",
    "admissions.doc5": "Address proof (utility bill / rental agreement)",
    "admissions.doc6": "Previous year's academic report card",
    "admissions.contactTitle": "Have Questions?",
    // Admissions ΓÇö form
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
    "admissions.formSubmitting": "SubmittingΓÇª",
    "admissions.successTitle": "Application Received!",
    "admissions.successDesc": "Thank you for applying to Vidyalaya. Our admissions team will contact you within 2 working days. ≡ƒ¬ö",
    "admissions.successBtn": "Submit Another Application",
    // Admissions ΓÇö FAQ
    "admissions.faqEyebrow": "αÑÑ αñ¬αÑìαñ░αñ╢αÑìαñ¿αÑïαññαÑìαññαñ░ αÑÑ",
    "admissions.faqTitle": "Frequently Asked Questions",
    "admissions.faqSubtitle": "Find answers to common questions about our admission process.",
    "admissions.faq1Q": "What is the admission process timeline?",
    "admissions.faq1A": "The admission process typically takes 2ΓÇô3 weeks from application submission to final enrollment. We conduct assessments within 5ΓÇô7 days of receiving your application and notify you of the results within 48 hours.",
    "admissions.faq2Q": "Are there any entrance examinations?",
    "admissions.faq2A": "For Classes 1ΓÇô5, we conduct an informal interaction to understand the child's interests and abilities. For Classes 6 and above, there is a simple assessment covering basic concepts to help us place students appropriately.",
    "admissions.faq3Q": "What documents are required for admission?",
    "admissions.faq3A": "You'll need: birth certificate, previous school transfer certificate (if applicable), recent photographs, Aadhaar cards, address proof, and previous academic records. All documents should be submitted in original along with photocopies.",
    "admissions.faq4Q": "Is there a sibling discount available?",
    "admissions.faq4A": "Yes, we offer a 10% discount on tuition fees for the second child and 15% for the third child from the same family. This reflects our commitment to supporting families who choose to grow with us.",
    "admissions.faq5Q": "What is the student-teacher ratio?",
    "admissions.faq5A": "We maintain a healthy student-teacher ratio of 20:1 to ensure personalised attention. For specialised subjects and labs, the ratio is even lower at 15:1.",
    "admissions.faq6Q": "When do admissions open for the new academic year?",
    "admissions.faq6A": "Admissions for the new academic year (2026ΓÇô27) open in January and close by 31st March. We recommend applying early as seats are limited. Late applications may be considered subject to availability.",
    "admissions.faq7Q": "Is there a school bus or transport facility available?",
    "admissions.faq7A": "Yes, Vidyalaya operates a fleet of GPS-tracked school buses covering major routes across the city. Transport fees are charged separately based on the distance from school. Contact the office for the current route map and fee details.",
    // Admissions ΓÇö CTA
    "admissions.ctaTitle": "Begin the Journey Today",
    "admissions.ctaSubtitle": "Admissions for 2026ΓÇô27 are open. Walk through our gates and feel the heritage.",
    "admissions.ctaVisit": "Schedule a Visit",
    "admissions.ctaCall": "Call Us Now",
  },
  hi: {
    // Nav & global
    "nav.home": "αñ«αÑüαñûαÑìαñ» αñ¬αÑâαñ╖αÑìαñá", "nav.about": "αñ╣αñ«αñ╛αñ░αÑç αñ¼αñ╛αñ░αÑç αñ«αÑçαñé", "nav.academics": "αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò",
    "nav.admissions": "αñ¬αÑìαñ░αñ╡αÑçαñ╢", "nav.calendar": "αñòαÑêαñ▓αÑçαñéαñíαñ░", "nav.notices": "αñ╕αÑéαñÜαñ¿αñ╛αñÅαñé",
    "nav.fees": "αñ╢αÑüαñ▓αÑìαñò αñ╕αñéαñ░αñÜαñ¿αñ╛", "nav.contact": "αñ╕αñéαñ¬αñ░αÑìαñò", "nav.applyNow": "αñàαñ¡αÑÇ αñåαñ╡αÑçαñªαñ¿ αñòαñ░αÑçαñé",
    "lang.english": "EN", "lang.hindi": "αñ╣αñ┐αñéαñªαÑÇ",
    // Home
    "home.heroTitle": "αñåαñºαÑüαñ¿αñ┐αñò αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñ«αÑçαñé αñùαÑüαñ░αÑüαñòαÑüαñ▓ αñòαÑÇ αñåαññαÑìαñ«αñ╛",
    "home.heroSubtitle": "αñ╣αñ«αñ╛αñ░αñ╛ αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñ¡αñ╛αñ░αññαÑÇαñ» αñ╕αñéαñ╕αÑìαñòαñ╛αñ░, αñ╕αñ╢αñòαÑìαññ αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñöαñ░ αñåαñ¿αñéαñªαñ«αñ» αñ╕αÑÇαñû αñòαÑï αñ╕αñ╛αñÑ αñ▓αÑçαñòαñ░ αñàαñ¿αÑüαñ╢αñ╛αñ╕αñ┐αññ, αñòαñ░αÑüαñúαñ╛αñ«αñ» αñöαñ░ αñåαññαÑìαñ«αñ╡αñ┐αñ╢αÑìαñ╡αñ╛αñ╕αÑÇ αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαñ┐αñ»αÑïαñé αñòαñ╛ αñ¿αñ┐αñ░αÑìαñ«αñ╛αñú αñòαñ░αññαñ╛ αñ╣αÑêαÑñ",
    "home.beginJourney": "αñ»αñ╛αññαÑìαñ░αñ╛ αñ╢αÑüαñ░αÑé αñòαñ░αÑçαñé",
    "home.discoverUs": "αñ╣αñ«αñ╛αñ░αÑç αñ¼αñ╛αñ░αÑç αñ«αÑçαñé αñ£αñ╛αñ¿αÑçαñé",
    // Academics ΓÇö hero
    "academics.heroTitle": "αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò αñëαññαÑìαñòαÑâαñ╖αÑìαñƒαññαñ╛",
    "academics.heroSubtitle": "αñÅαñò αñ¬αñ╛αñáαÑìαñ»αñòαÑìαñ░αñ« αñ£αÑï αñ¡αñ╛αñ░αññαÑÇαñ» αñ£αÑìαñ₧αñ╛αñ¿ αñòαñ╛ αñ╕αñ«αÑìαñ«αñ╛αñ¿ αñòαñ░αññαÑç αñ╣αÑüαñÅ αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαñ┐αñ»αÑïαñé αñòαÑï αñ¬αÑìαñ░αññαñ┐αñ╕αÑìαñ¬αñ░αÑìαñºαÑÇ αñöαñ░ αñòαñ░αÑüαñúαñ╛αñ«αñ» αñ╡αñ┐αñ╢αÑìαñ╡ αñòαÑç αñ▓αñ┐αñÅ αññαÑêαñ»αñ╛αñ░ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ",
    // Academics ΓÇö stats
    "academics.statsPassRate": "αñ¼αÑïαñ░αÑìαñí αñëαññαÑìαññαÑÇαñ░αÑìαñú αñªαñ░",
    "academics.statsUniversity": "αñ╡αñ┐αñ╢αÑìαñ╡αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñ¬αÑìαñ░αñ╡αÑçαñ╢ / αñ╡αñ░αÑìαñ╖",
    "academics.statsExperts": "αñ╡αñ┐αñ╖αñ» αñ╡αñ┐αñ╢αÑçαñ╖αñ£αÑìαñ₧",
    "academics.statsOlympiad": "αñôαñ▓αñéαñ¬αñ┐αñ»αñ╛αñí αñ¬αñªαñò",
    // Academics ΓÇö pillars
    "academics.pillarsEyebrow": "αÑÑ αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñ╕αÑìαññαñ«αÑìαñ¡αñ╛αñâ αÑÑ",
    "academics.pillarsTitle": "αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñòαÑç αñÜαñ╛αñ░ αñ╕αÑìαññαñ«αÑìαñ¡",
    "academics.pillarsSubtitle": "αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñòαñ╛ αñ¬αÑìαñ░αññαÑìαñ»αÑçαñò αñ¬αñ╛αñá, αñùαññαñ┐αñ╡αñ┐αñºαñ┐ αñöαñ░ αñ╕αñéαñ╡αñ╛αñª αñçαñ¿αÑìαñ╣αÑÇαñé αñåαñºαñ╛αñ░αñ╢αñ┐αñ▓αñ╛αñôαñé αñ¬αñ░ αñ¿αñ┐αñ░αÑìαñ«αñ┐αññ αñ╣αÑêαÑñ",
    "academics.pillar1Title": "αñåαñ▓αÑïαñÜαñ¿αñ╛αññαÑìαñ«αñò αñ╕αÑïαñÜ",
    "academics.pillar1Desc": "αñ╕αÑüαñòαñ░αñ╛αññαÑÇ αñ¬αÑìαñ░αñ╢αÑìαñ¿αÑïαññαÑìαññαñ░, αñ╡αñ╛αñª-αñ╡αñ┐αñ╡αñ╛αñª αñöαñ░ αñ╕αñ«αñ╕αÑìαñ»αñ╛-αñ╕αñ«αñ╛αñºαñ╛αñ¿ αñ╣αñ░ αñ¬αñ╛αñá αñ«αÑçαñé αñ╕αñ«αñ╛αñ╣αñ┐αññαÑñ",
    "academics.pillar2Title": "STEM αñëαññαÑìαñòαÑâαñ╖αÑìαñƒαññαñ╛",
    "academics.pillar2Desc": "αñ╕αñ«αñ░αÑìαñ¬αñ┐αññ αñ¬αÑìαñ░αñ»αÑïαñùαñ╢αñ╛αñ▓αñ╛αñÅαñé, αñ░αÑïαñ¼αÑïαñƒαñ┐αñòαÑìαñ╕ αñòαÑìαñ▓αñ¼ αñöαñ░ αñ░αñ╛αñ╖αÑìαñƒαÑìαñ░αÑÇαñ» αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿ αñôαñ▓αñéαñ¬αñ┐αñ»αñ╛αñí αñòαÑïαñÜαñ┐αñéαñùαÑñ",
    "academics.pillar3Title": "αñ░αñÜαñ¿αñ╛αññαÑìαñ«αñò αñàαñ¡αñ┐αñ╡αÑìαñ»αñòαÑìαññαñ┐",
    "academics.pillar3Desc": "αñòαñ▓αñ╛, αñ╕αñéαñùαÑÇαññ, αñ¿αñ╛αñƒαñò αñöαñ░ αñ╢αñ┐αñ▓αÑìαñ¬ ΓÇö αñ«αÑüαñûαÑìαñ» αñ╡αñ┐αñ╖αñ»αÑïαñé αñòαÑç αñ░αÑéαñ¬ αñ«αÑçαñé, αñ¿ αñòαñ┐ αñàαññαñ┐αñ░αñ┐αñòαÑìαññαÑñ",
    "academics.pillar4Title": "αñ╕αñ╛αñéαñ╕αÑìαñòαÑâαññαñ┐αñò αñ£αñíαñ╝αÑçαñé",
    "academics.pillar4Desc": "αñ╕αñéαñ╕αÑìαñòαÑâαññ, αñ»αÑïαñù αñöαñ░ αñ¡αñ╛αñ░αññαÑÇαñ» αñ«αÑéαñ▓αÑìαñ» αñ╕αñ¡αÑÇ αñòαñòαÑìαñ╖αñ╛αñôαñé αñ«αÑçαñé αñÅαñòαÑÇαñòαÑâαññαÑñ",
    // Academics ΓÇö programs
    "academics.programsEyebrow": "αÑÑ αñòαñ╛αñ░αÑìαñ»αñòαÑìαñ░αñ«αñ╛αñâ αÑÑ",
    "academics.programsTitle": "αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò αñòαñ╛αñ░αÑìαñ»αñòαÑìαñ░αñ«",
    "academics.programsSubtitle": "αñòαñòαÑìαñ╖αñ╛ I αñ╕αÑç XII αññαñò αñ╕αñéαñ░αñÜαñ┐αññ αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñ»αñ╛αññαÑìαñ░αñ╛, αñ╣αñ░ αñÜαñ░αñú αñ¬αñ┐αñ¢αñ▓αÑç αñ¬αñ░ αñåαñºαñ╛αñ░αñ┐αññαÑñ",
    "academics.prog1Level": "αñ¬αÑìαñ░αñ╛αñÑαñ«αñ┐αñò", "academics.prog1Grades": "αñòαñòαÑìαñ╖αñ╛ I ΓÇô V",
    "academics.prog1Desc": "αñùαññαñ┐αñ╡αñ┐αñºαñ┐-αñåαñºαñ╛αñ░αñ┐αññ αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñòαÑç αñ«αñ╛αñºαÑìαñ»αñ« αñ╕αÑç αñ╕αñ╛αñòαÑìαñ╖αñ░αññαñ╛, αñ╕αñéαñûαÑìαñ»αñ╛-αñ£αÑìαñ₧αñ╛αñ¿ αñöαñ░ αñ«αÑéαñ▓αÑìαñ»αÑïαñé αñòαÑÇ αñåαñ¿αñéαñªαñ«αñ» αñ¿αÑÇαñéαñ╡αÑñ",
    "academics.prog1h1": "αñòαñ╣αñ╛αñ¿αÑÇ-αñåαñºαñ╛αñ░αñ┐αññ αñ╢αñ┐αñòαÑìαñ╖αñ╛", "academics.prog1h2": "αñ╡αÑêαñªαñ┐αñò αñùαñúαñ┐αññ αñ¬αñ░αñ┐αñÜαñ»",
    "academics.prog1h3": "αñòαñ▓αñ╛ αñöαñ░ αñ╕αñéαñùαÑÇαññ αñÅαñòαÑÇαñòαñ░αñú", "academics.prog1h4": "αñ»αÑïαñù αñöαñ░ αñûαÑçαñ▓",
    "academics.prog2Level": "αñ«αñºαÑìαñ» αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ»", "academics.prog2Grades": "αñòαñòαÑìαñ╖αñ╛ VI ΓÇô VIII",
    "academics.prog2Desc": "αñ¬αñ░αñ┐αñ»αÑïαñ£αñ¿αñ╛ αñòαñ╛αñ░αÑìαñ», αñ¬αÑìαñ░αñ»αÑïαñùαñ╢αñ╛αñ▓αñ╛ αñöαñ░ αñ╕αñ╣-αñ¬αñ╛αñáαÑìαñ»αñòαÑìαñ░αñ« αñùαññαñ┐αñ╡αñ┐αñºαñ┐αñ»αÑïαñé αñòαÑç αñ╕αñ╛αñÑ αñ╡αñ┐αñ╖αñ»-αñ£αÑìαñ₧αñ╛αñ¿ αñòαñ╛ αñ╡αñ┐αñ╕αÑìαññαñ╛αñ░αÑñ",
    "academics.prog2h1": "αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿ αñ¬αÑìαñ░αñ»αÑïαñùαñ╢αñ╛αñ▓αñ╛", "academics.prog2h2": "αñòαÑïαñíαñ┐αñéαñù αñöαñ░ αñ░αÑïαñ¼αÑïαñƒαñ┐αñòαÑìαñ╕",
    "academics.prog2h3": "αñ╕αñéαñ╕αÑìαñòαÑâαññ αñàαñºαÑìαñ»αñ»αñ¿", "academics.prog2h4": "αñ¿αÑçαññαÑâαññαÑìαñ╡ αñùαññαñ┐αñ╡αñ┐αñºαñ┐αñ»αñ╛αñü",
    "academics.prog3Level": "αñ«αñ╛αñºαÑìαñ»αñ«αñ┐αñò", "academics.prog3Grades": "αñòαñòαÑìαñ╖αñ╛ IX ΓÇô X",
    "academics.prog3Desc": "αñ«αñ╛αñ░αÑìαñùαñªαñ░αÑìαñ╢αñ¿, αñ«αÑëαñò αñ¬αñ░αÑÇαñòαÑìαñ╖αñ╛ αñöαñ░ αñòαñ░αñ┐αñ»αñ░ αñ¬αñ░αñ╛αñ«αñ░αÑìαñ╢ αñòαÑç αñ╕αñ╛αñÑ αñòαñáαÑïαñ░ CBSE αñ¼αÑïαñ░αÑìαñí αññαÑêαñ»αñ╛αñ░αÑÇαÑñ",
    "academics.prog3h1": "αñ¼αÑïαñ░αÑìαñí αñ¬αñ░αÑÇαñòαÑìαñ╖αñ╛ αñòαÑïαñÜαñ┐αñéαñù", "academics.prog3h2": "αñòαñ░αñ┐αñ»αñ░ αñ¬αñ░αñ╛αñ«αñ░αÑìαñ╢",
    "academics.prog3h3": "αñ╢αÑïαñº αñ¬αñ░αñ┐αñ»αÑïαñ£αñ¿αñ╛αñÅαñé", "academics.prog3h4": "αñ╕αñ╛αñ«αÑüαñªαñ╛αñ»αñ┐αñò αñ╕αÑçαñ╡αñ╛",
    "academics.prog4Level": "αñ╡αñ░αñ┐αñ╖αÑìαñá αñ«αñ╛αñºαÑìαñ»αñ«αñ┐αñò", "academics.prog4Grades": "αñòαñòαÑìαñ╖αñ╛ XI ΓÇô XII",
    "academics.prog4Desc": "αñ╡αñ┐αñ╢αÑçαñ╖αñ£αÑìαñ₧ αñ╢αñ┐αñòαÑìαñ╖αñòαÑïαñé αñòαÑç αñ╕αñ╛αñÑ αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿, αñ╡αñ╛αñúαñ┐αñ£αÑìαñ» αñöαñ░ αñ«αñ╛αñ¿αñ╡αñ┐αñòαÑÇ αñºαñ╛αñ░αñ╛αñÅαñéαÑñ",
    "academics.prog4h1": "αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿ / αñ╡αñ╛αñúαñ┐αñ£αÑìαñ» / αñòαñ▓αñ╛", "academics.prog4h2": "αñ¬αÑìαñ░αññαñ┐αñ»αÑïαñùαÑÇ αñ¬αñ░αÑÇαñòαÑìαñ╖αñ╛ αññαÑêαñ»αñ╛αñ░αÑÇ",
    "academics.prog4h3": "αñçαñéαñƒαñ░αÑìαñ¿αñ╢αñ┐αñ¬ αñàαñ╡αñ╕αñ░", "academics.prog4h4": "αñòαÑëαñ▓αÑçαñ£ αñ«αñ╛αñ░αÑìαñùαñªαñ░αÑìαñ╢αñ¿",
    "academics.cbseAffiliated": "CBSE αñ╕αñéαñ¼αñªαÑìαñº",
    "academics.keyHighlights": "αñ«αÑüαñûαÑìαñ» αñ╡αñ┐αñ╢αÑçαñ╖αññαñ╛αñÅαñé",
    // Academics ΓÇö subjects
    "academics.subjectsEyebrow": "αÑÑ αñ╡αñ┐αñ╖αñ»αñ╛αñâ αÑÑ",
    "academics.subjectsTitle": "αñ╣αñ«αñ╛αñ░αÑç αñ╡αñ┐αñ╖αñ»",
    "academics.subjectsSubtitle": "αñ╢αñ┐αñòαÑìαñ╖αñ╛, αñòαñ▓αñ╛ αñöαñ░ αñ╢αñ╛αñ░αÑÇαñ░αñ┐αñò αñ╡αñ┐αñòαñ╛αñ╕ αñòαÑï αñ╕αñ«αÑçαñƒαñ¿αÑç αñ╡αñ╛αñ▓αñ╛ αñ╡αÑìαñ»αñ╛αñ¬αñò αñöαñ░ αñ╕αñéαññαÑüαñ▓αñ┐αññ αñ¬αñ╛αñáαÑìαñ»αñòαÑìαñ░αñ«αÑñ",
    "academics.subj1Name": "αñ╡αñ╛αñòαÑì αñ╡αñ┐αñªαÑìαñ»αñ╛ ΓÇö αñ¡αñ╛αñ╖αñ╛αñÅαñé",
    "academics.subj1Desc": "αñàαñéαñùαÑìαñ░αÑçαñ£αÑÇ, αñ╣αñ┐αñéαñªαÑÇ, αñ╕αñéαñ╕αÑìαñòαÑâαññ ΓÇö αñ╕αñéαñÜαñ╛αñ░ αñöαñ░ αñ╕αñ╛αñéαñ╕αÑìαñòαÑâαññαñ┐αñò αñ£αñíαñ╝αÑïαñé αñòαñ╛ αñ¿αñ┐αñ░αÑìαñ«αñ╛αñúαÑñ",
    "academics.subj2Name": "αñùαñúαñ┐αññ αñ╢αñ╛αñ╕αÑìαññαÑìαñ░ ΓÇö αñùαñúαñ┐αññ",
    "academics.subj2Desc": "αñàαñéαñòαñùαñúαñ┐αññ αñ╕αÑç αñòαñ▓αñ¿ αññαñò, αñ╡αÑêαñªαñ┐αñò αñùαñúαñ┐αññ αñ╕αñéαñ╡αñ░αÑìαñºαñ¿ αñòαÑç αñ╕αñ╛αñÑαÑñ",
    "academics.subj3Name": "αñ¬αÑìαñ░αñòαÑâαññαñ┐ αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿ ΓÇö αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿",
    "academics.subj3Desc": "αñ¡αÑîαññαñ┐αñòαÑÇ, αñ░αñ╕αñ╛αñ»αñ¿, αñ£αÑÇαñ╡ αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿ ΓÇö αñ╡αÑìαñ»αñ╛αñ╡αñ╣αñ╛αñ░αñ┐αñò αñ¬αÑìαñ░αñ»αÑïαñùαñ╢αñ╛αñ▓αñ╛ αñ╕αññαÑìαñ░αÑïαñé αñòαÑç αñ╕αñ╛αñÑαÑñ",
    "academics.subj4Name": "αñºαñ░αññαÑÇ αñ«αñ╛αññαñ╛ ΓÇö αñ╕αñ╛αñ«αñ╛αñ£αñ┐αñò αñàαñºαÑìαñ»αñ»αñ¿",
    "academics.subj4Desc": "αñçαññαñ┐αñ╣αñ╛αñ╕, αñ¡αÑéαñùαÑïαñ▓, αñ¿αñ╛αñùαñ░αñ┐αñòαñ╢αñ╛αñ╕αÑìαññαÑìαñ░ ΓÇö αñ╣αñ«αñ╛αñ░αÑÇ αñ╡αñ┐αñ░αñ╛αñ╕αññ αñòαÑï αñ╕αñ«αñ¥αñ¿αñ╛αÑñ",
    "academics.subj5Name": "αñ»αñéαññαÑìαñ░ αñ╡αñ┐αñªαÑìαñ»αñ╛ ΓÇö αñòαñéαñ¬αÑìαñ»αÑéαñƒαñ░ αñ╡αñ┐αñ£αÑìαñ₧αñ╛αñ¿",
    "academics.subj5Desc": "αñòαÑïαñíαñ┐αñéαñù, αñ░αÑïαñ¼αÑïαñƒαñ┐αñòαÑìαñ╕ αñöαñ░ αñåαñºαÑüαñ¿αñ┐αñò αñ»αÑüαñù αñòαÑÇ αñíαñ┐αñ£αñ┐αñƒαñ▓ αñ╕αñ╛αñòαÑìαñ╖αñ░αññαñ╛αÑñ",
    "academics.subj6Name": "αñ╢αñ┐αñ▓αÑìαñ¬ αñòαñ▓αñ╛ ΓÇö αñòαñ▓αñ╛ αñöαñ░ αñ╢αñ┐αñ▓αÑìαñ¬",
    "academics.subj6Desc": "αñÜαñ┐αññαÑìαñ░αñòαñ▓αñ╛, αñ░αñéαñùαñòαñ▓αñ╛ αñöαñ░ αñ¬αñ╛αñ░αñéαñ¬αñ░αñ┐αñò αñ¡αñ╛αñ░αññαÑÇαñ» αñòαñ▓αñ╛ αñ░αÑéαñ¬αÑñ",
    "academics.subj7Name": "αñùαñéαñºαñ░αÑìαñ╡ ΓÇö αñ╕αñéαñùαÑÇαññ αñöαñ░ αñ¿αÑâαññαÑìαñ»",
    "academics.subj7Desc": "αñ╢αñ╛αñ╕αÑìαññαÑìαñ░αÑÇαñ» αñöαñ░ αñ▓αÑïαñò αñ¬αñ░αñéαñ¬αñ░αñ╛αñÅαñé, αñåαñºαÑüαñ¿αñ┐αñò αñàαñ¡αñ┐αñ╡αÑìαñ»αñòαÑìαññαñ┐ αñòαÑç αñ╕αñ╛αñÑαÑñ",
    "academics.subj8Name": "αñ╢αñ░αÑÇαñ░ αñºαñ░αÑìαñ« ΓÇö αñ╢αñ╛αñ░αÑÇαñ░αñ┐αñò αñ╢αñ┐αñòαÑìαñ╖αñ╛",
    "academics.subj8Desc": "αñ»αÑïαñù, αñòαñ¼αñíαÑìαñíαÑÇ, αñÅαñÑαñ▓αÑçαñƒαñ┐αñòαÑìαñ╕ αñöαñ░ αñƒαÑÇαñ« αñûαÑçαñ▓ ΓÇö αñ╕αñ«αñùαÑìαñ░ αñ╕αÑìαñ╡αñ╛αñ╕αÑìαñÑαÑìαñ» αñòαÑç αñ▓αñ┐αñÅαÑñ",
    // Academics ΓÇö quote & CTA
    "academics.quoteTrans": "\"αñ£αÑìαñ₧αñ╛αñ¿ αñ╡αñ┐αñ¿αñ«αÑìαñ░αññαñ╛ αñªαÑçαññαñ╛ αñ╣αÑê, αñ╡αñ┐αñ¿αñ«αÑìαñ░αññαñ╛ αñ╕αÑç αñ»αÑïαñùαÑìαñ»αññαñ╛ αñåαññαÑÇ αñ╣αÑêαÑñ\"",
    "academics.ctaBadge": "αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñûαÑüαñ▓αÑç αñ╣αÑêαñé 2026ΓÇô27",
    "academics.ctaTitle": "αñ»αñ╛αññαÑìαñ░αñ╛ αñ╢αÑüαñ░αÑé αñòαñ░αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αññαÑêαñ»αñ╛αñ░ αñ╣αÑêαñé?",
    "academics.ctaSubtitle": "αñÅαñò αñÉαñ╕αÑç αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñ«αÑçαñé αñ╢αñ╛αñ«αñ┐αñ▓ αñ╣αÑïαñé αñ£αñ╣αñ╛αñü αñ¬αñ░αñéαñ¬αñ░αñ╛ αñöαñ░ αñëαññαÑìαñòαÑâαñ╖αÑìαñƒαññαñ╛ αñ╕αñ╛αñÑ αñÜαñ▓αññαÑÇ αñ╣αÑêαÑñ αñ╕αñ¡αÑÇ αñòαñòαÑìαñ╖αñ╛αñôαñé αñòαÑç αñ▓αñ┐αñÅ αñåαñ╡αÑçαñªαñ¿ αñûαÑüαñ▓αÑç αñ╣αÑêαñéαÑñ",
    "academics.ctaApply": "αñàαñ¡αÑÇ αñåαñ╡αÑçαñªαñ¿ αñòαñ░αÑçαñé",
    "academics.ctaContact": "αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñé",
    // Admissions ΓÇö hero
    "admissions.heroTitle": "αñ╣αñ«αñ╛αñ░αÑç αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñ«αÑçαñé αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñ▓αÑçαñé",
    "admissions.heroSubtitle": "αñ╣αñ░ αñ¼αñÜαÑìαñÜαÑç αñ«αÑçαñé αñÅαñò αñªαñ┐αñ╡αÑìαñ» αñ£αÑìαñ»αÑïαññαñ┐ αñ╣αÑêαÑñ αñ╣αñ«αÑçαñé αñëαñ╕αÑç αñÅαñò αñ¬αÑïαñ╖αñúαñòαñ╛αñ░αÑÇ, αñ«αÑéαñ▓αÑìαñ»-αñåαñºαñ╛αñ░αñ┐αññ αñ╡αñ╛αññαñ╛αñ╡αñ░αñú αñ«αÑçαñé αñÜαñ«αñòαñ╛αñ¿αÑç αñªαÑçαñéαÑñ",
    // Admissions ΓÇö steps
    "admissions.stepsEyebrow": "αÑÑ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛ αÑÑ",
    "admissions.stepsTitle": "αñ╕αñ░αñ▓ αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛",
    "admissions.stepsSubtitle": "αñ£αñ┐αñ£αÑìαñ₧αñ╛αñ╕αñ╛ αñ╕αÑç αñ¿αñ╛αñ«αñ╛αñéαñòαñ¿ αññαñò αñÅαñò αñ╕αÑìαñ╡αñ╛αñùαññαñ¬αÑéαñ░αÑìαñú αñ«αñ╛αñ░αÑìαñù ΓÇö αñòαÑçαñ╡αñ▓ αñÜαñ╛αñ░ αñåαñ╕αñ╛αñ¿ αñÜαñ░αñúαÑñ",
    "admissions.step1Title": "αñ£αñ┐αñ£αÑìαñ₧αñ╛αñ╕αñ╛",
    "admissions.step1Desc": "αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñé αñöαñ░ αñàαñ¬αñ¿αÑç αñ¼αñÜαÑìαñÜαÑç αñòαÑÇ αñ░αÑüαñÜαñ┐αñ»αñ╛αñü, αñòαñòαÑìαñ╖αñ╛ αñöαñ░ αñ¬αÑìαñ░αñ╢αÑìαñ¿ αñ╕αñ╛αñ¥αñ╛ αñòαñ░αÑçαñéαÑñ",
    "admissions.step2Title": "αñåαñ╡αÑçαñªαñ¿",
    "admissions.step2Desc": "αñæαñ¿αñ▓αñ╛αñçαñ¿ αñ½αÑëαñ░αÑìαñ« αñ¡αñ░αÑçαñé αñöαñ░ αñåαñ╡αñ╢αÑìαñ»αñò αñªαñ╕αÑìαññαñ╛αñ╡αÑçαñ£αñ╝ αñ╕αÑüαñ░αñòαÑìαñ╖αñ┐αññ αñ░αÑéαñ¬ αñ╕αÑç αñàαñ¬αñ▓αÑïαñí αñòαñ░αÑçαñéαÑñ",
    "admissions.step3Title": "αñ«αÑéαñ▓αÑìαñ»αñ╛αñéαñòαñ¿",
    "admissions.step3Desc": "αñåαñ¬αñòαÑç αñ¼αñÜαÑìαñÜαÑç αñòαÑÇ αñ╢αñòαÑìαññαñ┐αñ»αÑïαñé αñòαÑï αñ╕αñ«αñ¥αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñÅαñò αñàαñ¿αÑîαñ¬αñÜαñ╛αñ░αñ┐αñò, αñ«αÑêαññαÑìαñ░αÑÇαñ¬αÑéαñ░αÑìαñú αñ¼αñ╛αññαñÜαÑÇαññαÑñ",
    "admissions.step4Title": "αñ¿αñ╛αñ«αñ╛αñéαñòαñ¿",
    "admissions.step4Desc": "αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñ¬αñ░αñ┐αñ╡αñ╛αñ░ αñ«αÑçαñé αñåαñ¬αñòαñ╛ αñ╕αÑìαñ╡αñ╛αñùαññ αñ╣αÑê ΓÇö αñÅαñò αñ¬αñ╡αñ┐αññαÑìαñ░ αñ╕αñ«αñ╛αñ░αÑïαñ╣ αñòαÑç αñ╕αñ╛αñÑαÑñ",
    // Admissions ΓÇö why
    "admissions.whyEyebrow": "αÑÑ αñ╡αñ┐αñ╢αÑçαñ╖αññαñ╛αñÅαñé αÑÑ",
    "admissions.whyTitle": "αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñòαÑìαñ»αÑïαñé αñÜαÑüαñ¿αÑçαñé",
    "admissions.whySubtitle": "αñ£αÑï αñ╣αñ«αñ╛αñ░αÑç αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñòαÑï αñåαñ¬αñòαÑç αñ¼αñÜαÑìαñÜαÑç αñòαÑç αñ¡αñ╡αñ┐αñ╖αÑìαñ» αñòαÑç αñ▓αñ┐αñÅ αñ╕αñ░αÑìαñ╡αÑïαññαÑìαññαñ« αñ╡αñ┐αñòαñ▓αÑìαñ¬ αñ¼αñ¿αñ╛αññαñ╛ αñ╣αÑêαÑñ",
    "admissions.why1Title": "αñ╕αñ«αñùαÑìαñ░ αñ╡αñ┐αñòαñ╛αñ╕",
    "admissions.why1Desc": "αñ╣αñ« αñÅαñòαÑÇαñòαÑâαññ αñ╢αñ┐αñòαÑìαñ╖αñú αñªαÑâαñ╖αÑìαñƒαñ┐αñòαÑïαñú αñòαÑç αñ«αñ╛αñºαÑìαñ»αñ« αñ╕αÑç αñ«αñ¿, αñ╢αñ░αÑÇαñ░ αñöαñ░ αñåαññαÑìαñ«αñ╛ αñòαñ╛ αñ¬αÑïαñ╖αñú αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ",
    "admissions.why1StatLabel": "αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαÑÇ αñòαñ▓αÑìαñ»αñ╛αñú αñ½αÑïαñòαñ╕",
    "admissions.why2Title": "αñ╡αñ┐αñ╢αÑçαñ╖αñ£αÑìαñ₧ αñ╢αñ┐αñòαÑìαñ╖αñò",
    "admissions.why2Desc": "αñ╕αñ«αñ░αÑìαñ¬αñ┐αññ αñ╢αñ┐αñòαÑìαñ╖αñò αñ£αÑï αñ╣αñ░ αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαÑÇ αñ«αÑçαñé αñ╕αñ░αÑìαñ╡αñ╢αÑìαñ░αÑçαñ╖αÑìαñá αñ¿αñ┐αñòαñ╛αñ▓αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñ¬αÑìαñ░αññαñ┐αñ¼αñªαÑìαñº αñ╣αÑêαñéαÑñ",
    "admissions.why2StatLabel": "αñ»αÑïαñùαÑìαñ» αñ╢αñ┐αñòαÑìαñ╖αñò",
    "admissions.why3Title": "αñ╕αñ«αÑâαñªαÑìαñº αñ¬αñ╛αñáαÑìαñ»αñòαÑìαñ░αñ«",
    "admissions.why3Desc": "αñ¬αñ╛αñ░αñéαñ¬αñ░αñ┐αñò αñ£αÑìαñ₧αñ╛αñ¿ αñöαñ░ αñåαñºαÑüαñ¿αñ┐αñò αñ╢αñ┐αñòαÑìαñ╖αñ╛ αñòαñ╛ αñ╕αñéαñùαñ« ΓÇö αñ╕αñ«αñùαÑìαñ░ αñ╡αñ┐αñòαñ╛αñ╕ αñòαÑç αñ▓αñ┐αñÅαÑñ",
    "admissions.why3StatLabel": "αñ╕αñéαñ¼αñªαÑìαñº αñ¼αÑïαñ░αÑìαñí",
    "admissions.why4Title": "αñ╕αñ┐αñªαÑìαñº αñëαññαÑìαñòαÑâαñ╖αÑìαñƒαññαñ╛",
    "admissions.why4Desc": "αñëαññαÑìαñòαÑâαñ╖αÑìαñƒ αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò αñ¬αñ░αñ┐αñúαñ╛αñ« αñöαñ░ αñ╕αñ«αñùαÑìαñ░ αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαÑÇ αñëαñ¬αñ▓αñ¼αÑìαñºαñ┐αñ»αñ╛αñüαÑñ",
    "admissions.why4StatLabel": "αñ¼αÑïαñ░αÑìαñí αñëαññαÑìαññαÑÇαñ░αÑìαñú αñªαñ░",
    // Admissions ΓÇö documents
    "admissions.docsLabel": "αñåαñ╡αñ╢αÑìαñ»αñò αñªαñ╕αÑìαññαñ╛αñ╡αÑçαñ£αñ╝",
    "admissions.docsTitle": "αñòαÑìαñ»αñ╛ αñ▓αñ╛αñÅαñé",
    "admissions.doc1": "αñ£αñ¿αÑìαñ« αñ¬αÑìαñ░αñ«αñ╛αñú αñ¬αññαÑìαñ░ (αñ«αÑéαñ▓ + αñ½αÑïαñƒαÑïαñòαÑëαñ¬αÑÇ)",
    "admissions.doc2": "αñ¬αñ┐αñ¢αñ▓αÑç αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñòαñ╛ αñ╕αÑìαñÑαñ╛αñ¿αñ╛αñéαññαñ░αñú αñ¬αÑìαñ░αñ«αñ╛αñú αñ¬αññαÑìαñ░",
    "admissions.doc3": "αñ╣αñ╛αñ▓ αñòαÑÇ αñ¬αñ╛αñ╕αñ¬αÑïαñ░αÑìαñƒ αñåαñòαñ╛αñ░ αñòαÑÇ αññαñ╕αÑìαñ╡αÑÇαñ░αÑçαñé (4)",
    "admissions.doc4": "αñ¼αñÜαÑìαñÜαÑç αñöαñ░ αñ«αñ╛αññαñ╛-αñ¬αñ┐αññαñ╛ αñòαñ╛ αñåαñºαñ╛αñ░ αñòαñ╛αñ░αÑìαñí",
    "admissions.doc5": "αñ¬αññαñ╛ αñ¬αÑìαñ░αñ«αñ╛αñú (αñ¼αñ┐αñ£αñ▓αÑÇ αñ¼αñ┐αñ▓ / αñòαñ┐αñ░αñ╛αñ»αñ╛ αñ╕αñ«αñ¥αÑîαññαñ╛)",
    "admissions.doc6": "αñ¬αñ┐αñ¢αñ▓αÑç αñ╡αñ░αÑìαñ╖ αñòαÑÇ αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò αñ░αñ┐αñ¬αÑïαñ░αÑìαñƒ αñòαñ╛αñ░αÑìαñí",
    "admissions.contactTitle": "αñ¬αÑìαñ░αñ╢αÑìαñ¿ αñ╣αÑêαñé?",
    // Admissions ΓÇö form
    "admissions.formTitle": "αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñòαÑç αñ▓αñ┐αñÅ αñåαñ╡αÑçαñªαñ¿ αñòαñ░αÑçαñé",
    "admissions.formSubtitle": "αñ¿αÑÇαñÜαÑç αñ╡αñ┐αñ╡αñ░αñú αñ¡αñ░αÑçαñé αñöαñ░ αñ╣αñ« αñ£αñ▓αÑìαñª αñ╣αÑÇ αñåαñ¬αñ╕αÑç αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñéαñùαÑçαÑñ",
    "admissions.formParent": "αñ«αñ╛αññαñ╛-αñ¬αñ┐αññαñ╛ / αñàαñ¡αñ┐αñ¡αñ╛αñ╡αñò αñòαñ╛ αñ¿αñ╛αñ«",
    "admissions.formParentPlaceholder": "αñ£αÑêαñ╕αÑç αñ░αñ«αÑçαñ╢ αñ╢αñ░αÑìαñ«αñ╛",
    "admissions.formChild": "αñ¼αñÜαÑìαñÜαÑç αñòαñ╛ αñ¿αñ╛αñ«",
    "admissions.formChildPlaceholder": "αñ£αÑêαñ╕αÑç αñàαñ░αÑìαñ£αÑüαñ¿ αñ╢αñ░αÑìαñ«αñ╛",
    "admissions.formEmail": "αñêαñ«αÑçαñ▓ αñ¬αññαñ╛",
    "admissions.formEmailPlaceholder": "you@example.com",
    "admissions.formEmailError": "αñòαÑâαñ¬αñ»αñ╛ αñÅαñò αñ╡αÑêαñº αñêαñ«αÑçαñ▓ αñªαñ░αÑìαñ£ αñòαñ░αÑçαñéαÑñ",
    "admissions.formPhone": "αñ½αñ╝αÑïαñ¿ αñ¿αñéαñ¼αñ░",
    "admissions.formPhonePlaceholder": "+91 98765 43210",
    "admissions.formPhoneError": "αñòαÑâαñ¬αñ»αñ╛ αñÅαñò αñ╡αÑêαñº αñ½αñ╝αÑïαñ¿ αñ¿αñéαñ¼αñ░ αñªαñ░αÑìαñ£ αñòαñ░αÑçαñéαÑñ",
    "admissions.formGrade": "αñòαñ┐αñ╕ αñòαñòαÑìαñ╖αñ╛ αñòαÑç αñ▓αñ┐αñÅ αñåαñ╡αÑçαñªαñ¿",
    "admissions.formGradePlaceholder": "αñ£αÑêαñ╕αÑç αñòαñòαÑìαñ╖αñ╛ VI",
    "admissions.formMessage": "αñàαññαñ┐αñ░αñ┐αñòαÑìαññ αñ╕αñéαñªαÑçαñ╢",
    "admissions.formMessagePlaceholder": "αñòαÑïαñê αñ╡αñ┐αñ╢αÑçαñ╖ αñåαñ╡αñ╢αÑìαñ»αñòαññαñ╛ αñ»αñ╛ αñ¬αÑìαñ░αñ╢αÑìαñ¿...",
    "admissions.formMessageOptional": "(αñ╡αÑêαñòαñ▓αÑìαñ¬αñ┐αñò)",
    "admissions.formSubmit": "αñåαñ╡αÑçαñªαñ¿ αñ£αñ«αñ╛ αñòαñ░αÑçαñé",
    "admissions.formSubmitting": "αñ£αñ«αñ╛ αñ╣αÑï αñ░αñ╣αñ╛ αñ╣αÑêΓÇª",
    "admissions.successTitle": "αñåαñ╡αÑçαñªαñ¿ αñ¬αÑìαñ░αñ╛αñ¬αÑìαññ αñ╣αÑüαñå!",
    "admissions.successDesc": "αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñ«αÑçαñé αñåαñ╡αÑçαñªαñ¿ αñòαÑç αñ▓αñ┐αñÅ αñºαñ¿αÑìαñ»αñ╡αñ╛αñªαÑñ αñ╣αñ«αñ╛αñ░αÑÇ αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñƒαÑÇαñ« 2 αñòαñ╛αñ░αÑìαñ» αñªαñ┐αñ╡αñ╕αÑïαñé αñ«αÑçαñé αñåαñ¬αñ╕αÑç αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñùαÑÇαÑñ ≡ƒ¬ö",
    "admissions.successBtn": "αñÅαñò αñöαñ░ αñåαñ╡αÑçαñªαñ¿ αñ£αñ«αñ╛ αñòαñ░αÑçαñé",
    // Admissions ΓÇö FAQ
    "admissions.faqEyebrow": "αÑÑ αñ¬αÑìαñ░αñ╢αÑìαñ¿αÑïαññαÑìαññαñ░ αÑÑ",
    "admissions.faqTitle": "αñàαñòαÑìαñ╕αñ░ αñ¬αÑéαñ¢αÑç αñ£αñ╛αñ¿αÑç αñ╡αñ╛αñ▓αÑç αñ¬αÑìαñ░αñ╢αÑìαñ¿",
    "admissions.faqSubtitle": "αñ╣αñ«αñ╛αñ░αÑÇ αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛ αñòαÑç αñ¼αñ╛αñ░αÑç αñ«αÑçαñé αñ╕αñ╛αñ«αñ╛αñ¿αÑìαñ» αñ¬αÑìαñ░αñ╢αÑìαñ¿αÑïαñé αñòαÑç αñëαññαÑìαññαñ░ αñ¬αñ╛αñÅαñéαÑñ",
    "admissions.faq1Q": "αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛ αñòαÑÇ αñ╕αñ«αñ»-αñ╕αÑÇαñ«αñ╛ αñòαÑìαñ»αñ╛ αñ╣αÑê?",
    "admissions.faq1A": "αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛ αñåαñ«αññαÑîαñ░ αñ¬αñ░ αñåαñ╡αÑçαñªαñ¿ αñ£αñ«αñ╛ αñòαñ░αñ¿αÑç αñ╕αÑç αñàαñéαññαñ┐αñ« αñ¿αñ╛αñ«αñ╛αñéαñòαñ¿ αññαñò 2ΓÇô3 αñ╕αñ¬αÑìαññαñ╛αñ╣ αñ▓αÑçαññαÑÇ αñ╣αÑêαÑñ αñ╣αñ« αñåαñ¬αñòαÑç αñåαñ╡αÑçαñªαñ¿ αñ¬αÑìαñ░αñ╛αñ¬αÑìαññ αñ╣αÑïαñ¿αÑç αñòαÑç 5ΓÇô7 αñªαñ┐αñ¿αÑïαñé αñòαÑç αñ¡αÑÇαññαñ░ αñ«αÑéαñ▓αÑìαñ»αñ╛αñéαñòαñ¿ αñòαñ░αññαÑç αñ╣αÑêαñé αñöαñ░ 48 αñÿαñéαñƒαÑïαñé αñòαÑç αñ¡αÑÇαññαñ░ αñ¬αñ░αñ┐αñúαñ╛αñ« αñ╕αÑéαñÜαñ┐αññ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ",
    "admissions.faq2Q": "αñòαÑìαñ»αñ╛ αñòαÑïαñê αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñ¬αñ░αÑÇαñòαÑìαñ╖αñ╛ αñ╣αÑê?",
    "admissions.faq2A": "αñòαñòαÑìαñ╖αñ╛ 1ΓÇô5 αñòαÑç αñ▓αñ┐αñÅ, αñ╣αñ« αñ¼αñÜαÑìαñÜαÑç αñòαÑÇ αñ░αÑüαñÜαñ┐αñ»αÑïαñé αñöαñ░ αñòαÑìαñ╖αñ«αññαñ╛αñôαñé αñòαÑï αñ╕αñ«αñ¥αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñÅαñò αñàαñ¿αÑîαñ¬αñÜαñ╛αñ░αñ┐αñò αñ¼αñ╛αññαñÜαÑÇαññ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ αñòαñòαÑìαñ╖αñ╛ 6 αñöαñ░ αñëαñ╕αñ╕αÑç αñèαñ¬αñ░ αñòαÑç αñ▓αñ┐αñÅ, αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαñ┐αñ»αÑïαñé αñòαÑï αñëαñÜαñ┐αññ αñ░αÑéαñ¬ αñ╕αÑç αñ░αñûαñ¿αÑç αñ«αÑçαñé αñ«αñªαñª αñòαÑç αñ▓αñ┐αñÅ αñ¼αÑüαñ¿αñ┐αñ»αñ╛αñªαÑÇ αñàαñ╡αñºαñ╛αñ░αñúαñ╛αñôαñé αñòαñ╛ αñÅαñò αñ╕αñ░αñ▓ αñ«αÑéαñ▓αÑìαñ»αñ╛αñéαñòαñ¿ αñ╣αÑïαññαñ╛ αñ╣αÑêαÑñ",
    "admissions.faq3Q": "αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñòαÑç αñ▓αñ┐αñÅ αñòαÑîαñ¿ αñ╕αÑç αñªαñ╕αÑìαññαñ╛αñ╡αÑçαñ£αñ╝ αñåαñ╡αñ╢αÑìαñ»αñò αñ╣αÑêαñé?",
    "admissions.faq3A": "αñåαñ¬αñòαÑï αñÜαñ╛αñ╣αñ┐αñÅ: αñ£αñ¿αÑìαñ« αñ¬αÑìαñ░αñ«αñ╛αñú αñ¬αññαÑìαñ░, αñ¬αñ┐αñ¢αñ▓αÑç αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñòαñ╛ αñ╕αÑìαñÑαñ╛αñ¿αñ╛αñéαññαñ░αñú αñ¬αÑìαñ░αñ«αñ╛αñú αñ¬αññαÑìαñ░ (αñ»αñªαñ┐ αñ▓αñ╛αñùαÑé αñ╣αÑï), αñ╣αñ╛αñ▓ αñòαÑÇ αññαñ╕αÑìαñ╡αÑÇαñ░αÑçαñé, αñåαñºαñ╛αñ░ αñòαñ╛αñ░αÑìαñí, αñ¬αññαñ╛ αñ¬αÑìαñ░αñ«αñ╛αñú αñöαñ░ αñ¬αñ┐αñ¢αñ▓αÑç αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò αñ░αñ┐αñòαÑëαñ░αÑìαñíαÑñ αñ╕αñ¡αÑÇ αñªαñ╕αÑìαññαñ╛αñ╡αÑçαñ£αñ╝ αñ«αÑéαñ▓ αñöαñ░ αñ½αÑïαñƒαÑïαñòαÑëαñ¬αÑÇ αñòαÑç αñ╕αñ╛αñÑ αñ£αñ«αñ╛ αñòαñ░αÑçαñéαÑñ",
    "admissions.faq4Q": "αñòαÑìαñ»αñ╛ αñ¡αñ╛αñê-αñ¼αñ╣αñ¿ αñòαÑç αñ▓αñ┐αñÅ αñ¢αÑéαñƒ αñëαñ¬αñ▓αñ¼αÑìαñº αñ╣αÑê?",
    "admissions.faq4A": "αñ╣αñ╛αñü, αñ╣αñ« αñªαÑéαñ╕αñ░αÑç αñ¼αñÜαÑìαñÜαÑç αñòαÑç αñ▓αñ┐αñÅ αñƒαÑìαñ»αÑéαñ╢αñ¿ αñ½αÑÇαñ╕ αñ¬αñ░ 10% αñöαñ░ αññαÑÇαñ╕αñ░αÑç αñ¼αñÜαÑìαñÜαÑç αñòαÑç αñ▓αñ┐αñÅ 15% αñ¢αÑéαñƒ αñªαÑçαññαÑç αñ╣αÑêαñéαÑñ αñ»αñ╣ αñëαñ¿ αñ¬αñ░αñ┐αñ╡αñ╛αñ░αÑïαñé αñòαÑç αñ¬αÑìαñ░αññαñ┐ αñ╣αñ«αñ╛αñ░αÑÇ αñ¬αÑìαñ░αññαñ┐αñ¼αñªαÑìαñºαññαñ╛ αñòαÑï αñªαñ░αÑìαñ╢αñ╛αññαñ╛ αñ╣αÑê αñ£αÑï αñ╣αñ«αñ╛αñ░αÑç αñ╕αñ╛αñÑ αñ¼αñóαñ╝αñ¿αñ╛ αñÜαÑüαñ¿αññαÑç αñ╣αÑêαñéαÑñ",
    "admissions.faq5Q": "αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαÑÇ-αñ╢αñ┐αñòαÑìαñ╖αñò αñàαñ¿αÑüαñ¬αñ╛αññ αñòαÑìαñ»αñ╛ αñ╣αÑê?",
    "admissions.faq5A": "αñ╣αñ« αñ╡αÑìαñ»αñòαÑìαññαñ┐αñùαññ αñºαÑìαñ»αñ╛αñ¿ αñ╕αÑüαñ¿αñ┐αñ╢αÑìαñÜαñ┐αññ αñòαñ░αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ 20:1 αñòαñ╛ αñ╕αÑìαñ╡αñ╕αÑìαñÑ αñ╡αñ┐αñªαÑìαñ»αñ╛αñ░αÑìαñÑαÑÇ-αñ╢αñ┐αñòαÑìαñ╖αñò αñàαñ¿αÑüαñ¬αñ╛αññ αñ¼αñ¿αñ╛αñÅ αñ░αñûαññαÑç αñ╣αÑêαñéαÑñ αñ╡αñ┐αñ╢αÑçαñ╖ αñ╡αñ┐αñ╖αñ»αÑïαñé αñöαñ░ αñ¬αÑìαñ░αñ»αÑïαñùαñ╢αñ╛αñ▓αñ╛αñôαñé αñòαÑç αñ▓αñ┐αñÅ, αñàαñ¿αÑüαñ¬αñ╛αññ 15:1 αññαñò αñòαñ« αñ╣αÑêαÑñ",
    "admissions.faq6Q": "αñ¿αñÅ αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò αñ╡αñ░αÑìαñ╖ αñòαÑç αñ▓αñ┐αñÅ αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñòαñ¼ αñûαÑüαñ▓αññαÑç αñ╣αÑêαñé?",
    "admissions.faq6A": "αñ¿αñÅ αñ╢αÑêαñòαÑìαñ╖αñúαñ┐αñò αñ╡αñ░αÑìαñ╖ (2026ΓÇô27) αñòαÑç αñ▓αñ┐αñÅ αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñ£αñ¿αñ╡αñ░αÑÇ αñ«αÑçαñé αñûαÑüαñ▓αññαÑç αñ╣αÑêαñé αñöαñ░ 31 αñ«αñ╛αñ░αÑìαñÜ αññαñò αñ¼αñéαñª αñ╣αÑï αñ£αñ╛αññαÑç αñ╣αÑêαñéαÑñ αñ╣αñ« αñ£αñ▓αÑìαñªαÑÇ αñåαñ╡αÑçαñªαñ¿ αñòαñ░αñ¿αÑç αñòαÑÇ αñ╕αñ▓αñ╛αñ╣ αñªαÑçαññαÑç αñ╣αÑêαñé αñòαÑìαñ»αÑïαñéαñòαñ┐ αñ╕αÑÇαñƒαÑçαñé αñ╕αÑÇαñ«αñ┐αññ αñ╣αÑêαñéαÑñ αñªαÑçαñ░ αñ╕αÑç αñåαñ╡αÑçαñªαñ¿ αñëαñ¬αñ▓αñ¼αÑìαñºαññαñ╛ αñòαÑç αñàαñºαÑÇαñ¿ αñ╡αñ┐αñÜαñ╛αñ░ αñòαñ┐αñÅ αñ£αñ╛ αñ╕αñòαññαÑç αñ╣αÑêαñéαÑñ",
    "admissions.faq7Q": "αñòαÑìαñ»αñ╛ αñ╕αÑìαñòαÑéαñ▓ αñ¼αñ╕ αñ»αñ╛ αñ¬αñ░αñ┐αñ╡αñ╣αñ¿ αñ╕αÑüαñ╡αñ┐αñºαñ╛ αñëαñ¬αñ▓αñ¼αÑìαñº αñ╣αÑê?",
    "admissions.faq7A": "αñ╣αñ╛αñü, αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» GPS-αñƒαÑìαñ░αÑêαñòαÑìαñí αñ╕αÑìαñòαÑéαñ▓ αñ¼αñ╕αÑïαñé αñòαñ╛ αñ╕αñéαñÜαñ╛αñ▓αñ¿ αñòαñ░αññαñ╛ αñ╣αÑê αñ£αÑï αñ╢αñ╣αñ░ αñòαÑç αñ¬αÑìαñ░αñ«αÑüαñû αñ«αñ╛αñ░αÑìαñùαÑïαñé αñòαÑï αñòαñ╡αñ░ αñòαñ░αññαÑÇ αñ╣αÑêαñéαÑñ αñ¬αñ░αñ┐αñ╡αñ╣αñ¿ αñ╢αÑüαñ▓αÑìαñò αñ╡αñ┐αñªαÑìαñ»αñ╛αñ▓αñ» αñ╕αÑç αñªαÑéαñ░αÑÇ αñòαÑç αñåαñºαñ╛αñ░ αñ¬αñ░ αñàαñ▓αñù αñ╕αÑç αñ▓αñ┐αñ»αñ╛ αñ£αñ╛αññαñ╛ αñ╣αÑêαÑñ αñ╡αñ░αÑìαññαñ«αñ╛αñ¿ αñ«αñ╛αñ░αÑìαñù αñ«αñ╛αñ¿αñÜαñ┐αññαÑìαñ░ αñöαñ░ αñ╢αÑüαñ▓αÑìαñò αñ╡αñ┐αñ╡αñ░αñú αñòαÑç αñ▓αñ┐αñÅ αñòαñ╛αñ░αÑìαñ»αñ╛αñ▓αñ» αñ╕αÑç αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñéαÑñ",
    // Admissions ΓÇö CTA
    "admissions.ctaTitle": "αñåαñ£ αñ╣αÑÇ αñ»αñ╛αññαÑìαñ░αñ╛ αñ╢αÑüαñ░αÑé αñòαñ░αÑçαñé",
    "admissions.ctaSubtitle": "2026ΓÇô27 αñòαÑç αñ▓αñ┐αñÅ αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñûαÑüαñ▓αÑç αñ╣αÑêαñéαÑñ αñ╣αñ«αñ╛αñ░αÑç αñªαÑìαñ╡αñ╛αñ░ αñ╕αÑç αñ¬αÑìαñ░αñ╡αÑçαñ╢ αñòαñ░αÑçαñé αñöαñ░ αñ╡αñ┐αñ░αñ╛αñ╕αññ αñòαÑï αñ«αñ╣αñ╕αÑéαñ╕ αñòαñ░αÑçαñéαÑñ",
    "admissions.ctaVisit": "αñ¡αÑìαñ░αñ«αñú αñ¿αñ┐αñ░αÑìαñºαñ╛αñ░αñ┐αññ αñòαñ░αÑçαñé",
    "admissions.ctaCall": "αñàαñ¡αÑÇ αñòαÑëαñ▓ αñòαñ░αÑçαñé",
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
