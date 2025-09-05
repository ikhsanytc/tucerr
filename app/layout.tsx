import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  variable: "--font-poppins-font",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tucerr - Tulis cerita sesuai imajinasi mu!",
  description:
    "Tulis cerita anda dengan penuh kebebasan, imajinasi, dan kreasi mu sendiri!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.className} ${poppinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
