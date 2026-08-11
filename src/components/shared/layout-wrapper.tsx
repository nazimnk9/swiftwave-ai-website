"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import ChatbotButton from "./chatbot-button";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCallPilot = pathname?.startsWith("/callpilot");

  if (isCallPilot) {
    return (
      <div className="w-full min-h-screen bg-white">
        {children}
      </div>
    );
  }

  return (
    <div className="mx-auto w-full md:max-w-screen-xl">
      <Navbar />
      <div className="mx-auto max-w-7xl">{children}</div>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
