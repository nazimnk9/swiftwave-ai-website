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
        <source src="/AI_Video.mp4" type="video/mp4" />
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
    imageSrc: "/modules/rsz_image00001.png",
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
    imageSrc: "/modules/rsz_image00002.png",
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
    imageSrc: "/modules/rsz_image00003.png",
    imageAlt: "AI SMS Recruiter",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-BDM-Sales-Engine",
    tabid: "AIBDMSalesEngine",
    title: "AI BDM Sales Engine",
    description:
      "Automated BDM follow-ups every few weeks, fully synced to your CRM. AI checks client requirements at the right moment. New roles trigger instant job ads and meetings drop straight into your calendar. Your sales engine keeps working — even when you’re sleeping.",
    imageSrc: "/modules/rsz_image00005.png",
    imageAlt: "AI BDM Sales Engine",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    title: "AI Client Opportunity",
    InDevelopment: true,
    imageSrc: "/modules/AI_Client_Opportunity.PNG",
    imageAlt: "AI Client Opportunity Illustration",
    buttonText1: "Pre-Order",
  },
  {
    uid: "AI-Client-Lead-Generation",
    tabid: "AIClientLeadGeneration",
    title: "AI CV Lead Generator",
    description:
      "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
    imageSrc: "/modules/rsz_image00004.png",
    imageAlt: "AI CV Lead Generator",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-Candidate-Skill-Search",
    tabid: "AICandidateSkillSearch",
    title: "AI Candidate Skill Search",
    description:
      "AI scans your CRM to rediscover skilled candidates you already own. Reduce ad spend and time-to-hire with automated skill matching to job vacancy.",
    imageSrc: "/modules/rsz_image00006.png",
    imageAlt: "AI Candidate Skill Search",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-Verify-Documents",
    tabid: "VerifyDocuments",
    title: "Verify Documents",
    description:
      "Picture received: ID & Quals. AI automatically scans and extracts details. Verifies document accuracy and format. Files everything perfectly in your CRM. Fast, secure, and 24/7 automated.",
    imageSrc: "/modules/rsz_image00007.png",
    imageAlt: "Verify Documents Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-CV-Formatter",
    tabid: "AICVFormatter",
    title: "AI CV Formatter",
    description:
      "Automatically removes contact details. Enhances wording for professionalism. Adds your company logo and layout. Creates a consistent, branded format. Submit polished CVs fast.",
    imageSrc: "/modules/rsz_image00008.png",
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
    imageSrc: "/modules/rsz_image00009.png",
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
    imageSrc: "/modules/rsz_image00010.png",
    imageAlt: "AI AWR Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  // {
  //   title: "Module 11",
  //   InDevelopment: true,
  //   imageSrc: "/modules/rsz_image00011.png",
  //   imageAlt: "AI Candidate Skill Search Illustration",
  //   buttonText1: "Pre-Order",
  // },
  {
    title: "Module 12",
    commingSoon: true,
    imageSrc: "/modules/rsz_image00012.png",
    imageAlt: "Verify Documents Illustration",
    buttonText1: "Pre-Order",
  },
];

export default ModulesSection;