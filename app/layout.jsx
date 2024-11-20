import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display:"swap",
  preload: false,
});

export const metadata = {
  title: "KrisChanDev /",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body>
        <Header />
        <StairTransition />
            <PageTransition>
            {children}
            </PageTransition>
      </body>
    </html>
  );
}
