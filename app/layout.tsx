import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Nishat | Full-Stack Developer",
  description:
    "Portfolio of Khondaker Abdullah Nishat, a CSE graduate and full-stack developer working with Next.js, NestJS, React, TypeScript, PostgreSQL and ASP.NET Core.",
  openGraph: {
    title: "Abdullah Nishat | Full-Stack Developer",
    description: "Full-stack developer portfolio showcasing projects, skills and publication.",
    images: ["/linkedin-cover.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
