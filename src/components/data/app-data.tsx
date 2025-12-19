import { CheckCircleIcon, GlobeIcon, MenuIcon, ShieldIcon } from "lucide-react";

export const appData = [
  {
    uid: "AI-Phone-Call-Recruiter",
    hero: {
      badge: "App • AI Phone Call",
      title: "Instant Phone Interviews on Autopilot",
      //highlight: "Automatically",
      description:
        "Call applicants the moment they apply. Our AI conducts structured voice interviews, transcribes answers in real time, scores candidates, and updates your Business CRM records—so your team advances the right people faster.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/modules/image00001.png",
          alt: "Phone interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle:
        "Use AI Phone Call Recruiter with Business CRM in Swiftwave.AI",
      items: [
        {
          number: "1",
          title: "Connect Voice",
          description:
            "Link your Twilio Voice (or SIP) numbers. Choose caller IDs, call windows, retries, and country rules.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Select the jobs or stages to auto-interview.",
        },
        {
          number: "3",
          title: "Design the Script",
          description:
            "Pick questions, scoring weights, knockouts, consent text, and fallback prompts for voicemail.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We place calls, handle speech-to-text & text-to-speech, generate transcripts, scorecards, and Business CRM updates.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Natural, structured phone interviews",
        description:
          "Conversational AI asks role-specific questions, confirms key facts (visa, notice, shift availability), and adapts follow-ups—all by voice. Candidates don’t need apps or links.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Live transcription & scoring",
        description:
          "We transcribe in real time, map answers to your rubric, apply knockouts, and produce a red/amber/green scorecard plus highlights.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Scheduling & voicemail fallback",
        description:
          "Offer time slots, confirm interviews, and send reminders. If unavailable, leave a tailored voicemail and auto-retry within your window.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach recordings & transcripts, push notes/tags, move stages, and update custom fields automatically.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI Phone Call Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Outbound dialer & retries",
          description:
            "Configurable attempts, pacing, time-zones, do-not-call lists, and warm transfer to humans.",
        },
        {
          title: "Multilingual voices",
          description:
            "Natural TTS in many languages; auto-detect and switch language within a call when needed.",
        },
        {
          title: "Compliance & consent",
          description:
            "Built-in GDPR prompts, opt-out handling, and suppression that mirrors your policy.",
        },
        {
          title: "Quality assurance",
          description:
            "Recordings, transcripts, sentiment & talk-ratio analytics, and supervisor review queues.",
        },
        {
          title: "Analytics & exports",
          description:
            "Contact rates, completion rates, time-to-screen, conversion by source, and CSV/JSON exports.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit scripts, place calls, review recordings, or export data.",
        },
      ],
    },
    cta: {
      title: "Speak with applicants right away",
      description:
        "Turn on AI Phone Call Recruiter to screen at scale, reduce time-to-hire, and deliver a great candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-WhatsApp-Recruiter",
    hero: {
      badge: "App • AI WhatsApp Recruiter",
      title: "Automated WhatsApp Interviews — Instantly.",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI connects with every applicant in real time, running structured chat interviews that screen, score, and schedule candidates automatically while your consultant sleeps! It asks knockout questions, texts a secure link for applicants to submit ID and qualifications, extracts key data, and syncs everything straight into your Business CRM — enabling faster CV submissions, quicker placements, and measurable sales growth.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/modules/image00002.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI WhatsApp Recruiter with Business CRM in Swiftwave.AI",
      items: [
        {
          number: "1",
          title: "Connect WhatsApp",
          description:
            "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number and templates for compliant messaging.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI WhatsApp Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Template approval support",
          description:
            "Pre-approved message templates and variables for Meta/Twilio, plus fallbacks when sessions expire.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Media & file support",
          description:
            "Receive CVs, portfolios, and IDs. Virus-scan and attach to candidate profiles automatically.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "Switch on AI WhatsApp Recruiter to screen at scale, cut time-to-hire, and improve candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-SMS-Recruiter",
    hero: {
      badge: "App • AI SMS Recruiter",
      title: "Smart, Automated Text Recruiting",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI engages applicants automatically — running structured SMS interviews, asking key screening questions, scoring responses, and scheduling candidates while your consultants sleep! Automatically sends a secure link to upload ID and qualifications, syncing verified data straight into your CRM for faster placements, stronger conversions, enabling faster CV submissions, quicker placements and measurable sales growth 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/modules/image00003.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI SMS Recruiter with Business CRM in Swiftwave.AI",
      items: [
        {
          number: "1",
          title: "Connect Phone Number",
          description:
            "Link your available phone number in the App configuration.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Choose your available CRM platform, authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI SMS Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Short SMS, Big Questions",
          description:
            "Each SMS will carry text contents which are actually meaningful, and direct to the interview.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "AI SMS Recruiter: screen faster, hire sooner, delight candidates via text.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing?tab=AISMSRecruiter", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-Client-Lead-Generation",
    hero: {
      badge: "App • AI Client Lead Generation",
      title: "Automated Client Engagement — 24/7",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI identifies warm leads from your CRM and candidate data, messaging prospects automatically with brochures, service literature, and meeting links. It tracks replies, syncs every interaction straight into CRM Opportunities, and keeps your consultants supplied with pre-warmed leads ready to close. The result — faster meetings, stronger conversions, and measurable sales growth 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/modules/image00004.png",
          alt: "AI Client Lead Generation",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI Client Lead Generation with Business CRM in Swiftwave.AI",
      items: [
        {
          number: "1",
          title: "Configure your choice",
          description:
            "Choose which data you want to collect from your candidate CVs using this app.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Choose your business CRM, Authorize once to sync candidates database. So that it can always scan the upcoming CVs to find required data.",
        },
        {
          number: "3",
          title: "Go Live",
          description:
            "The AI powered app will automatically create Company, Client records for your business.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Candidate CV Scanning",
        description:
          "Scan your entire candidate database along with their CVs/Resumes to get lead data",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Clients Leads",
        description:
          "Clients leads are the data of Companies where the candidate has worked in the past or at present. Also Company contacts along with contact email and phone number will be included in this Client Lead.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Fully GDPR Approved",
        description:
          "This AI app will only find and record client data which are publicly available (Website, Linkedin, and many more..).",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Grow your business",
        description:
          "Having new clients data means you have options to grow your business more.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
    title: "What you get with AI Client Lead Generation",
    subtitle: "Included",
    items: [
      {
        title: "Candidate CV/Resume scanning",
        description:
          "Automatically reviews candidate records and CVs in your Business CRM to identify potential client companies and hiring signals.",
      },
      {
        title: "Company discovery & enrichment",
        description:
          "Extracts new company names from CVs, then enriches profiles with industry, location, and website details.",
      },
      {
        title: "Contact finding from public sources",
        description:
          "Finds relevant decision-maker contacts using CV clues and publicly available online information (no paywalled or private scraping).",
      },
      {
        title: "Deduplication & smart matching",
        description:
          "Prevents duplicates by matching against existing clients/leads and merging records with confidence scoring.",
      },
      {
        title: "Compliance-first data handling",
        description:
          "Respects GDPR/privacy principles with data minimization, audit logs, and configurable rules to exclude restricted data.",
      },
      {
        title: "Lead scoring & prioritization",
        description:
          "Ranks discovered companies and contacts by relevance, hiring intent, and fit—so your team focuses on the best leads first.",
      },
      {
        title: "CRM/ATS sync & exports",
        description:
          "Pushes leads to your Business CRM, with CSV/JSON exports and a full activity trail for reporting.",
      },
    ],
  },

    cta: {
      title: "Just configure the App and sleep well for next morning to see what you always wanted",
      description:
        "AI Client Lead Generation: find companies, enrich leads, and reach the right contacts—on autopilot.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-BDM-Sales-Engine",
    hero: {
      badge: "App • AI BDM Sales Engine",
      title: "Automated Client Engagement — 24/7",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI identifies warm leads from your CRM and candidate data, messaging prospects automatically with brochures, service literature, and meeting links. It tracks replies, syncs every interaction straight into CRM Opportunities, and keeps your consultants supplied with pre-warmed leads ready to close. The result — faster meetings, stronger conversions, and measurable sales growth 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/modules/image00005.png",
          alt: "AI BDM Sales Engine",
        },
      ],
    },
    steps: {
    headingBadge: "Steps",
    headingTitle: "Use AI BDM Sales Engine with Business CRM in Swiftwave.AI",
    items: [
      {
        number: "1",
        title: "Connect WhatsApp",
        description:
          "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number, templates, and opt-in rules for compliant client outreach.",
      },
      {
        number: "2",
        title: "Connect Business CRM",
        description:
          "Authorize your Business CRM (e.g., JobAdder). We’ll sync your company list, client contacts, and existing jobs to avoid duplicates.",
      },
      {
        number: "3",
        title: "Set Outreach Cadence & Script",
        description:
          "Choose the weekly follow-up day/time and customize the WhatsApp bot flow—job-requirement prompts, role details, budgets, locations, and urgency.",
      },
      {
        number: "4",
        title: "Go Live & Auto-Create Jobs",
        description:
          "AI BDM Sales Engine starts WhatsApp conversations, captures new hiring needs, confirms full job specs, and automatically creates new jobs in your CRM with logs.",
      },
    ],
  },

    features: [
    {
      icon: <MenuIcon />,
      title: "Weekly WhatsApp outreach on autopilot",
      description:
        "Automatically pings your client contacts on a chosen day each week to ask if they have new hiring needs—no manual follow-ups needed.",
      image: "/hero.png",
    },
    {
      icon: <MenuIcon />,
      title: "AI-led job requirement conversations",
      description:
        "A human-like WhatsApp chatbot gathers role needs, headcount, location, salary range, shift patterns, start date, and must-have skills through smart follow-ups.",
      image: "/hero.png",
    },
    {
      icon: <MenuIcon />,
      title: "Perfect job brief builder",
      description:
        "Transforms chat answers into a structured, complete job description—validates missing fields, clarifies ambiguities, and confirms details with the client.",
      image: "/hero.png",
    },
    {
      icon: <MenuIcon />,
      title: "Business CRM company & contact sync",
      description:
        "Reads your existing client list and WhatsApp numbers from Business CRMs like JobAdder, keeps records updated, and prevents duplicate jobs.",
      image: "/hero.png",
    },
    {
      icon: <MenuIcon />,
      title: "Auto-create jobs in CRM",
      description:
        "Once a requirement is confirmed, the engine creates a new job in your Business CRM with full specs, contact linkage, and conversation logs.",
      image: "/hero.png",
    },
    {
      icon: <ShieldIcon />,
      title: "Compliance & opt-in safety",
      description:
        "Includes consent-aware messaging, audit trails, and configurable rules to respect WhatsApp policies and privacy requirements.",
      image: "/hero.png",
    },
  ],

    whatYouGet: {
    title: "What you get with AI BDM Sales Engine",
    subtitle: "Included",
    items: [
      {
        title: "WhatsApp template & opt-in support",
        description:
          "Ready-to-approve outreach templates for Meta/Twilio, opt-in guidance, and safe fallbacks when sessions expire.",
      },
      {
        title: "Weekly client follow-up automation",
        description:
          "Auto-messages your CRM-listed contacts every week on your chosen day/time to ask for new job requirements.",
      },
      {
        title: "AI requirement discovery flow",
        description:
          "Smart WhatsApp conversations that capture role details, headcount, skills, salary/budget, location, shifts, start dates, and urgency.",
      },
      {
        title: "Job brief verification & completion",
        description:
          "Validates missing fields, clarifies vague answers, and confirms a final structured job brief with the client.",
      },
      {
        title: "Business CRM sync",
        description:
          "Pulls companies and contacts from CRMs like JobAdder, links conversations back to accounts, and avoids duplicate job creation.",
      },
      {
        title: "Auto-create jobs in CRM",
        description:
          "Creates a new job in your Business CRM the moment a requirement is confirmed—complete with notes and chat transcript.",
      },
      {
        title: "Analytics & activity logs",
        description:
          "Tracks outreach rate, response rate, jobs generated per client, and full audit trails for performance reporting.",
      },
    ],
  },

    cta: {
    title: "Generate new client jobs every week—automatically",
    description:
      "Switch on AI BDM Sales Engine to follow up with clients on WhatsApp, capture fresh job requirements, and create new CRM jobs without manual chasing.",
    buttons: [
      { label: "Get Started", href: "#", variant: "primary" },
      { label: "View Pricing", href: "/pricing", variant: "outline" },
    ],
    footerText: "Questions?",
    footerLink: { label: "Contact us", href: "/contact-us" },
  },

  },
  {
    uid: "AI-Candidate-Skill-Search",
    hero: {
      badge: "App • AI Candidate Skill Search",
      title: "Smart, Automated Talent Matching",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI activates instantly when a new job goes live — searching your CRM automatically to identify candidates with the right skills, qualifications, and availability while your consultants sleep! It analyses location and distance to match candidates closest to the job, ranking profiles and preparing client-ready shortlists automatically. Verified matches flow straight into your CRM, enabling faster placements, stronger client delivery, and measurable sales growth 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/modules/image00006.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
  headingBadge: "Steps",
  headingTitle: "Use AI Candidate Skill Search with Business CRM in Swiftwave.AI CRM",
  items: [
    {
      number: "1",
      title: "Connect WhatsApp",
      description:
        "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number, templates, and opt-in rules for compliant candidate outreach.",
    },
    {
      number: "2",
      title: "Connect Business CRM",
      description:
        "Authorize your Business CRM (e.g., JobAdder). We’ll sync job ads, candidate profiles, CVs, and application workflows.",
    },
    {
      number: "3",
      title: "Configure Search Rules",
      description:
        "Set your radius (default 20 km), allowed candidate statuses (active, checking, etc.), and skill-matching thresholds.",
    },
    {
      number: "4",
      title: "Go Live",
      description:
        "AI reads job requirements, finds matching candidates, messages them on WhatsApp, and auto-applies interested candidates to the job in your CRM.",
    },
  ],
},

features: [
  {
    icon: <MenuIcon />,
    title: "Auto-extract job skills & location",
    description:
      "Reads job ads from your CRM to identify required skills, keywords, and job location—no manual parsing needed.",
    image: "/hero.png",
  },
  {
    icon: <MenuIcon />,
    title: "Radius-based candidate filtering",
    description:
      "Shortlists candidates within a configurable distance (e.g., 20 km) from the job location using city + country matching.",
    image: "/hero.png",
  },
  {
    icon: <MenuIcon />,
    title: "Status-aware shortlisting",
    description:
      "Only includes candidates in your selected CRM statuses such as Active, Checking, Available, or any custom list you define.",
    image: "/hero.png",
  },
  {
    icon: <MenuIcon />,
    title: "Dual-path skill matching",
    description:
      "First cross-matches required skills against profile skills. If missing, scans the latest CV to generate a skills list, then matches again for maximum coverage.",
    image: "/hero.png",
  },
  {
    icon: <MenuIcon />,
    title: "WhatsApp interest confirmation",
    description:
      "Automatically sends personalized WhatsApp messages to matched candidates to confirm interest before applying—improving response quality.",
    image: "/hero.png",
  },
  {
    icon: <CheckCircleIcon />,
    title: "Auto-application in CRM",
    description:
      "When a candidate confirms, the system creates an application under their profile for that job—complete with chat logs and timestamps.",
    image: "/hero.png",
  },
],

whatYouGet: {
  title: "What you get with AI Candidate Skill Search",
  subtitle: "Included",
  items: [
    {
      title: "Job skill & location intelligence",
      description:
        "Instantly detects required skills, role signals, and job location from CRM job ads with structured extraction.",
    },
    {
      title: "Geo-range candidate discovery",
      description:
        "Finds candidates within your chosen radius of the job location and supports easy adjustment per role or region.",
    },
    {
      title: "Status-based filtering",
      description:
        "Applies your approved candidate status list to ensure only relevant, available talent is contacted.",
    },
    {
      title: "CV skill mining",
      description:
        "Scans the latest CV when profile skills are missing to infer candidate skill sets automatically.",
    },
    {
      title: "Skill cross-match & ranking",
      description:
        "Matches required vs. candidate skills with confidence scoring and a clear explanation of matches and gaps.",
    },
    {
      title: "WhatsApp outreach automation",
      description:
        "Engages matched candidates through a compliant WhatsApp chatbot and tracks their responses.",
    },
    {
      title: "One-click CRM applications",
      description:
        "Auto-creates applications for interested candidates and syncs everything back to your CRM with a full audit trail.",
    },
  ],
},

cta: {
  title: "Find and engage the right candidates in minutes",
  description:
    "Switch on AI Candidate Skill Search to auto-read job requirements, locate nearby matching talent, confirm interest on WhatsApp, and place applications directly in your CRM.",
  buttons: [
    { label: "Get Started", href: "#", variant: "primary" },
    { label: "View Pricing", href: "/pricing", variant: "outline" },
  ],
  footerText: "Questions?",
  footerLink: { label: "Contact us", href: "/contact-us" },
},

  },
  {
    uid: "AI-Verify-Documents",
    hero: {
      badge: "App • AI Verify Documents",
      title: "Smart, Automated Document Capture.",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI allows new applicants and existing candidates to send photos of their ID, Right to Work, and qualification documents directly through WhatsApp while your consultants sleep! The AI reads, verifies, and uploads data and images straight into your CRM candidate profiles, keeping records accurate and compliant automatically. Every update flows instantly to your system, enabling faster onboarding, zero manual admin, and stronger compliance 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/modules/image00007.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI Verify Documents with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect WhatsApp",
          description:
            "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number and templates for compliant messaging.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI WhatsApp Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Template approval support",
          description:
            "Pre-approved message templates and variables for Meta/Twilio, plus fallbacks when sessions expire.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Media & file support",
          description:
            "Receive CVs, portfolios, and IDs. Virus-scan and attach to candidate profiles automatically.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "Switch on AI WhatsApp Recruiter to screen at scale, cut time-to-hire, and improve candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-CV-Formatter",
    hero: {
      badge: "App • AI CV Formatter",
      title: "Perfectly Formatted CVs in Seconds",
      //highlight: "Automatically",
      description:
        "Turn messy resumes into clean, branded CVs automatically. Our AI extracts skills and history, normalizes titles and dates, applies your templates, and updates Business CRM—ready to share with clients instantly.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        { src: "/modules/image00008.png", alt: "CV formatting preview" },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle:
        "How to use AI CV Formatter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect your Business CRM",
          description:
            "From Integration → click on Connect Business CRM account.",
        },
        {
          number: "2",
          title: "Go to Apps",
          description:
            "Find AI CV Formatter. Click on Purchase, or Configure if you already have the subscription.",
        },
        {
          number: "3",
          title: "Mark or unmark topics",
          description:
            "Select the topics you want to include or exclude for formatting.",
        },
        {
          number: "4",
          title: "Finish & Start",
          description: "Complete other configuration and start the App!",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Best-in-class parsing",
        description:
          "Extracts experience, education, certifications, skills, locations, and contact details—even from complex layouts and images—with normalization for titles and dates.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Brand-ready templates",
        description:
          "Choose from multiple layouts or bring your own. Keep fonts, spacing, and colors consistent across all submissions.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Role-aware summaries",
        description:
          "Generate concise summaries tailored to the target job. Highlight relevant achievements, tools, and keywords for ATS compatibility.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Duplicates & data hygiene",
        description:
          "Detect duplicate candidates, standardize contact details, and fix formatting issues before updating your ATS.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI CV Formatter",
      subtitle: "Included",
      items: [
        {
          title: "Multi-format support",
          description: "PDF, DOCX, RTF, images—with OCR for scans and photos.",
        },
        {
          title: "Skills taxonomy",
          description:
            "Map skills to your internal taxonomy and Business CRM custom fields.",
        },
        {
          title: "Template variables",
          description:
            "Dynamic placeholders for name, role, summary, competencies, and brand assets.",
        },
        {
          title: "Export & share",
          description:
            "Generate secure links, watermarks, and view tracking for client submissions.",
        },
        {
          title: "Analytics",
          description:
            "View rates, template usage, turnaround time, and conversion to interview.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit templates, export, or share outside the org.",
        },
      ],
    },
    cta: {
      title: "Send polished, branded CVs—fast",
      description:
        "Switch on AI CV Formatter to standardize resumes and showcase candidates professionally with minimal effort.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-GDPR-Compliance",
    hero: {
      badge: "App • AI GDPR Compliance",
      title: "Collect & Track Candidate Consent",
      //highlight: "Automatically",
      description:
        "Send compliant consent requests from Swiftwave.AI via email, capture YES/NO replies instantly, and maintain an immutable audit trail synced with your Business CRM records.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        { src: "/modules/image00009.png", alt: "Consent dashboard preview" },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI GDPR with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect Business CRM",
          description:
            "Go to Integration → Connect Business CRM account. Authorize once to sync candidates & applications.",
        },
        {
          number: "2",
          title: "Activate the App",
          description:
            "Go to Apps → find AI GDPR Compliance. Click Purchase or Configure if already subscribed.",
        },
        {
          number: "3",
          title: "Define Consent Template",
          description:
            "Set your consent purpose(s), privacy-notice link, and YES/NO instructions. Choose sending domain and schedule.",
        },
        {
          number: "4",
          title: "Start",
          description:
            "The assistant sends requests, captures replies, updates records, and stores an immutable audit log automatically.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Automated consent outreach",
        description:
          "Trigger consent emails to candidates from your selected sending domain(s). Use smart segments to keep your database compliant without manual chasing.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "YES/NO capture & classification",
        description:
          "Replies are classified as YES, NO, or Unclear. The assistant updates candidate records and Job Application status rules.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Immutable audit trail",
        description:
          "Every action is recorded and ready for audits and DSAR responses.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Multi-domain sending & brand control",
        description:
          "Send from different domains/brands with dedicated templates and link branding.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI GDPR",
      subtitle: "Included",
      items: [
        {
          title: "Consent templates",
          description:
            "Create purpose-specific templates with privacy-notice links and auto-expiry rules.",
        },
        {
          title: "Automated follow-ups",
          description:
            "Nudge candidates who didn't respond or sent unclear replies—fully configurable cadences.",
        },
        {
          title: "Withdrawal handling",
          description:
            "Instantly honor NO/withdrawal and suppress future communications.",
        },
        {
          title: "CSV/JSON exports",
          description: "Export consent logs for audits and DSARs.",
        },
        {
          title: "Deliverability insights",
          description:
            "Track bounces, blocks, and engagement to improve capture rates.",
        },
        {
          title: "Role-based access",
          description: "Limit who can send, edit templates, or export logs.",
        },
      ],
    },
    cta: {
      title: "Ready to stay compliant—without the admin?",
      description:
        "Start using AI GDPR Compliance today and keep your Business CRM data clean and consent-safe.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-AWR-Compliance",
    hero: {
      badge: "App • AI AWR Compliance (UK)",
      title: "Automate AWR Tracking & Stay Compliant",
      //highlight: "Automatically",
      description:
        "Stay ahead of AWR (Agency Worker Regulations) without lifting a finger. Our AI-powered assistant automatically tracks qualifying periods for each candidate, manages alerts for upcoming compliance deadlines, and ensures your Business CRM records are up to date—across temporary workers, contractors, and hybrid placements.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        { src: "/modules/image00010.png", alt: "AWR tracking dashboard" },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AWR Compliance with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect Business CRM",
          description:
            "Go to Integration → Connect Business CRM account. Authorize once to sync candidates, placements, and assignments.",
        },
        {
          number: "2",
          title: "Enable AWR Rules",
          description:
            "Choose default AWR rules (e.g., 12-week qualifying period) and your alert thresholds (e.g., 2 weeks/1 week/48 hours).",
        },
        {
          number: "3",
          title: "Map Time & Breaks",
          description:
            "Define how you record weeks worked, breaks between assignments, and supplier/client exceptions for accurate roll-ups.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "The assistant tracks qualifying periods, fires alerts, updates Business CRM, and keeps a complete compliance trail.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Automatic qualifying-period tracking",
        description:
          "Track each worker’s weeks worked across assignments and sites. Account for breaks, supplier changes, and client-specific counting rules to get an accurate AWR status at a glance.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Proactive alerts & workflows",
        description:
          "Get early warnings as workers approach the 12-week mark. Trigger templated actions—rate parity checks, benefits alignment, or manager notifications—before deadlines hit.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Single source of truth",
        description:
          "Syncs with Business CRM placements and timesheets to make sure your records reflect current AWR status, with notes and change history preserved for audits.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Multi-brand placements & reports",
        description:
          "Whether you run multiple brands or supply into multiple clients, keep consolidated dashboards and downloadable AWR reports filtered by client, team, or timeframe.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AWR Compliance",
      subtitle: "Included",
      items: [
        {
          title: "AWR rules engine",
          description:
            "Configurable timers, carry-over logic, and breaks handling aligned with AWR guidance.",
        },
        {
          title: "Alert cadences",
          description:
            "Email/Slack alerts at thresholds you set (e.g., T-14, T-7, T-2) with owner assignment.",
        },
        {
          title: "Placement health",
          description:
            "Color-coded status on each assignment with exceptions and action checklists.",
        },
        {
          title: "Audit trail",
          description:
            "Immutable log of changes, notes, and confirmations for inspections and disputes.",
        },
        {
          title: "Dashboards & exports",
          description:
            "Team and client views, CSV/JSON exports, and monthly summary emails.",
        },
        {
          title: "Role-based access",
          description:
            "Restrict who can edit rules, acknowledge alerts, or export reports.",
        },
      ],
    },
    cta: {
      title: "Prevent last-minute AWR surprises",
      description:
        "Turn on AWR Compliance to track qualifying periods automatically and keep Business CRM aligned—every day.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
];
