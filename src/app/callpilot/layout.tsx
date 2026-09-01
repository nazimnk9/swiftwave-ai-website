import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CallPilot — AI Applicant Screening Calls | Swiftwave FZ-LLC",
  description:
    "Swiftwave FZ-LLC — the company behind CallPilot's AI applicant screening calls. Matching company registration, domain, and contact details for ATS partners.",
};

export default function CallPilotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
