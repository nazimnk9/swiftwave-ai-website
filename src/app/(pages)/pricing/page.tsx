// "use client";

// import { useState, useEffect, Suspense, useMemo } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// // Create a client component that uses useSearchParams
// function TabSelector({
//   setActiveTab,
// }: {
//   setActiveTab: (tab: string) => void;
// }) {
//   const searchParams = useSearchParams();
//   const validTabs = useMemo(() => Object.keys(tabData), []);

//   // Update activeTab when the query parameter changes
//   useEffect(() => {
//     const tab = searchParams.get("tab");
//     if (tab && validTabs.includes(tab)) {
//       setActiveTab(tab);
//     }
//   }, [searchParams, validTabs, setActiveTab]);

//   return null; // This component just handles the params, doesn't render anything
// }


// // Metallic Separator Components
// const GoldSeparator = () => (
//   <div className="my-4 mb-2 h-[2px] w-full" style={{
//     background: "linear-gradient(90deg, rgba(41, 38, 32, 0) 0%, rgba(77, 58, 21, 1) 20%, rgba(153, 143, 28, 1) 50%, rgba(78, 54, 5, 1) 80%, rgba(24, 17, 3, 0) 100%)",
//     boxShadow: "0 1px 4px rgba(252,246,186,0.3)"
//   }} />
// );

// const BlueSeparator = () => (
//   <div className="my-4 mb-2 h-[2px] w-full" style={{
//     background: "linear-gradient(90deg, rgba(0,255,255,0) 0%, rgba(34,211,238,1) 20%, rgba(200,250,255,1) 50%, rgba(34,211,238,1) 80%, rgba(0,255,255,0) 100%)",
//     boxShadow: "0 0 8px rgba(34,211,238,0.5)"
//   }} />
// );

// const EnterpriseSeparator = () => (
//   <div className="my-4 mb-2 h-[2px] w-full" style={{
//     background: "linear-gradient(90deg, rgba(139,69,19,0) 0%, rgba(160,82,45,1) 20%, rgba(255,214,170,1) 50%, rgba(160,82,45,1) 80%, rgba(139,69,19,0) 100%)",
//     boxShadow: "0 1px 4px rgba(255,214,170,0.4)"
//   }} />
// );

// export default function PricingPage() {
//   const validTabs = Object.keys(tabData);
//   const [activeTab, setActiveTab] = useState<string>(validTabs[0]);
//   const router = useRouter();

//   // Function to handle tab changes - updates both state and URL
//   const handleTabChange = (tab: string) => {
//     if (tab === activeTab) return;
//     setActiveTab(tab);
//     router.push(`/pricing?tab=${tab}`, { scroll: false });
//   };

//   return (
//     <div className="my-2 flex min-h-screen w-full items-start justify-center bg-black px-1 py-4 text-text sm:my-4 md:my-6 lg:my-12 lg:px-2 lg:py-8">
//       {/* Wrap the component using useSearchParams in Suspense */}
//       <Suspense fallback={null}>
//         <TabSelector setActiveTab={setActiveTab} />
//       </Suspense>

//       <div className="w-full max-w-7xl">
//         <h1 className="mb-3 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:mb-6 lg:text-5xl">
//           Straightforward Plans. Powerful Results
//         </h1>
//         <p className="mx-auto mb-6 max-w-2xl px-2 text-center text-sm text-gray-400 opacity-60 sm:mb-8 sm:text-base lg:mb-[50px]">
//           Whether you&apos;re just starting out or scaling to millions of
//           WhatsApp messages, we offer flexible plans tailored to your needs—so
//           you can focus on impact, not complexity.
//         </p>

//         <div className="mb-4 px-2 sm:px-0 lg:mb-8">
//           <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
//             {Object.keys(tabData).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => handleTabChange(tab)}
//                 className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 lg:px-2 ${activeTab === tab
//                   ? "primary-button text-black shadow-lg"
//                   : "bg-primary/20 hover:bg-primary/30"
//                   }`}
//               >
//                 {tab
//                   .replace(/AI|WhatsApp|Whatsapp/g, " $& ")
//                   .replace(
//                     /([A-Z][a-z]+|[A-Z]{2,}(?=[A-Z][a-z]|\d|\W|$))/g,
//                     " $1",
//                   )
//                   .replace(/Whats App/g, "WhatsApp")
//                   .trim()}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="rounded-xl bg-transparent p-4 sm:p-6 lg:rounded-2xl lg:p-8">
//           <div className="space-y-6 sm:space-y-8 lg:space-y-10">
//             <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl lg:mb-6">
//               {tabData[activeTab].title}
//             </h2>
//             <p className="mb-6 text-center text-base text-gray-300 opacity-80 lg:mb-8 lg:text-lg">
//               {tabData[activeTab].description}
//             </p>

//             <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-8">
//               {tabData[activeTab].plans.map((plan, index) => {
//                 // Determine card style based on plan name
//                 const isEntrepreneur = plan.name === "Entrepreneur";
//                 const isEnterprise = plan.name === "Enterprise";

//                 return (
//                   <div
//                     key={index}
//                     className={`relative flex w-full max-w-md flex-col overflow-hidden rounded-xl border-[6px] p-6 transition-transform duration-300 lg:w-1/3 ${isEntrepreneur
//                       ? "border-cyan-400 text-white shadow-[0_0_30px_rgba(255,255,255,0.6),inset_0_0_20px_rgba(34,211,238,0.2)] ring-1 ring-cyan-300 hover:scale-105 hover:!shadow-[0_0_60px_rgba(255,255,255,0.9),inset_0_0_30px_rgba(34,211,238,0.6),0_50px_50px_-20px_rgba(0,50,150,1)]"
//                       : "border-[#dcb56d] text-black shadow-[0_0_20px_rgba(255,255,255,0.5),inset_0_0_20px_rgba(100,70,20,0.4)] ring-1 ring-[#fcf6ba]/60 hover:scale-105 hover:!shadow-[0_0_50px_rgba(255,255,255,0.8),inset_0_0_30px_rgba(255,215,0,0.4),0_50px_50px_-20px_rgba(120,90,20,1)]"
//                       }`}
//                     style={{
//                       background: isEntrepreneur
//                         ? "radial-gradient(140% 140% at 50% 10%, #00152e 30%, #003a61 60%, #005f9e 100%)"
//                         : "linear-gradient(180deg, #9e7f29 0%, #f1c64eff 25%, #9e7f29 50%, #9b7411ff 75%, #9e7f29 100%)",
//                       boxShadow: isEntrepreneur
//                         ? "0 30px 40px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(0, 150, 255, 0.2), 0 50px 50px -20px rgba(0, 50, 150, 0.9)"
//                         : "0 30px 30px rgba(255,255,255,0.3), inset 0 0 60px rgba(0,0,0,0.5), 0 50px 50px -20px rgba(120, 90, 20, 0.9)"
//                     }}
//                   >
//                     {/* {
//                       isEntrepreneur && (
//                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-cyan-500 bg-[#001e3c] px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]">
//                           Most Popular
//                         </div>
//                       )
//                     } */}

//                     <div className="mb-4 text-center">
//                       <h2 className={`text-3xl font-bold tracking-wide ${isEntrepreneur ? "text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "text-[#3f2a10] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]"} ${isEnterprise ? "text-[#5c401a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)" : ""}`}>
//                         {plan.name}
//                       </h2>
//                       <p className={`mt-2 text-sm font-medium ${isEntrepreneur ? "text-cyan-100/90" : "text-[#5c401a]"}`}>
//                         {plan.description}
//                       </p>
//                     </div>

//                     {/* Separator 1 */}
//                     {isEntrepreneur ? <BlueSeparator /> : isEnterprise ? <EnterpriseSeparator /> : <GoldSeparator />}

//                     <div className={`mb-2 pb-2 text-center`}>
//                       <span className={`text-4xl font-extrabold ${isEntrepreneur ? "text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" : isEnterprise ? "bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-[#9e7f29] drop-shadow-sm" : "text-[#2b1c07] drop-shadow-sm"}`}>
//                         {plan.price}
//                       </span>
//                       {plan.price.includes("month") && (
//                         <span className={`text-lg font-medium ${isEntrepreneur ? "text-cyan-100/80" : "text-[#5c401a]"}`}>
//                         </span>
//                       )}
//                       {!plan.cta ? (
//                         <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${isEntrepreneur ? "text-cyan-400" : "text-[#785525]"}`}>
//                           + usage fees
//                         </p>
//                       ) : (
//                         <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${isEntrepreneur ? "text-cyan-400" : "text-[#785525]"}`}>
//                           Custom Solutions
//                         </p>
//                       )}
//                     </div>

//                     {/* Separator 2 */}
//                     {isEntrepreneur ? <BlueSeparator /> : isEnterprise ? <EnterpriseSeparator /> : <GoldSeparator />}

//                     <div className="mb-8 text-left">
//                       {plan.features?.map((feature, i) => (
//                         <div key={i}>
//                           <div className={`flex items-center text-sm ${isEntrepreneur ? "font-medium text-cyan-100" : "font-bold text-[#3f2a10]"}`}>
//                             <span className={`mr-3 flex items-center justify-center text-lg ${isEntrepreneur
//                               ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
//                               : "text-[#5c401a] drop-shadow-sm"
//                               }`}>
//                               ●
//                             </span>
//                             {feature}
//                           </div>
//                           {i < (plan.features?.length || 0) - 1 && (
//                             isEntrepreneur ? <BlueSeparator /> : isEnterprise ? <EnterpriseSeparator /> : <GoldSeparator />
//                           )}
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mt-auto">
//                       <button className={`w-full rounded-lg py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isEntrepreneur
//                         ? "border border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.5),inset_0_0_10px_rgba(34,211,238,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.8),inset_0_0_20px_rgba(34,211,238,0.6)]"
//                         : isEnterprise
//                           ? "text-[#5c401a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_0_2px_#fcf6ba,0_0_20px_rgba(184,140,52,0.6),0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.8)]"
//                           : "text-[#2b1c07] shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_0_2px_#fcf6ba,0_0_20px_rgba(184,140,52,0.6),0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.8)]"
//                         }`}
//                         style={{
//                           background: isEntrepreneur
//                             ? "linear-gradient(180deg, rgba(14,165,233,0.2) 0%, rgba(3,105,161,0.6) 100%)"
//                             : "linear-gradient(180deg, #b88a44 0%, #e8d085 20%, #ffd78a 50%, #b88a44 100%)",
//                           textShadow: isEntrepreneur ? "0 0 10px rgba(56,189,248,0.8)" : "0 1px 0 rgba(255,255,255,0.4)"
//                         }}
//                       >
//                         {plan.cta || "Get Started"}
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// }

// interface Plan {
//   name: string;
//   price: string;
//   limit?: string;
//   description: string;
//   features?: string[];
//   cta?: string;
// }

// interface TabData {
//   [key: string]: {
//     title: string;
//     description: string;
//     plans: Plan[];
//   };
// }

// const tabData: TabData = {
//   AIPhoneCall: {
//     title: "AI Phone Call",
//     description:
//       "Automate phone call recruitment interviews with AI-driven workflows.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£199 / month",
//         description: "For small teams getting started.",
//         features: [
//           "AI sends automated Phone call to job applicants",
//           "Interview questions generated instantly from your job ad",
//           "Fully automated Phone call interview process",
//           "Pre-application link sent to successful applicants through phone sms",
//           "Change Job Application status automatically based on Interview result.",
//           "Attached ID & qualifications go straight to your CRM",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£599 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All the features of Starter package, with more interviews",
//           "Connect your own Elevenlabs API, and your custom Voice ID from Elevenlabs",
//           "Message Limits: 350",
//           "Team Workflows",
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },
//   AIWhatsAppRecruiter: {
//     title: "AI WhatsApp Recruiter",
//     description:
//       "Automate WhatsApp-based recruitment interviews with AI-driven workflows.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£99 / month",
//         description: "For small teams getting started.",
//         features: [
//           "AI sends automated WhatsApp messages to job applicants",
//           "Interview questions generated instantly from your job ad",
//           "Fully automated WhatsApp interview process",
//           "Pre-application link sent to successful applicants",
//           "Change Job Application status automatically based on Interview result.",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£199 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All the features of Starter package, with more interviews",
//           "Job Match Analytics",
//           "Client Lead Generator",
//           "Team Workflows"
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },
//   AISMSRecruiter: {
//     title: "AI SMS Recruiter",
//     description:
//       "Instantly messages new applicants - Checks skills and right-to-work details - Sends a secure upload link if qualified - Documents flow straight into your CRM - Works 24/7 while you sleep.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£99 / month",
//         description: "For small teams getting started.",
//         features: [
//           "AI sends automated SMS messages to job applicants",
//           "Interview questions generated instantly from your job ad",
//           "Fully automated SMS interview process",
//           "Pre-application link sent to successful applicants",
//           "Change Job Application status automatically based on Interview result.",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£199 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All the features of Starter package, with more interviews",
//           "Job Match Analytics",
//           "Client Lead Generator",
//           "Team Workflows"
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },
//   AIClientLeadGeneration: {
//     title: "AI CV Lead Generator",
//     description:
//       "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£99 / month",
//         description: "For small teams getting started.",
//         features: [
//           "Scan candidates & CVs inside JobAdder automatically",
//           "Detect new company names and hiring signals from CVs",
//           "Extract company clues and references",
//           "Enrich discovered companies with public business info",
//           "Find decision-maker contacts from CV context",
//         ],
//       },

//       {
//         name: "Entrepreneur",
//         price: "£199 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All the features of Starter package",
//           "Lead relevance scoring to prioritize best prospects",
//           "CSV/JSON export of generated company & contact lists",
//           "Full audit trail for every discovered lead",
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },
//   AIBDMSalesEngine: {
//     title: "AI BDM Sales engine",
//     description:
//       "Intelligently identifies new opportunities. Rekindles old connections within your CRM. Sends personalised content and messages. Automatically schedules meeting invites. Warms leads 24/7 while you sleep.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£99 / month",
//         description: "For small teams getting started.",
//         features: [
//           "Sync companies & client contacts from Business CRM",
//           "Weekly WhatsApp follow-ups to selected client lists",
//           "AI chatbot asks for new job requirements automatically",
//           "Captures core job details",
//           "Smart follow-up questions",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£199 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All Starter features, with more outreach volume",
//           "Multi-day cadence options",
//           "Advanced job brief builder",
//           "Client segmentation by industry, priority",
//           "Auto-reminders & second-touch follow-ups",
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },
//   AICandidateSkillSearch: {
//     title: "AI Candidate Skill Search",
//     description:
//       "AI scans your CRM to rediscover skilled candidates you already own. Reduce ad spend and time-to-hire with automated skill matching to job vacancy.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£99 / month",
//         description: "For small teams getting started.",
//         features: [
//           "Sync job ads and candidates from Business CRM",
//           "Auto-extract required skills and job location",
//           "Shortlist candidates within 20 km radius",
//           "Filter candidates by selected CRM statuses",
//           "Skill cross-match using profile skill sets",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£199 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All Starter features, with more matching volume",
//           "Custom radius rules per job or location",
//           "Advanced skill weighting",
//           "Multi-location job support",
//           "Auto follow-ups for non-responding candidates",
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },
//   VerifyDocuments: {
//     title: "Verify Documents",
//     description:
//       "Picture received: ID & Quals. AI automatically scans and extracts details. Verifies document accuracy and format. Files everything perfectly in your CRM. Fast, secure, and 24/7 automated.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£99 / month",
//         description: "For small teams getting started.",
//         features: [
//           "AI scans and verifies documents automatically",
//           "Checks for expiry dates and valid formats",
//           "Extracts key data fields (Name, DOB, etc.)",
//           "Files documents to correct candidate record",
//           "Alerts recruiter on failed verifications",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£199 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All Starter features + higher volume",
//           "Multi-document support (Passport, Visa, License)",
//           "Enhanced fraud detection",
//           "Bulk upload & verification"
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },

//   AICVFormatter: {
//     title: "AI CV Formatter",
//     description:
//       "Automatically removes contact details. Enhances wording for professionalism. Adds your company logo and layout. Creates a consistent, branded format. Submit polished CVs fast.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£49 / month",
//         description: "For small teams getting started.",
//         features: [
//           "Format CV with powerful AI models",
//           "Gather necessary information which you need to see first",
//           "Clear out extra things from CVs",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£99 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "Format CV with powerful AI models",
//           "Clear out extra things from CVs",
//           "Mark or unmark information points to include or exclude",
//           "Custom branding options"
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },

//   AIGDPRCompliance: {
//     title: "AI GDPR Compliance",
//     description: "Achieve 100% GDPR compliance effortlessly. AI automatically contacts candidates. Updates and cleans your CRM records. Ensures full data protection and accuracy. Works 24/7 to keep you compliant.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£49 / month",
//         description: "For small teams getting started.",
//         features: [
//           "Send compliant consent requests via email",
//           "Capture YES/NO replies instantly",
//           "Maintain an immutable audit trail",
//           "Sync consent status with JobAdder",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£99 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All the features of Starter package",
//           "Automated follow-ups for non-responders",
//           "Multi-domain sending with branded templates",
//           "Bulk compliance campaigns"
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },

//   AIAWRCompliance: {
//     title: "AI AWR Compliance (UK)",
//     description: "Maintain complete Agency Workers Regulations compliance effortlessly. Our intelligent system proactively communicates with companies, ensuring your business.",
//     plans: [
//       {
//         name: "Starter",
//         price: "£49 / month",
//         description: "For small teams getting started.",
//         features: [
//           "Automatic tracking of qualifying periods",
//           "Proactive alerts for upcoming compliance deadlines",
//           "Sync AWR status with JobAdder records",
//           "Immutable audit trail for compliance",
//         ],
//       },
//       {
//         name: "Entrepreneur",
//         price: "£99 / month",
//         description: "For growing agencies & teams",
//         features: [
//           "All the features of Starter package",
//           "Configurable AWR rules and alert thresholds",
//           "Multi-brand placement tracking and reporting",
//           "Advanced reporting dashboard"
//         ],
//       },
//       {
//         name: "Enterprise",
//         price: "£1,500+ / month",
//         cta: "Contact Us",
//         description: "For large scale operations.",
//         features: [
//           "Advanced Compliance",
//           "API & CRM Integration",
//           "Dedicated Support",
//           "SLA & SSO",
//         ],
//       },
//     ],
//   },
// };

"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Create a client component that uses useSearchParams
function TabSelector({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) {
  const searchParams = useSearchParams();
  const validTabs = useMemo(() => Object.keys(tabData), []);

  // Update activeTab when the query parameter changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams, validTabs, setActiveTab]);

  return null; // This component just handles the params, doesn't render anything
}


// Metallic Separator Components
const GoldSeparator = () => (
  <div className="my-4 mb-2 h-[2px] w-full" style={{
    background: "linear-gradient(90deg, rgba(41, 38, 32, 0) 0%, rgba(77, 58, 21, 1) 20%, rgba(153, 143, 28, 1) 50%, rgba(78, 54, 5, 1) 80%, rgba(24, 17, 3, 0) 100%)",
    boxShadow: "0 1px 4px rgba(252,246,186,0.3)"
  }} />
);

const BlueSeparator = () => (
  <div className="my-4 mb-2 h-[2px] w-full" style={{
    background: "linear-gradient(90deg, rgba(0,255,255,0) 0%, rgba(34,211,238,1) 20%, rgba(200,250,255,1) 50%, rgba(34,211,238,1) 80%, rgba(0,255,255,0) 100%)",
    boxShadow: "0 0 8px rgba(34,211,238,0.5)"
  }} />
);

const EnterpriseSeparator = () => (
  <div className="my-4 mb-2 h-[2px] w-full" style={{
    background: "linear-gradient(90deg, rgba(139,69,19,0) 0%, rgba(160,82,45,1) 20%, rgba(255,214,170,1) 50%, rgba(160,82,45,1) 80%, rgba(139,69,19,0) 100%)",
    boxShadow: "0 1px 4px rgba(255,214,170,0.4)"
  }} />
);

export default function PricingPage() {
  const validTabs = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState<string>(validTabs[0]);
  const router = useRouter();

  // Function to handle tab changes - updates both state and URL
  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    router.push(`/pricing?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="my-2 flex min-h-screen w-full items-start justify-center bg-black px-1 py-4 text-text sm:my-4 md:my-6 lg:my-12 lg:px-2 lg:py-8">
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <TabSelector setActiveTab={setActiveTab} />
      </Suspense>

      <div className="w-full max-w-7xl">
        <h1 className="mb-3 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:mb-6 lg:text-5xl">
          Straightforward Plans. Powerful Results
        </h1>
        <p className="mx-auto mb-6 max-w-2xl px-2 text-center text-sm text-gray-400 opacity-60 sm:mb-8 sm:text-base lg:mb-[50px]">
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

        <div className="rounded-xl bg-transparent p-4 sm:p-6 lg:rounded-2xl lg:p-8">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl lg:mb-6">
              {tabData[activeTab].title}
            </h2>
            <p className="mb-6 text-center text-base text-gray-300 opacity-80 lg:mb-8 lg:text-lg">
              {tabData[activeTab].description}
            </p>

            <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-8">
              {tabData[activeTab].plans.map((plan, index) => {
                // Determine card style based on plan name
                const isEntrepreneur = plan.name === "Entrepreneur";
                const isEnterprise = plan.name === "Enterprise";

                return (
                  <div
                    key={index}
                    className={`relative flex w-full max-w-md flex-col overflow-hidden rounded-[18px] border-[6px] p-6 transition-all duration-300 lg:w-1/3 ${isEntrepreneur
                      ? "border-cyan-400 text-white shadow-[0_0_30px_rgba(255,255,255,0.6),inset_0_0_20px_rgba(34,211,238,0.2)] ring-1 ring-cyan-300 hover:scale-105 hover:!shadow-[0_0_60px_rgba(255,255,255,0.9),inset_0_0_30px_rgba(34,211,238,0.6),0_50px_50px_-20px_rgba(0,50,150,1)]"
                      : "border-[#dcb56d] text-black shadow-[0_0_20px_rgba(255,255,255,0.5),inset_0_0_20px_rgba(100,70,20,0.4)] ring-1 ring-[#fcf6ba]/60 hover:scale-105 hover:!shadow-[0_0_50px_rgba(255,255,255,0.8),inset_0_0_30px_rgba(255,215,0,0.4),0_50px_50px_-20px_rgba(120,90,20,1)]"
                      }`}
                    style={{
                      background: isEntrepreneur
                        ? "radial-gradient(140% 140% at 50% 10%, #00152e 30%, #003a61 60%, #005f9e 100%)"
                        : "linear-gradient(180deg, rgba(138,107,63,0.98) 100%, rgba(176,141,87,0.92) 35%, rgba(138,107,63,0.98) 100%)",
                      // boxShadow: isEntrepreneur
                      //   ? "0 0 40px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(0, 150, 255, 0.2), 0 50px 50px -20px rgba(0, 50, 150, 0.9)"
                      //   : "0 10px 30px rgba(0,0,0,0.35), 0 50px 50px -20px rgba(120, 90, 20, 0.9)"
                      boxShadow: isEntrepreneur
                        ? "0 30px 40px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(0, 150, 255, 0.2), 0 50px 50px -20px rgba(0, 50, 150, 0.9)"
                        : "0 30px 30px rgba(255,255,255,0.3), inset 0 0 60px rgba(0,0,0,0.5), 0 50px 50px -20px rgba(120, 90, 20, 0.9)"
                    }}
                  >
                    {/* {
                      isEntrepreneur && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-cyan-500 bg-[#001e3c] px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]">
                          Most Popular
                        </div>
                      )
                    } */}

                    <div className="mb-4 text-center">
                      <h2 className={`text-3xl font-bold tracking-wide ${isEntrepreneur ? "text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "text-[#3f2a10] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]"} ${isEnterprise ? "text-[#5c401a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)" : ""}`}>
                        {plan.name}
                      </h2>
                      <p className={`mt-2 text-sm font-medium ${isEntrepreneur ? "text-cyan-100/90" : "text-[#dcb56d]"}`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Separator 1 */}
                    {isEntrepreneur ? <BlueSeparator /> : isEnterprise ? <EnterpriseSeparator /> : <GoldSeparator />}

                    <div className={`mb-2 pb-2 text-center`}>
                      <span className={`text-4xl font-extrabold ${isEntrepreneur ? "text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" : isEnterprise ? "bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-[#9e7f29] drop-shadow-sm" : "text-[#2b1c07] drop-shadow-sm"}`}>
                        {plan.price}
                      </span>
                      {plan.price.includes("month") && (
                        <span className={`text-lg font-medium ${isEntrepreneur ? "text-cyan-100/80" : "text-[#5c401a]"}`}>
                        </span>
                      )}
                      {!plan.cta ? (
                        <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${isEntrepreneur ? "text-cyan-400" : "text-[#dcb56d]"}`}>
                          + usage fees
                        </p>
                      ) : (
                        <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${isEntrepreneur ? "text-cyan-400" : "text-[#dcb56d]"}`}>
                          Custom Solutions
                        </p>
                      )}
                    </div>

                    {/* Separator 2 */}
                    {isEntrepreneur ? <BlueSeparator /> : isEnterprise ? <EnterpriseSeparator /> : <GoldSeparator />}

                    <div className="mb-8 text-left">
                      {plan.features?.map((feature, i) => (
                        <div key={i}>
                          <div className={`flex items-center text-sm ${isEntrepreneur ? "font-medium text-cyan-100" : "font-bold text-[#3f2a10]"}`}>
                            <span className={`mr-3 flex items-center justify-center text-lg ${isEntrepreneur
                              ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                              : "text-[#5c401a] drop-shadow-sm"
                              }`}>
                              ●
                            </span>
                            {feature}
                          </div>
                          {i < (plan.features?.length || 0) - 1 && (
                            isEntrepreneur ? <BlueSeparator /> : isEnterprise ? <EnterpriseSeparator /> : <GoldSeparator />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <button className={`w-full rounded-lg py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isEntrepreneur
                        ? "border border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.5),inset_0_0_10px_rgba(34,211,238,0.3)] hover:scale-105 hover:shadow-[0_0_0_2px_#2FB4FF,0_0_30px_rgba(34,211,238,0.8),inset_0_0_20px_rgba(34,211,238,0.6)]"
                        : isEnterprise
                          ? "text-[#5c401a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_0_2px_#fcf6ba,0_0_20px_rgba(184,140,52,0.6),0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.8)]"
                          : "text-[#2b1c07] shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_0_2px_#fcf6ba,0_0_20px_rgba(184,140,52,0.6),0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.8)]"
                        }`}
                        style={{
                          background: isEntrepreneur
                            ? "linear-gradient(180deg, rgba(14,165,233,0.2) 0%, rgba(3,105,161,0.6) 100%)"
                            : "linear-gradient(180deg, #b88a44 0%, #e8d085 20%, #ffd78a 50%, #b88a44 100%)",
                          textShadow: isEntrepreneur ? "0 0 10px rgba(56,189,248,0.8)" : "0 1px 0 rgba(255,255,255,0.4)"
                        }}
                      >
                        {plan.cta || "Get Started"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
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
        price: "£199 / month",
        description: "For small teams getting started.",
        features: [
          "AI sends automated Phone call to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated Phone call interview process",
          "Pre-application link sent to successful applicants through phone sms",
          "Change Job Application status automatically based on Interview result.",
          "Attached ID & qualifications go straight to your CRM",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£599 / month",
        description: "For growing agencies & teams",
        features: [
          "All the features of Starter package, with more interviews",
          "Connect your own Elevenlabs API, and your custom Voice ID from Elevenlabs",
          "Message Limits: 350",
          "Team Workflows",
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
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
        price: "£99 / month",
        description: "For small teams getting started.",
        features: [
          "AI sends automated WhatsApp messages to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated WhatsApp interview process",
          "Pre-application link sent to successful applicants",
          "Change Job Application status automatically based on Interview result.",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£199 / month",
        description: "For growing agencies & teams",
        features: [
          "All the features of Starter package, with more interviews",
          "Job Match Analytics",
          "Client Lead Generator",
          "Team Workflows"
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
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
        price: "£99 / month",
        description: "For small teams getting started.",
        features: [
          "AI sends automated SMS messages to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated SMS interview process",
          "Pre-application link sent to successful applicants",
          "Change Job Application status automatically based on Interview result.",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£199 / month",
        description: "For growing agencies & teams",
        features: [
          "All the features of Starter package, with more interviews",
          "Job Match Analytics",
          "Client Lead Generator",
          "Team Workflows"
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
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
        price: "£99 / month",
        description: "For small teams getting started.",
        features: [
          "Scan candidates & CVs inside JobAdder automatically",
          "Detect new company names and hiring signals from CVs",
          "Extract company clues and references",
          "Enrich discovered companies with public business info",
          "Find decision-maker contacts from CV context",
        ],
      },

      {
        name: "Entrepreneur",
        price: "£199 / month",
        description: "For growing agencies & teams",
        features: [
          "All the features of Starter package",
          "Lead relevance scoring to prioritize best prospects",
          "CSV/JSON export of generated company & contact lists",
          "Full audit trail for every discovered lead",
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
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
        price: "£99 / month",
        description: "For small teams getting started.",
        features: [
          "Sync companies & client contacts from Business CRM",
          "Weekly WhatsApp follow-ups to selected client lists",
          "AI chatbot asks for new job requirements automatically",
          "Captures core job details",
          "Smart follow-up questions",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£199 / month",
        description: "For growing agencies & teams",
        features: [
          "All Starter features, with more outreach volume",
          "Multi-day cadence options",
          "Advanced job brief builder",
          "Client segmentation by industry, priority",
          "Auto-reminders & second-touch follow-ups",
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
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
        price: "£99 / month",
        description: "For small teams getting started.",
        features: [
          "Sync job ads and candidates from Business CRM",
          "Auto-extract required skills and job location",
          "Shortlist candidates within 20 km radius",
          "Filter candidates by selected CRM statuses",
          "Skill cross-match using profile skill sets",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£199 / month",
        description: "For growing agencies & teams",
        features: [
          "All Starter features, with more matching volume",
          "Custom radius rules per job or location",
          "Advanced skill weighting",
          "Multi-location job support",
          "Auto follow-ups for non-responding candidates",
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
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
        price: "£99 / month",
        description: "For small teams getting started.",
        features: [
          "AI scans and verifies documents automatically",
          "Checks for expiry dates and valid formats",
          "Extracts key data fields (Name, DOB, etc.)",
          "Files documents to correct candidate record",
          "Alerts recruiter on failed verifications",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£199 / month",
        description: "For growing agencies & teams",
        features: [
          "All Starter features + higher volume",
          "Multi-document support (Passport, Visa, License)",
          "Enhanced fraud detection",
          "Bulk upload & verification"
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
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
        price: "£49 / month",
        description: "For small teams getting started.",
        features: [
          "Format CV with powerful AI models",
          "Gather necessary information which you need to see first",
          "Clear out extra things from CVs",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£99 / month",
        description: "For growing agencies & teams",
        features: [
          "Format CV with powerful AI models",
          "Clear out extra things from CVs",
          "Mark or unmark information points to include or exclude",
          "Custom branding options"
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
      },
    ],
  },

  AIGDPRCompliance: {
    title: "AI GDPR Compliance",
    description: "Achieve 100% GDPR compliance effortlessly. AI automatically contacts candidates. Updates and cleans your CRM records. Ensures full data protection and accuracy. Works 24/7 to keep you compliant.",
    plans: [
      {
        name: "Starter",
        price: "£49 / month",
        description: "For small teams getting started.",
        features: [
          "Send compliant consent requests via email",
          "Capture YES/NO replies instantly",
          "Maintain an immutable audit trail",
          "Sync consent status with JobAdder",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£99 / month",
        description: "For growing agencies & teams",
        features: [
          "All the features of Starter package",
          "Automated follow-ups for non-responders",
          "Multi-domain sending with branded templates",
          "Bulk compliance campaigns"
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
      },
    ],
  },

  AIAWRCompliance: {
    title: "AI AWR Compliance (UK)",
    description: "Maintain complete Agency Workers Regulations compliance effortlessly. Our intelligent system proactively communicates with companies, ensuring your business.",
    plans: [
      {
        name: "Starter",
        price: "£49 / month",
        description: "For small teams getting started.",
        features: [
          "Automatic tracking of qualifying periods",
          "Proactive alerts for upcoming compliance deadlines",
          "Sync AWR status with JobAdder records",
          "Immutable audit trail for compliance",
        ],
      },
      {
        name: "Entrepreneur",
        price: "£99 / month",
        description: "For growing agencies & teams",
        features: [
          "All the features of Starter package",
          "Configurable AWR rules and alert thresholds",
          "Multi-brand placement tracking and reporting",
          "Advanced reporting dashboard"
        ],
      },
      {
        name: "Enterprise",
        price: "£1,500+ / month",
        cta: "Contact Us",
        description: "For large scale operations.",
        features: [
          "Advanced Compliance",
          "API & CRM Integration",
          "Dedicated Support",
          "SLA & SSO",
        ],
      },
    ],
  },
};
