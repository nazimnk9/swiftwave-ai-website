import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { Sora } from "next/font/google";
import Footer from "@/components/shared/footer";
import ChatbotButton from "@/components/shared/chatbot-button";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swiftwave.AI",
  description:
    "Swiftwave.AI is a platform that allows users to create and manage AI applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} mx-auto w-full bg-background leading-relaxed text-text antialiased md:max-w-screen-xl`}
      >
        <Navbar />
        <div className="mx-auto max-w-7xl">{children}</div>
        <Footer />
        <ChatbotButton/>
      </body>
    </html>
  );
}
