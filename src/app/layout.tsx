import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import LayoutWrapper from "@/components/shared/layout-wrapper";

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
        className={`${sora.className} w-full bg-background antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
