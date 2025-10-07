import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import Chatbot from "@component/components/chatbot";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${manrope.variable} antialiased`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
