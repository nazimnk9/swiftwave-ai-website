"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Create a client component that uses useSearchParams
function TabSelector({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) {
  const searchParams = useSearchParams();
  const validTabs = Object.keys(tabData);

  // Update activeTab when the query parameter changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams, validTabs, setActiveTab]);

  return null; // This component just handles the params, doesn't render anything
}

export default function PricingPage() {
  const validTabs = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState<string>(validTabs[0]);
  const router = useRouter();

  // Function to handle tab changes - updates both state and URL
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/pricing?tab=${tab}`);
  };

  return (
    <div className="my-2 flex min-h-screen w-full items-start justify-center px-1 py-4 text-text sm:my-4 md:my-6 lg:my-12 lg:px-2 lg:py-8">
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <TabSelector setActiveTab={setActiveTab} />
      </Suspense>

      <div className="w-full max-w-7xl">
        <h1 className="mb-3 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:mb-6 lg:text-5xl">
          Straightforward Plans. Powerful Results
        </h1>
        <p className="mx-auto mb-6 max-w-2xl px-2 text-center text-sm opacity-60 sm:mb-8 sm:text-base lg:mb-[50px]">
          Whether you&apos;re just starting out or scaling to millions of
          WhatsApp messages, we offer flexible plans tailored to your needs—so
          you can focus on impact, not complexity.
        </p>

        <div className="mb-4 px-2 sm:px-0 lg:mb-8">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 lg:px-2 ${activeTab === tab
                    ? "primary-button text-black shadow-lg"
                    : "bg-primary/20 hover:bg-primary/30"
                  }`}
              >
                {tab
                  .replace(/AI|WhatsApp|Whatsapp/g, " $& ")
                  .replace(
                    /([A-Z][a-z]+|[A-Z]{2,}(?=[A-Z][a-z]|\d|\W|$))/g,
                    " $1",
                  )
                  .replace(/Whats App/g, "WhatsApp")
                  .trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-primary/5 p-4 shadow-xl sm:p-6 lg:rounded-2xl lg:p-8 lg:shadow-2xl">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:mb-6">
              {tabData[activeTab].title}
            </h2>
            <p className="mb-6 text-base opacity-80 lg:mb-8 lg:text-lg">
              {tabData[activeTab].description}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tabData[activeTab].plans.map((plan, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-primary/10 p-6 transition-all duration-300 hover:bg-primary/20 sm:rounded-xl sm:p-8"
                >
                  <h3 className="mb-4 text-lg font-semibold sm:text-xl">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-xl font-bold sm:text-2xl">
                    {plan.price}
                  </p>
                  <p className="mb-4 text-xs sm:text-sm">{plan.limit}</p>
                  <p className="mb-6 text-xs opacity-70 sm:mb-8 sm:text-sm">
                    {plan.description}
                  </p>
                  {plan.features && (
                    <ul className="mb-6 space-y-3 text-xs opacity-80 sm:mb-8 sm:space-y-4 sm:text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  )}
                  {plan.cta && (
                    <a
                      href="#"
                      className="primary-button inline-block rounded-lg px-4 py-2 text-sm text-black transition hover:bg-primary sm:px-6 sm:py-3"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Plan {
  name: string;
  price: string;
  limit?: string;
  description: string;
  features?: string[];
  cta?: string;
}

interface TabData {
  [key: string]: {
    title: string;
    description: string;
    plans: Plan[];
  };
}

const tabData: TabData = {
  AIPhoneCall: {
    title: "AI Phone Call",
    description:
      "Automate phone call recruitment interviews with AI-driven workflows.",
    plans: [
      {
        name: "Starter",
        price: "$199/Month",
        limit: "200 Phone Call Recruit Interviews",
        description:
          "For individuals or small teams just getting started with WhatsApp messaging.",
        features: [
          "AI sends automated Phone call to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated Phone call interview process",
          "Pre-application link sent to successful applicants through phone sms",
          "Change Job Application status automatically based on Interview result.",
          "Attached ID & qualifications go straight to your CRM",
          "Option to integrate with AI CV Formatter – saving up to 70% of recruiter admin time",
        ],
      },
      {
        name: "Growth",
        price: "$299/Month",
        limit: "350 Phone Call Recruit Interviews",
        description:
          "Ideal for growing businesses that need more messaging power and automation features.",
        features: [
          "All the features of Starter package, with more interviews",
          "Connect your own Elevenlabs API, and your custom Voice ID from Elevenlabs",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AIWhatsAppRecruiter: {
    title: "AI WhatsApp Recruiter",
    description:
      "Automate WhatsApp-based recruitment interviews with AI-driven workflows.",
    plans: [
      {
        name: "Starter",
        price: "$99/Month",
        limit: "120 WhatsApp Recruit Interviews",
        description:
          "For individuals or small teams just getting started with WhatsApp messaging.",
        features: [
          "AI sends automated WhatsApp messages to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated WhatsApp interview process",
          "Pre-application link sent to successful applicants",
          "Change Job Application status automatically based on Interview result.",
          "Attached ID & qualifications go straight to your CRM",
          "Option to integrate with AI CV Formatter – saving up to 70% of recruiter admin time",
        ],
      },
      {
        name: "Growth",
        price: "$199/Month",
        limit: "250 WhatsApp Recruit Interviews",
        description:
          "Ideal for growing businesses that need more messaging power and automation features.",
        features: ["All the features of Starter package, with more interviews"],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },
  AISMSRecruiter: {
    title: "AI SMS Recruiter",
    description:
      "Instantly messages new applicants - Checks skills and right-to-work details - Sends a secure upload link if qualified - Documents flow straight into your CRM - Works 24/7 while you sleep.",
    plans: [
      {
        name: "Starter",
        price: "$99/Month",
        limit: "120 SMS Recruit Interviews",
        description:
          "For individuals or small teams just getting started with SMS messaging.",
        features: [
          "AI sends automated SMS messages to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated SMS interview process",
          "Pre-application link sent to successful applicants",
          "Change Job Application status automatically based on Interview result.",
          "Attached ID & qualifications go straight to your CRM",
          "Option to integrate with AI CV Formatter – saving up to 70% of recruiter admin time",
        ],
      },
      {
        name: "Growth",
        price: "$199/Month",
        limit: "250 SMS Recruit Interviews",
        description:
          "Ideal for growing businesses that need more messaging power and automation features.",
        features: ["All the features of Starter package, with more interviews"],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },
  AIClientLeadGeneration: {
    title: "AI CV Lead Generator",
    description:
      "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
    plans: [
      {
        name: "Starter",
        price: "$99/Month",
        limit: "120 Successful Leads generation",
        description:
          "For individuals or small teams just getting started with Client Lead Generation module",
        features: [
          "Scan candidates & CVs inside JobAdder automatically",
          "Detect new company names and hiring signals from CVs",
          "Extract company clues and references from candidate profiles",
          "Enrich discovered companies with public business info (industry, size, location, website)",
          "Find decision-maker contacts from CV context and public sources",
          "Smart deduplication against existing CRM companies/leads",
          "Auto-create leads/accounts in your Business CRM with notes",
          "Lead relevance scoring to prioritize best prospects",
          "CSV/JSON export of generated company & contact lists",
          "Full audit trail for every discovered lead",
        ],
      },

      {
        name: "Growth",
        price: "$199/Month",
        limit: "250 Successful Leads generation",
        description:
          "Ideal for growing businesses that need more client data and automation features.",
        features: ["All the features of Starter package, with more interviews"],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },
  AIBDMSalesEngine: {
    title: "AI BDM Sales engine",
    description:
      "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
    plans: [
      {
        name: "Starter",
        price: "$99/Month",
        limit: "120 Client Outreach Conversations / Month",
        description:
          "For individuals or small teams getting started with AI-driven WhatsApp client outreach.",
        features: [
          "Sync companies & client contacts from Business CRM (e.g., JobAdder)",
          "Weekly WhatsApp follow-ups to selected client lists",
          "AI chatbot asks for new job requirements automatically",
          "Captures core job details: role, headcount, location, start date, budget",
          "Smart follow-up questions to complete missing info",
          "Creates structured job brief from chat responses",
          "Auto-create new Job in Business CRM after client confirmation",
          "Conversation history saved back to CRM with timestamps",
          "Basic outreach & response analytics dashboard",
        ],
      },
      {
        name: "Growth",
        price: "$199/Month",
        limit: "250 Client Outreach Conversations / Month",
        description:
          "Ideal for growing teams needing higher volume and smarter automation.",
        features: [
          "All Starter features, with more outreach volume",
          "Multi-day cadence options (different follow-up days per segment)",
          "Advanced job brief builder (custom fields + validation rules)",
          "Client segmentation by industry, priority, or last-activity",
          "Auto-reminders & second-touch follow-ups for non-responders",
          "Lead/opportunity tagging in CRM based on conversation signals",
          "Team inbox & handoff to human BDM when needed",
          "Exportable reports (CSV/JSON) for performance tracking",
        ],
      },

      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },
  AICandidateSkillSearch: {
    title: "AI Candidate Skill Search",
    description:
      "AI scans your CRM to rediscover skilled candidates you already own. Reduce ad spend and time-to-hire with automated skill matching to job vacancy.",
    plans: [
      {
        name: "Starter",
        price: "$99/Month",
        limit: "120 Job-to-Candidate Matches / Month",
        description:
          "For individuals or small teams starting with automated candidate rediscovery.",
        features: [
          "Sync job ads and candidates from Business CRM (e.g., JobAdder)",
          "Auto-extract required skills and job location from each job ad",
          "Shortlist candidates within 20 km radius of job location",
          "Filter candidates by selected CRM statuses (Active, Checking, etc.)",
          "Skill cross-match using profile skill sets when available",
          "CV scanning to generate skills list when profile skills are missing",
          "Confidence-based match scoring with skills breakdown",
          "WhatsApp chatbot outreach to matched candidates",
          "Auto-apply interested candidates to the job in CRM",
          "Conversation logs and application notes synced back to CRM",
        ],
      },
      {
        name: "Growth",
        price: "$199/Month",
        limit: "250 Job-to-Candidate Matches / Month",
        description:
          "Ideal for growing teams needing higher matching volume and smarter targeting.",
        features: [
          "All Starter features, with more matching volume",
          "Custom radius rules per job or location",
          "Advanced skill weighting (must-have vs nice-to-have)",
          "Multi-location job support with nearest-candidate logic",
          "Auto follow-ups for non-responding candidates",
          "Candidate ranking shortlist view by match score",
          "Analytics: matches per job, response rate, applications created",
          "CSV/JSON exports for reporting",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },
  VerifyDocuments: {
    title: "Verify Documents",
    description:
      "Picture received: ID & Quals. AI automatically scans and extracts details. Verifies document accuracy and format. Files everything perfectly in your CRM. Fast, secure, and 24/7 automated.",
    plans: [
      {
        name: "Starter",
        price: "$99/Month",
        limit: "120 WhatsApp Recruit Interviews",
        description:
          "For individuals or small teams just getting started with WhatsApp messaging.",
        features: [
          "AI sends automated WhatsApp messages to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated WhatsApp interview process",
          "Pre-application link sent to successful applicants",
          "Change Job Application status automatically based on Interview result.",
          "Attached ID & qualifications go straight to your CRM",
          "Option to integrate with AI CV Formatter – saving up to 70% of recruiter admin time",
        ],
      },
      {
        name: "Growth",
        price: "$199/Month",
        limit: "250 WhatsApp Recruit Interviews",
        description:
          "Ideal for growing businesses that need more messaging power and automation features.",
        features: ["All the features of Starter package, with more interviews"],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AICVFormatter: {
    title: "AI CV Formatter",
    description:
      "Automatically removes contact details. Enhances wording for professionalism. Adds your company logo and layout. Creates a consistent, branded format. Submit polished CVs fast.",
    plans: [
      {
        name: "Starter",
        price: "$49/Month",
        limit: "120 formatted CVs",
        description:
          "For individuals or small teams just getting started with CV formatting.",
        features: [
          "Format CV with powerful AI models",
          "Gather necessary information which you need to see first",
          "Clear out extra things from CVs and give you what you need to know",
        ],
      },
      {
        name: "Growth",
        price: "$99/Month",
        limit: "250 formatted CVs",
        description:
          "Ideal for growing businesses that need more formatting power and advanced features.",
        features: [
          "Format CV with powerful AI models",
          "Gather necessary information which you need to see first",
          "Clear out extra things from CVs and give you what you need to know",
          "Mark or unmark information points to include or exclude in the CV",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AIGDPRCompliance: {
    title: "AI GDPR Compliance",
    description: "Achieve 100% GDPR compliance effortlessly. AI automatically contacts candidates. Updates and cleans your CRM records. Ensures full data protection and accuracy. Works 24/7 to keep you compliant.",
    plans: [
      {
        name: "Starter",
        price: "$49/Month",
        limit: "200 GDPR Compliance Cases",
        description:
          "For individuals or small teams just getting started with GDPR compliance.",
        features: [
          "Send compliant consent requests via email",
          "Capture YES/NO replies instantly",
          "Maintain an immutable audit trail",
          "Sync consent status with JobAdder records",
        ],
      },
      {
        name: "Growth",
        price: "$99/Month",
        limit: "500 GDPR Compliance Cases",
        description:
          "Ideal for growing businesses that need more compliance management features.",
        features: [
          "All the features of Starter package, with more cases",
          "Automated follow-ups for non-responders or unclear replies",
          "Multi-domain sending with branded templates",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AIAWRCompliance: {
    title: "AI AWR Compliance (UK)",
    description: "Maintain complete Agency Workers Regulations compliance effortlessly. Our intelligent system proactively communicates with companies, ensuring your business.",
    plans: [
      {
        name: "Starter",
        price: "$49/Month",
        limit: "200 AWR Compliance Cases",
        description:
          "For individuals or small teams just getting started with AWR compliance.",
        features: [
          "Automatic tracking of qualifying periods",
          "Proactive alerts for upcoming compliance deadlines",
          "Sync AWR status with JobAdder records",
          "Immutable audit trail for compliance",
        ],
      },
      {
        name: "Growth",
        price: "$99/Month",
        limit: "500 AWR Compliance Cases",
        description:
          "Ideal for growing businesses that need more compliance management features.",
        features: [
          "All the features of Starter package, with more cases",
          "Configurable AWR rules and alert thresholds",
          "Multi-brand placement tracking and reporting",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },
};
