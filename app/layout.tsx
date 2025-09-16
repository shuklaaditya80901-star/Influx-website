
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Influx Business Solutions - Connecting Talent with Opportunity",
  description: "Your trusted partner for staffing, recruitment, and workforce solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
