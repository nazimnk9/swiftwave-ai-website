// import ModuleCard from "./module-card";

// const ModulesSection = () => {
//   return (
//     <section className="my-16 rounded-md bg-background px-4 py-12 md:px-8 lg:my-16 lg:px-16">
//       <h2 className="mb-10 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">
//         Our AI Modules
//       </h2>
//       <p className="mb-8 text-text">
//         Our AI-powered solutions significantly reduce your overhead costs while
//         accelerating hiring by 100% with full compliance. We enhance efficiency
//         across your operations, and with our upcoming sales modules and advanced
//         technology, you will grow your business faster than ever. Explore our
//         modules below to place your order.
//       </p>
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {modules.map((module, index) => (
//           <ModuleCard key={index} {...module} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const modules = [
//   {
//     uid: "AI-Phone-Call-Recruiter",
//     tabid: "AIPhoneCallRecruiter",
//     title: "AI Phone Call Recruiter",
//     description:
//       "When applicants don't respond to WhatsApp, this revolutionary technology calls them directly. If the applicant meets all qualification criteria, they receive a secure link to upload their ID & certificates directly to your CRM system.",
//     imageSrc: "/apps/ai-telephone-call.png",
//     imageAlt: "AI Telephone Call Illustration",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-WhatsApp-Recruiter",
//     tabid: "AIWhatsAppRecruiter",
//     title: "AI WhatsApp Recruiter",
//     description:
//       "Our seamless automated workflow ensures smooth transitions throughout the entire recruitment journey, from initial candidate selection to onboarding productive employees.",
//     imageSrc: "/apps/ai-whatsapp-chatbot.png",
//     imageAlt: "AI WhatsApp Chatbot Illustration",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-SMS-Recruiter",
//     tabid: "AISMSRecruiter",
//     title: "AI SMS Recruiter",
//     description:
//       "AI messages new applicants instantly, checking skills and right-to-work info. If qualified, it texts a secure link for ID and document upload straight into your CRM 24/7, while you sleep.",
//     imageSrc: "/apps/ai_sms.png",
//     imageAlt: "AI SMS Recruiter",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-Client-Lead-Generation",
//     tabid: "AIClientLeadGeneration",
//     title: "AI Client Lead Generation",
//     description:
//       "Intelligently identifies new opportunities and rekindles old connections within your CRM. automatically. It sends content, messages, and meeting invites 24/7, warming leads so a human can focus on closing.",
//     imageSrc: "/apps/ai-client-lead-generation.png",
//     imageAlt: "AI Client Lead Generation",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-Candidate-Skill-Search",
//     tabid: "AICandidateSkillSearch",
//     title: "AI Candidate Skill Search",
//     description:
//       "AI scans your CRM to rediscover skilled candidates you already own. Reduce ad spend and time-to-hire with automated skill matching to job vacancy.",
//     imageSrc: "/apps/ai-ocr-skill-search.png",
//     imageAlt: "AI Candidate Skill Search",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-WhatsApp-Picture-to-CRM",
//     tabid: "AIWhatsAppPicturetoCRM",
//     title: "AI Verify Documents",
//     description:
//       "Underneath Send a Picture. Job Done. AI extracts ID and certificates automatically, and files them perfectly in your CRM.",
//     imageSrc: "/apps/AI_WhatsApp_Picture_to_CRM.jpg",
//     imageAlt: "AI Verify Documents Illustration",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-CV-Formatter",
//     tabid: "AICVFormatter",
//     title: "AI CV Formatter",
//     description:
//       "Automatically remove applicants' contact details, enhance wording for professionalism, and add your company logo. This enables consultants to send polished CVs to companies faster, increasing sales.",
//     imageSrc: "/apps/ai-cv-formatting.png",
//     imageAlt: "AI CV Formatting Illustration",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-GDPR-Compliance",
//     tabid: "AIGDPRCompliance",
//     title: "AI GDPR Compliance",
//     description:
//       "Achieve 100% GDPR compliance with our comprehensive data protection solution. Our AI works around the clock to automatically contact candidates and update your database in accordance with all current regulations.",
//     imageSrc: "/apps/ai-gdpr.png",
//     imageAlt: "AI GDPR Illustration",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   {
//     uid: "AI-AWR-Compliance",
//     tabid: "AIAWRCompliance",
//     title: "AI AWR Compliance",
//     description:
//       "Maintain complete Agency Workers Regulations compliance effortlessly. Our intelligent system proactively communicates with companies, ensuring your business remains fully compliant while reducing your administrative burden.",
//     imageSrc: "/apps/ai-awr.png",
//     imageAlt: "AI AWR Illustration",
//     buttonText1: "See More",
//     buttonText2: "Pricing",
//   },
//   // {
//   //   title: "AI Candidate Skill Search",
//   //   commingSoon: true,
//   //   imageSrc: "/apps/candidate_skill.webp",
//   //   imageAlt: "AI Candidate Skill Search Illustration",
//   //   buttonText1: "Pre-Order",
//   // },
//   // {
//   //   title: "AI Verify Documents",
//   //   commingSoon: true,
//   //   imageSrc: "/apps/ai_verifier.jpg",
//   //   imageAlt: "AI Verify Documents Illustration",
//   //   buttonText1: "Pre-Order",
//   // },
// ];

// export default ModulesSection;


import ModuleCard from "./module-card";

const ModulesSection = () => {
  return (
    <section className="relative my-16 overflow-hidden rounded-md px-4 py-12 md:px-8 lg:my-16 lg:px-16">
      {/* Background Video */}
      {/* <div className="absolute inset-0 z-0 h-full w-full"> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/AI_Video.mov" type="video/mp4" />
      </video>
      {/* Overlay to ensure text readability */}
      {/* <div className="absolute inset-0 bg-background/80"></div> */}
      {/* </div> */}

      <div className="relative z-10">
        <h2 className="mb-10 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">
          Transform Recruitment & HR. Supercharge Your Growth.
        </h2>
        <p className="mb-8 text-text">
          Our AI solutions cut costs, speed up hiring, streamline HR, and deliver 100% compliance—every time.
          From automated sourcing to real-time communication and advanced sales tech, we make your operations unstoppable.
          Win more clients. Fill roles faster. Scale beyond traditional recruitment and HR teams.
          Explore our modules below and place your order—future-ready starts here.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
};

const modules = [
  {
    uid: "AI-Phone-Call-Recruiter",
    tabid: "AIPhoneCall",
    title: "AI Phone Call",
    description:
      "When applicants don’t respond to WhatsApp, our AI automatically calls them, confirms their qualifications, and instantly sends a text to register if they’re eligible.",
    imageSrc: "/modules/image00001.png",
    imageAlt: "AI Telephone Call Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-WhatsApp-Recruiter",
    tabid: "AIWhatsAppRecruiter",
    title: "AI WhatsApp Recruiter",
    description:
      "Recruits 24/7 while you sleep. Our automated workflow streamlines the journey from candidate selection to onboarding — saving recruiters up to 50% of their time.",
    imageSrc: "/modules/image00002.png",
    imageAlt: "AI WhatsApp Chatbot Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-SMS-Recruiter",
    tabid: "AISMSRecruiter",
    title: "AI SMS Recruiter",
    description:
      "Instantly messages new applicants - Checks skills and right-to-work details - Sends a secure upload link if qualified - Documents flow straight into your CRM - Works 24/7 while you sleep.",
    imageSrc: "/modules/image00003.png",
    imageAlt: "AI SMS Recruiter",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-Client-Lead-Generation",
    tabid: "AIClientLeadGeneration",
    title: "AI Client Lead Generation",
    description:
      "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
    imageSrc: "/modules/image00004.png",
    imageAlt: "AI Client Lead Generation",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-BDM-Sales-Engine",
    tabid: "AIBDMSalesEngine",
    title: "AI BDM Sales Engine",
    description:
      "Automated BDM follow-ups every few weeks, fully synced to your CRM. AI checks client requirements at the right moment. New roles trigger instant job ads and meetings drop straight into your calendar. Your sales engine keeps working — even when you’re sleeping.",
    imageSrc: "/modules/image00005.png",
    imageAlt: "AI BDM Sales Engine",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-Candidate-Skill-Search",
    tabid: "AICandidateSkillSearch",
    title: "AI Candidate Skill Search",
    description:
      "AI scans your CRM to rediscover skilled candidates you already own. Reduce ad spend and time-to-hire with automated skill matching to job vacancy.",
    imageSrc: "/modules/image00006.png",
    imageAlt: "AI Candidate Skill Search",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-Verify-Documents",
    tabid: "AIVerifyDocuments",
    title: "AI Verify Documents",
    description:
      "Picture received: ID & Quals. AI automatically scans and extracts details. Verifies document accuracy and format. Files everything perfectly in your CRM. Fast, secure, and 24/7 automated.",
    imageSrc: "/modules/image00007.png",
    imageAlt: "AI Verify Documents Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-CV-Formatter",
    tabid: "AICVFormatter",
    title: "AI CV Formatter",
    description:
      "Automatically removes contact details. Enhances wording for professionalism. Adds your company logo and layout. Creates a consistent, branded format. Submit polished CVs fast.",
    imageSrc: "/modules/image00008.png",
    imageAlt: "AI CV Formatting Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-GDPR-Compliance",
    tabid: "AIGDPRCompliance",
    title: "AI GDPR Compliance",
    description:
      "Achieve 100% GDPR compliance effortlessly. AI automatically contacts candidates. Updates and cleans your CRM records. Ensures full data protection and accuracy. Works 24/7 to keep you compliant.",
    imageSrc: "/modules/image00009.png",
    imageAlt: "AI GDPR Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-AWR-Compliance",
    tabid: "AIAWRCompliance",
    title: "AI AWR Compliance (UK)",
    description:
      "Maintain complete Agency Workers Regulations compliance effortlessly. Our intelligent system proactively communicates with companies, ensuring your business.",
    imageSrc: "/modules/image00010.png",
    imageAlt: "AI AWR Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    title: "Module 11",
    InDevelopment: true,
    imageSrc: "/modules/image00011.png",
    imageAlt: "AI Candidate Skill Search Illustration",
    buttonText1: "Pre-Order",
  },
  {
    title: "Module 12",
    commingSoon: true,
    imageSrc: "/modules/image00012.png",
    imageAlt: "AI Verify Documents Illustration",
    buttonText1: "Pre-Order",
  },
];

export default ModulesSection;