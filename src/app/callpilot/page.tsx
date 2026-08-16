/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Header from "@/components/callpilot/Header";
import Footer from "@/components/callpilot/Footer";
import { Button } from "@/components/callpilot/ui/button";
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  MessageSquare,
  FileText,
  Database,
  Users,
  Clock,
  Settings,
  BarChart3,
  UserPlus,
  RefreshCw,
  Check
} from "lucide-react";
import Link from "next/link";

const CALLPILOT_PRICING_CONFIG = {
  currencySymbol: "$",
  addOns: {
    aiPhoneNumber: {
      price: 10,
      period: "month"
    }
  },
  plans: [
    {
      id: "starter",
      name: "STARTER",
      price: 199,
      period: "month",
      credits: 100,
      perScreeningRate: 1.99,
      checkoutUrl: "https://panel.callpilot.pro/checkout?plan=starter"
    },
    {
      id: "growth",
      name: "GROWTH",
      isPopular: true,
      price: 795,
      period: "month",
      credits: 500,
      perScreeningRate: 1.59,
      checkoutUrl: "https://panel.callpilot.pro/checkout?plan=growth"
    },
    {
      id: "pro",
      name: "PRO",
      price: 1995,
      period: "month",
      credits: 1500,
      perScreeningRate: 1.33,
      checkoutUrl: "https://panel.callpilot.pro/checkout?plan=pro"
    },
    {
      id: "enterprise",
      name: "ENTERPRISE",
      isEnterprise: true,
      priceLabel: "High Volume?",
      subLabel: "Custom Volume Pricing",
      checkoutUrl: "mailto:sales@swiftwave.ai?subject=CallPilot%20Enterprise%20Inquiry"
    }
  ]
};

export default function CallPilotRecruitment() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  // Applicant table rows data
  const applicantRows = [
    { name: "Sarah Mitchell", initials: "SM", job: "Site Manager", status: "Qualified", documents: "Received" },
    { name: "James Wilson", initials: "JW", job: "HGV Class 1 Driver", status: "Qualified", documents: "Received" },
    { name: "Emma Clarke", initials: "EC", job: "Project Engineer", status: "Qualified", documents: "Received" },
    { name: "Daniel Hughes", initials: "DH", job: "Electrician", status: "Qualified", documents: "Received" },
    { name: "Sophie Taylor", initials: "ST", job: "Recruitment Consultant", status: "Qualified", documents: "Received" },
    { name: "Michael Evans", initials: "ME", job: "Quantity Surveyor", status: "Qualified", documents: "Received" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#05070A] antialiased overflow-x-hidden" style={{ fontFamily: 'var(--font-primary)' }}>
      {/* Custom Styles for animations, typography, and micro-effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');

        :root {
          --font-primary: "Manrope", "Inter", Arial, sans-serif;
          --text-black: #05070A;
          --text-charcoal: #36454F;
          --text-white: #FFFFFF;
          --ai-blue: #0667F9;
        }

        .hero-title {
          font-family: var(--font-primary);
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #FFFFFF;
          text-shadow: none;
        }

        /* Premium Buttons */
        .btn-white-section {
          background-color: #05070A !important;
          color: #FFFFFF !important;
          font-weight: 700 !important;
          border-radius: 8px !important;
          height: 44px !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease !important;
          border: 1px solid transparent !important;
          outline: none;
        }
        @media (min-width: 1024px) {
          .btn-white-section {
            height: 40px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        .btn-white-section:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(6, 103, 249, 0.22) !important;
        }
        .btn-white-section:active {
          transform: translateY(0) scale(0.98) !important;
          box-shadow: 0 2px 8px rgba(6, 103, 249, 0.1) !important;
        }
        .btn-white-section:focus-visible {
          outline: 2px solid #0667F9 !important;
          outline-offset: 2px !important;
        }

        .btn-dark-section {
          background-color: #FFFFFF !important;
          color: #05070A !important;
          font-weight: 700 !important;
          border-radius: 8px !important;
          height: 44px !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease !important;
          border: 1px solid transparent !important;
          outline: none;
        }
        @media (min-width: 1024px) {
          .btn-dark-section {
            height: 40px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        .btn-dark-section:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(6, 103, 249, 0.22) !important;
        }
        .btn-dark-section:active {
          transform: translateY(0) scale(0.98) !important;
          box-shadow: 0 2px 8px rgba(6, 103, 249, 0.1) !important;
        }
        .btn-dark-section:focus-visible {
          outline: 2px solid #0667F9 !important;
          outline-offset: 2px !important;
        }

        .card-premium {
          transition: all 200ms ease-in-out !important;
        }
        .card-premium:hover {
          border-color: var(--ai-blue) !important;
          box-shadow: 0 10px 30px rgba(6, 103, 249, 0.22) !important;
          transform: translateY(-2px) !important;
        }

        @keyframes pulse-gasp {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
        @keyframes flowing-dot {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        .flow-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 8px;
          background: var(--ai-blue);
          filter: blur(2px);
          border-radius: 9999px;
          animation: flowing-dot 2s linear infinite;
        }
        .glowing-pulsing-green {
          animation: pulse-gasp 1.8s infinite ease-in-out;
        }
        @keyframes ticker-loop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-wrapper {
          display: flex;
          width: max-content;
          gap: 2rem;
          animation: ticker-loop 20s linear infinite;
        }
        .ticker-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
      `}} />

      {/* Header */}
      <Header />

      <main className="pt-[120px] md:pt-[145px] lg:pt-[160px]">
        {/* HERO SECTION */}
        <section
          className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden py-20 lg:py-0"
          style={{ background: "linear-gradient(135deg, #000000 80%, #1c1c1c 20%)" }}
        >
          {/* Full background video for all viewports */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100"
            >
              <source src="/videos/ai-video.mov" type="video/mp4" />
            </video>
            {/* Overlay to ensure text readability */}
            {/* <div className="absolute inset-0 bg-black/60 pointer-events-none z-10" /> */}
          </div>

          {/* Hero Content */}
          <div className="relative z-20 container mx-auto px-6 sm:px-8 max-w-7xl flex justify-center">
            <div className="max-w-4xl text-center flex flex-col items-center justify-center animate-fade-in">
              {/* Top Subtext Badge - Split in two lines with blue dots */}
              <div className="flex flex-col gap-1 mb-8 items-center">
                <div className="text-[10px] sm:text-xs md:text-sm font-black tracking-[0.22em] text-white uppercase text-center">
                  AI APPLICANT SCREENING CALLS <span className="text-[#0667F9]">•</span> 24/7
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-black tracking-[0.22em] text-white uppercase text-center">
                  WHATSAPP <span className="text-[#0667F9]">•</span> SMS <span className="text-[#0667F9]">•</span> AUTOMATION
                </div>
              </div>

              {/* Single H1 constraint */}
              <h1 className="hero-title mb-6 text-center">
                Recruiters Sleep.<br />
                CallPilot Qualifies 24/7.
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-normal max-w-2xl mb-8 tracking-wide text-center mx-auto">
                 Documents synced directly to your ATS or CRM.
              </p>

              {/* CTA Button */}
              <div className="mb-12 flex justify-center">
                <Link href="https://panel.callpilot.pro/login">
                  <Button className="btn-dark-section group">
                    Book a Demo
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Integration Status Bar Carousel Ticker */}
              <div className="pt-6 border-t border-white/10 w-full max-w-2xl overflow-hidden relative mx-auto">
                <div className="ticker-wrapper text-white/90 text-xs sm:text-sm md:text-base font-semibold">
                  {/* First Track */}
                  <div className="ticker-track">
                    <div className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-widest text-[#0667F9] shrink-0 mr-0">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[25px]">LIVE</span>
                    </div>
                    <img src="/brands/jobadder.png" alt="JobAdder" className="h-8 sm:h-8 w-auto object-contain" />
                    <span className="text-[#0667F9] font-bold">•</span>
                    <div className="flex items-center gap-1.5">
                      <img src="/brands/recruitcrm.jpeg" alt="Recruit CRM Icon" className="h-8 w-8 sm:h-8 sm:w-8 rounded object-cover" />
                      <span className="text-[25px]">Recruit CRM</span>
                    </div>
                    <span className="text-[#0667F9] font-bold">•</span>
                    <div className="flex items-center gap-1.5">
                      <img src="/brands/greenhouse.png" alt="Greenhouse" className="h-8 sm:h-8 w- auto object-contain" />
                      <span className="text-[12px] uppercase font-bold tracking-widest text-[#0667F9]/90 bg-[#0667F9]/10 px-1.5 py-0.5 rounded ml-0 border border-[#0667F9] shrink-0">In Progress</span>
                    </div>
                    <span className="text-[#0667F9] font-bold">•</span>
                    <img src="/brands/wordmark.svg" alt="Ashby" className="h-8 sm:h-8 w-auto object-contain " />
                    <span className="text-[#0667F9] font-bold">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-[25px] shrink-0">
                      iCIMS
                       </span>
                       <span className="text-[12px] uppercase font-medium tracking-widest text-white border border-white px-1.5 py-0.5 rounded ml-0 bg-white/10 mt-2">Coming Soon</span>
                    </div>
                  </div>

                  {/* Second Track (Duplicate for seamless animation loop) */}
                  <div className="ticker-track" aria-hidden="true">
                    <div className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-widest text-[#0667F9] shrink-0 mr-1 text-[12px]">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[25px]">LIVE</span>
                    </div>
                    <img src="/brands/jobadder.png" alt="JobAdder" className="h-8 sm:h-8 w-auto object-contain" />
                    <span className="text-[#0667F9] font-bold">•</span>
                    <div className="flex items-center gap-1.5">
                      <img src="/brands/recruitcrm.jpeg" alt="Recruit CRM Icon" className="h-8 w-8 sm:h-8 sm:w-8 rounded object-cover" />
                      <span className="text-[25px]">Recruit CRM</span>
                    </div>
                    <span className="text-[#0667F9] font-bold">•</span>
                    <div className="flex items-center gap-1.5">
                      <img src="/brands/greenhouse.png" alt="Greenhouse" className="h-8 w-8 sm:h-8 sm:w-8 rounded object-cover" />
                      <span className="text-[12px] uppercase font-bold tracking-widest text-[#0667F9]/90 bg-[#0667F9]/10 px-1.5 py-0.5 rounded ml-0 border border-[#0667F9] shrink-0">In Progress</span>
                    </div>
                    <span className="text-[#0667F9] font-bold">•</span>
                    <img src="/brands/wordmark.svg" alt="Ashby" className="h-8 w-8 sm:h-8 sm:w-8 rounded object-cover" />
                    <span className="text-[#0667F9] font-bold">•</span>
                    <span className="text-white text-[25px] shrink-0">
                    </span>
                      iCIMS <span className="text-[12px] uppercase font-medium tracking-widest text-white border border-white px-1.5 py-0.5 rounded ml-0 bg-white/10">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: APPLICANT RESULTS (White background transition) */}
        <section className="bg-white py-10 lg:py-16 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Copy Side */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05070A] leading-[1.15] mb-3 tracking-tight">
                  500 Applicants<br />
                  Over the Weekend.
                </h2>
                {/* <div className="text-2xl sm:text-3xl font-extrabold text-[#0667F9] leading-tight mb-2">
                  50 Qualified.
                </div> */}
                <div className="text-xl sm:text-2xl font-bold text-[#05070A] leading-tight">
                  ATS Automatically Updated.<br />
                  Documents Received.
                </div>
              </div>

              {/* Table Side */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200/80 shadow-xl shadow-gray-100/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50/70 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <th className="px-6 py-4">Applicant</th>
                        <th className="px-6 py-4">Job</th>
                        <th className="px-6 py-4">ATS Status</th>
                        <th className="px-6 py-4">Documents</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {applicantRows.map((row) => (
                        <tr key={row.name} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-xs font-bold flex items-center justify-center border border-blue-100/50 shrink-0">
                              {row.initials}
                            </div>
                            <span className="font-semibold text-gray-900">{row.name}</span>
                          </td>
                          <td className="px-6 py-4 text-gray-600 font-medium">
                            {row.job}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                              <Check size={14} strokeWidth={2.5} className="bg-emerald-50 p-0.5 rounded-full border border-emerald-200" />
                              {row.documents}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: METRICS STRIP */}
        <section className="bg-white py-6 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center text-center md:text-center divide-y sm:divide-y-0 md:divide-x divide-gray-100">
              {/* Metric 1 */}
              <div className="pt-6 sm:pt-0 first:pt-0">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#0667F9] tracking-tight">~60 SECONDS</div>
                {/* <div className="text-xs uppercase tracking-widest text-[#0667F9] font-bold mt-1">SECONDS</div> */}
                <div className="text-sm text-[#36454F] font-medium mt-1">Average screening call</div>
              </div>

              {/* Metric 2 */}
              <div className="pt-6 sm:pt-0 md:pl-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#0667F9] tracking-tight">70%</div>
                <div className="text-sm text-[#36454F] font-medium mt-2">Less admin*</div>
              </div>

              {/* Metric 3 */}
              <div className="pt-6 sm:pt-0 md:pl-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#0667F9] tracking-tight">50%</div>
                <div className="text-sm text-[#36454F] font-medium mt-2">Potential revenue increase*</div>
              </div>

              {/* Metric 4 */}
              <div className="pt-6 sm:pt-0 md:pl-6">
                <div className="text-xs uppercase tracking-widest text-[#0667F9] font-bold">FROM</div>
                <div className="text-3xl lg:text-4xl font-extrabold text-[#0667F9] tracking-tight">$1.33</div>
                <div className="text-sm text-[#36454F] font-medium mt-1">Per screening call</div>
              </div>

              {/* Metric 5 */}
              {/* <div className="pt-6 sm:pt-0 md:pl-6 flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0667F9] flex items-center justify-center border border-blue-100 mb-2">
                  <PhoneCall size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0667F9]">PAY FOR SCREENED CALLS</div>
                <div className="text-sm text-[#36454F] font-medium mt-0.5">Not unanswered calls</div>
              </div> */}
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS (ANIMATED PIPELINE) */}
        <section className="bg-gray-50/50 py-10 lg:py-16 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05070A] tracking-tight">
                From Application to Recruiter Review.
              </h2>
            </div>

            {/* Horizontal Pipeline Container (Desktop & Scrollable Mobile) */}
            <div className="relative w-full overflow-x-auto pb-0 scrollbar-none">
              <div className="min-w-[900px] flex items-start justify-between px-10 py-12 relative">
                {/* Connector Line Background */}
                <div className="absolute top-20 left-20 right-20 h-1 bg-gray-200 -translate-y-1/2 z-0" />

                {/* Animated flowing lines container */}
                <div className="absolute top-20 left-20 right-20 h-1 -translate-y-1/2 z-0 overflow-hidden">
                  <div className="absolute inset-0 flow-line w-full h-full" />
                </div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0667F9] shadow-lg flex items-center justify-center text-[#0667F9] transition-transform duration-300 hover:scale-110">
                    <Users size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#05070A]">Applicant</span>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0667F9] shadow-lg flex items-center justify-center text-[#0667F9] transition-transform duration-300 hover:scale-110">
                    <PhoneCall size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#05070A]">AI Call</span>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0667F9] shadow-lg flex items-center justify-center text-[#0667F9] transition-transform duration-300 hover:scale-110">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#05070A]">Qualify</span>
                </div>

                {/* Step 4 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0667F9] shadow-lg flex items-center justify-center text-[#0667F9] transition-transform duration-300 hover:scale-110">
                    <MessageSquare size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#05070A]">WhatsApp / SMS</span>
                </div>

                {/* Step 5 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0667F9] shadow-lg flex items-center justify-center text-[#0667F9] transition-transform duration-300 hover:scale-110">
                    <FileText size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#05070A]">Documents</span>
                </div>

                {/* Step 6 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0667F9] shadow-lg flex items-center justify-center text-[#0667F9] transition-transform duration-300 hover:scale-110">
                    <Database size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#05070A]">ATS Updated</span>
                </div>

                {/* Step 7 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-500 shadow-lg flex items-center justify-center text-emerald-500 transition-transform duration-300 hover:scale-110">
                    <Users size={24} />
                  </div>
                  <span className="font-bold text-sm text-emerald-600">Recruiter</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5 & 6: RECRUITMENT VOLUME & DOCUMENT AUTOMATION (2-COLUMN) */}
        <section className="bg-white py-10 lg:py-20 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">

              {/* Volume Column */}
              <div className="bg-gray-50/30 p-3 sm:p-6 rounded-xl border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0667F9] flex items-center justify-center border border-blue-100 shrink-0 mt-1">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#05070A] mb-3 tracking-tight">
                    10 Applicants or 10,000+
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm sm:text-base text-[#36454F] font-semibold">
                    <span>Weekend & Out-of-Hours</span>
                    <span className="text-[#0667F9]">•</span>
                    <span>High Volume</span>
                    <span className="text-[#0667F9]">•</span>
                    <span>Multiple Vacancies</span>
                    <span className="text-[#0667F9]">•</span>
                    <span>Multiple Locations</span>
                  </div>
                </div>
              </div>

              {/* Document Column */}
              <div className="bg-gray-50/30 p-3 sm:p-6 rounded-xl border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0 mt-1">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#05070A] mb-3 tracking-tight">
                    Stop Chasing Documents.
                  </h3>
                  <p className="text-[#36454F] text-sm sm:text-base leading-relaxed mb-4">
                    Secure WhatsApp or SMS document requests. Uploaded documents automatically sync to your ATS or CRM.
                  </p>
                  {/* <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0667F9]">
                    <span>Requested</span>
                    <span className="text-gray-400">→</span>
                    <span>Received</span>
                    <span className="text-gray-400">→</span>
                    <span>Synced.</span>
                  </div> */}
                </div>
              </div>
            </div>
            {/* Status Footer */}
            <div className="text-center mt-16">
              <span className="inline-block text-xl font-bold text-[#0667F9] tracking-wider uppercase">
                24/7. Automated. Synced.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 7: BUSINESS CASE (GIVE RECRUITERS THEIR TIME BACK) */}
        <section className="bg-gray-50/50 py-20 lg:py-24 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Title Column */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05070A] leading-[1.15] tracking-tight">
                  Give Recruiters<br />
                  Their Time Back.
                </h2>
              </div>

              {/* Grid Column */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-200">
                {/* Point 1 */}
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0667F9] flex items-center justify-center border border-blue-100 mb-3">
                    <Clock size={20} />
                  </div>
                  <p className="font-bold text-[#05070A] text-sm sm:text-base leading-snug">
                    Less Screening Admin
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col items-center text-center p-2 md:pl-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0667F9] flex items-center justify-center border border-blue-100 mb-3">
                    <Settings size={20} />
                  </div>
                  <p className="font-bold text-[#05070A] text-sm sm:text-base leading-snug">
                    Faster ATS Updates
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col items-center text-center p-2 md:pl-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0667F9] flex items-center justify-center border border-blue-100 mb-3">
                    <BarChart3 size={20} />
                  </div>
                  <p className="font-bold text-[#05070A] text-sm sm:text-base leading-snug">
                    Handle More Applicants
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col items-center text-center p-2 md:pl-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0667F9] flex items-center justify-center border border-blue-100 mb-3">
                    <UserPlus size={20} />
                  </div>
                  <p className="font-bold text-[#05070A] text-sm sm:text-base leading-snug">
                    Increase Placements & Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: PRICING */}
        <section className="bg-white py-10 lg:py-20 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            {/* Header Block */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-black text-[#05070A] tracking-tight mt-2 mb-3">
                Choose Your Screening Plan
              </h2>
              <div className="text-xl sm:text-2xl font-extrabold text-[#36454F] mb-3">
                No Answer. No Charge.
              </div>
            </div>

            {/* Four Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch max-w-7xl mx-auto mb-12">
              {CALLPILOT_PRICING_CONFIG.plans.map((plan) => {
                const isGrowth = plan.id === "growth";
                const hideGrowthHighlight = hoveredPlan !== null && hoveredPlan !== plan.id;
                const isHighlighted = isGrowth ? !hideGrowthHighlight : hoveredPlan === plan.id;
                return (
                  <div
                    key={plan.id}
                    onMouseEnter={() => setHoveredPlan(plan.id)}
                    onMouseLeave={() => setHoveredPlan(null)}
                    className={`bg-white rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                      isHighlighted
                        ? "border-2 border-[#0667F9] shadow-xl shadow-blue-500/10 ring-4 ring-[#0667F9]/15 scale-[1.02] z-10"
                        : "border border-gray-200/80 shadow-sm hover:border-[#0667F9]/30"
                    }`}
                  >
                    {isGrowth && isHighlighted && (
                      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#0667F9] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <div className="flex-grow flex flex-col">
                      <h3 className={`text-xs font-extrabold tracking-widest uppercase mb-2 ${isGrowth ? 'mt-2' : ''} text-[#36454F]`}>
                        {plan.name}
                      </h3>
                      
                      {plan.isEnterprise ? (
                        <div className="mb-6 flex-grow flex flex-col justify-center">
                          <div className="text-3xl sm:text-4xl font-black text-[#05070A] mb-2 leading-none">
                            {plan.priceLabel}
                          </div>
                          <div className="text-sm font-semibold text-[#36454F]">
                            {plan.subLabel}
                          </div>
                        </div>
                      ) : (
                        <div className="mb-6">
                          <div className="text-4xl sm:text-5xl font-black text-[#05070A] mb-6">
                            ${(plan.price ?? 0).toLocaleString()} <span className="text-sm font-normal text-[#36454F]">/ month</span>
                          </div>
                          <div className="border-t border-gray-100 pt-6 space-y-4">
                            <div className="font-semibold text-[#36454F] text-sm sm:text-base">
                              {(plan.credits ?? 0).toLocaleString()} Applicant Screenings
                            </div>
                            <div className="text-[#36454F] text-sm font-medium">
                              ${(plan.perScreeningRate ?? 0).toFixed(2)} per screening
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8">
                      <Link href="https://callpilot.pro/get-started" className="w-full">
                        <Button className="btn-white-section w-full">
                          {plan.isEnterprise ? "Contact Sales" : "Start Screening"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* INCLUDED AUTOMATION */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#36454F]">
                All plans include WhatsApp, SMS and email automation
              </p>
            </div>

            {/* PLAN INFORMATION */}
            <div className="border-t border-gray-200/60 pt-8 pb-10 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 gap-x-8 text-sm text-[#36454F] font-semibold text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="w-full md:w-auto px-4">
                  Prepaid monthly screening credits
                </div>
                <div className="w-full md:w-auto px-4 pt-4 md:pt-0">
                  Credits used on completed calls only
                </div>
                <div className="w-full md:w-auto px-4 pt-4 md:pt-0">
                  Optional automatic credit top-up
                </div>
                <div className="w-full md:w-auto px-4 pt-4 md:pt-0">
                  Upgrade your plan at any time
                </div>
              </div>
            </div>

            {/* CALLING AND AUTOMATION PANEL */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
              <div className="flex flex-col gap-4 text-sm text-[#36454F] font-medium leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0667F9] shrink-0 mt-2" />
                  <span>
                    Optional AI phone number: $10 per month, or connect an existing compatible number
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0667F9] shrink-0 mt-2" />
                  <span>
                    SMS availability is based on the country associated with the phone number
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0667F9] shrink-0 mt-2" />
                  <span>
                    Email automation included as a fallback
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA (Dark Mode) */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-black text-center text-white">
          {/* Subtle background video style or rich dark technical gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#080b26] to-black opacity-95" />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Grid decoration */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-8 tracking-tight">
              Ready to Put Applicant Screening on Autopilot?
            </h2>

            <div className="mb-8">
              <Link href="https://panel.callpilot.pro/login">
                <Button className="btn-dark-section group">
                  Book a Demo
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div>
              <Link href="https://swiftwave.ai/callpilot" className="text-sm font-semibold text-[#3b82f6] hover:underline tracking-wide">
                www.swiftwave.ai/callpilot
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
