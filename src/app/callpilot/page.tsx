/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

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

export default function CallPilotRecruitment() {

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
    <div className="min-h-screen bg-white text-[#151C62] font-sans antialiased overflow-x-hidden">
      {/* Custom Styles for animations and micro-effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
          background: #3b82f6;
          filter: blur(2px);
          border-radius: 9999px;
          animation: flowing-dot 2s linear infinite;
        }
        .glowing-pulsing-green {
          animation: pulse-gasp 1.8s infinite ease-in-out;
        }
      `}} />

      {/* Header */}
      <Header />

      <main className="pt-[120px] md:pt-[145px] lg:pt-[160px]">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-black py-20 lg:py-0">
          {/* Background Video - Aligned to the right half on desktop */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 lg:block hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100"
            >
              <source src="/videos/ai-video.mov" type="video/mp4" />
            </video>
            {/* Smooth transition from text content to video */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent pointer-events-none z-10" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-35 pointer-events-none" /> */}
          </div>

          {/* Full background video fallback for mobile/tablet */}
          <div className="absolute inset-0 w-full h-full z-0 lg:hidden block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100"
            >
              <source src="/videos/ai-video.mov" type="video/mp4" />
            </video>
            {/* <div className="absolute inset-0 bg-black/85 pointer-events-none" /> */}
          </div>

          {/* Hero Content */}
          <div className="relative z-20 container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (Left-aligned Content) */}
              <div className="lg:col-span-7 text-left flex flex-col justify-center animate-fade-in">
                {/* Top Subtext Badge - Split in two lines with blue dots */}
                <div className="flex flex-col gap-1 mb-8">
                  <div className="text-[10px] sm:text-xs md:text-sm font-black tracking-[0.22em] text-white uppercase">
                    AI APPLICANT SCREENING CALLS <span className="text-[#3b82f6]">•</span> 24/7
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm font-black tracking-[0.22em] text-white uppercase">
                    WHATSAPP AUTOMATION <span className="text-[#3b82f6]">•</span> SMS
                  </div>
                </div>

                {/* Single H1 constraint */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                  Recruiters Sleep.<br />
                  <span className="text-white">CallPilot Qualifies 24/7.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-normal max-w-2xl mb-8 tracking-wide">
                  Results synced directly to your ATS or CRM.
                </p>

                {/* CTA Button */}
                <div className="mb-12">
                  <Link href="https://panel.callpilot.pro/login">
                    <Button className="h-14 sm:h-16 px-10 sm:px-12 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white text-base sm:text-lg font-bold border-none transition-all duration-200 transform hover:scale-[1.02] shadow-xl shadow-blue-500/20 group">
                      Book a Demo
                      <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Integration Status Bar */}
                <div className="pt-6 border-t border-white/10 max-w-2xl flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-white/90 text-xs sm:text-sm md:text-base font-semibold">
                  <div className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#3b82f6] shrink-0 mr-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    LIVE
                  </div>
                  <span>JobAdder</span>
                  <span className="text-[#3b82f6] font-bold">•</span>
                  <span className="text-[#3b82f6] font-bold">
                    Greenhouse <span className="text-[9px] uppercase font-bold tracking-widest text-[#3b82f6]/90 bg-blue-500/10 px-1.5 py-0.5 rounded ml-1 border border-blue-500/20">In Progress</span>
                  </span>
                  <span className="text-[#3b82f6] font-bold">•</span>
                  <span>Recruit CRM</span>
                  <span className="text-[#3b82f6] font-bold">•</span>
                  <span>Ashby</span>
                  <span className="text-[#3b82f6] font-bold">•</span>
                  <span className="text-white/40 mt-1">
                    iCIMS <span className="text-[9px] uppercase font-medium tracking-widest text-white/30 border border-white/10 px-1.5 py-0.5 rounded ml-1 bg-white/10">Coming Soon</span>
                  </span>
                </div>
              </div>

              {/* Right Column (Spacer space for video background overlay layout) */}
              <div className="lg:col-span-5 lg:block hidden" />

            </div>
          </div>
        </section>

        {/* SECTION 2: APPLICANT RESULTS (White background transition) */}
        <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Copy Side */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151C62] leading-[1.15] mb-6 tracking-tight">
                  500 Applicants<br />
                  Over the Weekend.
                </h2>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#3b82f6] leading-tight mb-2">
                  50 Qualified.
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#151C62] leading-tight">
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
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-center text-center md:text-left divide-y sm:divide-y-0 md:divide-x divide-gray-100">
              {/* Metric 1 */}
              <div className="pt-6 sm:pt-0 first:pt-0">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#3b82f6] tracking-tight">~60 SECONDS</div>
                <div className="text-xs uppercase tracking-widest text-[#3b82f6] font-bold mt-1">SECONDS</div>
                <div className="text-sm text-gray-500 font-medium mt-1">Average screening call</div>
              </div>

              {/* Metric 2 */}
              <div className="pt-6 sm:pt-0 md:pl-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#3b82f6] tracking-tight">70%</div>
                <div className="text-sm text-gray-500 font-medium mt-2">Less admin*</div>
              </div>

              {/* Metric 3 */}
              <div className="pt-6 sm:pt-0 md:pl-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#3b82f6] tracking-tight">50%</div>
                <div className="text-sm text-gray-500 font-medium mt-2">Potential revenue increase*</div>
              </div>

              {/* Metric 4 */}
              <div className="pt-6 sm:pt-0 md:pl-6">
                <div className="text-xs uppercase tracking-widest text-[#3b82f6] font-bold">FROM</div>
                <div className="text-3xl lg:text-4xl font-extrabold text-[#3b82f6] tracking-tight">$1.49</div>
                <div className="text-sm text-gray-500 font-medium mt-1">Per screening call</div>
              </div>

              {/* Metric 5 */}
              <div className="pt-6 sm:pt-0 md:pl-6 flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3b82f6] flex items-center justify-center border border-blue-100 mb-2">
                  <PhoneCall size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#3b82f6]">PAY FOR SCREENED CALLS</div>
                <div className="text-sm text-gray-500 font-medium mt-0.5">Not unanswered calls</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS (ANIMATED PIPELINE) */}
        <section className="bg-gray-50/50 py-20 lg:py-28 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151C62] tracking-tight">
                From Application to Qualified.
              </h2>
            </div>

            {/* Horizontal Pipeline Container (Desktop & Scrollable Mobile) */}
            <div className="relative w-full overflow-x-auto pb-6 scrollbar-none">
              <div className="min-w-[900px] flex items-center justify-between px-10 py-12 relative">
                {/* Connector Line Background */}
                <div className="absolute top-1/2 left-20 right-20 h-1 bg-gray-200 -translate-y-1/2 z-0" />

                {/* Animated flowing lines container */}
                <div className="absolute top-1/2 left-20 right-20 h-1 -translate-y-1/2 z-0 overflow-hidden">
                  <div className="absolute inset-0 flow-line w-full h-full" />
                </div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#3b82f6] shadow-lg flex items-center justify-center text-[#3b82f6] transition-transform duration-300 hover:scale-110">
                    <Users size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#151C62]">Applicant</span>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#3b82f6] shadow-lg flex items-center justify-center text-[#3b82f6] transition-transform duration-300 hover:scale-110">
                    <PhoneCall size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#151C62]">AI Call</span>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#3b82f6] shadow-lg flex items-center justify-center text-[#3b82f6] transition-transform duration-300 hover:scale-110">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#151C62]">Qualify</span>
                </div>

                {/* Step 4 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#3b82f6] shadow-lg flex items-center justify-center text-[#3b82f6] transition-transform duration-300 hover:scale-110">
                    <MessageSquare size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#151C62]">WhatsApp / SMS</span>
                </div>

                {/* Step 5 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#3b82f6] shadow-lg flex items-center justify-center text-[#3b82f6] transition-transform duration-300 hover:scale-110">
                    <FileText size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#151C62]">Documents</span>
                </div>

                {/* Step 6 */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-28 text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#3b82f6] shadow-lg flex items-center justify-center text-[#3b82f6] transition-transform duration-300 hover:scale-110">
                    <Database size={24} />
                  </div>
                  <span className="font-bold text-sm text-[#151C62]">ATS Updated</span>
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

            {/* Status Footer */}
            <div className="text-center mt-12">
              <span className="inline-block text-xl font-bold text-[#3b82f6] tracking-wider uppercase">
                24/7. Automated. Synced.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 5 & 6: RECRUITMENT VOLUME & DOCUMENT AUTOMATION (2-COLUMN) */}
        <section className="bg-white py-20 lg:py-24 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">

              {/* Volume Column */}
              <div className="bg-gray-50/30 p-8 sm:p-10 rounded-xl border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3b82f6] flex items-center justify-center border border-blue-100 shrink-0 mt-1">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#151C62] mb-3 tracking-tight">
                    10 Applicants or 10,000+
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm sm:text-base text-gray-500 font-semibold">
                    <span>Weekend & Out-of-Hours</span>
                    <span className="text-[#3b82f6]">•</span>
                    <span>High Volume</span>
                    <span className="text-[#3b82f6]">•</span>
                    <span>Multiple Vacancies</span>
                    <span className="text-[#3b82f6]">•</span>
                    <span>Multiple Locations</span>
                  </div>
                </div>
              </div>

              {/* Document Column */}
              <div className="bg-gray-50/30 p-8 sm:p-10 rounded-xl border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0 mt-1">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#151C62] mb-3 tracking-tight">
                    Stop Chasing Documents.
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Secure WhatsApp or SMS document requests. Uploaded documents automatically sync to your ATS or CRM.
                  </p>
                  <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#3b82f6]">
                    <span>Requested</span>
                    <span className="text-gray-400">→</span>
                    <span>Received</span>
                    <span className="text-gray-400">→</span>
                    <span>Synced.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: BUSINESS CASE (GIVE RECRUITERS THEIR TIME BACK) */}
        <section className="bg-gray-50/50 py-20 lg:py-24 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Title Column */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151C62] leading-[1.15] tracking-tight">
                  Give Recruiters<br />
                  Their Time Back.
                </h2>
              </div>

              {/* Grid Column */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-200">
                {/* Point 1 */}
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3b82f6] flex items-center justify-center border border-blue-100 mb-3">
                    <Clock size={20} />
                  </div>
                  <p className="font-bold text-[#151C62] text-sm sm:text-base leading-snug">
                    Less repetitive screening admin
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col items-center text-center p-2 md:pl-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3b82f6] flex items-center justify-center border border-blue-100 mb-3">
                    <Settings size={20} />
                  </div>
                  <p className="font-bold text-[#151C62] text-sm sm:text-base leading-snug">
                    Less manual ATS/CRM work
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col items-center text-center p-2 md:pl-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3b82f6] flex items-center justify-center border border-blue-100 mb-3">
                    <BarChart3 size={20} />
                  </div>
                  <p className="font-bold text-[#151C62] text-sm sm:text-base leading-snug">
                    Scale applicant volumes without scaling admin
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col items-center text-center p-2 md:pl-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3b82f6] flex items-center justify-center border border-blue-100 mb-3">
                    <UserPlus size={20} />
                  </div>
                  <p className="font-bold text-[#151C62] text-sm sm:text-base leading-snug">
                    More recruiter time to increase placements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: PRICING */}
        <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
          <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
            {/* Header Block */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-[#3b82f6] uppercase">PRICING</span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#151C62] tracking-tight mt-2 mb-3">
                Prepaid Pricing
              </h2>
              <div className="text-xl sm:text-2xl font-extrabold text-[#3b82f6] mb-3">
                No Answer. No Charge.
              </div>
              <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm sm:text-base">
                You only pay when an applicant completes the screening call — qualified or unqualified.
              </p>
            </div>

            {/* Three Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">

              {/* Starter Package */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xs font-extrabold tracking-widest text-gray-400 uppercase mb-2">STARTER</h3>
                  <div className="text-4xl sm:text-5xl font-black text-[#151C62] mb-6">
                    $199
                  </div>
                  <div className="border-t border-gray-100 pt-6 space-y-4 mb-8">
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">100 Applicant Screenings</div>
                    <div className="text-gray-500 text-sm font-medium">$1.99 per screening</div>
                  </div>
                </div>
                <Link href="https://panel.callpilot.pro/login" className="w-full">
                  <Button variant="outline" className="w-full h-12 text-[#3b82f6] border-[#3b82f6] hover:bg-blue-50 font-bold rounded-lg">
                    Start Screening
                  </Button>
                </Link>
              </div>

              {/* Growth Package (Most Popular) */}
              <div className="bg-white rounded-xl border-2 border-[#3b82f6] relative p-8 flex flex-col justify-between hover:shadow-xl transition-shadow shadow-md shadow-blue-100/50">
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#3b82f6] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div>
                  <h3 className="text-xs font-extrabold tracking-widest text-[#3b82f6] uppercase mb-2 mt-2">GROWTH</h3>
                  <div className="text-4xl sm:text-5xl font-black text-[#151C62] mb-6">
                    $745
                  </div>
                  <div className="border-t border-gray-100 pt-6 space-y-4 mb-8">
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">500 Applicant Screenings</div>
                    <div className="text-[#3b82f6] font-bold text-sm">$1.49 per screening</div>
                  </div>
                </div>
                <Link href="https://panel.callpilot.pro/login" className="w-full">
                  <Button className="w-full h-12 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-lg border-none shadow-md shadow-blue-500/10">
                    Start Screening
                  </Button>
                </Link>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xs font-extrabold tracking-widest text-gray-400 uppercase mb-2">ENTERPRISE</h3>
                  <div className="text-3xl sm:text-4xl font-black text-[#151C62] mb-2 leading-none">
                    High Volume?
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-6">Custom Volume Pricing</div>
                  <div className="border-t border-gray-100 pt-6 space-y-4 mb-8">
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">High Applicant Volumes</div>
                    <div className="text-gray-500 text-sm font-medium">Bespoke SLA & integrations</div>
                  </div>
                </div>
                <Link href="https://panel.callpilot.pro/login" className="w-full">
                  <Button variant="outline" className="w-full h-12 text-[#3b82f6] border-[#3b82f6] hover:bg-blue-50 font-bold rounded-lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>

            </div>

            {/* Bottom pricing assurances footer */}
            <div className="border-t border-gray-100 pt-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-semibold text-center sm:text-left">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[#3b82f6]" />
                <span>Prepaid screening credits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#3b82f6]" />
                <span>Only completed calls use a credit</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw size={18} className="text-[#3b82f6]" />
                <span>Optional auto top-up</span>
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
                <Button className="h-14 px-10 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white text-base font-bold border-none transition-all duration-200 shadow-xl shadow-blue-500/25 group">
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
