import { FC } from "react";
import AppsHero from "@/components/(pages)/apps/apps-hero";
import AppsCard from "@/components/(pages)/apps/apps-card";

const AppsPage: FC = () => {
  return (
    <>
      <AppsHero />
      <div>
        <p className="mx-auto my-8 text-center text-2xl font-bold text-cyan-300 md:my-10 md:text-4xl">
          Choose the AI app that you want
          <br />
          to start with!
        </p>
        <div className="space-y-10">
          {appInfo.map((item) => (
            <AppsCard key={item.id} id={item.id} cardInfo={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const appInfo = [
  {
    id: "1",
    uid: "AI-Phone-Call-Recruiter",
    title: "AI Phone Call",
    description:
      "When applicants don’t respond to WhatsApp, our AI automatically calls them, confirms their qualifications, and instantly sends a text to register if they’re eligible.",
    image: "/modules/rsz_image00001.png",
  },
  {
    id: "2",
    uid: "AI-WhatsApp-Recruiter",
    title: "AI WhatsApp Recruiter",
    description:
      "Recruits 24/7 while you sleep. Our automated workflow streamlines the journey from candidate selection to onboarding — saving recruiters up to 50% of their time.",
    image: "/modules/rsz_image00002.png",
  },
  {
    id: "3",
    uid: "AI-SMS-Recruiter",
    title: "AI SMS Recruiter",
    description:
      "Instantly messages new applicants - Checks skills and right-to-work details - Sends a secure upload link if qualified - Documents flow straight into your CRM - Works 24/7 while you sleep.",
    image: "/modules/rsz_image00003.png",
  },
  {
    id: "4",
    uid: "AI-Client-Lead-Generation",
    title: "AI Client Lead Generation",
    description:
      "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
    image: "/modules/rsz_image00004.png",
  },
  {
    id: "5",
    uid: "AI-BDM-Sales-Engine",
    title: "AI BDM Sales Engine",
    description:
      "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
    image: "/modules/rsz_image00005.png",
  },
  {
    id: "6",
    uid: "AI-Candidate-Skill-Search",
    title: "AI Candidate Skill Search",
    description:
      "AI scans your CRM to rediscover skilled candidates you already own. Reduce ad spend and time-to-hire with automated skill matching to job vacancy.",
    image: "/modules/rsz_image00006.png",
  },
  {
    id: "7",
    uid: "AI-Verify-Documents",
    title: "Verify Documents",
    description:
      "Picture received: ID & Quals. AI automatically scans and extracts details. Verifies document accuracy and format. Files everything perfectly in your CRM. Fast, secure, and 24/7 automated.",
    image: "/modules/rsz_image00007.png",
  },
  {
    id: "8",
    uid: "AI-CV-Formatter",
    title: "AI CV Formatter",
    description:
      "Automatically removes contact details. Enhances wording for professionalism. Adds your company logo and layout. Creates a consistent, branded format. Submit polished CVs fast.",
    image: "/modules/rsz_image00008.png",
  },
  {
    id: "9",
    uid: "AI-GDPR-Compliance",
    title: "AI GDPR Compliance",
    description:
      "Achieve 100% GDPR compliance effortlessly. AI automatically contacts candidates. Updates and cleans your CRM records. Ensures full data protection and accuracy. Works 24/7 to keep you compliant.",
    image: "/modules/rsz_image00009.png",
  },
  {
    id: "10",
    uid: "AI-AWR-Compliance",
    title: "AI AWR Compliance (UK)",
    description:
      "Maintain complete Agency Workers Regulations compliance effortlessly. Our intelligent system proactively communicates with companies, ensuring your business.",
    image: "/modules/rsz_image00010.png",
  },
];

export default AppsPage;
