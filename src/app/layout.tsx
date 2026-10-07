import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victor ATUMA — Software · DevOps · Creative Technology",
  description:
    "Portfolio of Victor Atuma — Information & Communication Engineer, Software Developer, DevOps Engineer, and 3D Animator based in Lagos, Nigeria.",
  openGraph: {
    title: "Victor ATUMA",
    description:
      "Engineering digital experiences across software, DevOps, and 3D.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-foreground">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
